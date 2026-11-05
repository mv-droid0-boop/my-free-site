const RECIPIENT = 'nerdhectorphoto@gmail.com';
const LANGUAGES = new Set(['en', 'es', 'zh', 'ko', 'ja']);
const MAX_BODY = 16 * 1024;

function json(value, status = 200) {
  return new Response(JSON.stringify(value), { status, headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff'
  }});
}

function configured(env) {
  const transport = typeof env.CONTACT_EMAIL?.send === 'function' ||
    (env.CONTACT_EMAIL_TOKEN && /^[a-f0-9]{32}$/i.test(env.CONTACT_ACCOUNT_ID || ''));
  return Boolean(transport && env.CONTACT_FROM &&
    env.TURNSTILE_SECRET_KEY && env.TURNSTILE_SITE_KEY);
}

async function sendInquiry(env, message) {
  if (typeof env.CONTACT_EMAIL?.send === 'function') return env.CONTACT_EMAIL.send(message);
  // Pages uses the Email Service REST API; all credentials stay in server secrets.
  const { replyTo, ...fields } = message;
  const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${env.CONTACT_ACCOUNT_ID}/email/sending/send`, {
    method: 'POST', headers: {
      'Content-Type': 'application/json', Authorization: `Bearer ${env.CONTACT_EMAIL_TOKEN}`
    }, body: JSON.stringify({ ...fields, reply_to: replyTo.email }),
    signal: AbortSignal.timeout(15000)
  });
  const result = await response.json();
  const accepted = [...(result.result?.delivered || []), ...(result.result?.queued || [])];
  if (!response.ok || result.success !== true || !accepted.includes(RECIPIENT)) throw new Error('EMAIL_FAILED');
}

async function readBody(request) {
  if (Number(request.headers.get('content-length')) > MAX_BODY) throw new Error('TOO_LARGE');
  const reader = request.body?.getReader();
  if (!reader) throw new Error('INVALID_INPUT');
  const chunks = [];
  let length = 0;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > MAX_BODY) { await reader.cancel(); throw new Error('TOO_LARGE'); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return JSON.parse(new TextDecoder().decode(bytes));
}

function field(input, name, max, required = false, multiline = false) {
  const value = typeof input[name] === 'string' ? input[name].trim() : '';
  if ((required && !value) || value.length > max || (!multiline && /[\r\n]/.test(value))) throw new Error('INVALID_INPUT');
  return value;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/inquiry/config' && request.method === 'GET') {
      const ready = configured(env);
      return json({ ready, siteKey: ready ? env.TURNSTILE_SITE_KEY : null });
    }
    if (url.pathname !== '/api/inquiry') {
      if (url.pathname.startsWith('/api/')) return json({ error: 'NOT_FOUND' }, 404);
      return env.ASSETS.fetch(request);
    }
    if (request.method !== 'POST') return json({ error: 'METHOD_NOT_ALLOWED' }, 405);
    const origin = request.headers.get('Origin');
    if ((origin && origin !== url.origin) || request.headers.get('Sec-Fetch-Site') === 'cross-site') return json({ error: 'FORBIDDEN' }, 403);
    if (!request.headers.get('Content-Type')?.toLowerCase().startsWith('application/json')) return json({ error: 'UNSUPPORTED_TYPE' }, 415);
    if (!configured(env)) return json({ error: 'NOT_READY' }, 503);

    let data;
    try {
      const input = await readBody(request);
      if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('INVALID_INPUT');
      const name = field(input, 'name', 100, true);
      const email = field(input, 'email', 254, true);
      if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) throw new Error('INVALID_INPUT');
      const message = field(input, 'message', 4000, true, true);
      if (message.length < 5 || field(input, 'website', 500)) throw new Error('INVALID_INPUT');
      const date = field(input, 'date', 10);
      if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('INVALID_INPUT');
      const token = field(input, 'token', 2048, true);
      data = { name, email, message, date, token,
        location: field(input, 'location', 200, true),
        style: field(input, 'style', 160),
        locale: LANGUAGES.has(input.locale) ? input.locale : 'en' };
    } catch (error) {
      return json({ error: error.message === 'TOO_LARGE' ? 'TOO_LARGE' : 'INVALID_INPUT' }, error.message === 'TOO_LARGE' ? 413 : 400);
    }

    try {
      const form = new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: data.token });
      const ip = request.headers.get('CF-Connecting-IP');
      if (ip) form.set('remoteip', ip);
      const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST', body: form, signal: AbortSignal.timeout(10000)
      });
      if (!response.ok) return json({ error: 'VERIFICATION_UNAVAILABLE' }, 503);
      const result = await response.json();
      if (!result.success || result.hostname !== url.hostname || result.action !== 'photography-inquiry') return json({ error: 'TURNSTILE_FAILED' }, 400);
    } catch { return json({ error: 'VERIFICATION_UNAVAILABLE' }, 503); }

    try {
      await sendInquiry(env, {
        to: RECIPIENT,
        from: env.CONTACT_FROM,
        replyTo: { email: data.email, name: data.name },
        subject: `Photography inquiry — ${data.name}`,
        text: [
          'New photography inquiry / 新的摄影咨询',
          '', `Name: ${data.name}`, `Email: ${data.email}`,
          `Website language: ${data.locale}`, `Style: ${data.style || 'Not specified'}`,
          `Preferred date: ${data.date || 'Not specified'}`, `Location: ${data.location}`,
          '', 'Message:', data.message
        ].join('\n')
      });
      return json({ ok: true });
    } catch {
      // Do not put customer messages, email addresses or binding errors into logs.
      console.error('Photography inquiry email delivery failed.');
      return json({ error: 'EMAIL_FAILED' }, 502);
    }
  }
};

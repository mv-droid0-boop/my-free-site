# Light & Stories / 光间摄影

Photography portfolio based in Lubbock, Texas, available elsewhere by arrangement.

Website: https://yellownerdy.pages.dev/

- English, Spanish, Chinese, Korean and Japanese.
- 12 collections, 92 photographs, 3 home posters.
- Contact: nerdhectorphoto@gmail.com.
- Inquiries use the existing Formspree form.

## Public files

This repository stores the public website and compressed display photos. Original photographs, private editable projects and the local photo editor are excluded.

## Publishing

The existing Cloudflare Pages project `yellownerdy` uses Direct Upload. A GitHub Actions workflow can publish this repository to that same project using Cloudflare Wrangler, retaining the current website address. Initial account/secret setup is in progress.

The local editor provides two publishing windows: direct to Cloudflare, or commit/push to GitHub followed by an Actions deployment. Only the public release is uploaded.

`python3 scripts/prepare-site.py` prepares `.cloudflare-dist/` from an explicit public-file manifest. It excludes repository metadata, instructions, editor files and credentials.

Required repository Actions Secrets: `CLOUDFLARE_API_TOKEN` (Cloudflare Pages Edit) and `CLOUDFLARE_ACCOUNT_ID`. Credentials must never be added to source files.

#!/usr/bin/env python3
"""Build the public-only Cloudflare directory without copying repo/private files."""
from pathlib import Path
import json, re, shutil

root = Path(__file__).resolve().parents[1]
required = {'index.html','app.js','style.css','collections.json','home.json',
            'site-settings.js','site-config.js','i18n.js','_worker.js','_routes.json'}
albums = json.loads((root/'collections.json').read_text())
home = json.loads((root/'home.json').read_text())
ids = {i for a in albums for i in a['photos']} | {s['photoId'] for s in home['slides']}
assert ids and all(isinstance(i,str) and re.fullmatch(r'[a-zA-Z0-9][a-zA-Z0-9_-]{0,80}',i) for i in ids), 'Invalid photo IDs'
paths = required | {f'assets/{i}{suffix}.jpg' for i in ids for suffix in ('','-small')}
manifest = json.loads((root/'.photo-publish-manifest.json').read_text())
assert set(manifest['files']) == paths, 'Release manifest differs from the website data'
assert b'LOCAL_EDITOR_START' not in (root/'app.js').read_bytes(), 'Private editor code must not be deployed'
assert b'editor.js' not in (root/'index.html').read_bytes(), 'Editor must not be deployed'
output = root/'.cloudflare-dist'
if output.exists():
    assert output.is_dir() and not output.is_symlink()
    shutil.rmtree(output)
output.mkdir()
for name in sorted(paths):
    source = root/name
    assert source.is_file() and not source.is_symlink() and not source.parent.is_symlink(), 'Invalid public asset: '+name
    assert source.stat().st_size <= 25*1024*1024, 'Asset exceeds Cloudflare file limit'
    target = output/name
    target.parent.mkdir(parents=True,exist_ok=True)
    shutil.copyfile(source,target)
print(f'Prepared {len(paths)} public files for Cloudflare.')

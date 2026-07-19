# tensorsketch.space

The website for **TensorSketch** — the landing page and the front door to the three parts of the
platform. Pure static HTML + CSS + a little vanilla JavaScript. No build step, no backend, no auth.

## Pages

| Route | File | What it is |
| --- | --- | --- |
| `/` | `index.html` | Home — what TensorSketch is, and the three ways in |
| `/library/` | `library/index.html` | `tensorsketch-core` — the code-first agentic framework |
| `/studio/` | `studio/index.html` | TensorStudio — draw an agent, get the code |
| `/visualizer/` | `visualizer/index.html` | The 3D transformer visualizer (wraps `transformer.html` in a slim nav bar) |
| `/docs/` | `docs/index.html` | The full documentation (generated from the `tensorsketch-core` repo) |

## Structure

```
.
├── index.html                  # home
├── library/index.html          # tensorsketch-core
├── studio/index.html           # TensorStudio
├── visualizer/
│   ├── index.html              # nav-bar wrapper
│   └── transformer.html        # the actual Three.js visualization
├── docs/index.html             # generated docs site (self-contained)
├── assets/
│   ├── css/site.css            # the whole design system
│   ├── js/site.js              # nav toggle, copy buttons, footer year
│   └── img/                    # logo.svg (placeholder), favicon.svg
├── vercel.json
└── README.md
```

All internal links are root-relative (`/assets/...`, `/library/`, …), so they work at any depth —
serve from the project root.

## Run locally

No tooling required — just serve the folder over HTTP (so root-relative paths resolve):

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

(Opening the files directly with `file://` won't work because the paths are root-relative.)

## Deploy (Vercel)

This is a zero-config static site. The simplest path:

1. Push this folder to a GitHub repo (under the `tensorsketch-ai` org).
2. In the Vercel dashboard: **Add New → Project → Import** that repo.
3. Framework preset: **Other** (it's static). Build command: none. Output directory: `.` (root).
4. Deploy. Every push to the default branch auto-deploys; pull requests get preview URLs.
5. Add the `tensorsketch.space` domain under the project's **Domains** settings.

`vercel.json` sets clean URLs, long-lived caching for `/assets/*`, and a couple of security headers.
No secrets or environment variables are needed.

## Updating the docs

`/docs/index.html` is a snapshot of the documentation built in the `tensorsketch-core` repo
(`uv run python docs/build_docs.py` → `docs/site/index.html`). To refresh it, rebuild there and copy
the file over. (A small sync workflow can automate this later.)

## To do

- Replace `assets/img/logo.svg` (and `favicon.svg`) with the real logo.
- A hosted, in-browser TensorStudio (today it runs locally via `python -m tensorsketch.canvas`).

## License

Content and code © the TensorSketch authors. The framework it documents is Apache-2.0.

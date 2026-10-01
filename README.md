# portfolio

Personal portfolio of Tom Huang. Two shipped Rust products and one method note, in English and Traditional Chinese.

**Live:** https://coomo.github.io/portfolio/

## Pages

- `index.html` — the board. Bill of materials (the three works), then each work as a footprint with screenshots and a fact list. Name and contact sit in the data line at the bottom.
- `benchpress/` (U1) — Windows desktop app for bench instruments. Rust + Dioxus, GPIB / Ethernet, drag-and-drop test sequences, MCP server, headless CLI.
- `pos/` (U2) — Local-first POS for a family bakery. Rust + Dioxus on Android / iPad / Windows.
- `workflow/` (J1) — Method note: git first, three documents, a lean CLAUDE.md, skills on demand.

## Structure

```
.
├── index.html            # landing (sheet 1)
├── assets/
│   ├── site.css          # shared visual system
│   └── site.js           # language jumper, lightbox, copper traces
├── benchpress/           # one folder per work
│   ├── index.html
│   └── *.png             # real app screenshots
├── pos/
├── workflow/
├── PRODUCT.md            # product truth (audience, content, voice)
└── DESIGN.md             # visual system record
```

No build step. Commit and push; GitHub Pages serves the files as they are. Fonts load from Google Fonts (Barlow, Barlow Condensed, Noto Sans TC).

## Language

Every page carries both languages inline as `<span data-lang="en">` / `<span data-lang="zh">`. The JP1 jumper in the header switches `html[lang]`; the choice is stored in `localStorage` under `portfolio-lang` and defaults from the browser language. `<title>` and the meta description swap through `data-en` / `data-zh`.

## Adding a work

1. Create `./<slug>/index.html` by copying one of the sheets, plus its screenshots.
2. In `index.html`, add a row to the BOM table (`REF · PART · DESCRIPTION · YEAR · STATUS`) with `id="row-<ref>"` and `data-trace-to="fp-<ref>"`, and a footprint `<a class="fp" id="fp-<ref>">` with the screenshot.
3. Update the sheet counts in the `rev` lines and the links in each page's data line.
4. Commit and push.

## Voice

Short lines. Bullets over paragraphs. Facts over adjectives. Both languages written natively, not translated word for word. See `PRODUCT.md`.

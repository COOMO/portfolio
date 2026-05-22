# portfolio

Personal portfolio of Tom Huang — small, sharp tools for real engineering problems, built with Rust / web stacks and AI-assisted development (Claude Code, Cursor).

**Live:** https://coomo.github.io/portfolio/

## Projects

- **[benchpress](./benchpress/)** — Windows desktop app (Rust + Dioxus) that controls bench instruments over GPIB / Ethernet and composes test sequences from drag-and-drop blocks. Built to replace a LabVIEW station.
- **[tujia pos](./pos/)** — Local-first, cross-platform POS for a family bakery (Rust + Dioxus on Android / iPad / Windows).

## Structure

```
.
├── index.html          # landing page
├── benchpress/         # one folder per project
│   ├── index.html
│   └── *.png
└── <next-project>/
    └── index.html
```

Each project lives in its own subfolder with a self-contained `index.html`. The landing page links into them.

## Adding a project

1. Create `./<slug>/` with `index.html` (+ assets).
2. In root `index.html`, duplicate one `<article class="project">` block and edit the cover link, title, tagline, stack chips.
3. Commit & push — GitHub Pages rebuilds automatically.

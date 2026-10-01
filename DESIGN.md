---
name: Tom Huang · portfolio
description: One fabricated printed circuit board in matte black solder mask; every work is a footprint, the index is its bill of materials, and the only gold is a pad you can press.
colors:
  mask: "#121314"
  mask-cu: "#1c1e1f"
  mask-deep: "#0a0b0b"
  hole: "#050505"
  silk: "#f2f2ee"
  silk-2: "#cdcdc6"
  silk-3: "#a7a89f"
  trace: "#3a3a33"
  trace-2: "#5c5848"
  gold: "#d8b15a"
  gold-lit: "#e4c06a"
  gold-ink: "#15120c"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(44px, 6vw, 84px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(28px, 3.2vw, 40px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  one-liner:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  kv:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.1em"
  nav:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
  pad:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.06em"
  body-zh:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  mono:
    fontFamily: "ui-monospace, Cascadia Mono, Consolas, SF Mono, Menlo, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  board: "3px"
  inset: "2px"
  mark: "1px"
  hole: "50%"
spacing:
  xs: "8px"
  sm: "16px"
  pad: "20px"
  gutter: "24px"
  md: "32px"
  sec: "44px"
  inset: "48px"
components:
  board:
    backgroundColor: "{colors.mask}"
    textColor: "{colors.silk}"
    rounded: "{rounded.board}"
    width: "1392px"
  pour:
    backgroundColor: "{colors.mask-cu}"
    textColor: "{colors.silk}"
  pad:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.gold-ink}"
    typography: "{typography.pad}"
    rounded: "{rounded.inset}"
    padding: "12px 18px"
  pad-hover:
    backgroundColor: "{colors.gold-lit}"
    textColor: "{colors.gold-ink}"
  jumper-pin:
    backgroundColor: "transparent"
    textColor: "{colors.silk-2}"
    typography: "{typography.nav}"
    padding: "5px 12px"
  jumper-pin-selected:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.gold-ink}"
  sheetnav-link:
    backgroundColor: "transparent"
    textColor: "{colors.silk-2}"
    typography: "{typography.nav}"
    padding: "6px 0"
  footprint:
    backgroundColor: "{colors.mask-cu}"
    textColor: "{colors.silk}"
    rounded: "{rounded.board}"
    padding: "18px"
  footprint-dnp:
    backgroundColor: "transparent"
    textColor: "{colors.silk-2}"
    rounded: "{rounded.board}"
    padding: "18px"
  shot:
    backgroundColor: "{colors.mask-deep}"
    rounded: "{rounded.inset}"
  bom-row-hot:
    backgroundColor: "{colors.mask-cu}"
    textColor: "{colors.gold}"
  kv-row:
    backgroundColor: "transparent"
    textColor: "{colors.silk-2}"
    typography: "{typography.kv}"
    padding: "7px 0"
  conn-pin:
    backgroundColor: "transparent"
    textColor: "{colors.silk}"
    rounded: "{rounded.inset}"
    padding: "9px 8px 7px"
  block:
    backgroundColor: "{colors.mask-cu}"
    textColor: "{colors.silk}"
    rounded: "{rounded.board}"
    padding: "12px 14px"
  note:
    backgroundColor: "transparent"
    textColor: "{colors.silk}"
    rounded: "{rounded.board}"
    padding: "14px 16px"
  quote:
    backgroundColor: "transparent"
    textColor: "{colors.silk}"
    typography: "{typography.one-liner}"
    rounded: "{rounded.board}"
    padding: "14px 16px"
  prompt:
    backgroundColor: "transparent"
    textColor: "{colors.silk}"
    typography: "{typography.mono}"
    rounded: "{rounded.board}"
    padding: "14px 16px"
  flow-cell:
    backgroundColor: "transparent"
    textColor: "{colors.silk}"
    rounded: "{rounded.inset}"
    padding: "10px 12px"
    height: "84px"
  code-block:
    backgroundColor: "{colors.mask-deep}"
    textColor: "{colors.silk-2}"
    typography: "{typography.mono}"
    rounded: "{rounded.board}"
    padding: "16px 18px"
  lightbox:
    backgroundColor: "{colors.mask}"
    textColor: "{colors.silk}"
    rounded: "{rounded.board}"
    padding: "0"
  lightbox-button:
    backgroundColor: "transparent"
    textColor: "{colors.silk}"
    rounded: "{rounded.inset}"
    padding: "4px 10px"
---

# Design System: Tom Huang · portfolio

## Overview

**Creative North Star: "The Fabricated Board"**

The site is one printed circuit board under a matte black solder mask. Everything written on it is white silkscreen in a condensed grotesk; the works are footprints with reference designators (U1, U2, J1); the landing's compact bill of materials is the index; copper traces route from each BOM row to its footprint; and the only gold on the board is ENIG plating on things you can press. Depth is never faked: a region reads a step lighter where copper pour sits under the mask, darker in a recess, and every edge is a 1 px line.

Density is that of a fabrication drawing, not a brochure. Labels are small, uppercase and tracked; running copy is short, list-like, numbers first, set at one body size with a 66ch measure; numerals are tabular. The landing leads with the work: the first footprint shows a full-width screenshot with a one-liner and a six-row label/value list beside it. Both languages live in the same DOM and the JP1 jumper selects which one is populated, so the Chinese sheet is the same board, not a translation layer. The board stays one object on every viewport: on phones the outline, holes and fiducials shrink, the routed traces give way to short bronze stubs, but nothing leaves.

Confirmed rejections, carried from the direction contract and visible in the build: no glow, scanlines, graticule or phosphor; no green mask (the dark scheme is matte black); no hero sentence over a grid of same-size cards; no cool gray (secondary silk carries the mask's warm cast); no shadows, blur or gradients anywhere.

**Key Characteristics:**
- Two mask tones and one 1 px line carry all depth.
- Gold appears only on actionable things: pads, links, the jumper's selected pin, hot traces, vias and pin-1, plated mounting holes.
- One condensed label voice (Barlow Condensed 600, 13 px, .1em, uppercase) for every designator, column head, figure number, key and data-line field.
- Drawn marks carry state (filled square, filled circle, dashed square; solid vs dashed outline; pin-1 dot), always with a word beside them.
- One authored motion: copper traces draw once on the landing, after fonts settle.
- Imagery is real app screenshots only, recessed inside footprints.

## Colors

A matte black solder-mask ground in three tones, warm-cast white silkscreen, dark bronze copper under the mask, and gold reserved for touch.

### Primary
- **ENIG Gold** (`{colors.gold}`): plating. Links, the Email and GitHub pads, the JP1 jumper's selected pin, the plated mounting-hole ring, the focus ring, the text caret, `::selection`, the "Open sheet" line inside a footprint link, and the hot state of traces, vias, BOM REF, footprint outlines and pin-1 dots. Never a fill for a static region.
- **ENIG Gold, lit** (`{colors.gold-lit}`): the pad's hover ground only.
- **Gold Ink** (`{colors.gold-ink}`): the only text colour permitted on gold; also the `::selection` foreground and the pad's leading dot.

### Secondary
- **Copper, under mask** (`{colors.trace}`): the quiet rule. Every `border-top` that separates table rows, sections, decision rows, kv rows and the sheet nav from the content.
- **Copper, routed** (`{colors.trace-2}`): drawn traces and vias on the landing, the phone-width stubs and vias, the block-diagram wire and its via, the screenshot inset border, the code-block outline, the task-loop cell outline, and the `·` separators in the data line.

### Neutral
- **Solder Mask, bare** (`{colors.mask}`): page and board ground, the lightbox panel, via fill, and the strip of background that lets a designator label break the footprint outline.
- **Solder Mask over copper pour** (`{colors.mask-cu}`): any region that holds content: footprints, block-diagram blocks, the hovered or hot BOM row.
- **Solder Mask, deep** (`{colors.mask-deep}`): recesses: screenshot wells, code blocks, inline `code`, the scrollbar track; at 88% alpha it is the lightbox backdrop.
- **Drilled Hole** (`{colors.hole}`): the centre of a plated mounting hole.
- **Silkscreen** (`{colors.silk}`): headings, body text, strong, one-liners, the board and footprint outlines, the legend and data-line rules, pin-1 dots, kv bold values.
- **Silkscreen, second** (`{colors.silk-2}`): descriptions, the title line under the name, kv values, status-mark fill and word, fiducials, DNP labels and outlines, nav links at rest, note, quote and prompt outlines, pre text, the gate cell's dashed outline.
- **Silkscreen, third** (`{colors.silk-3}`): labels, column heads, keys, figure numbers, years, revision, the data line, figcaptions, quote and prompt attributions, pin numbers, code comments, the scrollbar thumb.

### Named Rules
**The Gold-Means-Press Rule.** Gold is plating on something that responds: a link, a pad, the selected jumper pin, a plated hole, a trace under the pointer. A static element is never gold; if it is not actionable it is silkscreen, copper or mask.

**The Warm Silk Rule.** Every secondary tone is the silkscreen dimmed toward the mask's warm cast (`{colors.silk-2}`, `{colors.silk-3}`). No cool gray, no `opacity` fade on text.

**The Two-Tone Depth Rule.** A region with content sits on copper pour (`{colors.mask-cu}`); the bare board and recesses are the two darker masks. That tonal step plus the 1 px line is all the depth the board has.

**The Print Rule.** Under `@media print` the same tokens invert: white paper, near-black silk, mid-gray copper, dark ochre gold; holes, fiducials, traces and the jumper are removed. A new colour token must carry a print value.

## Typography

**Display Font:** Barlow Condensed 600 (with Arial Narrow)
**Body Font:** Barlow 400 / 500 / 600 (with Helvetica Neue, Arial)
**Chinese Font:** Noto Sans TC 400 / 500 / 600 (with PingFang TC, Microsoft JhengHei), swapped in for every role under `html[lang="zh"]`
**Label/Mono Font:** system monospace (ui-monospace, Cascadia Mono, Consolas, SF Mono, Menlo), code samples and verbatim prompts only

**Character:** Silkscreen lettering. Condensed, bold, uppercase and tracked for anything that names or indexes; a plain humanist grotesk at one size for anything that explains. The pairing reads like a fabrication drawing's legend next to its notes. Chinese keeps the same weights (labels drop to 500), a looser line (1.75) and a little positive tracking; Latin product and person names (Tom Huang, benchpress, tujia pos) stay in Barlow Condensed uppercase even on the Chinese sheet (`h1.latin`, BOM part links, the REF column).

### Hierarchy
- **Display** (600, clamp 44–84 px, 1.02, uppercase): the page name in the legend strip; one per page. 40 px at ≤600.
- **Headline** (600, clamp 28–40 px, 1.02): section heads on sheets and the pin heads on the method note. Chinese headings use line-height 1.2.
- **Title** (600, 22 px, 1.02): h3 inside figure rows; 19 px in decision rows (18 px in Chinese). BOM part names share this size as condensed links (20 px on the landing's compact BOM).
- **One-liner** (400, 18 px, 1.45–1.5, `{colors.silk}`): the single sentence beside a landing footprint and the owner quote. Chinese at 1.7.
- **Body** (400, 17 px, 1.55, 66ch; 16 px ≤600): running copy, bullets, table cells, the legend title line. Chinese at 1.75.
- **KV** (400, 15 px, 1.4): values in the landing's label/value lists, block-diagram subtitles, task-loop cell text (1.35).
- **Nav / meta** (Condensed 600, 14 px, .08em, uppercase): sheet navigation, jumper pins, the "Open sheet" line; revision at .02em; figcaptions, quote and prompt attributions at 500, .03em, mixed case.
- **Pad** (Condensed 600, 16 px, .06em, uppercase): gold pad labels and the J1 connector's pin labels; a pad's trailing value is Barlow 600 mixed case.
- **Label** (Condensed 600, 13 px, .1em, uppercase, `{colors.silk-3}`): designators, column heads, kv keys, status marks, figure numbers, DNP tags, pin numbers, the data line. Chinese labels switch to Noto Sans TC 500.
- **Mono** (14 px, 1.6): code samples (`{colors.silk-2}`) and verbatim prompts (`{colors.silk}`, pre-wrap); inline `code` at .92em on `{colors.mask-deep}`. Chinese prompts fall back to Noto Sans TC 15 px / 1.75.

### Named Rules
**The One Label Voice Rule.** Everything that names, numbers or indexes is Barlow Condensed 600, 13 px, .1em, uppercase. Do not invent a second label style; vary colour (silk / silk-2 / silk-3) only.

**The One Body Size Rule.** Running copy is 17 px (16 px on phones) at a 66ch measure. Rank is shown by span and position, not by shrinking the body; the only other running sizes are the 15 px kv value and the 18 px one-liner, each tied to a component.

**The Latin Name Rule.** Product and person names set in Latin keep Barlow Condensed on the Chinese sheet; every other role switches to Noto Sans TC with matched weight.

## Layout

The board is a single centred `main` of max-width 1392 px with a `{spacing.gutter}` (24 px) margin on all sides (10 px at ≤600), a 1 px silk outline and a 3 px radius. Four plated holes (16 px, 3 px gold ring) sit 10 px into the corners (12 px, 2 px ring, 6 px in at ≤600); three fiducial crosshairs (14 px inline SVG) sit 38 px in at top-left, top-right and bottom-left (10 px, 26 px in at ≤600). Content lives in `.region` strips with a 20 px vertical and 48 px horizontal inset (28 px ≤900, 16 px ≤600).

Vertical structure on every page: legend strip (56 px top padding, 1 px silk rule below; name and title left, jumper, gold pads and REV line right), then on sheets a nav row (1 px copper rule below), content, then the data line (1 px silk rule above, 64 px bottom padding so the bottom holes have clearance).

The landing is showcase-first. Under the legend, a compact BOM (22 px top, 10 px bottom; cells 11 px by 12 px; part names 20 px). Then the deck: a single column of footprint links, 28 px apart, each an 8fr / 4fr `.show` grid (22 px by 28 px gaps) with the screenshot left and, right, a one-liner, a six-row `.kv` list (96 px key column, 7 px row padding, copper rules) and a gold "Open sheet" line. U2 replaces the single shot with `.trio`, three portrait wells (10 px gap, aspect-ratio 3/5, 8 px padding, image `contain` top-centre). J1 pairs a four-pin `.conn` connector with one line in an 8fr / 4fr grid. The background section is the same 8fr / 4fr split. All of these collapse to one column at ≤980; `.trio` stays three-up with 6 px gaps and no padding at ≤560, `.conn` goes two-up.

Sheet sections (`.sec`) carry 44 px vertical padding and a copper rule between them; inside, a 12-column grid (`.cols`, 28 px by 32 px gap) with spans of 4, 5, 6, 7, 8 and 12, all collapsing to 12 at ≤900. Figure rows alternate 7fr / 5fr and 5fr / 7fr (`.figrow`, `.figrow.flip`) with the footprint on the outside, 32 px gap, 28 px vertical padding. Decision rows are 200 px / 1fr; method-note steps are 72 px / 1fr (48 px ≤640) with a 40 px pin number (30 px ≤640); the task loop is a four-up grid of 84 px cells (two-up ≤640).

Spacing rhythm is a small step set: 8 / 16 / 24 / 32 stacks, 10 to 14 px inside components, 18 to 20 px component padding, 44 px between sections.

Breakpoints, as shipped: 980 (landing grids collapse; routed traces hidden and replaced by bronze stubs), 900 (grid spans collapse; figure rows stack; region inset 28 px), 760 (legend stacks; jumper, pads and rev go inline; decision rows stack), 640 (BOM thead hides, rows become two-line grids with the year hidden; facts th/td stack; steps and task loop tighten), 600 (body 16 px, gutter 10 px, h1 40 px, holes and fiducials shrink, footprint padding 12 px, stubs shorten), 560 (`.trio` loses its padding; `.conn` two-up).

## Elevation & Depth

No shadows, no glow, no blur, no gradients, no backdrop filters anywhere. Depth is tonal and linear only: content regions sit on the copper-pour mask (`{colors.mask-cu}`), recesses (screenshot wells, code) drop to the deep mask (`{colors.mask-deep}`), the bare board is `{colors.mask}`, and every boundary is a 1 px silk (`{colors.silk}`), silk-2 or copper (`{colors.trace}`, `{colors.trace-2}`) line. The only overlay is the lightbox backdrop, a flat 88% deep-mask wash.

### Named Rules
**The Flat Board Rule.** Nothing lifts. Hover and focus change colour (to gold) or step a region to the copper-pour tone; the one translation is the pad's 1 px rise. If a new surface needs to look nearer, give it the lighter mask and a silk outline, not a shadow.

## Shapes

Milled-board geometry. Outlines are 1 px solid with a 3 px radius (`{rounded.board}`) on the board, footprints, blocks, notes, quotes, prompts, code and the lightbox; insets (screenshot wells, pads, connector pins, task-loop cells, inline code, lightbox buttons, the focus ring) use 2 px; status-mark and bullet squares use 1 px; plated holes, pin-1 dots, vias and fiducial rings are circles. Planned or gating items are the same outline drawn dashed with a transparent fill. Designator labels sit on the outline and break it with a strip of bare-mask background. Bullets are 7 px silk-2 outlined squares (filled in `.list--filled`). Traces are 2 px round-joined copper lines with 45 degree bends and 3.5 px vias filled with the bare mask; on phones they become 18 px by 2 px stubs ending in a 6 px via.

## Components

### Pads (the only buttons)
- **Shape:** 2 px radius, 12 px by 18 px padding, inline-flex with a 6 px gold-ink dot before the label.
- **Primary:** gold ground, gold-ink text, pad voice (Condensed 600 16 px .06em uppercase); a trailing value (`.v`) in Barlow 600 mixed case. Pads sit in a `.pads` row (12 px by 14 px gaps) in the legend's right column.
- **Hover / Focus:** ground lightens to `{colors.gold-lit}` and the pad rises 1 px over 180 ms; active returns to rest. Focus is the global gold 2 px ring at 4 px offset.
- **Secondary / Ghost:** none. Non-primary actions are plain gold-underlined links, silk nav links, or a whole footprint as a link.

### Links
Gold text with a 1 px underline at .2em offset, underline at 55% gold, going solid on hover. Inside BOM part cells, the sheet nav and the data line the underline is removed and the text is silk; hover turns it gold (data line) or draws a 2 px gold rule beneath (sheet nav). On the landing each footprint is itself an `a.fp` block link; its gold "Open sheet →" line is the visible affordance.

### JP1 Language Jumper
- **Style:** a `button` with a 13 px label "JP1 · LANG" and a two-pin header: 1 px silk outline, 3 px radius, pins 5 px by 12 px, min-width 46 px, Barlow Condensed 600 14 px for EN and Noto Sans TC 500 for 中.
- **State:** the selected pin is a gold bridge (gold ground, gold-ink text) driven by `html[lang]`; the other pin is silk-2 on transparent. Hover turns the header outline gold. The choice persists in localStorage `portfolio-lang`, defaults from `navigator.language`, swaps the title and description, and redraws the landing traces.

### Footprints (cards)
- **Corner Style:** 3 px.
- **Background:** copper-pour mask with a 1 px silk outline and 18 px padding (12 px ≤600).
- **Designator:** a 13 px label (REF in silk, part name in silk-3) sitting on the top-left outline on a bare-mask strip; a 7 px silk pin-1 dot 8 px inside the corner.
- **Shot:** screenshot well with a 1 px trace-2 border, 2 px radius, deep-mask fill; landscape shots run full width; portrait shots centre in a 14 px frame at max-height 520 (560 on the pos sheet, 420 ≤600); the landing's `.trio` uses fixed 3/5 wells instead.
- **Figcaption:** "Fig. n" label plus a 14 px condensed description, space-between.
- **States:** hover or focus of a `[data-zoom]` footprint, a landing footprint link, or a trace-linked one turns the outline and pin-1 gold; `[data-zoom]` sets `cursor: zoom-in` and opens the lightbox.
- **DNP variant:** dashed silk outline, transparent fill, a "DNP" tag on the top-right outline, hollow pin-1. Used for planned, unbuilt items only.

### Status Marks
A 9 px drawn mark plus a word, never colour alone: filled square = shipped (Released, In use), filled circle = Living, dashed square = DNP. Label voice, silk-2.

### BOM (bill-of-materials index)
Table with 13 px column heads, copper rules, REF column 56 px, part names as condensed links whose hit area fills the row. Hovered or hot rows step to copper pour and their REF turns gold. At ≤980 each row grows a bronze stub and via in the left margin (gold when hot); at ≤640 the head hides and each row becomes a two-line grid (REF, part, status / description) with the year hidden.

### KV List (landing)
Label/value rows: 96 px key column in the label voice, 15 px silk-2 values with silk bold numbers, 7 px row padding, copper rules above and between.

### Connector (J1)
Four 2 px-radius silk-2 outlined pins, centred; pin number in the label voice over a 16 px condensed uppercase name. Decorative summary of the method note, `aria-hidden`.

### Facts Table
Row-header table: 160 px condensed label heads (220 px for skills), silk values, silk rule on the first row, copper rules after. Stacks to label-over-value blocks at ≤640.

### Block Diagram
`.blocks` stacks 1 px silk-outlined blocks (copper-pour fill, 12 px by 14 px padding, condensed 17 px name over 15 px silk-2 subtitle) joined by 2 px trace-2 `.link` wires ending in a via; `.split` places two side by side; `.blk.wire` is the dashed, unfilled variant for external parts.

### Note, Quote and Prompt
All three are a 1 px silk-2 outline on transparent, 3 px radius, 14 px by 16 px padding, 66ch measure. `.note` carries a label on top. `.quote` sets the owner's words at 18 px with a 14 px attribution (`.who`). `.prompt` is a verbatim prompt in 14 px mono, pre-wrap, with a 14 px source line (`.src`); under Chinese it becomes Noto Sans TC 15 px.

### Task Loop
`.flow`: four-up grid of 84 px cells with a 1 px trace-2 outline and 2 px radius; a label-voice number over 15 px silk text. Gate steps (`.st.gate`) are dashed silk-2. Two-up at ≤640.

### Decisions and Code
`.dec` rows are a 200 px / 1fr grid with copper rules and a 19 px h3. `.code` is a deep-mask block with a trace-2 outline, 16 px by 18 px padding, 14 px mono; tokens are coloured with silk (keywords, strings), silk-2 (names) and silk-3 (comments) only.

### Navigation
- **Sheet nav:** a wrapping row of condensed 14 px uppercase links (26 px gaps) under the legend, copper rule below; silk-2 at rest, silk with a 2 px gold underline on hover. Chinese uses Noto Sans TC 500.
- **Legend strip:** name and title left, jumper, pads and REV line right; stacks at ≤760.
- **Data line:** on every page along the bottom edge: identity fields separated by copper `·` (as `::after`) on the left, sheet links on the right, all label voice in silk-3, hover gold.

### Lightbox
`dialog.lightbox`: bare-mask panel, 1 px silk outline, 3 px radius, max 96vw by 94vh, with a label-voice bar (caption left, "Close · Esc" button right) over the image at up to 94vw by 84vh. Backdrop is the deep mask at 88%. The close button is a transparent silk-2 outlined 2 px-radius button that turns gold on hover. Body scroll locks while open.

### Copper Traces (signature)
On the landing, an absolutely positioned SVG draws a 2 px trace-2 path from each BOM row to its footprint's pin-1 edge: out the right with 45 degree bends when the target sits to the right, otherwise out the left, down the board margin as a bus and back in. Vias are 3.5 px bare-mask circles. They draw once after `document.fonts.ready` (900 ms, `cubic-bezier(.16,1,.3,1)`, 80 ms stagger, `stroke-dashoffset` from path length to 0); until `animationend` fires every redraw replays the draw, after that redraws are static. Under `prefers-reduced-motion: reduce` they are simply shown drawn. Hovering or focusing either end turns path, vias, row REF, footprint outline and pin-1 gold (continuity). At ≤980 the SVG is hidden and each BOM row and footprint keeps a static bronze stub with a via.

### Browser Surfaces
`::selection` gold on gold-ink; thin scrollbars in silk-3 on deep mask with a 3 px thumb radius; `:focus-visible` is a 2 px gold outline at 3 px offset; the caret is gold; tabular numerals; `color-scheme: dark`.

## Do's and Don'ts

### Do:
- **Do** put every content region on the copper-pour mask (`{colors.mask-cu}`) with a 1 px silk outline and 3 px radius; recess screenshots and code to `{colors.mask-deep}`.
- **Do** use gold only on something that responds: links, pads, the jumper's selected pin, hot traces, plated holes, the focus ring.
- **Do** set every designator, column head, key, figure number and data-line field in the one label voice (Barlow Condensed 600, 13 px, .1em, uppercase).
- **Do** mark status with a drawn mark and a word (filled square / filled circle / dashed square) and planned items with a dashed outline plus a DNP tag.
- **Do** write both languages inline as `[data-lang]` spans, keep Latin product names in Barlow Condensed, and give Chinese copy line-height 1.75.
- **Do** separate rows and sections with 1 px copper (`{colors.trace}`) rules and page-level edges with 1 px silk.
- **Do** keep the board whole on phones: shrink holes and fiducials, stack the grids, swap routed traces for stubs.
- **Do** show real app screenshots only, recessed in a footprint with a Fig. n caption.
- **Do** give any new colour token a `@media print` value.

### Don't:
- **Don't** add shadows, glow, blur, gradients or backdrop filters; depth is the two mask tones and the 1 px line.
- **Don't** use cool gray or opacity-faded text; secondary tones are `{colors.silk-2}` and `{colors.silk-3}`.
- **Don't** use gold as a static fill or on text that is not a link, pad or link affordance.
- **Don't** convey state by colour alone; pair every state colour with a mark or a word.
- **Don't** introduce a second body size or a second label style; rank by span and position.
- **Don't** use monospace outside code samples and verbatim prompts.
- **Don't** add illustration, icon sets, photography or decorative motion; the only drawn glyphs are board marks (fiducials, holes, vias, pin-1, status marks) and the traces' single draw is the only authored movement.
- **Don't** revive the green mask or the earlier terminal look: no phosphor glow, scanlines or graticule.

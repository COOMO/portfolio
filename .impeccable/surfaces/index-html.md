---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["benchpress/index.html","pos/index.html","workflow/index.html"]
---

# Surface brief: portfolio landing (index.html) and the three case-study sheets

## Scope and mode

Landing page `index.html`: **Persuade**. Case-study sheets `benchpress/`, `pos/`, `workflow/`: **Read**, inheriting the landing's world.
Full redesign shipped 2026-10-01 (PCB silkscreen world). Same day the user pinned two changes: a dark scheme (the mask is now matte black, not green) and a showcase-first landing, because visitors arrive from the LinkedIn portfolio link. Copy was rebuilt from the source repos and Tom's notes in the confirmed terse voice.

## Audience, job, action

Recruiters (foreign/remote and Taiwanese) and prospective freelance clients, arriving from LinkedIn, scanning for two minutes on a laptop. Job: see real shipped work in the first viewport. Action: open a sheet, then email.

## Proof and content

Two shipped products with real screenshots (3 + 5 PNGs), one method note with three verbatim prompts from Tom's project notes, a four-line background, contact. Numbers come from the repos (commits, instruments, templates, tests, tags, dates). Roadmap items are DNP. No testimonials, no photo.

## Direction contract

THESIS: The portfolio is one fabricated circuit board in matte black. Each work is a footprint with a reference designator; the compact bill of materials under the legend is the index; the only gold on the board is a pad you can press. It refuses the category arrangement of hero sentence plus a grid of same-size project cards, and it refuses glow, scanlines and gradients.

OWN-WORLD: Ground is matte black solder mask in two tones: #121314 bare, #1c1e1f copper pour under content regions, #0a0b0b recesses. White silkscreen (#f2f2ee) in Barlow Condensed 600 for labels and display, Barlow for running copy, Noto Sans TC matched in weight for Chinese; quieter silk tones carry the mask's warm cast (#cdcdc6, #a7a89f), never cool gray. Copper is dark bronze under the black mask (#3a3a33 rules, #5c5848 traces and vias). ENIG gold (#d8b15a) only on actionable pads, links, the JP1 jumper's selected position, hot traces and plated holes. Drawn marks carry state: pin-1 dot, fiducial crosshair, plated mounting holes, dashed DNP outline, filled square shipped, filled circle living. No shadows, glow or blur; depth is the two mask tones and the 1 px line; 3 px milled corner.

STORY: A visitor from LinkedIn sees the name, the two gold pads, and within the first viewport the benchpress sequence editor at full width with six facts beside it. They scroll to tujia pos (three tablet screens), the method note, then the background. They open a sheet or press the email pad.

FIRST VIEWPORT (1440 wide): Board outline with 24 px margin, fiducials in three corners, plated holes in four. Legend strip: the JP1 jumper only. At the user's request (2026-10-01) the name block, the gold contact pads and the background section were removed from the landing; name and contact remain in the data line, and the card copy follows Simplified Technical English (one instruction per sentence, active voice, no phrasal verbs). Directly below, a compact bill of materials: three rows (U1, U2, J1), each one line of description, year and status mark, each a link, with copper traces routing down the left margin to the footprints. Below the BOM begins footprint U1: the sequence-editor screenshot across eight columns, and in the remaining four a one-sentence description, a six-row label/value list (For, Instruments, Blocks, Also, Verified, Build) and an "Open sheet" link. U2 (three portrait tablet screens plus the same list) and J1 (four pins plus one line) follow below the fold, then the data line.

Signature interaction: continuity. Hovering or focusing a BOM row turns its trace, vias and the footprint's pin-1 dot gold; the footprint hover does the reverse. Motion, once: traces draw along their routes after the fonts settle, 900 ms, exponential ease-out; reduced-motion shows them drawn.

FORM: PCB silkscreen, the assigned card of the re-roll round; seed key 312d4b87, re-roll 1. Black mask and showcase-first order are user-pinned changes (2026-10-01) applied inside the same world. Raises carried: machine-format identity line (passport), paired bilingual lettering (painted poster), one continuous board object (daylight section), state never by color alone (cyclorama), rank by span with one body size (cutting bench), board stays whole on phones (minihompy).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved

Whether to name the benchpress client on the site: the sheet says "an R&D lab"; the user decides.

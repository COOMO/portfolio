# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, confirmed equally important:

1. Recruiters and hiring managers at foreign or remote-first companies. They read in English, usually on a laptop, with a few minutes per candidate. Job: decide whether to email Tom or book an interview.
2. Recruiters and technical leads at Taiwanese companies. They read in Traditional Chinese, want technical depth and proof of hands-on implementation.
3. Potential freelance or contract clients (small businesses, labs). They want to know what problem Tom can solve for them; technical detail is secondary.

All three scan rather than read. Success for each is the same action: they contact Tom (email) after seeing enough proof.

## Product Purpose

A personal portfolio site for Tom Huang (Hsiang Chun Huang), a senior software engineer in Taipei with 10+ years across measurement systems, embedded real-time control, industrial IoT and cloud pipelines. It shows five shipped works and one method note, so that a reader can judge his engineering judgment and delivery ability from real work rather than from a résumé bullet list.

Success: a reader understands within one viewport what Tom builds, opens a case study, and emails him.

## Positioning

Tom builds complete, shipped tools for real operating environments he knows first-hand: a lab bench, a bakery counter, a production tester, an embedded board on its way to a customer. The proof is not a demo repo but working software with real users, built solo, end-to-end (architecture, UI, deployment), in Rust with AI-assisted development as an explicit, documented method. A neighboring portfolio cannot truthfully claim the same combination of hardware-instrument background (NI, LabVIEW CLD, GPIB/VISA, PREEMPT_RT) and modern cross-platform Rust app delivery.

## Operating Context

- Static site on GitHub Pages at https://coomo.github.io/portfolio/ ; repo `COOMO/portfolio`. Each project is a folder with a self-contained `index.html` plus PNG screenshots. No build step, no framework; commit and push deploys.
- Bilingual EN / zh-TW via a client-side toggle, persisted in localStorage, defaulting from browser language. Both languages must stay first-class.
- Readers often arrive from a résumé link, a LinkedIn profile, or a direct email, so the landing page is the first and sometimes only page seen.
- Résumé PDF is shared on request, not hosted on the site (confirmed: keep as is).

## Capabilities and Constraints

Content inventory (confirmed 2026-10-01 against the source repos, Tom's Obsidian vault and journal; wording may be rewritten):

- **benchpress** (released, tag `release-2026-09-10`, client evaluation): Windows desktop app, Rust 1.95 + Dioxus 0.7.9, controls bench instruments over GPIB and Ethernet (VXI-11) via visa-rs with R&S or NI VISA. Built for an R&D lab replacing a LabVIEW station (client named in Tom's journal; not named on the site). 8 instrument models listed in the README; 7 have shipped template files (167 SCPI templates in total: RTB24 63, 66202 7, 61502 17, 63100 13, 34970A 19, Tek 25, LeCroy 23); the R&S MXO4 has no template yet and is planned. The site counts 7 models and lists MXO4 as planned. Phase 1 used one crate per instrument; M18.5 deleted 9 crates (8 drivers + ui-kit), about 1,500 lines, workspace from 14 members to 5 (docs/ROADMAP.md). ROADMAP.md is 1,388 lines with 169 done and 102 open items as of 2026-10-01. 235 of the 286 commits carry a Claude co-author line (git log). 9 block types (Write, Query, Wait, For, If, Parallel, Shell, Set Variable, Print). 6 crates plus app (core, visa, sequencer, report, license, mcp). Shipped: step debugger, variables and expressions, parallel lanes per instrument, Bash/Python shell steps, pre-flight, per-step Halt/Continue/Retry, aggregate FOR, run header with operator/DUT/sequence hash/calibration dates, roles and audit trail, diagnostics bundle, offline ed25519 licensing, MSI with optional signing, headless `benchpress.exe run` and `probe`, MCP server (file-only). 286 commits 2026-05-05 to 2026-09-10, about 350 tests on MockVisa, CI gates fmt/clippy/test. Hardware verified: R&S RTB24 only, 2026-09-06, 21-step run, firmware 03.000; six other templates written from manuals and not yet run on hardware. Planned: LLM manual parsing, MXO4 template, fleet. Three screenshots: test panel, sequence editor, manage.
- **tujia pos** (in use, tag v1.0 2026-04-16, latest 2026-06-22): local-first order book for the bakery run by Tom's mother-in-law. The owner is elderly (no age recorded; do not state one). Orders arrive by phone, Messenger, walk-in; Facebook/IG posts went viral; messages in the thousands. Rust + Dioxus 0.7, sqlx, SQLite WAL, tokio. Android tablet at the counter (Lenovo TB311FU), iPad, Windows. 8 flavors in order-book order (data, not code). Bake days Thursday and Saturday. Spec sizes: text 18 pt, titles 22 pt, minimum 16 pt, targets 48 px, main button 64 × 56, cells 80 × 80, max 3 steps. Undo via operation_logs with payload and reverse JSON (10 op types). Status one-way pending → ready → picked_up. Stock warnings advisory. Google Drive backup (appDataFolder, OAuth device flow) every 10 min, skipped when unchanged, shipped 2026-06-22. Bluetooth dial relay, partial payment, Android tel dial, virtualised list, surname-frequency keyboard. 23 commits 2026-03-30 to 2026-06-22, 12 migrations. The orders visible in screenshots are seeded test data (do not cite "229 orders" as real). Planned: LINE/web ordering, reminders, second shop. Owner quote (as recorded by Tom): 「我寧可繼續手寫，也不想用看不懂的東西。」 Five screenshots: flavors, calendar, details, manage, kiln.
- **scope dll** (U3, in use, v3.25.0 2026-09-14; added 2026-10-04): C++17 DLL for R&S RTB2000 oscilloscopes over VISA, built for a production tester whose team calls it from LabVIEW (client not named; "ULT" and "RTK" strings in the repo are client identifiers and stay off the site, as do DUT pin names from the release notes). Two APIs, Soft AMR (voltage-window watch, history segments, trigger-level stepping, zoom dumps) and FWF (up to 4 channels in sync, per-pin V/div). 31 exported functions, 35 releases since v1.0 2025-09-26, 152 commits 2025-08-21 to 2026-10-01, 16 with a Claude co-author line, about 10,300 lines of C++. Verified on an RTB2004, firmware 03.000. x64 and x86 builds, Inno Setup installer, Windows 7 to 11, XP tested in a sandbox. Screenshots are from Tom's own demo runs in `build/Demo/Release` (scope title bar with its serial cropped off); the reports' footer naming the client is cropped.
- **i.MX93 bsp** (U4, delivered 2026-09; added 2026-10-04): contract for a board maker whose Linux build could not be reproduced after its engineer left. Tom said the product name need not appear; the vendor company, PM and engineer names, GitHub org, MAC block and device ids stay off the site. Rebuilt SPL, TF-A, OP-TEE, U-Boot and kernel 6.18.20 from NXP LF6.18.20_2.0.0; Debian p1 and Ubuntu 26.04 p2 payloads; Python install tool (1,639 lines) and web station (1,436 lines); 58 + 89 commits 2026-08-17 to 2026-09-10. Root causes: PMIC IRQ storm from a dts pad, DRAM at 3733 vs 3200 MT/s, unprogrammed FT4232H EEPROM, Debian/Ubuntu endN swap, NPU userspace never working (v2.5 fixes, field .deb). 7 boards on the unified image. The station screenshot is the real page served by a stub with sample board records (hostnames and kernel strings generalised); the checkup excerpt is a real 2026-08-20 report with identifiers shortened.
- **genio 420** (U5, in delivery; added 2026-10-04): contract for a module maker (company, module and carrier model numbers stay off the site; the SoC name is fine). Ubuntu 26.04 on Genio 420 (MT8371) from UFS; kernel 6.6.137 rebuilt from IoT Yocto v26.0 with byte-identical DTBs; install station (5 phases, resumable) and USB installer, factory restore 263 to 100 s, unified 492 to 135 s; RT1180 EVK as DSA/TSN switch with 802.1AS, Qbv, Qci, Qbu passed (report 2026-09-16 numbers), hms driver fixes (PTP mutex, shutdown cleanup); tsn-manager package; GMSL3 IMX900 bring-up, glass-to-glass 127 ms at 1024x768 and 166 ms at 4K30; gst-spsfix 107 to 5 ms per frame; VLM demo Qwen3VL-2B; benchmark sheet 2026-07-31. 294 + 102 commits 2026-07-30 to 2026-10-02, 284 of 294 with a Claude co-author line. Open: hardware ISP, PREEMPT_RT and EtherCAT master, AS-4. Screenshots: station in `--fake` mode and tsn-manager in `--fake` mode (fixtures recorded on the bench board), both captured 2026-10-04 with hostnames generalised; NPU detection frame and benchmark sheet from the Genio repo (benchmark footer with the module name cropped).
- **how i work with ai** (method note, living): from `_起手式.md` and the benchpress SOP note. git init first; three documents (SPEC.md in EARS form, SDD.md with error handling and acceptance, ROADMAP.md with stable step numbers); CLAUDE.md under 200 lines as the per-session contract; skills (AskUserQuestion interview, test-driven-development, karpathy-guidelines, obsidian-vault). benchpress task loop: issue → plan mode → branch issue/N → cargo check/fmt/clippy/test → PR with lab-safety checklist → gating second-model review → apply comments then stop for manual hardware run → squash merge and watch CI. Rule: mock tests green is not the feature working. Real prompts quoted verbatim from Tom's project notes (block brief, error-handler request, "code cleanliness 很重要").
- Tom's situation (journal): laid off end of March 2026; looking for software engineer, FAE or system-integration roles, Taipei or remote; portfolio visitors arrive mainly from the LinkedIn portfolio link, so the landing page leads with the work.
- New: a short personal background paragraph. Facts available from the résumé: Senior Software Engineer at PlasmaLeap (remote, Australia, Sep 2024 – Apr 2026); Senior Application Engineer at National Instruments Taipei (2018 – 2024; ADAS replay system on NXP i.MX8M Plus with PREEMPT_RT, Azure IoT pipeline, LabVIEW DQMH framework, EV inverter test system); Software Engineer at Reallusion (2014 – 2017, Qt / QML); M.S. CSIE National Central University; Certified LabVIEW Developer; Mandarin native, English professional; Taipei, open to remote.
- Roadmap items on each case study are plans, not shipped features, and must stay labelled as such.
- Contact: cosccmo@gmail.com, GitHub @COOMO, Taiwan.

Technical constraints: plain HTML/CSS/JS, one file per page, Google Fonts allowed, no bundler, must work on GitHub Pages without configuration. Screenshot assets are the only imagery available; no photography of Tom is to be used on the site unless he supplies one later.

## Brand Commitments

- Name on the site: "Tom Huang" (full legal name Hsiang Chun Huang appears only on the résumé).
- Visual: dark scheme requested 2026-10-01; the PCB world renders as a matte black solder mask (not green).
- Voice, confirmed 2026-10-01 and tightened the same day ("still too many filler words"): minimal and list-like, nothing repeated between the landing and a sheet, numbers up front. Short sentences, bullets over paragraphs, facts over adjectives. No slogans, no parallel-structure rhetoric, no em-dash chains, no "Pain 01 → solved by" templating, no "failure mode prevented" boilerplate. The previous copy was judged to read as AI-generated; the rewrite must read as a working engineer's own notes.
- Both languages are written natively, not translated word-for-word.

## Evidence on Hand

- `benchpress/01-test-panel.png`, `02-sequence-editor.png`, `03-manage.png`, `07-mcp-settings.png`: real screenshots of the 2026-09-10 release build, captured 2026-10-01 with no instrument connected (data folder `benchpress-data`, PrintWindow). `04-run-report.png`, `05-live-run.png`, `06-parallel.png`: Tom's own screenshots from `docs/intro/img` in the benchpress repo, 2026-07-28, with a real R&S RTB24 connected. The terminal block and the changelog table added on 2026-10-01 were removed the same day at Tom's request (internal development material, not showcase content).
- `pos/flavors.png`, `calendar.png`, `details.png`, `manage.png`, `kiln.png` (real app screenshots, Android tablet).
- Résumé facts in `../Tom_Resume.pdf` (outside the repo; not hosted).
- Version and count facts carried over from Tom's own earlier case-study pages (git history before 2026-10-01): benchpress v0.1.0, Rust 1.95 edition 2024, Dioxus 0.7.9, tokio, visa-rs 0.7.0, WiX Toolset v7, four crates plus the app shell; tujia pos v0.1.0, Dioxus 0.7, sqlx 0.8, SQLite WAL, snapshot sync on pause and every 10 minutes, 229 orders in the manage screenshot, bake days Thursday and Saturday. These are Tom's statements, not verified by this site's authors.
- No testimonials, metrics from users, or press. Do not invent any.

## Product Principles

1. Proof over claims: every statement about a project points at a screenshot, a file, or a design decision that exists.
2. Scannable in both languages: a reader with two minutes gets the same picture in EN or zh-TW.
3. One voice: Tom's own, terse, concrete.
4. Static and durable: no dependency that can rot; a new project is a new folder.
5. The work leads, the site recedes.

## Accessibility & Inclusion

Standard web accessibility: keyboard-reachable controls, visible focus, sufficient contrast in both themes, alt text on every screenshot, reduced-motion respected. No product-specific requirement beyond that.

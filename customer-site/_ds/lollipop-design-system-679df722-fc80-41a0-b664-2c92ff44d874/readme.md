# Lollipop Design System

A complete, compiler-indexed design system for **Lollipop Software** — tokens, brand assets, reusable React components, and full-screen UI kits.

---

## 1. Company & product context

**Lollipop** is a B2B SaaS **employee-engagement and workforce-sentiment platform**. Employees do a quick daily **check-in** — pick a mood face (Terrible → Great), tag emotions, leave an optional note — and Lollipop turns that signal into manager guidance and leadership reporting. It is warm, human, and privacy-respecting: individual feelings stay private; only team-level trends surface to managers.

There are **two products**, each with a UI kit here:

| Surface | Audience | Views |
|---|---|---|
| **Employee App** (mobile) | every employee | Daily Check-In, Employee Resources |
| **Manager Platform** (web) | managers & People-Ops | Dashboard, Quick Insights, Conversation Starters, Small Authentic Gestures, Monthly (Workforce Intelligence) Report |

### Sources provided
- Uploaded product screenshots (in `uploads/`): `Dashboard`, `Check in`, `Quick Insights`, `Conversation Starters`, `Monthly Report`, `Small Authentic Gestures`, `Employee Resources`, plus the five mood faces and the Lollipop logo set. These were the ground truth for this system.
- No codebase or Figma file was supplied — recreations are derived from the screenshots and the brand cues within them. **If a repo or Figma exists, attach it** and the UI kits can be tightened to match component code exactly.

---

## 2. Content fundamentals (voice & tone)

Lollipop talks like a kind, emotionally-intelligent colleague — never corporate HR-speak.

- **Warm and direct.** Plain language, short sentences. "How do you feel today?" not "Please indicate your current affective state."
- **Second person, "you".** Copy speaks *to* the employee/manager: "Anything else you want to tell us?", "We've got your back."
- **Encouraging, never clinical.** Even hard topics are framed with care: "I can see signs that you might be experiencing burnout. Let's talk about how to help you recharge."
- **Sentence case** for almost everything (titles, buttons, labels). **UPPERCASE** is reserved for small eyebrows/kickers (`WORKFORCE INTELLIGENCE REPORT`, resource headings) and report metric labels.
- **Action-oriented.** Insights pair a "why" with a concrete "try this" line.
- **Emoji**: used *intentionally and sparingly* — only in the **Small Authentic Gestures** feature, where each care category carries one emoji (💗 💼 🎉 🎊 🌱) and a short quoted phrase ("I see you", "You did it!"). Emoji are **not** used in the app chrome, dashboard, or reports.
- **The Report voice is different on purpose**: the Monthly Report adopts an *editorial, analyst* register ("stable with watch-level retention risk… treat this as a directional early-warning signal") set in a serif, to read like a considered briefing rather than app UI.

Examples to imitate:
> "Welcome to Your Check In with Lollipop!"
> "Simple acts of care — when genuine — build trust, boost morale, and help people feel seen."
> "Offer a Reset, Not a Replay."

---

## 3. Visual foundations

**Background.** The signature canvas is a warm **cream `#FBF8F3`** (`--cream`). It is *the* Lollipop surface — almost never pure white at the page level. The employee app adds a soft **butter `#FBEFC4`** header band behind the logo. Cards sit on cream as **white** (`--paper`) surfaces.

**Color.** Anchored by **Lollipop Blue `#0085FF`** (primary actions, links, the logo bubble). **Coral `#FF4D62`** is the energy accent — section subheads, active filter pills, "needs attention". The **mood spectrum** is sacred brand equity: a fixed 5-step ramp Terrible `#FF5658` → Bad `#F7931D` → Okay `#FFD84B` → Good `#A9EE12` → Great `#309C3F`, used for the faces, charts, and status. Neutrals are warm-grey "ink". See `tokens/colors.css`.

**Typography.** **Poppins** carries the whole brand — rounded, geometric, friendly. Headings are heavy (700/800) and frequently *colored* (Blue for the hero question, Coral for feature subheads, ink for page titles). Body is Poppins 400–500. **Source Serif 4** appears in exactly one place: the **Workforce Intelligence Report** masthead and section heads, to signal "considered analysis". See `tokens/typography.css`.

**Shape & radius.** Lollipop is *round by nature* — the logo is a speech bubble. Corners are generous: cards `radius-lg` (20px), inputs/chips `radius-md` (14px), and **buttons, the note field, chips and mood faces are fully pill / very round**. Never square a primary control.

**Elevation / shadows.** Soft, low, warm-tinted (`rgba(28,29,31,…)`), never harsh. Cards use `shadow-sm`/`shadow-md`. Primary blue buttons get a colored lift — `--shadow-brand` (a blue glow). See `tokens/spacing.css`.

**Borders.** Hairline `1px` warm-grey (`--line-300`) on cards. A recurring motif is the **colored left-accent bar** (`4px`) on KPI cards, gesture cards, and the executive-summary block — it encodes status (red = watch, blue = info, green = healthy).

**Cards.** White, rounded-lg, hairline border, soft shadow. Variants: plain, **left-accent**, and **pastel-tint** (gesture categories use pink/blue/yellow/purple/green soft fills).

**Inputs.** Rounded; single-line fields are pills, the multiline note is a rounded box. Focus lifts the border to **Coral** with a soft tinted ring. Dropdowns carry a permanent **Coral-tinted border** with a Coral chevron.

**Imagery.** The only brand imagery is the **logo** (blue speech-bubble mark) and the **mood faces** (soft, rounded, slightly shadowed squircle emoji). Both are real PNG assets — never redraw them. Color vibe is bright, saturated, optimistic; no photography, gradients, or textures in the product surfaces.

**Motion.** Playful but restrained. Presses **bounce-scale** (`--ease-bounce`, ~0.96) — buttons and mood faces pop. Selecting a mood scales it up and desaturates the rest. Transitions are short (120–360ms), `ease-out`. No infinite/looping decoration.

**Hover / press states.** Buttons: hover keeps color, press bounces down. Secondary/chips: hover fills to a faint `--fill-100`; selected chips go solid Coral (or Blue). Links underline on hover.

**Transparency / blur.** Used sparingly — the platform top bar uses a translucent cream with `backdrop-filter: blur` so content scrolls softly beneath it. The device frame (iOS starter) uses liquid-glass pills.

**Layout.** Platform = fixed 264px sidebar + sticky top bar + scrolling content (max ~1120–1200px). App = single 390px column. 8pt spacing grid throughout.

---

## 4. Iconography

- **No proprietary icon set** was found in the provided materials, so the platform uses **[Lucide](https://lucide.dev)** (clean, rounded-stroke line icons) loaded via the **Iconify** web component from CDN: `<iconify-icon icon="lucide:layout-dashboard">`. Lucide's friendly, even stroke matches Poppins well. **⚠️ Substitution flag:** if Lollipop has its own icon library, drop it in `assets/icons/` and swap the `iconify-icon` usages.
- **Mood faces** (`assets/moods/*.png`) function as the brand's most important "icons" — the five squircle emotion faces. Always use the real PNGs.
- **Emoji** are used only inside **Small Authentic Gestures** (category glyphs 💗 💼 🎉 🎊 🌱). Elsewhere, prefer Lucide.
- **Unicode glyphs** (`▾` chevrons, `→` arrows) appear in a few lightweight places (dropdowns, resource bullets) consistent with the screenshots.

---

## 5. Visual foundations — at a glance (tokens)

| Concern | File | Highlights |
|---|---|---|
| Fonts | `tokens/fonts.css` | Poppins 400–800 + italic, Source Serif 4 (variable) — real woff2 in `assets/fonts/` |
| Colors | `tokens/colors.css` | Brand, Coral, warm neutrals, mood spectrum, status + semantic aliases |
| Type | `tokens/typography.css` | Families, weights, type scale, line-height, letter-spacing |
| Spacing | `tokens/spacing.css` | 8pt spacing, radii, soft shadows, motion easings |
| Base | `tokens/base.css` | Element defaults + `.lp-eyebrow`, `.lp-serif` helpers |

`styles.css` (root) is the consumer entry point and imports all of the above.

---

## 6. Index / manifest

**Root**
- `styles.css` — entry point (imports only)
- `readme.md` — this guide
- `SKILL.md` — Agent-Skill front-matter for Claude Code
- `tokens/` — `fonts · colors · typography · spacing · base`
- `assets/` — `logos/`, `moods/`, `fonts/`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab

**Components** (`components/<Name>/` — each has `.jsx`, `.d.ts`, `.prompt.md`, a card)
- `Button` · `Badge` · `Card` · `Chip` · `Input` · `Select` · `StatCard` · `MoodScale` (signature)

**UI kits** (`ui_kits/<product>/`)
- `employee-app/` — mobile Check-In flow + Resources (`index.html`)
- `platform/` — manager web app: Dashboard, Quick Insights, Conversation Starters, Gestures, Monthly Report (`index.html`)

---

## 7. Caveats
- **Lucide icons substitute** for an unknown house icon set — confirm or replace.
- **UI kits were rebuilt from screenshots**, not source code/Figma. Layout and copy are faithful but pixel/spacing details may differ from production. Attach a repo or Figma to tighten them.
- Charts on the Dashboard are lightweight SVG recreations, not a charting library.

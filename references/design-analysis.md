# Design Analysis

This document defines the tutto passa design system. The site must always feel **completely tutto passa and Mediterranean** — sun-drenched, coastal, editorial, warm. **Do not copy any reference layout exactly.**

## Identity hierarchy

1. **Tutto passa + Mediterranean** — what the site feels like (always wins)
2. **`references/` folder** — how that feeling looks (color, type pairing, photo tone, spacing)
3. **Cross-industry influences** — how well things are built (precision, nav clarity, layout structure, motion quality)

> **Mediterranean first.** Every screen should feel like tutto passa — coastal summer, warm cream and sea blue, film-grain photography, unhurried editorial rhythm. If a borrowed pattern makes it feel like SaaS, a hotel chain, or a tech product, reject it.

> **Steal craft, not identity.** Borrow execution quality from Apple, Linear, Monocle, etc. Never borrow their color palettes, cold minimalism, or brand personalities.

**Mediterranean filter test:** Would this still feel like a sun-drenched coastal editorial if you removed the brand name? If not, revise.

Before building a new component, identify which reference is most relevant (see [Component → Reference Mapping](#component--reference-mapping)). Pull tokens from `descarga.jpg` first. Apply the relevant [cross-industry craft](#cross-industry-influences) for structure and precision. Run the Mediterranean filter last.

---

## Reference Index

### `descarga.jpg` — Token authority

The canonical source for color hex values, typography pairing, grid structure, and UI components.

- Three-column equal-width grid on a cream paper card
- Display serif + script accent for the title ("COLOR" / "palette")
- Portrait mood images (~2:3) above color swatches and body copy
- Pill CTA button ("Visit site") with external-link arrow
- Subtle paper grain on the background

**Governs:** color tokens, card layouts, grid columns, buttons, swatches, body typography, spacing on light surfaces.

---

### `descarga (1).jpg` — Editorial hero overlay

Magazine-style feature image with typography integrated into photography.

- Bold all-caps serif headline ("SUMMER ON") centered over a scenic bay
- Elegant script subhead ("the french riviera") overlapping the serif below
- Corner utility labels in wide-tracked sans ("ICONIC EASE", "STYLING")
- Film grain, warm golden-hour wash, slight shadow desaturation
- Repeating rhythm elements: boats in the bay, shoes lined along the bottom edge

**Governs:** hero banners, editorial overlays, text-on-photo treatment, corner labels, vintage photo grading.

---

### `descarga (2).jpg` — Brand splash / mobile hero

Centered brand lockup over a full-bleed beach photograph.

- Vertical ~9:16 portrait format
- Stacked hierarchy: icon → micro label ("EST 2017") → large serif ("PALOMA") → tracked sans subtitle ("HOME")
- Typography placed in the upper third over clear sky, not over busy foreground
- Muted navy/charcoal text on light sky area
- Single warm accent in the photo (orange-red umbrella)

**Governs:** splash screens, mobile heroes, logo stacks, brand identity moments.

---

### `envanto1-o.avif` — Typographic poster / symmetrical hero

Font-promotion poster with centered serif typography over a vintage landscape.

- Symmetrical, margin-heavy composition with wide perimeter breathing room
- Hero serif word ("Cadia") at ~⅓ image width, warm cream tone
- Supporting serif lines in medium weight, all caps, with decorative framing (`• A CLASSIC SERIF FONT •`, `- NEW COLLECTION -`)
- Corner anchor labels in small tracked sans (four corners: collection info, features, credits)
- Oval badge/stamp logo at top center ("The Maikohatta Studio")
- Muted, desaturated landscape background (forest greens, mountain blues, warm browns)

**Governs:** symmetrical hero layouts, corner-anchored metadata, decorative text framing, oval badges, poster-style landing sections.

---

### `Sun-drenched afternoons by the Mediterranean ☀️🌊.jpg` — Accent and pattern

High-angle lifestyle scene establishing warm/cool contrast and repeating motifs.

- Bold yellow-and-white horizontal stripes on umbrella and lounger — the signature pattern motif
- Warm/cool palette: teal/turquoise sea vs. sandy beige rocks vs. bright yellow fabric
- Components clustered as a tight module (lounger + umbrella + side table + rosé glass)
- Vast negative space (ocean) surrounding the module
- Diagonal compositional flow from bottom-left to top-right
- Direct harsh sunlight with sharp shadows

**Governs:** stripe accent pattern, warm/cool color pairing, module clustering, accent color discipline, lifestyle photography mood.

---

### `cinque terre.jpg` — Atmosphere and scale

Vertical cliffside scene emphasizing environment over UI.

- Asymmetric split: dark layered rocks (left) vs. expansive shimmering water (right)
- Human figures small relative to environment — scale and vastness
- Deep blues/teals in water, charcoal/earth browns in rock, single warm accent (striped towel)
- Implied motion: diver mid-air against uniform water
- Horizontal rock layering creates structural rhythm against fluid water texture

**Governs:** atmospheric backgrounds, asymmetric compositions, scale relationships, motion/implied animation, environmental negative space.

---

## Design Tokens

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Deep Blue | `#215388` | Display headings, primary text, brand on light backgrounds |
| Soft Beige | `#EBE6D8` | Surfaces, secondary fills, swatches; add thin border when on cream |
| Lemon Yellow | `#FCEB9D` | Accent highlights, stripe motif, warm emphasis |
| Cream Paper | `#F5F2EA` | Page and card backgrounds; pair with subtle grain texture |
| Navy Text | `#2A3F5C` | Muted navy for typography on photography (approx. from PALOMA hero) |
| Sage Olive | `#78836B` | UI section backgrounds, natural mid-tone (from landscape refs) |
| Dark Olive | `#3D3920` | Deep footer or dark section backgrounds |
| Teal Sea | `#1A6B7A` | Photography and atmospheric backgrounds (approx.) |
| Sandy Stone | `#C4B59A` | Warm neutral for terrains, borders, secondary surfaces |
| Accent Warm | `#E85D3A` | Single vivid warm pop per view (umbrella, towel) — use sparingly |
| Text on Photo | `#FFFFFF` | White overlay text on imagery |
| Text on Photo Warm | `#F5F0E6` | Cream-white for hero serif on dark/muted photos |

**Accent discipline:** One vivid warm accent per view. Never stack competing accent colors.

**Text color rule:** Navy/charcoal on light UI surfaces — not pure black. White or warm cream on photography.

### Typography

Three-role system used across all references:

| Role | Style | Case | Tracking | Examples |
|------|-------|------|----------|----------|
| Display serif | High-contrast, elegant serif | ALL CAPS | Normal to slightly tight | COLOR, SUMMER ON, PALOMA, Cadia |
| Script secondary | Fluid cursive/script | Sentence or lowercase | Normal | palette, the french riviera |
| Utility sans | Clean geometric sans | ALL CAPS | Wide (0.15–0.25em) | HOME, EST 2017, ICONIC EASE, hex labels |
| Body sans | Light-weight sans | Sentence case | Normal | Card descriptions, paragraphs |

**Pairing rules:**
- Display serif + script secondary for editorial headlines (never script alone as primary)
- Utility sans for metadata, navigation labels, and hex codes — always small relative to display
- Decorative framing around subheads: dots (`• label •`) or dashes (`- label -`)

**Suggested font families** (when implementing — not yet installed):
- Display: Playfair Display, Cormorant Garamond, or similar high-contrast serif — Mediterranean editorial with Apple-like size scale
- Script: Italianno, Dancing Script, or similar elegant cursive — tutto passa signature; never drop for "clean" minimalism
- Utility: Montserrat, Jost, or similar geometric sans — Monocle-style tracking, rendered in deep blue `#215388` not SaaS gray
- Body: humanist sans (e.g. Source Sans 3, Lora companion) on cream paper `#F5F2EA` — Kinfolk warmth, not cold tech sans

### Spacing Scale

Base unit: **4px**. Use these values consistently:

| Token | Value | Typical use |
|-------|-------|-------------|
| `space-xs` | 8px | Tight internal gaps (swatch to label) |
| `space-sm` | 16px | Component internal padding, grid gutters |
| `space-md` | 24px | Card padding minimum, between stacked elements |
| `space-lg` | 32px | Section internal spacing |
| `space-xl` | 48px | Between major content blocks |
| `space-2xl` | 64px | Section margins |
| `space-3xl` | 96px | Page edge margins, hero breathing room |

**Margin principle:** Generous outer margins on all layouts. Content should never feel edge-to-edge except intentional full-bleed hero photography.

### Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `radius-card` | 12–16px | Cards, palette panels |
| `radius-pill` | 9999px | Buttons, badges, oval stamps |
| `radius-image` | 0–4px | Mood images — nearly square corners or very subtle rounding |

---

## Principles by Category

### Spacing

- **Outer margins:** Wide and consistent. The poster reference (`envanto1-o.avif`) pushes all peripheral text to the edges with large safe-area margins; the palette card (`descarga.jpg`) uses generous padding inside rounded corners.
- **Vertical flow:** Title → visual → metadata → body → CTA. Each step separated by `space-md` to `space-lg`.
- **Module clustering:** Group related UI elements tightly (lounger + umbrella + table). Surround clusters with expansive negative space (sea, sky, landscape).
- **Safe areas:** Corner labels and navigation sit in consistent inset zones (~`space-lg` from edges). Hero text occupies the upper third over calm background areas.

### Typography

- Hierarchy is established through **size contrast** and **family contrast** (serif vs. sans), not weight alone.
- Display serif is always the largest element in any composition.
- Script secondary sits directly below or slightly overlapping the display serif — never isolated at a distant position.
- Utility sans is always the smallest text role; wide letter-spacing is mandatory.
- Body copy uses light weight with generous line-height (~1.6–1.75) and is center-aligned in editorial cards.

### Visual Hierarchy

Four consistent levels across references:

1. **Primary** — Display serif headline or hero photograph
2. **Secondary** — Script subhead, hero image, or dominant visual module
3. **Tertiary** — Utility sans labels, metadata, swatches, badges
4. **Quaternary** — Body copy or atmospheric background

On photo heroes, text is placed over **negative space zones** (sky, calm water) — never over busy foreground detail.

### Image Ratios

| Context | Ratio | Reference |
|---------|-------|-----------|
| Mobile hero / splash | ~9:16 portrait | `descarga (2).jpg` |
| Editorial feature | ~4:5 portrait | `descarga (1).jpg` |
| Mood / card thumbnails | ~2:3 or 3:4 portrait | `descarga.jpg` |
| Typographic poster | ~3:2 landscape | `envanto1-o.avif` |
| Atmospheric lifestyle | Vertical, asymmetric | `cinque terre.jpg`, Mediterranean photo |

**Image treatment:**
- Film grain overlay
- Warm golden-hour color grade
- Slight desaturation in shadows
- Text integrates with the image — no boxes or overlays unless on cream card surfaces
- `references/` lifestyle photos remain the primary direction — teal sea, golden light, one warm accent
- Reinforce Leica honesty, Aman serene scale, Soho House candid intimacy, Four Seasons polish on detail shots only
- Never drift toward corporate hotel brochure or cool-toned spa stock

### Navigation

Dual-mode navigation — borrow clarity and wayfinding, never cold SaaS aesthetics:

- **Editorial/marketing pages:** Minimal chrome. Corner utility labels (top-left / top-right) on cream or sage surfaces. Sparse warm links in deep blue. No dense nav bars.
- **Poster/splash views:** No functional navigation — brand identity only. Peripheral corner text serves as metadata, not menu items.
- **Card views:** Single primary CTA per card — pill button, white fill, dark text, optional external-link arrow.
- **App/discovery flows:** Linear/Stripe *structure* (clear active states, horizontal nav) on Mediterranean surfaces — cream header, deep blue links, lemon yellow accent CTA. No dark-mode chrome, zinc grays, or dark sidebars.
- **Browse/search flows:** Airbnb-style image-forward cards using reference photography (teal sea, golden light, film grain) — not OTA white/gray cards.
- Navigation text uses utility sans: small, all caps, wide tracking.
- Reject any nav pattern that introduces tech-product density or corporatizes the Mediterranean warmth.

### Component Sizing

| Component | Sizing rule |
|-----------|-------------|
| Pill button | Full border-radius, ~40–48px height, horizontal padding `space-md`–`space-lg`, icon + label |
| Color swatch | Small horizontal bar (~60–80px wide, ~8–12px tall); thin border when swatch matches background |
| Card | Rounded corners (`radius-card`), internal padding ≥ `space-md` (24px), paper texture background |
| Hero logo stack | Icon (~24–32px) → micro label → display serif (largest) → tracked sans subtitle; all centered |
| Grid images | Equal width columns, portrait crop, consistent `space-sm` gutter |
| Oval badge | Horizontally centered, thin border outline, utility sans text inside |
| Hero serif word | ~⅓ of container width at largest breakpoint |

### Rhythm

- **Horizontal:** Equal-width columns in grids (3-col palette). Repeating motifs create pattern rhythm — stripes, aligned boats, shoe rows, rock layers.
- **Vertical:** Alternating content density — dense module clusters separated by airy negative space. Section bands shift between light sage, mid-tone content, and dark olive.
- **Decorative:** Subhead framing with dots or dashes (`• A CLASSIC SERIF FONT •`). Stripe pattern (yellow/white horizontal) as the signature repeating motif.
- **Compositional:** Diagonal flow (bottom-left → top-right) in lifestyle photography. Symmetrical center-weight in poster layouts.

### Color Usage

- **UI surfaces:** Restrained palette on cream, beige, or sage. Let photography carry saturation.
- **Photography:** Rich natural tones — teal sea, sandy stone, forest green, golden light.
- **Accents:** One warm vivid accent per view (yellow stripes, orange umbrella, rosé pink, yellow heels). Never multiple competing accents.
- **Contrast:** High contrast between text and its immediate background. Cream-white on muted photos; deep blue on cream cards.
- **Texture:** Subtle paper grain on card backgrounds. Sparkling water bokeh in photography — not in UI.

### Animation Style

Dual-speed motion — always warm in character. Motion should feel like afternoon light shifting, not a product launch.

| Context | Duration | Easing | Behavior |
|---------|----------|--------|----------|
| Editorial/content | 400–800ms | `ease-out` | Soft fade-in + gentle slide-up (8–16px) for text and cards |
| UI chrome (nav, hovers, toggles, filters) | 150–250ms | `ease-out` | Purposeful feedback — soft, no cold snap |
| Hero/marketing | 400–800ms | `ease-out` | Gentle Ken Burns on coastal photography; one reveal per viewport max |
| Grid reveals | Stagger ~100ms/col | `ease-out` | Left → center → right |
| Hover | ~200ms | `ease-out` | Gentle opacity or color shift; no scale bounce |

**Forbidden:** Spring physics, bounce, slide-from-offscreen, spin, cursor gimmicks, over-animated marketing theatrics.

Implied motion in stills (diver mid-air, shimmering water) suggests UI motion should feel **fluid and unhurried**, never mechanical.

---

## Cross-Industry Influences

These brands inform **execution quality only**. Every influence must be executed in tutto passa colors, Mediterranean photography, warm cream surfaces, and editorial pacing. Cross-industry craft should be invisible — visitors feel coastal summer, not Apple or Linear.

### Typography — Apple, Cereal, Kinfolk, Monocle

| Source | Steal | Avoid |
|--------|-------|-------|
| Apple | Optical hierarchy, restrained scale steps, caption/body clarity, type that feels native to UI | Generic system-font blandness; over-tight display type; cold gray-on-white |
| Cereal | Oversized editorial headlines, art-directed type/image tension, cover-style asymmetry | Literal magazine cover layouts; dropping Mediterranean warmth |
| Kinfolk | Warm humanist pacing, understated weights, intimate line-length (~55–65ch) | Excessive minimalism that feels empty or cold |
| Monocle | Small-caps metadata, numbered sections, cosmopolitan density done elegantly | Busy multi-column overload on mobile; SaaS-gray labels |

**Synthesis:** Keep the three-role system from references (display serif + script + utility sans). Execute with Apple-level precision and Cereal/Monocle editorial confidence — always in warm Mediterranean type treatment: cream/navy ink, never cold gray-on-white. Script accents stay. Display serifs stay sun-lit and editorial, not tech-product.

### Navigation — Airbnb, Linear, Stripe

| Source | Steal | Avoid |
|--------|-------|-------|
| Airbnb | Image-forward discovery, category wayfinding, search prominence, card-based browsing | Generic OTA clutter; map-heavy default layouts; white/gray card aesthetic |
| Linear | Minimal chrome, fast feel, clear active states, keyboard-friendly focus | Dark-mode-only SaaS aesthetic; zinc grays; dark sidebars |
| Stripe | Trust-building hierarchy, clean horizontal nav, strong primary CTA, section clarity | Developer-docs density on consumer pages; cold corporate palette |

**Synthesis:** Borrow clarity and wayfinding — never the aesthetic. See [Navigation](#navigation) for dual-mode rules. Reject any pattern that introduces zinc grays, dark sidebars, or tech-product density.

### Editorial layouts — Monocle, Cereal, NYT, Aesop

| Source | Steal | Avoid |
|--------|-------|-------|
| Monocle | Section grids, sidebar metadata, feature numbering, international editorial rhythm | Magazine pagination mimicry; layouts that feel like news, not coast |
| Cereal | Full-bleed hero moments, dramatic type scale, print-to-screen whitespace | Fixed template feel across every page |
| NYT | Long-form column width (~65ch), pull quotes, bylines, photo essays with caption hierarchy | News-dense homepage layout |
| Aesop | Ritual pacing, extreme margin generosity, single-column product storytelling | Copying apothecary visual identity or brown palette |

**Synthesis:** Mediterranean references always supply the visual soul (hero overlays, splash, color, photo tone). Monocle/Cereal/NYT/Aesop supply **page structure only** — column widths, pull quotes, section rhythm — dressed in tutto passa tokens. An Aesop-like product page still uses cream paper, deep blue type, and coastal photography.

### Photography — Soho House, Aman, Four Seasons, Leica

| Source | Steal | Avoid |
|--------|-------|-------|
| Soho House | Members-club intimacy, candid lifestyle, warm interiors, film grain | Club-brand exclusivity cues; moody club interiors over coastal light |
| Aman | Serene scale, muted earth tones, architectural framing, human figures small in landscape | Generic spa stock; cool-toned wellness aesthetic |
| Four Seasons | Service polish, aspirational brightness, detail shots (texture, food, linen) | Corporate hotel brochure look |
| Leica | Documentary authenticity, decisive composition, contrast, reportage honesty | Over-graded Instagram travel; filters that kill golden hour |

**Synthesis:** `references/` lifestyle photos remain the **primary photo direction**. Industry names describe qualities to reinforce, not replace. Golden hour, teal sea, film grain, one warm accent — always.

### Interactions — Apple, Linear, Framer templates

| Source | Steal | Avoid |
|--------|-------|-------|
| Apple | Restrained motion, scroll-linked subtlety, instant-feeling transitions, accessible focus | Flashy product-launch theatrics |
| Linear | Snappy but smooth micro-feedback, purposeful hover states, no decorative motion | SaaS-dark-theme dependency; cold mechanical snap |
| Framer templates | Section reveals, gentle parallax, horizontal scroll galleries, page-entry polish | Over-animated marketing sites; cursor gimmicks |

**Synthesis:** See [Animation Style](#animation-style) for dual-speed rules. UI chrome can be faster; editorial stays unhurried. Both stay soft and warm.

---

## Blend Matrix

Mediterranean identity is the constant in every row. The industry column is craft filtered through it.

| Dimension | Tutto passa / Mediterranean (identity) | Industry craft (filtered) |
|-----------|----------------------------------------|---------------------------|
| Color / mood | `descarga.jpg` tokens, lifestyle refs | Aesop restraint in spacing, not apothecary browns |
| Typography | Serif + script + sans from refs | Apple precision, Kinfolk warmth, Monocle labels |
| Navigation | Sparse editorial chrome, warm surfaces | Airbnb discovery, Linear clarity, Stripe CTA hierarchy |
| Editorial layout | Hero overlays, cream cards from refs | Monocle grids, NYT columns, Cereal scale |
| Photography | Teal sea, golden hour, film grain from refs | Leica honesty, candid intimacy |
| Interactions | Unhurried, cinematic baseline | Apple/Linear polish on UI chrome only |
| Spacing / rhythm | Generous negative space, sea/sky breathing room | Aesop margins, Apple optical spacing |

---

## Component → Reference Mapping

| Component type | Primary reference | Secondary reference |
|----------------|-------------------|---------------------|
| Color tokens / swatches | `descarga.jpg` | — |
| Card / grid layout | `descarga.jpg` | `envanto1-o.avif` |
| Pill CTA button | `descarga.jpg` | — |
| Editorial hero banner | `descarga (1).jpg` | `envanto1-o.avif` |
| Mobile splash / brand hero | `descarga (2).jpg` | `envanto1-o.avif` |
| Symmetrical poster section | `envanto1-o.avif` | `descarga (1).jpg` |
| Corner utility labels | `descarga (1).jpg` | `envanto1-o.avif` |
| Oval badge / stamp logo | `envanto1-o.avif` | — |
| Stripe accent module | Mediterranean photo | `descarga.jpg` (yellow token) |
| Lifestyle photography | Mediterranean photo | `cinque terre.jpg` |
| Atmospheric background | `cinque terre.jpg` | Mediterranean photo |
| Asymmetric layout | `cinque terre.jpg` | — |
| Module cluster (grouped items) | Mediterranean photo | `descarga.jpg` |
| Decorative text framing | `envanto1-o.avif` | — |
| Film grain / photo treatment | `descarga (1).jpg` | All lifestyle photos |
| Long-form article | `descarga (1).jpg` | NYT columns + Kinfolk pacing |
| Feature story / cover | `descarga (1).jpg` | Cereal scale + whitespace |
| Product/detail page | `descarga.jpg` | Aesop margins + Monocle rhythm |
| Section index / magazine grid | `descarga.jpg` | Monocle section rhythm |

---

## Workflow Checklist

Use this before building any new component:

```
1. Identify component type (hero, card, nav, section, CTA, etc.)
2. Map to primary reference from the table above
3. Pull color, type, and spacing tokens from descarga.jpg
4. Pull layout and composition from the primary reference
5. Pull mood and photography rules from lifestyle refs if imagery-heavy
6. Apply industry craft from Blend Matrix for structure and precision
7. Verify: one accent color, correct type pairing, generous spacing, warm surfaces
8. Run Mediterranean filter — reject if vibe drifts cold, corporate, or generic SaaS
9. Only deviate from these principles with explicit justification
```

---

## Do / Don't

### Do

- Keep every surface warm (cream, sage, sea blue) regardless of borrowed nav or layout patterns
- Use industry references for precision, clarity, and structure only
- Use the three-role typography system (display serif + script + utility sans)
- Maintain generous margins and negative space
- Place hero text over calm background areas (sky, water, cream cards)
- Use one warm accent color per view
- Apply film grain and warm grading to photography
- Use pill-shaped buttons with optional arrow icon
- Use faster motion for UI chrome, slower for editorial — both stay soft and warm
- Match spacing to the 4px scale
- Run the Mediterranean filter before shipping

### Don't

- Copy any reference layout pixel-for-pixel
- Let Linear/Stripe/Airbnb aesthetics override Mediterranean color and photo treatment
- Drop the script serif pairing or film-grain photography in favor of "clean" tech minimalism
- Imitate one hospitality brand wholesale
- Invent new type families or color tokens without justification
- Use pure black (`#000`) for text — use deep blue or navy
- Place text over busy photographic foregrounds
- Stack multiple competing accent colors in one view
- Use bounce, spring, or over-animated marketing theatrics
- Default to generic SaaS styling (zinc grays, tight spacing, Geist-only typography)
- Add dense navigation bars to editorial or splash views
- Use dark mode as the primary experience — this system is warm and sun-lit

---

## Aesthetic Summary

**Tutto passa. Mediterranean summer.** French Riviera and coastal Italy. Vintage editorial, not corporate SaaS. Sun-drenched, relaxed, cinematic.

The `references/` folder defines how this feels visually — elegant typography, generous space, warm grainy photography, a single bold accent on restrained cream and sage. Cross-industry craft (Apple, Monocle, Linear, and others) makes the site precise and well-built, but should be invisible. Visitors feel coastal summer, not a tech product or hotel chain.

Photography carries the saturation. UI stays quiet on cream and sage. Type does the talking. It feels like tutto passa — coastal, warm, editorial. The craft is felt, not seen.

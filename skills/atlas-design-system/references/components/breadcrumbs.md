# Breadcrumbs
Shows the current page's location within a hierarchy, and lets a user jump back to any level above it — every link here really navigates.
Every item but the last is a real link — click Home or Components below and you'll actually navigate there.
 [aria-label: Breadcrumb] 
- Home
- Components
- Button
 [aria-label: Breadcrumb] 
- Home
- Components
- Button
## Anatomy
- 1
Icon — optional, usually only on the first (root) item.
- 2
Item link — a real link back to that level.
- 3
Divider — a decorative chevron separating each level.
- 4
Current page — the last item; bold, unlinked, aria-current="page".
A single crumb across Default, Hover and Active — then real trails at a few common depths.
DefaultHoverActive
 [aria-label: Breadcrumb] 
- Home [aria-label: Breadcrumb] 
- Home
Trail depth
 [aria-label: Breadcrumb] 
- Home
- Components2 levels
 [aria-label: Breadcrumb] 
- Home
- Components
- Button3 levels
 [aria-label: Breadcrumb] 
- Home
- Components
- Button
- Variants & states4 levels
## Usage guidelines
### Do
- Use Breadcrumbs for content that lives inside a real hierarchy — a category tree, nested settings, a multi-step location.
- Make every item except the current page a real link back to that level.
- Keep labels short — the actual page title, not a description of it.
- Let the last item stay unlinked and visually distinct — it's where the user already is.
### Don't
- Don't use Breadcrumbs as a substitute for a Back button when there's no real hierarchy underneath it.
- Don't make the current page a clickable link to itself.
- Don't cram in every ancestor on a deep tree; collapse the middle if the trail gets long.
- Don't rely on Breadcrumbs as the only way to navigate up — keep primary navigation available too.
## Accessibility
- The trail sits in a <nav aria-label="Breadcrumb">, so assistive tech can jump straight to it and announce what it is.
- The current page gets aria-current="page" on a plain <span> — never a link to itself.
- Every other item is a real <Link>, reachable and operable from the keyboard alone, with a visible focus ring.
- Dividers are decorative chevrons (aria-hidden) — they don't get read out between every item.
- An icon-only crumb (like a Home icon with no visible label) keeps its label for assistive tech via a visually-hidden span, not just an icon with no name at all.
Pass items in order from the root down — the last one renders as the unlinked current page automatically.

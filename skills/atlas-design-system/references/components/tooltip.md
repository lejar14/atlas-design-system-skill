# Tooltip
A short, contextual overlay shown on hover or focus — with dark and light styles, four placements, and a real arrow pointing back at what it explains.
Tooltip adds a small piece of supplementary context next to a control — triggered by hovering or focusing it, and positioned with a direction vector so its arrow always points back at the trigger.
## Anatomy
- 1
Trigger — any focusable element; hovering or focusing it opens the tooltip.
- 2
Icon — optional, reinforces what the tooltip is about at a glance.
- 3
Title & description — a bold title, optionally followed by one line of supporting copy.
- 4
Arrow — a small vector that always points back at the trigger, regardless of which side the bubble opened on.
Dark and light styles, each with rich content (icon, title, description) or a plain single-line label.
ThemeIcon + title + descriptionLabel only
Dark
Sync complete
All changes were saved 2 minutes ago.
Edit configurations
Light
Sync complete
All changes were saved 2 minutes ago.
Edit configurations
#### Directions and arrows
All four placements point correctly back at their trigger — held open here for reference; the same real, floating-ui-positioned content is what actually opens on hover.
## Usage guidelines
### Do
- Use Tooltip to add a short hint for an icon-only button or a truncated label — not to hide information a user needs to complete a task.
- Keep the content to one line, or a title plus one line of description — a tooltip is a hint, not a place for documentation.
- Pick a side (top, right, bottom, left) that keeps the bubble fully on screen and its arrow pointed at the trigger.
- Let it open on both hover and keyboard focus — that's the default behavior, don't design it away.
### Don't
- Don't put interactive content — links, buttons, form fields — inside a tooltip; it isn't reachable once the trigger loses focus.
- Don't attach a tooltip to a disabled element; a disabled control receives no hover or focus events, so the hint never appears.
- Don't use Tooltip as the only way to reveal essential information — pair it with visible text wherever you can.
- Don't show more than one tooltip open at a time; keep exactly one hovered or focused target active.
## Accessibility
- Opens on both mouse hover and keyboard focus, so keyboard-only users see the same content sighted mouse users do.
- The trigger automatically gets aria-describedby pointing at the tooltip's id — no manual ARIA wiring needed.
- Escape closes an open tooltip without moving focus away from its trigger.
- Content is intentionally non-interactive (the WAI-ARIA tooltip pattern) — it disappears as soon as hover or focus leaves the trigger.
- A short delayDuration on TooltipProvider avoids tooltips flashing open while a pointer just passes over the trigger.
Wrap your app (or just the section that needs it) in TooltipProvider once — every Tooltip inside shares its delayDuration.

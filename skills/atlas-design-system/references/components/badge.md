# Badge
A small, purely informational label for a count or a status — like the number of items in a cart, or whether something is featured, in seven colors and three styles.
Badge displays information, it doesn't collect it — a count that updates as state changes elsewhere, or a status dot next to a label.
#### Count badge
A real cart count — the badge tracks state, and disappears at zero.
#### Status dot
A minimal presence indicator sitting next to its own label.
## Anatomy
- 1
Icon — optional, reinforces what the badge is about.
- 2
Label — a short word or a number; never a sentence.
- 3
Shape — always a plain, non-interactive pill — no hover or focus state of its own.
Every color (Neutral, Brand-primary, Brand-secondary, Info, Success, Warning, Danger) in three styles (Fill, Outline, Light), across three sizes.
StateLargeMediumSmall
Neutral / FillBadgeBadgeBadge
Neutral / OutlineBadgeBadgeBadge
Neutral / LightBadgeBadgeBadge
Brand-primary / FillBadgeBadgeBadge
Brand-primary / OutlineBadgeBadgeBadge
Brand-primary / LightBadgeBadgeBadge
Brand-secondary / FillBadgeBadgeBadge
Brand-secondary / OutlineBadgeBadgeBadge
Brand-secondary / LightBadgeBadgeBadge
Info / FillBadgeBadgeBadge
Info / OutlineBadgeBadgeBadge
Info / LightBadgeBadgeBadge
Success / FillBadgeBadgeBadge
Success / OutlineBadgeBadgeBadge
Success / LightBadgeBadgeBadge
Warning / FillBadgeBadgeBadge
Warning / OutlineBadgeBadgeBadge
Warning / LightBadgeBadgeBadge
Danger / FillBadgeBadgeBadge
Danger / OutlineBadgeBadgeBadge
Danger / LightBadgeBadgeBadge
## Usage guidelines
### Do
- Use Fill for a count or status that needs to win the eye immediately — a cart count, an unread total.
- Use Outline or Light when several badges sit close together and a row of solid-fill pills would compete for attention.
- Use dot for presence or an unread hint next to something that already has its own label — a name, a nav item.
- Keep the label to a number or a word or two; anything longer belongs in the element it's attached to.
### Don't
- Don't use Badge as a button — it's purely informational and never manages its own click or selection state.
- Don't use Danger for anything that isn't actually urgent; reserve it so it still means something when it appears.
- Don't hide a count entirely inside color — pair it with a number or label wherever the value itself matters.
- Don't stack more than one badge on the same corner of an element; combine them into one instead.
## Accessibility
- Badge renders as a plain <span> — it carries no interactive role, so it never steals a tab stop or a click.
- A dot badge gets role="status" and an aria-label from its children, so "Online" is still announced even though only a colored dot is visible.
- Color is never the only signal: every variant pairs its color with a label or a count, not a bare tint.
- When a badge sits on top of another control (like the cart icon here), the count reads out as part of that control's own accessible name — attach your own aria-label to the control, not the badge.
Badge is a plain, stateless span — position it yourself with a wrapper like the cart icon here, or drop it inline next to a label.

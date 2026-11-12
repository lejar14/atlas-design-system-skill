# Chips
Compact, interact-able elements used to categorize, select, or filter content — as a toggleable filter, or a removable tag, in five colors and two styles.
Chip covers two real interactions: a selectable filter you tap on and off, and a removable tag with its own delete button.
#### Selectable filter
A real toggle — click a category to add or remove it.
#### Removable tag
Click the × to actually remove a tag from the list below.
## Anatomy
- 1
Icon— optional, hints at the chip's category.
- 2
Label — one or two words, never a full sentence.
- 3
Fill — Fill commits selection to a solid color; Outline keeps it a bold border instead.
Every color (Neutral, Primary, Success, Warning, Danger) in both styles (Fill, Outline), across three sizes and Default, Selected and Focused.
## Usage guidelines
### Do
- Use Fill for a chip whose selected state should stand out at a glance — a small set of filters someone scans quickly.
- Use Outline when several chips sit near other filled UI and a solid selected state would compete for attention.
- Keep labels to a word or two; a chip is a label; it isn't a place for a sentence.
- Use onRemove for a value the user added themselves (a tag, a file, a search term) — not for a filter they're just toggling.
### Don't
- Don't use Chip for a single yes/no choice — that's what Switch or Checkbox is for.
- Don't mix selectable and removable chips in the same group; pick one interaction per group.
- Don't rely on Chip color alone to carry meaning that isn't restated in its label.
- Don't cram more chips into a row than can wrap cleanly — group or paginate a long list instead.
## Accessibility
- A selectable chip renders as a real <button aria-pressed>, so assistive tech announces its selected state the same way a toggle button's would.
- A removable chip's delete control is its own real, labeled button (aria-label="Remove {label}") — a <button> can't nest inside another <button>, so the chip itself is a plain, non-interactive label in this mode.
- The focus ring is always the same color regardless of the chip's own color — one consistent "you're here" signal across every chip on the page.
- disabled sets the native disabled attribute, removing that chip from the tab order and announcing it as unavailable.
- Every color's text meets WCAG AA contrast against its own background, unselected and selected alike.
Selectable chip — controlled selection, toggled by a real click or Space/Enter.
Removable chip — pass onRemove and the chip renders its own delete button instead of being a toggle itself.

# Radio Button
Pick exactly one option from a mutually exclusive set — with Primary, Danger and Neutral colors, two sizes, and real keyboard-navigable groups.
Radio Button shows every option at once and lets a user pick exactly one — group several together by giving them the same `name`.
## Anatomy
- 1
Circle — the toggle itself. A filled dot in the color of the group shows the selected option.
- 2
Label — a real `<label>`, so clicking the text selects the option too.
- 3
Helper text — optional supporting copy below the label.
Every color (Primary, Danger, Neutral, Disable) at both sizes, across Unselected, Checked and their Focused equivalents.
StateUnselectedCheckedUnselected - FocusedChecked - Focused
[state demo omitted: Primary / Medium / Primary / Small / Danger / Medium / Danger / Small / Neutral / Medium / Neutral / Small / Disable / Medium / Disable / Small]
## Usage guidelines
### Do
- Use Radio Button when exactly one option must be picked from a visible, short list.
- Give every radio in a group the same name attribute — that's what makes them mutually exclusive.
- Pre-select a sensible default; don't leave a required radio group empty.
- Show every option at once when there are roughly 2–5 of them — that's the whole point over a Dropdown.
### Don't
- Don't use Radio Button for an independent on/off choice — that's what Checkbox is for.
- Don't use it for a long list of options; switch to a Dropdown once scanning gets tedious.
- Don't let two different groups on the same screen accidentally share a name attribute.
- Don't rely on color alone to explain a Danger option — pair it with helperText.
## Accessibility
- Renders a native <input type="radio">, so arrow keys move selection within a group and Tab moves between groups — all for free from the browser.
- The label is a real <label htmlFor>, so clicking the text selects the option too, not just the small circle.
- Radios sharing a name are grouped automatically for assistive tech — no extra ARIA wiring needed on your part.
- Focus is shown with a visible ring (focus-visible) — present for keyboard/assistive navigation, absent for a mouse click.
- disabled sets the native disabled attribute, removing that option from the tab order and announcing it as unavailable.
Radio Button is controlled like any native radio input — share a name across the group and drive checked from your own state.

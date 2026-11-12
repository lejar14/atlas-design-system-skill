# Checkbox
Toggle one or more options in a list, independent of the others — with Primary, Danger and Neutral colors, two sizes, and a real indeterminate state.
Checkbox lets a user select any number of independent options — one on its own with a helper message, or grouped together as a list.
#### Grouped options
Independent choices in a single list — each one keeps its own checked state.
## Anatomy
- 1
Box — the toggle itself. Color communicates emphasis; a check or dash icon shows checked vs. indeterminate.
- 2
Label — a real `<label>`, so clicking the text toggles the box too.
- 3
Helper text — optional supporting copy below the label; both are optional on their own.
Every color (Primary, Danger, Neutral, Disabled) at both sizes, across Unselected, Checked, Indeterminate and Focused.
StateUnselectedCheckedIndeterminateFocused
[state demo omitted: Primary / Medium / Primary / Small / Danger / Medium / Danger / Small / Neutral / Medium / Neutral / Small / Disabled / Medium / Disabled / Small]
## Usage guidelines
### Do
- Use Checkbox for independent on/off choices, or for selecting multiple items from a list.
- Use the indeterminate state on a "select all" checkbox when only some of its children are checked.
- Reserve the Danger color for a checkbox that gates something serious, like accepting required terms.
- Keep the label short enough to scan in one line; put the detail in helperText.
### Don't
- Don't use Checkbox for a single mutually-exclusive choice — that's what Radio Button is for.
- Don't rely on color alone to show an error; pair Danger with a helperText that explains why.
- Don't make helperText a repeat of the label — it should add information, not restate it.
- Don't use indeterminate as a third selectable state — it's a visual summary, not a value a user can pick.
## Accessibility
- The label is a real <label htmlFor> tied to the field's id, so clicking the label text toggles the checkbox too — not just the small box.
- indeterminate sets the real DOM .indeterminate property, so screen readers announce "partially checked", matching what's on screen.
- Focus is shown with a visible ring (focus-visible) — present for keyboard/assistive navigation, absent for a mouse click.
- disabled sets the native disabled attribute, removing it from the tab order and announcing it as unavailable — it isn't just a dimmed style.
- Every color's checked-state fill meets WCAG AA contrast (4.5:1) for the white checkmark against its 500-shade background.
Checkbox works uncontrolled (defaultChecked) or controlled (checked + onChange) — indeterminate is only meaningful alongside real state.

# Input, Text Area
Single and multi-line text entry with a label, helper text and validation states. Three sizes (sm, md, lg) for Input; Text Area handles the longer-answer case.
Input and Text Area collect free-form text from a user — a single line for short answers, multiple lines once the answer needs room. Both share the same label, helper text and validation states.
Email address
We'll never share your email.
Email address
We'll never share your email.
## Anatomy
- 1
Label — a real `<label>`, with a red asterisk appended when the field is required/errored.
- 2
Field — the bordered container. Its color communicates state: default, focused, error, disabled or read-only.
- 3
Icon (optional) — a leading and/or trailing icon, decorative for screen readers.
- 4
Helper text — format hints by default, switches to an error message (and red) when validation fails.
#### Interactive Form States
Standard state models for text entries, at every size.
[state demo omitted: Default Empty - Large / Default Empty - Medium / Default Empty - Small / Focused State - Large / Focused State - Medium / Focused State - Small / Error Validation - Large* / Error Validation - Medium* / Error Validation - Small* / Filled Entry - Large / Filled Entry - Medium / Filled Entry - Small / Disabled State - Large / Disabled State - Medium / Disabled State - Small / Read-Only Field - Large / Read-Only Field - Medium / Read-Only Field - Small]
#### Multi-Line Text Area
The same states, wrapped around a resizable-height field for longer answers.
[state demo omitted: Default Empty - Textarea / Focused State - Textarea / Error Validation - Textarea* / Filled Entry - Textarea / Disabled State - Textarea / Read-Only Field - Textarea]
## Usage guidelines
### Do
- Always pair a field with a visible label — placeholder text alone isn't an accessible label.
- Use helper text for format hints ("e.g. name@company.com"), and switch it to an error message only once validation fails.
- Mark required fields consistently — this component shows a red asterisk next to the label.
- Prefer Textarea over Input once an answer is realistically longer than one line.
### Don't
- Don't rely on placeholder text as a substitute for a label — it disappears the moment someone starts typing.
- Don't show an error before the user has had a chance to fill the field in.
- Don't use readOnly to prevent editing permanently — that's what disabled is for.
- Don't resize Textarea by dragging; keep row count intentional for the content it holds.
## Accessibility
- The label is a real <label htmlFor> tied to the field's id, so clicking it focuses the input — not just visually associated text.
- Focus is shown with a visible ring (focus-visible) — present for keyboard/assistive navigation, absent for a mouse click.
- error adds a red asterisk to the label and colors the helper text red — pair it with a helperText string that actually explains what's wrong, not just the color change.
- disabled sets the native disabled attribute (removed from the tab order); readOnly keeps the field focusable and selectable but not editable — they announce differently to screen readers, so pick the one that matches reality.
- leadingIcon / trailingIcon render with aria-hidden — decorative only, the accessible name still comes from the label.
Both components accept label, helperText, error, disabled and readOnly — Input additionally takes size, leadingIcon and trailingIcon.

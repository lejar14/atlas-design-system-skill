# Switch
An on/off toggle for a single setting that takes effect immediately — with Neutral, Primary and Status colors, and two sizes.
Switch flips one setting on or off, right away — no separate Save button. Every color here is a real, controlled toggle.
## Anatomy
- 1
Track — the pill; its color communicates on vs off.
- 2
Thumb — the circle that slides between off (left) and on (right).
- 3
Label — a real `<label>`, so clicking the text toggles it too.
- 4
Helper text — optional, says what the setting actually does.
Neutral, Primary and Status at both sizes, each Off and On, across Default, Hover, Focused and Disabled. Off always stays a neutral gray, except Status — its off state is itself worth flagging, so it stays red until switched on.
StateDefaultHoverFocusedDisabled
[state demo omitted: Neutral / Medium / Off / Neutral / Medium / On / Neutral / Small / Off / Neutral / Small / On / Status / Medium / Off / Status / Medium / On / Status / Small / Off / Status / Small / On / Primary / Medium / Off / Primary / Medium / On / Primary / Small / Off / Primary / Small / On]
## Usage guidelines
### Do
- Use Switch for a setting that takes effect immediately — no separate Save step.
- Pair it with a label that names the setting, and helperText that says what turning it on actually does.
- Use the status color only when the off state itself deserves attention — a safety check, a confirmation prompt being skipped.
- Keep the label to a single line; if the setting needs a paragraph of explanation, it belongs in a settings page, not the label.
### Don't
- Don't use Switch for a choice that needs an explicit Save or Apply action — that's what Checkbox in a form is for.
- Don't use Switch for a single mutually-exclusive choice among several options — that's what Radio Button is for.
- Don't rely on the track color alone to explain what's on vs off; the label and helperText should make it unambiguous on their own.
- Don't disable a switch without saying why in the helper text — a disabled control with no explanation just looks broken.
## Accessibility
- Renders as a real <input type="checkbox" role="switch">, so assistive tech announces it as a switch, not a checkbox, while keeping native checked/toggle behavior.
- The label is a real <label htmlFor>, so clicking the text toggles the switch too, not just the small track.
- Space and Enter both toggle it once focused — for free from the browser, no key handler needed.
- Focus is shown with a visible ring (focus-visible) — present for keyboard/assistive navigation, absent for a mouse click.
- disabled sets the native disabled attribute, removing it from the tab order and announcing it as unavailable.
Switch works uncontrolled (defaultChecked) or controlled (checked + onChange) — same as a native checkbox.

# Button
Triggers a single action on click — submits a form, confirms an action, or opens a flow. Five color families (Brand, Neutral, Danger, Warning, Success), three styles (Primary, Secondary, Tertiary) and three sizes (sm, md, lg).
Button triggers a user's primary action in a single click — submitting a form, confirming an action, or opening a flow. Combine a color, a style and a size to fit the emphasis the action needs.
PrimarySecondaryTertiary
Save changes
## Anatomy
- 1
Container — the clickable surface. Color and style (Primary/Secondary/Tertiary) communicate emphasis; radius comes from the `--radius-md` token.
- 2
Label — a short, action-oriented text describing what happens on click.
- 3
Icon (optional) — a leading and/or trailing icon, sized to match the button and marked decorative for screen readers.
Every color family (Brand, Neutral, Danger, Warning, Success) across its available styles, at every size and interaction state.
DefaultHoverPressedFocusedDisabled
[state demo omitted: Brand Primary (Filled) / Large / Button / ButtonMedium / ButtonSmall / Brand Secondary (Outline) / Brand Tertiary (Text) / Danger / Warning / Success / Neutral Primary (Filled) / Neutral Secondary (Outline) / Neutral Tertiary (Text)]
## Usage guidelines
### Do
- Use Brand Primary once per view for the single most important action.
- Keep labels short and action-oriented, e.g. "Save changes" instead of "Submit".
- Pair Secondary or Tertiary buttons alongside a Primary for lower-emphasis actions.
- Reserve Danger, Warning and Success for actions that actually carry that status — not as a general accent color.
### Don't
- Don't use more than one Brand Primary button in the same section.
- Don't use a button for navigation between pages — use a link instead.
- Don't disable a button without explaining why nearby.
- Don't mix a status color (Danger/Warning/Success) into a routine action just to add visual weight.
## Accessibility
- Renders a native <button> element, so it's keyboard-focusable and operable with Enter/Space by default.
- Focus is shown with a visible ring (focus-visible), not on mouse click — it never appears for a pointer interaction, only keyboard/assistive navigation.
- The disabled prop sets the native disabled attribute, which removes the button from the tab order and announces it as unavailable to screen readers.
- leadingIcon / trailingIcon render with aria-hidden — they're decorative, so the accessible name comes from the button's visible label alone.
- Every color family's Primary (filled) text meets WCAG AA contrast (4.5:1) for white text against its 500-shade background.
Import the component and pass a color, variant and size — all three are optional and default to brand / primary / md.

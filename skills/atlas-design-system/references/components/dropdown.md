# Dropdown
A menu of options that appears when clicking a trigger, without taking up permanent screen space — with a header label, a separator, and Default, Selected and Danger item states.
Dropdown lets a user pick one action or option from a list that stays hidden until they open it — click the trigger below to see it in action.
Options
Header Text
Menu item
## Anatomy
- 1
Trigger — any element (usually a Button) that opens the menu on click.
- 2
Header — an optional uppercase label grouping the items below it, followed by a separator.
- 3
Item — one option. Default, Selected (active) or Danger, each with an optional leading/trailing icon.
The four item states side by side — Default, Hover, Selected (the current item, in Brand color) and Danger (destructive actions).
Header Text
Menu item
## Usage guidelines
### Do
- Use a Dropdown when there are too many options for a Radio group, or the options are secondary to the main task.
- Group related items with a Header label and a Separator, the same way this spec sheet does.
- Reserve the Danger style for a genuinely destructive action, like "Delete" — not to draw attention.
- Close the menu on selection, and return focus to the trigger.
### Don't
- Don't bury the single most likely action at the bottom of a long list — put it first.
- Don't use a Dropdown for fewer than ~4 mutually exclusive options; a Radio group is easier to scan.
- Don't mark more than one item active/selected at a time in a single-select menu.
- Don't rely on hover alone to open the menu — clicking the trigger must always work.
## Accessibility
- Built on Radix's DropdownMenu primitive — full keyboard support out of the box: Enter/Space opens it, arrow keys move between items, Esc closes and returns focus to the trigger.
- The trigger exposes aria-expanded and aria-haspopup automatically, so assistive tech announces it as a menu button.
- Each item is exposed as a real menuitem role — a screen reader announces its label and position ("n of m"), not just visible text.
- The highlighted item follows keyboard focus, not just the mouse — data-highlighted responds to both.
- leadingIcon / trailingIcon render with aria-hidden — decorative only, the item's accessible name is still its text.
Wraps Radix's DropdownMenu primitive — any element passed to `asChild` becomes the trigger.

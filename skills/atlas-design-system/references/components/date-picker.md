# Date Picker
Lets a user choose a date, or a date range, by browsing a real calendar — a single month, or two synced months for a range.
Click either field below — both open a real calendar, and picking a date actually fills the field.
#### Single date
One month, one picked day.
#### Date range
Two synced months — pick a start, then an end.
## Anatomy
- 1
Header — the month/year label with prev/next navigation.
- 2
Weekday row — Sunday through Saturday, always in the same order.
- 3
Today — a ring, not a fill; a fill means picked, a ring just means now.
- 4
Selected day — a solid fill; in range mode the two endpoints get this same fill, connected by a lighter bar.
A single month showing today, a selection, and a range — then the same states across two synced months, the shape DateRangePicker uses.
## Usage guidelines
### Do
- Use DatePicker for a single date — a due date, a birthday, an appointment.
- Use DateRangePicker when the value is inherently a span — a booking, a reporting window, a trip.
- Show today with the ring, not a fill — a fill is reserved for what the user actually picked.
- Keep weekends visually distinct (red) so a user scanning for a weekday doesn't have to count columns.
### Don't
- Don't use two separate DatePickers to fake a range — the endpoints can end up in the wrong order and nothing enforces it.
- Don't let the calendar open already scrolled to some other month than the selected date's — it should always open where the user's eye expects it.
- Don't make the input the only way to change the date if you also let people type in it without validating what they typed.
- Don't use a date range for something that's really just two independent dates with no relationship (use two DatePickers instead).
## Accessibility
- The trigger is a real button; the calendar opens in a real Radix Popover, so Escape closes it and focus returns to the trigger.
- Every day is a real, focusable <button> — Tab moves through the visible month in document order, Space/Enter picks the focused day.
- Each day's accessible name is its full date (aria-label), not just the bare number — a screen reader hears "Sun Jan 18 2026", not "18".
- Today gets aria-current="date"; a picked day (or a range's endpoints) gets aria-pressed="true".
- Days outside the shown month are real disabled buttons, not just dimmed text — they're skipped when tabbing through and can't be activated by accident.
DatePicker works uncontrolled (defaultValue) or controlled (value + onChange).
DateRangePicker takes two clicks — the first sets the start, the second completes it (in either order; it sorts itself out).

# Progress
Shows how much of a measurable task — a download, an install, an upload — has actually completed, in Neutral, Info and Danger.
Click below to run a real download — the bar genuinely advances over time, not a fixed percentage.
## Anatomy
- 1
Label— names the task that's in progress.
- 2
Percentage — the real, measured value, rounded to a whole number.
- 3
Track & fill — a light background bar, and a solid fill sized to the value.
- 4
Helper text — optional status detail below the bar.
Every color (Neutral, Info, Danger) across the full 0–100% range.
[state demo omitted: Neutral / % / Info / Danger]
## Usage guidelines
### Do
- Use Progress only when you can actually measure completion — a byte count, a step number, a known duration.
- Update the value as often as real progress happens; a bar that jumps from 10% to 100% reads as broken, not fast.
- Pair it with a label that names the task, and helperText for status detail ("Uploading…", "3 of 8 files").
- Reserve Danger for a progress bar reporting something going wrong (a failing upload), not for ordinary progress.
### Don't
- Don't use Progress when you don't know how long something will take — that's what Spinner is for.
- Don't let the value move backward except to reflect a real retry or reset; it reads as a glitch otherwise.
- Don't rely on color alone to say a task failed — pair Danger with helper text that says what happened.
- Don't animate the fill faster than the real work completes — a bar that lies about progress erodes trust fast.
## Accessibility
- Renders with role="progressbar" and aria-valuenow/min/max, so assistive tech reports the real percentage, not just a visual bar.
- When a visible label is given, the bar is linked to it with aria-labelledby; without one, it falls back to an aria-label like "42%".
- The fill's width transitions smoothly (CSS, not JS), so a screen reader isn't spammed with rapid value-change announcements.
- Color is never the only signal — Progress always renders next to a visible percentage or a label describing the task.
Progress is fully controlled — drive value from wherever the real progress comes from (a fetch's progress event, a timer, a step count).

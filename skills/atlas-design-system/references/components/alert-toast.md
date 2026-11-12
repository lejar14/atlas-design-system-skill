# Alert & Toast
Contextual messages for system information, failures, and instructions — as an Alert that stays put inline, or a Toast that floats in, reports, and clears itself.
Alert and Toast share the same anatomy and the same five colors — the difference is where they live. Alert sits inline in the page and stays until dismissed; Toast floats over everything in the corner of the screen and clears itself after a few seconds.
#### Alert
A precise, contextual message that attracts attention without interrupting the task.
#### Toast
A short, automated message reporting the result of something the user just did.
## Anatomy
- 1
Icon— shape carries the color's meaning, not just its tint.
- 2
Title — one short line stating what happened.
- 3
Close — always present, always keyboard-reachable, dismisses the message.
- 4
Description — optional supporting detail below the title.
- 5
Action — optional; sits below the description in the stacked layout shown here, or beside Close in the inline layout.
Every color (Neutral, Info, Success, Warning, Danger) in both layouts — stacked, the shape Alert defaults to, and inline, the compact shape Toast borrows for its floating viewport. Either component can use either layout.
Stacked (Alert)Inline (Toast-style)
The database cluster is migrating storage engines. Some read operations might see brief, intermittent latency spikes over the next 15 minutes.The database cluster is migrating storage engines. Some read operations might see brief, intermittent latency spikes over the next 15 minutes.
A new version of the application is available. Refresh to get the latest features and bug fixes.A new version of the application is available. Refresh to get the latest features and bug fixes.
Your latest changes are live in production. It may take a minute to reach every edge region.Your latest changes are live in production. It may take a minute to reach every edge region.
Your primary subdomain certificate is scheduled to expire in 3 days. Renew now to avoid any secure transport interruptions.Your primary subdomain certificate is scheduled to expire in 3 days. Renew now to avoid any secure transport interruptions.
A fatal error occurred during the build step. Review the compilation logs for the exact stack trace before retrying.A fatal error occurred during the build step. Review the compilation logs for the exact stack trace before retrying.
## Usage guidelines
### Do
- Use Alert for a message tied to a specific spot on the page — it stays until the user dismisses it or the condition it describes changes.
- Use Toast for a short, automated message that results from something the user just did — it appears, then clears itself.
- Keep the title short enough to scan in one line; put the rest in the description.
- Reserve Danger for something that actually failed or blocks progress — reserve Warning for something that will, if ignored.
### Don't
- Don't use Toast for anything the user must act on or might need to find again later — it disappears on its own.
- Don't stack more than a couple of Toasts at once; queue or group them instead of flooding the corner of the screen.
- Don't use Alert for routine, expected confirmations — that's what Toast is for.
- Don't rely on color alone to carry the severity — pair it with a clear title, the way every color here gets its own icon shape.
## Accessibility
- Alert renders with role="alert", so assistive tech announces it as soon as it appears — no extra ARIA wiring needed.
- Toast is built on Radix's Toast primitive: its live region announces new toasts politely, without interrupting whatever the user is doing.
- Hovering or focusing an open toast pauses its auto-dismiss timer; it resumes counting down once the pointer or focus leaves.
- Pressing F8 moves focus straight to the toast viewport — useful for keyboard users who'd otherwise have to tab past everything else to reach it.
- Both close buttons are real, labeled buttons (aria-label="Dismiss"), reachable and operable from the keyboard alone.
Alert is self-contained — it manages its own dismissed state internally and just needs a title.
Toast needs one <Toaster> mounted above wherever you call useToast() — it owns the queue and floats the viewport for you.

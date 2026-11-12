# Spinner
An indeterminate loading indicator for a wait with no known length — five sizes, three colors, animated with real CSS rotation.
Both examples below run a real, timed wait — click either and watch the spinner actually spin while it happens.
#### Inside a button
A small spinner replaces the label while the action runs.
#### Section loading
A larger spinner stands in for content that isn't ready yet.
 [aria-label: Loading] 
## Anatomy
- 1
Arc — a partial ring, not a full circle; the gap is what makes rotation readable.
- 2
Rotation — a continuous CSS animation; it never starts, stops, or eases — just spins.
- 3
Color— Neutral by default; Info or Danger to match the context it's loading into.
Every color (Neutral, Info, Danger) across all five sizes — every one of these is really spinning right now.
ColorXSSMMDLGXL
Neutral [aria-label: Loading] [aria-label: Loading] [aria-label: Loading] [aria-label: Loading] [aria-label: Loading] 
Info [aria-label: Loading] [aria-label: Loading] [aria-label: Loading] [aria-label: Loading] [aria-label: Loading] 
Danger [aria-label: Loading] [aria-label: Loading] [aria-label: Loading] [aria-label: Loading] [aria-label: Loading] 
## Usage guidelines
### Do
- Use Spinner when you can't measure completion — an unknown-length request, a page that's still loading.
- Match its size to what it's replacing: small inside a button, larger for a whole section or page.
- Pair it with a visually-hidden or nearby label so a screen reader announces what's actually loading.
- Swap it back out for real content (or an error) the moment the wait ends — it should never spin forever.
### Don't
- Don't use Spinner when you do know how much is left — that's what Progress is for.
- Don't show more than one spinner for the same wait; one clear indicator beats several competing ones.
- Don't rely on Danger's color alone to say something failed — a spinner's color is about context, not an error message.
- Don't block an entire page behind a spinner for a wait that only affects one small part of it.
## Accessibility
- Renders with role="status", an implicit live region — assistive tech announces the label when it appears.
- label names what's actually loading ("Loading results"), not just "Loading" — pass one whenever the context isn't obvious.
- The SVG arc itself is aria-hidden; the accessible name comes from the wrapper's label, so it's announced once, not twice.
- Rotation is a pure CSS animation, so it keeps running smoothly even during heavy JavaScript work elsewhere on the page.
Spinner has no state of its own — show it while your own loading flag is true, and swap it back out the moment the wait resolves.

# Uploader
Lets a user select and transfer files by dragging them in or clicking to browse — with a real size limit, real per-file progress, and real errors.
Drag a file onto the box below, or click it to browse — files over 1 MB are rejected with a real error; everything else actually "uploads" with live progress.
## Anatomy
- 1
Icon — an upload glyph that recolors when a file is dragged over it.
- 2
Instruction — states both ways in: drag, or click.
- 3
Constraint — the real size limit, stated before anyone hits it.
- 4
File list — appears once a file is added, with progress, a done state, or an error.
Default, Active (a real file dragged over it, forced here for reference) and Disabled.
Default
Active (dragging a file over it)
Disabled
## Usage guidelines
### Do
- State the size limit up front in the dropzone itself, not just after someone hits it.
- Accept both a real drag-and-drop and a plain click — some users will always prefer the file browser.
- Show real per-file progress and a clear done/error state once a file is added — don't leave people guessing.
- Let a file be removed after it's added, whether it's still uploading, done, or failed.
### Don't
- Don't silently reject an oversized file — say what the limit is and which file broke it.
- Don't make the whole page a drop target if only one section should accept files; it invites accidental drops.
- Don't reuse Uploader for a single required attachment with no size or type constraints worth stating — a plain file input is enough there.
- Don't restart every file's progress from zero if only one of several fails; let the others keep going.
## Accessibility
- The dropzone is a real <label> wrapping a native <input type="file">, so it's reachable and operable from the keyboard alone — Tab, then Enter or Space opens the file browser.
- The file input stays in the DOM (visually hidden, not display:none), so it's still announced and focusable for assistive tech.
- The file list is an aria-live region, so a screen reader hears a file get added, finish, or fail without needing to poll the page.
- Each file's remove control has its own accessible name ("Remove {filename}"), not just a bare icon button.
- Drag-and-drop is an addition, never the only path — every capability it offers is also reachable by clicking and using the keyboard.
Uploader manages its own file list, drag state and simulated progress internally — drop it in and it works.

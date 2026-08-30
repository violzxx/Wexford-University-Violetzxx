WEXFORD SITE — dark academia pass

WHAT CHANGED
- New color palette: deep espresso/oxblood/antique gold instead of plain navy — proper dark academia, not just "dark mode navy"
- Real serif typography: Playfair Display (headings) + EB Garamond / Cormorant Garamond (body), loaded from Google Fonts
- Subtle paper-grain texture overlay across the whole site
- Photos get a soft sepia/contrast filter so mismatched source photos still feel like one cohesive world
- Dark mode is now the default (light = "reading room" parchment mode), toggle still saves your choice
- If ANY image fails to load, it just quietly disappears instead of showing a broken-image icon — the tile keeps its dark background so nothing looks broken
- Fixed responsive breakpoints for small phones (iPhone SE width and up) — nav, stats, mosaics, and the objects grid all reflow properly instead of just stacking to 1 column too early or too late

WHY YOUR IMAGES WEREN'T LOADING
The code and file paths are correct — I tested every image locally and they all load fine.
This is almost always caused by the folder structure getting flattened when uploading somewhere
(e.g. only index.html gets uploaded, or files get dropped into one flat folder).

The site is plain HTML/CSS/JS split across multiple files with an assets/ folder — it needs the
WHOLE folder uploaded as-is, keeping assets/images/ and assets/images/people/ nested exactly
as they are in this zip. If your host only accepts a single file, this structure won't work there
and you'd need a host that supports folders (GitHub Pages, Netlify, Vercel, or just opening
index.html locally all work fine).

EVERYTHING ELSE (unchanged)
- Student Newspaper, Orchestra, Art Society, Athletics clubs
- Wallace Lockwood portrait live; rest of faculty/staff use auto portrait slots (see ADD-PEOPLE-PHOTOS.txt)
- Gabriel letter / D-grade, Rupert chocolate note, Lester book teaser, Chase phone message easter eggs
- No Bell Society easter egg

Open index.html directly to preview. For hosting, upload the whole folder, assets/ included.

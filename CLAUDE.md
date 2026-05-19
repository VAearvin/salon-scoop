# Salon Scoop — Project Context for Claude

The internal monthly newsletter site for **Ensemble Salon** and **22 Changes Salon & Spa**.
Live at <https://salon-scoop.vercel.app>.

> If the user asks you to update the newsletter, add new month's content, change a section, or anything content-related: **read `.claude/skills/update-newsletter/SKILL.md` first**, then follow it. That skill is the source of truth for the monthly workflow.

---

## Architecture in one sentence

A plain static site (HTML + CSS + vanilla JS) where **all monthly content lives in `content/current.js`** and the design code never changes month-to-month.

```
salon-scoop/
├── index.html              # page shell — DON'T edit for content
├── styles.css              # design — DON'T edit for content
├── script.js               # rendering — DON'T edit for content
├── content/
│   ├── current.js          # ← THE ONLY FILE TO EDIT EACH MONTH
│   └── archive/            # past months (YYYY-MM.js)
├── assets/images/          # all images
└── .claude/skills/
    └── update-newsletter/  # full skill — read SKILL.md when updating
```

---

## The One Rule

**For monthly content updates, only edit `content/current.js`.** Never touch `index.html`, `styles.css`, or `script.js` unless the user explicitly asks for a *design* change (color, layout, animation, new section type).

If you do need to touch a design file:
1. Read the file first with the Read tool
2. Make the smallest possible change
3. **Bump the cache version in `index.html`** (`?v=N` → `?v=N+1` on all three references)
4. Preview before committing

---

## Tech & deployment

- **No build step.** Vercel serves the files as-is.
- **Deployment**: every `git push` to `main` triggers an automatic Vercel deploy (~30 seconds).
- **Local preview**: use the `salon-scoop` server already configured in `.claude/launch.json` (port 8123).
- **Cache busting**: `index.html` has `?v=N` query strings on the CSS/JS/content includes. Bump these whenever the user needs to see fresh styles or behavior on the live site, or they'll see cached old versions.

---

## Conventions

- **Site content is English-only.** Chat with the user can be Taglish; site copy and image filenames are English.
- **Image naming**: lowercase, hyphens, descriptive — e.g. `champion-sam.jpg`, `birthday-darren.jpg`, `promo-salon-1.jpg`.
- **Face visibility**: champion + birthday photos crop top-anchored, so faces **must be in the top half** of the source image. See `.claude/skills/update-newsletter/image-guide.md`.
- **Empty sections degrade gracefully**: an empty array shows a "coming soon" empty state. Don't fabricate content to fill space.
- **Section toggles**: some sections have an `active: true/false` flag in `current.js` to hide them when not in use (currently the referral contest).

---

## When in doubt

- **Updating monthly content?** → `.claude/skills/update-newsletter/SKILL.md`
- **Field reference for `current.js`?** → `.claude/skills/update-newsletter/content-reference.md`
- **Image specs / cropping rules?** → `.claude/skills/update-newsletter/image-guide.md`
- **Step-by-step monthly cycle?** → `.claude/skills/update-newsletter/monthly-checklist.md`
- **Something's broken?** → `.claude/skills/update-newsletter/troubleshooting.md`
- **Icon options?** → `.claude/skills/update-newsletter/icons.md`

Each of those files is short and focused — read the one relevant to the task at hand.

---

## Communication style

- The owner (Earvin) and the VA may write in **Taglish** (Tagalog + English mixed). That's fine — respond clearly, but keep all site-facing content English.
- Earvin is the salon owner, not a developer. Don't dump implementation details on him unless he asks. Show results, screenshots, before/after.
- A new VA will likely be less technical than Earvin. Walk them through the workflow patiently, ask one section at a time when collecting monthly content, and verify with previews before committing.

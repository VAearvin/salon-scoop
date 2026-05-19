---
name: update-newsletter
description: Use when updating the Salon Scoop monthly newsletter — adding or editing the month's promotions, birthdays, applause shoutouts, education events, Google review champions, Phorest 5-star recipients, culture rewards points, hero edition label, or any other monthly content. Also use for the monthly archive cycle (rolling current.js into archive/), image preparation, deployment, and troubleshooting. Salon Scoop is the internal monthly newsletter for Ensemble Salon and 22 Changes Salon & Spa, hosted at salon-scoop.vercel.app.
---

# Update Salon Scoop Newsletter

The internal monthly newsletter for **Ensemble Salon** and **22 Changes Salon & Spa**. A new edition is published every month.

This skill walks any maintainer (VA, manager, or owner) through the monthly content cycle without ever touching design code.

---

## The One Rule

**You only edit `content/current.js`.** That single file contains every piece of content the site shows. Do **NOT** touch:

- `index.html` (page structure)
- `styles.css` (design)
- `script.js` (rendering logic)

The only times those design files get touched: cache version bumps (`?v=N`), brand-new section types being added by a developer, or major redesigns. Everything else is content in `content/current.js`.

---

## Project Layout

```
salon-scoop/
├── index.html              # page shell — do not edit
├── styles.css              # design — do not edit
├── script.js               # rendering — do not edit
├── content/
│   ├── current.js          # ← THE ONLY FILE YOU EDIT EACH MONTH
│   └── archive/            # last month's current.js gets moved here
│       └── 2026-04.js      # named YYYY-MM.js (the month it covered)
├── assets/images/          # all images live here
└── .claude/skills/         # this skill folder
```

---

## Monthly Update Workflow

When the user says something like "update the newsletter for June" or "let's do this month's scoop," follow this sequence:

### 1. Archive last month

Before changing anything, preserve the previous month so it can be referenced.

```bash
# If current.js currently covers May 2026, archive it:
cp content/current.js content/archive/2026-05.js
```

Filename format: `YYYY-MM.js` (the month it **covered**, not the month you're working on).

### 2. Update the masthead at the top of `current.js`

```js
month: "June",
year: 2026,
edition: "JUNE 2026 EDITION",
```

### 3. Walk every section with the user

Don't guess content — ask the user for the new month's data section by section, OR read it from whatever they shared (screenshot, spreadsheet, Slack message, doc). The sections, in order:

1. **Hero** — usually no change beyond the edition string above
2. **Monthly Updates** (management projects + company updates)
3. **Promotions** (salon + spa)
4. **Birthday Celebrants**
5. **Staff Referral Contest** (toggle `active: true/false`)
6. **Culture Rewards** (the points list changes monthly; the overview/rules usually don't)
7. **Upcoming Education**
8. **Applause Corner**
9. **Phorest 5-Star Review Recipients**
10. **Google Review Champions** (these reflect the **prior** month — May issue celebrates April's reviewers)

For the exact field reference for each section, read **`content-reference.md`** in this same skill folder.

### 4. Handle images

Every new piece of content that needs an image (new champion photo, new birthday celebrant, new promo banner) needs an image file in `assets/images/` referenced from `current.js`.

For image specs, naming conventions, and the **critical face-visibility rule** for champion photos, read **`image-guide.md`** in this same skill folder.

### 5. Preview locally

```bash
# Use the preview tool already configured in .claude/launch.json
# Server name: salon-scoop, port 8123
```

Then in Claude:
- Use `preview_start` with name `salon-scoop`
- Use `preview_screenshot` to visually check each section
- Use `preview_resize` to test mobile (`preset: mobile`) and desktop (`width: 1920, height: 1080`)

### 6. Bump the cache version

Open `index.html` and increment the `?v=N` query string everywhere it appears (currently `?v=16` — bump to `?v=17`, etc.). This forces browsers to fetch the fresh CSS/JS/content instead of using a stale cached version. **Skip this step and the user will not see your changes on the live site.**

```bash
# Find current cache version:
grep -o "?v=[0-9]*" index.html | head -1
```

There are usually 3 occurrences (CSS, content/current.js, script.js). Bump all of them to the same new number.

### 7. Commit and push

```bash
git add content/current.js content/archive/ assets/images/ index.html
git commit -m "$(cat <<'EOF'
Update Salon Scoop for <Month YYYY>

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
git push
```

Vercel auto-deploys on push — the live site updates within ~30 seconds.

### 8. Verify the live site

After the user reports they've checked the live site:
- If they say it doesn't look right, ask which section + which viewport (mobile/desktop) + share a screenshot
- For caching issues, see **`troubleshooting.md`**

---

## Section Toggles (Hide a Section)

Two sections can be hidden in months when they're not relevant:

### Referral contest
In `current.js`:
```js
referralContest: {
  active: false,   // ← hides the whole section AND its nav link
  // ...other fields can stay; they're ignored when active is false
}
```

### Empty arrays gracefully degrade
Any section whose data array is empty automatically shows a tasteful "coming soon" state — the page never breaks. Examples:
```js
birthdays: [],          // shows "No birthday celebrants listed this month."
applause: [],           // shows "No shoutouts submitted yet this month."
education: [],          // shows "No classes scheduled yet — check back soon."
reviewChampions: [],    // shows "Review champions will be celebrated here soon."
```

---

## Important Rules

### Site content is English-only
Earvin and the user often chat in Taglish (Tagalog + English). **Site content must be English-only.** The newsletter is read by a salon team that primarily speaks English. Never include Tagalog in `current.js`, image names, or commit messages for site-facing content.

### Never edit a champion photo's source folder
Photos for review champions, birthdays, etc. should be copied into `assets/images/` (and resized/cropped if needed). Never reference photos from external folders — the deploy will break because Vercel only has the repo files.

### Always check faces are visible
For champion photos (and any photo where a person is the subject), verify the face is actually visible in the crop. Champion photos use `object-position: center top` in CSS, meaning faces must be in the **top 230px of the 400px square**. If you crop wrong, the card shows the person's chest or hair, not their face. See **`image-guide.md`**.

### Cache busting is mandatory
If you don't bump `?v=N` in `index.html`, your changes will not appear on the live site for users with cached versions. The user will say "it didn't update" and you'll spend 20 minutes confused. **Always bump the cache version when shipping.**

### Don't commit huge raw photos
The `salon-scoop/` root directory currently contains some large brand-session photos (20+ MB each). These are **not** referenced by the site. Don't add more huge photos to the repo. Resize images to ~1200px max width and save as JPEG before committing.

---

## Common Quick Edits

### Add a birthday celebrant
```js
birthdays: [
  { name: "Darren",   date: "May 6",  photo: "assets/images/birthday-darren.jpg" },
  { name: "New Person", date: "May 22", photo: "assets/images/birthday-new-person.jpg" },
],
```
Image: 400×400 square JPEG, face in center, saved as `birthday-firstname.jpg`.

### Add an applause shoutout
```js
applause: [
  { from: "Anonymous", to: "Ghina", message: "Big shoutout to G for ..." },
],
```
No image needed.

### Add a new review to an existing champion
```js
{
  name: "Lacey",
  photo: "assets/images/champion-lacey.jpg",
  reviews: [
    { reviewer: "Kaylee", review: "..." },
    { reviewer: "New Client", review: "Another great review here!" },  // ← added
  ],
},
```

### Toggle a section visible/hidden
Find the section's `active` boolean (currently only `referralContest`). Set `true` to show, `false` to hide.

### Update points for the month
```js
pointsByLocation: {
  ensemble: [
    { name: "Juliana Tarrats", points: 99 },
    // ... sorted descending by points
  ],
  twentyTwoChanges: [
    { name: "Kelleigh Coy-Strange", points: 90 },
    // ... sorted descending
  ],
},
```
Always **sort descending by points** for readability.

---

## When the User Asks for a Design Change

If the user asks for something that **isn't** content — a color tweak, a layout change, moving sections around, a new section type, animation changes — you'll need to edit `styles.css`, `index.html`, or `script.js`. In that case:

1. **Read the file first** with the Read tool (Edit will refuse otherwise)
2. **Make the smallest possible change**
3. **Bump the cache version** in `index.html`
4. **Preview** with the preview tool before committing
5. **Commit with a clear, scoped message**

For complex visual changes (especially backgrounds, parallax, responsive behavior), check **`troubleshooting.md`** first — there's a documented set of gotchas (e.g., the portrait-image-on-landscape-section bug we hit with the applause background).

---

## Reference Files in This Skill

- **`content-reference.md`** — Every field in `current.js`, with examples
- **`image-guide.md`** — Image specs, naming, cropping (especially face visibility)
- **`monthly-checklist.md`** — A printable step-by-step checklist
- **`troubleshooting.md`** — Documented gotchas and their fixes
- **`icons.md`** — Full list of icon keywords available

When you start work for the month, **read all five** so you have the full context. They're short and focused.

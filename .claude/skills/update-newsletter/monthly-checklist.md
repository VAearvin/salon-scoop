# Monthly Checklist

A copy-pasteable, in-order list of everything that happens for a typical monthly update. Use this as a "tick the box" track-along when working with the user.

---

## Before You Start

- [ ] Confirm with the user which month this issue covers
- [ ] Open `content/current.js` and note what's in it (so you know what's being archived)
- [ ] Note the current cache version (`grep "?v=" index.html | head -1`) so you know what to bump to

---

## 1. Archive Previous Month

- [ ] Copy `content/current.js` → `content/archive/<YYYY-MM>.js` (the month it **covered**)
  ```bash
  cp content/current.js content/archive/2026-05.js
  ```
- [ ] Confirm the archive file exists and looks correct

---

## 2. Masthead

Update the top of `content/current.js`:

- [ ] `month: "<NewMonth>"`
- [ ] `year: <YYYY>`
- [ ] `edition: "<MONTH YYYY> EDITION"` (all caps)

---

## 3. Hero

- [ ] Hero `subtitle` — usually stays the same; only update if Earvin has a special framing for the month
- [ ] `backgroundImage` — usually stays the same; only swap if Earvin sent a new seasonal hero photo
- [ ] Logos — should never change unless rebranding

---

## 4. Monthly Updates

Two arrays — ask Earvin for each.

- [ ] **Management Projects**: 1–3 cards covering what management is working on this month
- [ ] **Company Updates**: 1–3 cards covering team news, new hires, schedule changes
- [ ] Pick an appropriate `icon` keyword from `icons.md` for each card

If Earvin says "no updates this month for X," leave that array empty — the section will show a clean "coming soon" state.

---

## 5. Promotions

- [ ] **Salon (hair) promos** — replace the prior month's promos
- [ ] **Spa promos** — replace the prior month's promos
- [ ] Image files dropped into `assets/images/` (1200×675 JPEG)
- [ ] Update `validFrom` / `validTo` dates
- [ ] Mark any "special" promos with `special: true` so they get their own row below
- [ ] If a promo has no good image, use `image: ""` for a text-only card

---

## 6. Birthday Celebrants

- [ ] Get the list of birthdays from Earvin (name + date + photo)
- [ ] Crop each photo to 400×400 with face in the upper third (see `image-guide.md`)
- [ ] Save as `assets/images/birthday-<firstname>.jpg`
- [ ] Add each entry to the `birthdays` array in `current.js`
- [ ] If no birthdays this month, leave the array empty

---

## 7. Staff Referral Contest

- [ ] Ask Earvin: is there a contest running this month?
- [ ] If **NO**: set `referralContest.active = false` (everything else can stay)
- [ ] If **YES**: set `active: true`, fill in `prize`, `deadline`, `howToEnter`

---

## 8. Culture Rewards

- [ ] **Overview / How It Works / Why Participate / Bonus Points / Tip / Prizes** — these rarely change month-to-month. Skip unless Earvin says otherwise.
- [ ] **`pointsByLocation.ensemble`** — get this month's points data, sort **descending by points**
- [ ] **`pointsByLocation.twentyTwoChanges`** — same, sort descending
- [ ] If a name is misspelled vs. last month, ask Earvin which is correct

---

## 9. Upcoming Education

- [ ] Get class details from Earvin (title, date, description, Eventbrite URL)
- [ ] For a normal local class: title + date + description + eventbriteUrl is enough
- [ ] For a big out-of-town event: add `location` and a `highlights` array of bullet points (see `content-reference.md` for the Redken Symposium example)
- [ ] If no classes this month, leave `education: []` empty

---

## 10. Applause Corner

- [ ] Get the list of shoutouts from Earvin
- [ ] Each entry: `from`, `to`, `message`
- [ ] Preserve emoji and curly quotes from the source
- [ ] If no shoutouts, leave `applause: []` empty

---

## 11. Google Review Champions (prior month's reviews)

- [ ] Get the list of Google reviewers + champion photos from Earvin
- [ ] For each champion, list all their reviews under `reviews: [...]`
- [ ] Crop champion photos to 400×400 with face in top half (see `image-guide.md`)
- [ ] Save as `assets/images/champion-<firstname>.jpg`
- [ ] Order: by review count descending (or as Earvin specifies)

---

## 12. Phorest 5-Star Review Recipients (current month)

- [ ] Get the lists of Phorest 5-star recipients for each location
- [ ] Just names — no photos, no review text
- [ ] Alphabetical order within each location is nice
- [ ] If a name appears in both locations, that's fine

---

## 13. Preview Locally

- [ ] Start the dev server: `preview_start name=salon-scoop`
- [ ] Take screenshots of each section: `preview_screenshot`
- [ ] Test on mobile: `preview_resize preset=mobile` then screenshot
- [ ] Test on desktop wide: `preview_resize width=1920 height=1080` then screenshot
- [ ] Open the console and confirm no JS errors: `preview_console_logs`

---

## 14. Bump Cache Version

- [ ] Find current version: `grep "?v=" index.html` (should show 3 hits)
- [ ] Bump all three to the next number in `index.html`

```html
<link rel="stylesheet" href="styles.css?v=17" />
<script src="content/current.js?v=17"></script>
<script src="script.js?v=17"></script>
```

---

## 15. Commit and Push

```bash
git status                    # confirm only intended files changed
git diff content/current.js   # quick sanity review

git add content/current.js \
        content/archive/<YYYY-MM>.js \
        assets/images/ \
        index.html

git commit -m "$(cat <<'EOF'
Update Salon Scoop for <Month YYYY>

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"

git push
```

---

## 16. Verify Deployment

- [ ] Wait ~30 seconds for Vercel to deploy
- [ ] Ask the user to do a hard refresh on https://salon-scoop.vercel.app (Cmd+Shift+R on Mac)
- [ ] If something looks wrong on the live site, see `troubleshooting.md`

---

## After Shipping

- [ ] Note any feedback from Earvin to apply next month
- [ ] If a section needed a design tweak (not content), document the tweak so it's not lost
- [ ] If there's a remaining piece of pending content (e.g., Earvin still needs to send a photo), make a note of it

That's it. The whole cycle should take 30–60 minutes once you have all the content from Earvin.

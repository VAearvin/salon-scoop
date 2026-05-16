# Salon Scoop

The monthly insider newsletter website for **Ensemble Salon** and **22 Changes Salon and Spa**.

A reusable template: the design never changes, only the content. Each month you edit
**one file** — `content/current.js` — drop in new images, commit, and push. Vercel
redeploys automatically.

## Sections

1. **Hero** — month edition badge, title, dual salon logos
2. **Monthly Updates** — Management Projects in Progress + Company Updates
3. **Promotions for Clients** — in-salon offers + retail/product offers
4. **Birthday Celebrants** — photo cards for the month
5. **Staff Referral Contest** — toggle on/off with `referralContest.active`
6. **Culture Rewards & Prizes** — how to earn points, prizes, team leaderboard
7. **Upcoming Education** — class details + Eventbrite registration links
8. **Applause Corner** — staff-to-staff shoutouts
9. **Google Review Champions** — last month's review earners

## Files

| File | What it is | Edit it? |
|------|------------|----------|
| `content/current.js` | This month's content | **Yes — every month** |
| `assets/images/` | Photos (hero, logos, birthdays, promos) | **Yes — add images** |
| `content/archive/` | Past months, kept for reference | Only when archiving |
| `index.html` / `styles.css` / `script.js` | Design + behavior | No |

## Monthly update steps

1. Copy `content/current.js` into `content/archive/` and rename it to the month it
   covered, e.g. `content/archive/2026-05.js`.
2. Open `content/current.js` and update every field for the new month
   (`month`, `year`, `edition`, and all section content).
3. Add new images to `assets/images/` and point to them in `content/current.js`
   (e.g. `"assets/images/birthday-jane.jpg"`).
4. Preview locally (see below), then commit and push:
   ```
   git add .
   git commit -m "May 2026 issue"
   git push
   ```
5. Vercel redeploys automatically — the live URL updates in about a minute.

### Notes
- Any section with an **empty array** shows a tasteful "coming soon" message, so it's
  safe to publish before every section is filled in.
- Set `referralContest.active` to `true` to show the contest section, `false` to show
  the "no contest this month" placeholder.
- Images that fail to load fall back gracefully (initials for people, a placeholder
  label for promos) — the page never breaks.

## Preview locally

From this folder:
```
python3 -m http.server 8000
```
Then open <http://localhost:8000>. (Open via a server, not by double-clicking the file,
so the content script loads correctly.)

## Deployment

Hosted on **Vercel**, connected to this **GitHub** repo. It is a plain static site —
no build step. Vercel serves the files as-is; `vercel.json` just enables clean URLs.
Every push to the main branch triggers a redeploy.

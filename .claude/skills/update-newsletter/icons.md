# Icon Keywords

Every card with an `icon` field uses one of these keywords. All icons are single-color SVG strokes that automatically inherit the surrounding text color — no need to think about color.

Pick the keyword that matches the **subject** of the card, not the title's wording. If you can't find a good match, use `sparkle` as the safe fallback.

---

## Available Icons

| Keyword            | What it shows                | Best for                                          |
|--------------------|------------------------------|---------------------------------------------------|
| `tools`            | wrench + screwdriver         | Management projects, ops work                     |
| `clipboard`        | clipboard with checklist     | Plans, processes, procedures                      |
| `megaphone`        | megaphone                    | Announcements, company updates                    |
| `users`            | two people                   | New hires, team news, hiring                      |
| `sparkle`          | four-point sparkle           | Generic / fallback                                |
| `tag`              | price tag                    | Pricing, sales, offers                            |
| `cake`             | birthday cake                | (used automatically on birthday cards)            |
| `trophy`           | trophy                       | Contests, awards, referral programs               |
| `star`             | five-point star              | Reviews, achievements                             |
| `graduation-cap`   | grad cap                     | (used automatically on education cards)           |
| `message`          | speech bubble                | Communication, chat, feedback                     |
| `quote`            | open quote marks             | (used automatically on applause cards)            |
| `scale`            | balance scale                | Vish reweigh, fairness, balance                   |
| `clock`            | clock face                   | Time cards, deadlines, schedules                  |
| `shuffle`          | crossed arrows               | Shift coverage, swaps                             |
| `calendar`         | calendar grid                | Events, dates, attendance                         |
| `zap`              | lightning bolt               | Bonus points, energy, fast wins                   |
| `rocket`           | rocket                       | Why participate, growth, launches                 |
| `gift`             | wrapped gift                 | Prizes, rewards                                   |
| `bulb`             | light bulb                   | Tips, ideas, pro tips                             |
| `arrowRight`       | rightward arrow              | (used internally on applause "from → to" arrows)  |
| `external`         | external link box            | (used automatically on Register buttons)          |
| `scissors`         | scissors                     | Hair services, brand mark                         |
| `percent`          | percent symbol               | Discounts, promotions                             |
| `mapPin`           | location pin                 | (used automatically on education `location` field)|

---

## Where Icons Are Used

| Section / Card type     | Icon source                                           |
|-------------------------|-------------------------------------------------------|
| Management Project card | `updates.managementProjects[].icon`                   |
| Company Update card     | `updates.companyUpdates[].icon`                       |
| How-to-Earn row         | `cultureRewards.howToEarn[].icon`                     |
| Birthday card           | always uses `cake` (no need to set)                   |
| Education card          | always uses `graduation-cap` (no need to set)         |
| Applause card           | always uses `quote` (no need to set)                  |
| Champion card           | always shows 5 stars (no icon field)                  |

---

## Adding a New Icon

If you genuinely need an icon that isn't in the list, you'll need to edit `script.js` (the design code). Add a new entry to the `ICONS` object near the top of the file, using SVG path data with `viewBox="0 0 24 24"`. Lucide.dev has clean stroke-style icons that drop in easily.

This is a one-time developer task, not a monthly content task. Don't add icons casually — keep the set small and intentional.

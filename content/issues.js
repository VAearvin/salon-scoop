/*
 * SALON SCOOP — ISSUE ARCHIVE MANIFEST
 * ====================================
 * This drives the landing hub at "/". List every published issue here,
 * newest first. The one marked `current: true` is featured at the top of
 * the hub; the rest fall into the "Past Issues" grid.
 *
 * To publish a new month:
 *   1. Create its dated folder (e.g. /July2026/) with index.html + content.js.
 *   2. Prepend a new entry below and set current: true.
 *   3. Remove current: true from the previous entry.
 *
 * Fields:
 *   label   — display name, e.g. "June 2026"
 *   url     — absolute path to the issue, e.g. "/June2026" (no trailing slash)
 *   current — true for the latest issue (only one should be current)
 *   cover   — absolute image path used as the card background
 *   blurb   — one-line teaser shown on the card
 */
window.SCOOP_ISSUES = [
  {
    label: "July 2026",
    url: "/July2026",
    current: true,
    cover: "/assets/images/bg-hero.jpg",
    blurb:
      "Record spa sales, welcome Kaden, the station-map refresh and new chores system, July promotions, birthday celebrants, culture points, and this month's review champions.",
  },
  {
    label: "June 2026",
    url: "/June2026",
    cover: "/assets/images/bg-hero.jpg",
    blurb:
      "Symposium recap, welcome Nema, the work behind the scenes, the Hydro Jelly spa promo, and June's review champions.",
  },
  {
    label: "May 2026",
    url: "/May2026",
    cover: "/assets/images/bg-hero.jpg",
    blurb:
      "Kaden joins Ensemble, the both-salon inventory overhaul, May promotions, birthday celebrants, and May's review champions.",
  },
];

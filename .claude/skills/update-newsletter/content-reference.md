# `content/current.js` — Field Reference

Every field in `window.SCOOP_DATA`, in the order they appear in the file. Required fields are marked ✱. Everything else is optional.

---

## Masthead (top of file)

```js
month: "May",              ✱  // human-readable month name, used in headings
year: 2026,                ✱  // four-digit year, used in commits/archive names
edition: "MAY 2026 EDITION",  ✱  // shown as the hero badge above the title
```

---

## 1. Hero

```js
hero: {
  title: "Salon Scoop",                ✱
  subtitle: "Your monthly insider ...",✱  // one short sentence
  backgroundImage: "assets/images/bg-hero.jpg",  // full-width hero bg
  logos: [
    { name: "Ensemble Salon",         image: "assets/images/logo-ensemble.png" },
    { name: "22 Changes Salon & Spa", image: "assets/images/logo-22changes.png" },
  ],
},
```

**Notes**
- The `backgroundImage` is hidden until loaded (no broken-image flash).
- If a logo `image` fails to load, the first letter of `name` appears as a fallback.
- Don't change `title` unless rebranding — it's the site title.

---

## 2. Monthly Updates

Two card grids, one for each sub-group.

```js
updates: {
  managementProjects: [
    {
      icon: "tools",          // see icons.md for the full list
      title: "Project title",  ✱
      body: "Description ...", ✱
    },
    // ... more cards
  ],
  companyUpdates: [
    {
      icon: "megaphone",
      title: "Update title",   ✱
      body: "Description ...", ✱
    },
  ],
},
```

**Notes**
- Empty arrays → shows a "coming soon" empty state (page doesn't break).
- Card color: management = teal, company = violet (set in CSS, automatic).

---

## 3. Promotions for Clients

Two arrays — salon (hair) and spa. Cards merge into one display, split by the `special` flag.

```js
promotions: {
  salon: [
    {
      title: "BOGO L'Oréal Products — May + June Special",  ✱
      badge: "BOGO 50% OFF",        // small pill label on the card
      image: "assets/images/promo-salon-1.jpg",  // promo banner image (1200×675 ideal)
      details: [                     // bullet list shown on the card
        "Buy 1, Get 1 Half Off ...",
        "Perfect for maintaining color ...",
      ],
      validFrom: "May 1",
      validTo: "June 30",
      // special: true,             // (optional) moves card to the "Special Promo" row below
    },
  ],
  spa: [
    // ... same shape
  ],
},
```

**Special promos**
- Set `special: true` on a promo to move it to a dedicated row below the "Featured Offers."
- Set `image: ""` (empty string) for a text-only card — no image area, badge inline. Example: a "50% off first facial" promo where there's no good banner image.

**Image specs**
- 1200×675 JPEG, < 100KB ideal
- Saved as `promo-<salon-or-spa>-<n>.jpg` in `assets/images/`

---

## 4. Birthday Celebrants

```js
birthdays: [
  { name: "Darren",   date: "May 6",  photo: "assets/images/birthday-darren.jpg" },
  { name: "Maddy R.", date: "May 9",  photo: "assets/images/birthday-maddy-r.jpg" },
],
```

**Notes**
- `name`: keep short; use first name + last initial if there are dupes.
- `date`: include the month name (the date string appears literally on the card).
- `photo`: 400×400 square JPEG, face in center, saved as `birthday-firstname.jpg`.
- If `photo` is missing or broken, the first letter of `name` shows as fallback.

---

## 5. Staff Referral Contest

```js
referralContest: {
  active: false,                         // ← TOGGLE THIS
  title: "Staff Referral Contest",
  description: "No referral contest ...", // (used when active is false too)
  prize: "",                              // (used when active is true)
  deadline: "",                           // (used when active is true)
  howToEnter: [],                         // (used when active is true)
},
```

**When `active: false`**
- The entire section is hidden, including its nav link.
- Only the `active` flag matters; other fields are ignored.

**When `active: true`**
```js
referralContest: {
  active: true,
  title: "Staff Referral Contest",
  description: "Refer a new client this month and win!",
  prize: "$200 Sephora gift card",
  deadline: "May 31, 2026",
  howToEnter: [
    "Have your client mention your name when booking",
    "We track entries in Phorest",
    "Winner drawn first week of next month",
  ],
},
```

---

## 6. Culture Rewards

This section has three parts that rarely change (overview, rules, prizes) and one part that changes every month (points).

```js
cultureRewards: {
  overview: "Our Culture Reward System recognizes ...",  // (rarely changes)

  howItWorks: {
    tracking: [   // bullet list under "Tracking Your Progress"
      "Points are tracked and updated regularly.",
      "Once a month ...",
    ],
    redeeming: [  // bullet list under "Redeeming Your Rewards"
      "When you have enough points ...",
      "To redeem, message Earvin and Darren via Slack.",
    ],
  },

  howToEarn: [   // each row = one way to earn points
    { icon: "scale",    action: "Vish Reweigh 100% / Month", points: 5,
      tracker: "Tracked through the Vish website" },
    // ...
  ],

  whyParticipate: "This system is designed to ...",   // single paragraph
  bonusPoints:    "Some months will feature bonus ...", // single paragraph
  tip:            "The more you engage ...",            // shown in a tip callout

  prizes: [
    { prize: "$5 Starbucks Card", points: 5,   value: "$5"   },
    { prize: "Logo Beanie",        points: 20,  value: "$20"  },
    // ...
  ],
  prizesNote: "$1 per point — all prizes follow this standard value.",

  /* ← This is the part that changes EVERY MONTH */
  pointsByLocation: {
    ensemble: [
      { name: "Juliana Tarrats",  points: 99 },
      // ... sort DESCENDING by points
    ],
    twentyTwoChanges: [
      { name: "Kelleigh Coy-Strange", points: 90 },
      // ... sort DESCENDING by points
    ],
  },
},
```

**Monthly update**: only `pointsByLocation` typically changes. Sort each array **descending by points** — that's the readable order.

---

## 7. Upcoming Education

```js
education: [
  {
    title: "Redken Symposium 2026",       ✱
    date: "June 13–15, 2026",             ✱
    location: "Caesars Forum · Las Vegas, Nevada",   // (optional) shown with a map-pin icon
    description: "Description paragraph ...",         ✱
    highlights: [                          // (optional) bullet list of notable details
      "1 Mainstage + 15+ powerful hair education classes",
      "Opening Night Welcome Celebration ...",
    ],
    eventbriteUrl: "https://www.eventbrite.com/e/...?aff=oddtdtcreator",  // (optional) shows the "Register on Eventbrite" pill button
  },
],
```

**Notes**
- If `eventbriteUrl` is missing or empty, the card shows without a button.
- For big events (out-of-town trips, conferences), use the `highlights` array to call out the most important info. For a normal local class, you can omit `highlights` and just rely on `description`.
- The `Register on Eventbrite` button is intentionally styled as a prominent gold pill so it's unmistakably clickable.

---

## 8. Applause Corner

```js
applause: [
  {
    from: "Anonymous",          ✱  // or a name; "Anonymous" if the submitter chose to stay private
    to: "Ghina",                ✱
    message: "Big shoutout ...", ✱
  },
],
```

**Notes**
- Emoji is fine in `message`. Curly quotes too (just paste as-is from the source).
- No image needed — the cards are text-only.

---

## 9. Google Review Champions

Staff who earned **Google reviews** in the **previous** month (May issue → April reviews).

```js
reviewChampions: [
  {
    name: "Lacey",
    photo: "assets/images/champion-lacey.jpg",
    reviews: [
      {
        reviewer: "Kaylee",
        review: "Full review text ...",
      },
      // multiple reviews = multiple entries; the card shows them all
    ],
  },
  // ... one entry per champion
],
```

**Notes**
- Photo: 400×400 square JPEG. **Face must be in the top half** (see `image-guide.md`).
- If a champion got multiple reviews, list each as its own object in `reviews`.
- Order: typically by review count desc, then alphabetical. The user can request a different order.

---

## 10. Phorest 5-Star Review Recipients

Staff who earned 5-star Phorest reviews this month. **Different data source from Google reviews.**

```js
phorestStars: {
  ensemble: [
    "Addison Witt",
    "Maddy Riordan",
    // ... just names, in any order (alphabetical is nice)
  ],
  twentyTwoChanges: [
    "Whitney Coltrane",
    "Miriam Moldovan",
    // ...
  ],
},
```

**Notes**
- No photos, no review text — just a name list with stars next to each.
- Names can repeat across locations if a staff member works at both (e.g., Maddy Riordan in both lists is fine).
- If a location has no recipients, leave the array empty — that side won't render.

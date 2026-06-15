/*
 * SALON SCOOP — MONTHLY CONTENT
 * =============================
 * Edit only this file each month. Do not touch the design files.
 *
 * Monthly cycle:
 *   1. Copy this file into content/archive/ as YYYY-MM.js for the month it covered.
 *   2. Update every field below for the new month.
 *   3. Drop new images into assets/images/ and reference them here.
 *   4. Commit + push — Vercel redeploys automatically.
 *
 * Notes:
 *   - Any section with an empty array shows a tasteful "coming soon" state.
 *   - referralContest.active = false hides that section's body.
 *   - applause = { active: false } hides the whole Applause Corner section.
 *   - "icon" fields take a short keyword (see ICON SET in script.js).
 *   - Image paths are relative, e.g. "assets/images/hero.jpg".
 */

window.SCOOP_DATA = {
  /* ---- Masthead ---- */
  month: "June",
  year: 2026,
  edition: "JUNE 2026 EDITION",

  /* ---- 1. Hero ---- */
  hero: {
    title: "Salon Scoop",
    subtitle:
      "Your monthly insider for Ensemble Salon & 22 Changes Salon and Spa.",
    backgroundImage: "assets/images/bg-hero.jpg",
    logos: [
      { name: "Ensemble Salon",        image: "assets/images/logo-ensemble.png" },
      { name: "22 Changes Salon & Spa", image: "assets/images/logo-22changes.png" },
    ],
  },

  /* ---- 2. Monthly Updates ---- */
  updates: {
    managementProjects: [
      {
        icon: "users",
        title: "Associate Hiring at Ensemble — Kaden",
        body: "We are thrilled to share that Mandy has found her next associate at Ensemble! Kaden has been selected and is set to officially start on August 1st. This is an exciting addition to the Ensemble team, and we cannot wait to see Kaden grow and thrive in the program. More details on the onboarding process will be shared as we get closer to the start date.",
      },
      {
        icon: "tools",
        title: "Inventory Overhaul — Both Salons",
        body: "A huge thank you to Tasha for leading a major inventory overhaul across both salon locations. She returned discontinued products, updated planograms, and corrected min/max levels to ensure our ordering system is accurate and running smoothly. This kind of behind-the-scenes work makes a massive difference in day-to-day operations, and we appreciate the time and care she put into getting it done. Color and retail inventory accuracy is being actively tightened up, and we will continue to monitor and maintain it going forward.",
      },
    ],
    companyUpdates: [
      {
        icon: "rocket",
        title: "Team Milestones — Celebrating Growth",
        body: "We have some huge milestones to celebrate! Maddie and Sadie are coming up on their one-year anniversary behind the chair and will officially be transitioning out of the associate program — their growth has been incredible to watch and this next chapter is so well deserved. And in even more exciting news, Nevaeh has graduated to Level 1! This is a big deal and a reflection of all the hard work and dedication she has put in. Please take a moment to celebrate all three of them. Level 1 tracking numbers will be adjusted moving forward to reflect these transitions.",
      },
      {
        icon: "users",
        title: "Welcome to the Team — Maddy Riordan",
        body: "We are excited to welcome Maddy Riordan to 22 Changes! Maddy will be joining the team full time starting June 1st. Please make her feel at home and give her a warm welcome as she settles in. We are looking forward to seeing the great things she brings to the salon.",
      },
      {
        icon: "calendar",
        title: "Alyssa Is Back — New Schedule",
        body: "Alyssa is officially back from vacation and has transitioned into a new working arrangement. She is now working virtually after hours and will be at the salon in person on Thursday evenings. This is a great setup that allows her to continue supporting both locations while balancing her schedule. If you need to reach her, keep Thursday evenings in mind for in-person check-ins, and she remains reachable virtually outside of salon hours.",
      },
      {
        icon: "star",
        title: "State Inspection Visit — We Are in Full Compliance",
        body: "We recently had a visit from the state to review our consent forms and overall compliance. We are happy to report that everything checked out and we are fully in compliance — no issues whatsoever. There was also a question raised about license placement at stations, and it was confirmed that our current setup is completely correct for W-2 employees. This is a testament to the work everyone has put into keeping our standards high. Great job, team.",
      },
      {
        icon: "clipboard",
        title: "Important Reminder — Consultation Form Process",
        body: "As we continue to improve our client intake process, we want to make sure everyone is aware of an important step when reviewing signed consultation forms. After a client signs their form, stylists must go back in and mark it \"Done,\" then select \"Profile Completed\" in Desktop. If this step is skipped, the system will continue to resend the form to that client at every future appointment — which creates a confusing experience for them. Please make sure this is part of your routine after every consultation. A report can be pulled at any time to see where this step is being completed and where it is being missed, so we can offer support where needed.",
      },
    ],
  },

  /* ---- 3. Promotions for Clients (Salon + Spa) ---- */
  promotions: {
    salon: [
      {
        title: "BOGO L'Oréal Products — May + June Special",
        badge: "BOGO 50% OFF",
        image: "assets/images/promo-salon-1.jpg",
        details: [
          "Buy 1, Get 1 Half Off on all L'Oréal products in the salon",
          "Perfect for maintaining color, caring for extensions, or keeping that fresh-from-the-salon feel every day",
          "Ask your stylist for personalized recommendations at your next visit",
        ],
        validFrom: "May 1",
        validTo: "June 30",
      },
    ],
    spa: [
      {
        title: "June Glow Upgrade — Hydro Jelly Mask",
        badge: "$30 (was $40)",
        image: "assets/images/promo-spa-1.jpg",
        details: [
          "Add the Hydro Jelly Mask to any facial this June",
          "Was $40, now only $30 — perfect for a summer glow",
          "Ask your esthetician to add it to your next appointment",
        ],
        validFrom: "June 1",
        validTo: "June 30",
      },
    ],
  },

  /* ---- 4. Birthday Celebrants ---- */
  birthdays: [],

  /* ---- 5. Staff Referral Contest (toggle with active) ---- */
  referralContest: {
    active: false,
    title: "Staff Referral Contest",
    description:
      "No referral contest running this month — check back soon for the next one!",
    prize: "",
    deadline: "",
    howToEnter: [],
  },

  /* ---- 6. Culture Rewards & Prizes ---- */
  cultureRewards: {
    overview:
      "Our Culture Reward System recognizes and rewards team members for their contributions, positive behaviors, and commitment to our values. Earn points by engaging in activities that promote collaboration, professionalism, and excellence — then redeem them for great rewards.",

    howItWorks: {
      tracking: [
        "Points are tracked and updated regularly.",
        "Once a month, point totals are posted in the \"All Chat\" Slack channel — including points earned in the last cycle and total points banked.",
      ],
      redeeming: [
        "When you have enough points, you can cash them in anytime.",
        "To redeem, message Earvin and Darren via Slack.",
        "Prizes are ordered as needed — no need to worry about availability.",
      ],
    },

    howToEarn: [
      { icon: "scale",        action: "Vish Reweigh 100% / Month",                  points: 5, tracker: "Tracked through the Vish website" },
      { icon: "clock",        action: "No Time Card Edits / Month",                 points: 5, tracker: "Tracked via the timecards channel in Slack" },
      { icon: "shuffle",      action: "Shift Coverage",                              points: 3, tracker: "Tracked through internal scheduling (TBD)" },
      { icon: "calendar",     action: "Attendance at Social Events & Education",    points: 3, tracker: "Education via Eventbrite, social events via RSVP" },
      { icon: "star",         action: "Google 5-Star Review",                        points: 1, tracker: "Tracked through Phorest" },
      { icon: "message",      action: "Shoutouts (Peer Recognition)",                points: 1, tracker: "Tracked through the shoutout tracker" },
    ],

    whyParticipate:
      "This system is designed to foster a positive, collaborative, and high-performance culture. It's a fun way to celebrate individual contributions while promoting teamwork and continuous growth.",

    bonusPoints:
      "Some months will feature bonus point opportunities! For example, if we need more Google reviews, we may 5× the points for reviews. Stay tuned for announcements.",

    tip:
      "The more you engage, the faster you earn points and unlock bigger rewards.",

    prizes: [
      { prize: "$5 Starbucks Card",       points: 5,   value: "$5"   },
      { prize: "Logo Beanie",              points: 20,  value: "$20"  },
      { prize: "Boutique Voucher ($20)",   points: 20,  value: "$20"  },
      { prize: "Hairbrush",                points: 25,  value: "$25"  },
      { prize: "Logo Yeti Tumbler",        points: 50,  value: "$50"  },
      { prize: "6 Hours of PTO",           points: 100, value: "$100" },
      { prize: "Air Pro Blowdryer",        points: 400, value: "$400" },
    ],
    prizesNote: "$1 per point — all prizes follow this standard value.",

    /* Points per team member — split by salon (NOT a leaderboard). */
    pointsByLocation: {
      ensemble: [
        { name: "Juliana Tarrats",   points: 100 },
        { name: "Tasha Stager",      points:  93 },
        { name: "Taylor Aeh",        points:  80 },
        { name: "Sam Dubenko",       points:  77 },
        { name: "Jessica Meyers",    points:  71 },
        { name: "Erin Kramer",       points:  61 },
        { name: "Addison Witt",      points:  60 },
        { name: "Sadie Sferrazza",   points:  57 },
        { name: "Lily McCarthy",     points:  55 },
        { name: "Lacey Wetmore",     points:  50 },
        { name: "Kylee Klotzbach",   points:  50 },
        { name: "Kasandra Leal",     points:  31 },
        { name: "Mandi Telligman",   points:  27 },
        { name: "Madeline Gaston",   points:  23 },
        { name: "Lea Blaskower",     points:   7 },
      ],
      twentyTwoChanges: [
        { name: "Kelleigh Coy-Strange", points: 103 },
        { name: "Maddy Riordan",        points:  88 },
        { name: "Ghina Ghosn",          points:  83 },
        { name: "Kya Mendoza",          points:  81 },
        { name: "Crystal Rohlfing",     points:  64 },
        { name: "Tari Brumfiel",        points:  63 },
        { name: "Whitney Coltrane",     points:  48 },
        { name: "Regina Davidson",      points:  45 },
        { name: "Dejah Williams",       points:  39 },
        { name: "Alyssa Wales",         points:  38 },
        { name: "Nevaeh Spink",         points:  33 },
        { name: "Ceana Kopsho",         points:  33 },
        { name: "Carissa DeLeon",       points:  26 },
        { name: "Gracie England",       points:  11 },
        { name: "Miriam Moldovan",      points:   4 },
      ],
    },
  },

  /* ---- 1B. Staff Meeting Reminders ---- */
  /* Set to { active: false } to hide the entire section. */
  staffMeetings: {
    title: "Reminder — Staff Meeting Dates & Times",
    subtitle: "Mark your calendars and plan to attend.",
    meetings: [
      { location: "Staff Meeting (Ensemble Salon)", date: "July 1, 2026", time: "2:00 PM – 3:30 PM" },
      { location: "Staff Meeting (22 Changes)",     date: "July 2, 2026", time: "2:30 PM – 4:00 PM" },
    ],
  },

  /* ---- 7. Upcoming Education ---- */
  /* Set to { active: false } to hide the entire section. */
  education: { active: false },

  /* ---- 8. Applause Corner ---- */
  /* Set to { active: false } to hide the entire section for the month. */
  applause: { active: false },

  /* ---- 9. Google Review Champions (prior month) ---- */
  /*
   * Each champion: photo, name, and a "reviews" array (one entry per client review).
   * Add more { reviewer, review } objects to any champion as reviews come in.
   */
  reviewChampions: [
    {
      name: "Carissa",
      photo: "assets/images/champion-carissa.jpg",
      reviews: [
        { reviewer: "Aspen Dorband", review: "Girls!! Carissa is where it is at!! Thank you so much. Best highlights I have had in a long time! And these layers…! I am obsessed. 🥹💛✨" },
      ],
    },
    {
      name: "Maddy",
      photo: "assets/images/champion-maddy.jpg",
      reviews: [
        { reviewer: "Debbie", review: "Maddy is delightful. I have a great new hair style and wonderful new stylist. Thank you, Maddy. You made my day." },
      ],
    },
    {
      name: "Dejah",
      photo: "assets/images/champion-dejah.jpg",
      reviews: [
        { reviewer: "Hopey Conner", review: "They are amazing. The lady Dejah is a sweetheart. Correct the name spelling, my bad, but all throughout was a great visit!" },
        { reviewer: "Nicole Machic", review: "Dejah was wonderful! My skin has been a challenge for years and she was super helpful explaining products and what can help my skin. The facial was amazing and relaxing. I'll definitely be back for more facials." },
      ],
    },
    {
      name: "Miriam",
      photo: "assets/images/champion-miriam.jpg",
      reviews: [
        { reviewer: "Yoel", review: "Miriam went above and beyond to make sure my hair was cut to my needs. It didn't take too long, which I liked. The salon is pretty nice on the inside." },
      ],
    },
    {
      name: "Kelleigh",
      photo: "assets/images/champion-kelleigh.jpg",
      reviews: [
        { reviewer: "Amanda Odell", review: "Kelleigh is an amazing curly hair stylist. Both my girls and myself will not see anyone else. Every time we leave there, our curls look hydrated and bouncy." },
      ],
    },
    {
      name: "Jessie",
      photo: "assets/images/champion-jessie.jpg",
      reviews: [
        { reviewer: "트와이스", review: "Jesse is amazing and she is the only one I have cut my hair now. When I first went to her I was having a lot of trust issues with my hair because I have fine hair and it grows very slowly. With Jesse's knowledge of hair she has given me an incredibly cute Bob that has enhanced my entire life.. I feel so much better about myself and I can't thank her enough for helping me with my confidence....... This is the hairstyle I always wanted.....I love it!!!!¡!" },
        { reviewer: "Averie Turnbow", review: "Jessie is the best!! She knew exactly what I wanted and executed it perfectly! 10/10 recommend" },
      ],
    },
    {
      name: "Mandi",
      photo: "assets/images/champion-mandi.jpg",
      reviews: [
        { reviewer: "Brittany McLean", review: "Mandi is hands down the best! Always does an amazing job and is so knowledgeable and friendly. I couldn't recommend her enough!" },
        { reviewer: "Sabrina Willett", review: "My recent appointment with Mandi was hands down the best experience I've ever had at a hair salon. She took the time to ask thoughtful questions about my desired outcome and was incredibly knowledgeable throughout the entire appointment. She made clear, personalized recommendations based on my specific concerns, and I left feeling confident and so happy with the results. I think I've finally found my person!" },
      ],
    },
    {
      name: "Sadie",
      photo: "assets/images/champion-sadie.jpg",
      reviews: [
        { reviewer: "Winnie Randy", review: "Sadie was a wonderful hairstylist and she was super kind. This was my first professionally haircut since 2024 and she really knocked it out of the park!" },
      ],
    },
    {
      name: "Addison",
      photo: "assets/images/champion-addison.jpg",
      reviews: [
        { reviewer: "Anna Stark", review: "I just had the best experience with Addie. She was so flexible with my schedule and was a treat to chat with for 4+ hours which makes a big difference! She did an amazing job and she knew exactly what products my hair type needed. In love with my new hair!" },
        { reviewer: "Kimberly Cameron", review: "Addi was amazing and I love my haircut and style! Will definitely be back and I highly recommend Addi!" },
      ],
    },
  ],

  /* ---- 10. Phorest 5-Star Review Recipients ---- */
  /* List everyone who earned a 5-star Phorest review this month, by location. */
  phorestStars: {
    ensemble: [
      "Jessie (Jessica) Meyers",
      "Addison Witt",
      "Juliana Tarrats",
      "Mandi McGillic",
      "Lacey Wetmore",
      "Sadie Sferrazza",
      "Kasandra Leal",
      "Sam Dubenko",
    ],
    twentyTwoChanges: [
      "Miriam Moldovan",
      "Maddy Riordan",
      "Nevaeh Spink",
      "Tari Brumfiel",
      "Kelleigh Coy-Strange",
      "Crystal Rohlfing",
      "Kya Mendoza",
      "Carissa DeLeon",
      "Dejah Williams",
    ],
  },
};

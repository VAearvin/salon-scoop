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
 *   - Image paths are relative, e.g. "/assets/images/hero.jpg".
 */

window.SCOOP_DATA = {
  /* ---- Masthead ---- */
  month: "July",
  year: 2026,
  edition: "JULY 2026 EDITION",

  /* ---- 1. Hero ---- */
  hero: {
    title: "Salon Scoop",
    subtitle:
      "Your monthly insider for Ensemble Salon & 22 Changes Salon and Spa.",
    backgroundImage: "/assets/images/bg-hero.jpg",
    logos: [
      { name: "Ensemble Salon",        image: "/assets/images/logo-ensemble.png" },
      { name: "22 Changes Salon & Spa", image: "/assets/images/logo-22changes.png" },
    ],
  },

  /* ---- 2. Monthly Updates ---- */
  updates: {
    managementProjects: [
      {
        icon: "tools",
        title: "Station Map Refresh",
        body: "We're updating the station map across the salons. A few stations are merging to open up space for the new stylists joining us, and we're introducing a new end-of-shift cleanliness standard so every station stays guest-ready from one day to the next.",
      },
      {
        icon: "clipboard",
        title: "Chores Accountability System",
        body: "We've rolled out a new chores accountability system. Before anyone heads out, desk and service providers check and confirm each other's closing tasks are actually done. We'll run it for about two months to lock in the habit, keeping both salons consistently clean and ready for the next morning.",
      },
    ],
    companyUpdates: [
      {
        icon: "star",
        title: "Spa's Best Stretch Since 2024",
        body: "Our spa just posted its strongest sales in the past two months — the best run we've had since March 2024. That's a genuine milestone, and it comes straight from the spa team showing up and taking such good care of clients. Big kudos to all of you.",
      },
      {
        icon: "users",
        title: "Welcome, Kaden",
        body: "We're excited to welcome Kaden, Mandi's newest associate, to the team. Onboarding kicks off this Wednesday. When you see Kaden around, please introduce yourself and help make those first days feel like home.",
      },
      {
        icon: "megaphone",
        title: "A Strong Week Across Both Salons",
        body: "It's been a strong week at both locations, with real strides in staff, culture, and the numbers all at the same time. Momentum like that is a whole-team effort — thank you all for showing up and making it happen.",
      },
      {
        icon: "sparkle",
        title: "Selfie Wall Underway at 22 Changes",
        body: "The client selfie wall at 22 Changes is officially in the works. Part one is complete, with a brand-new mirror installed and ready for photos. More to come as the rest of it comes together.",
      },
    ],
  },

  /* ---- 3. Promotions for Clients (Salon + Spa) ---- */
  promotions: {
    salon: [
      {
        title: "BOGO Redken & Mizani",
        badge: "BUY ONE, GET ONE",
        image: "",
        details: [
          "Buy One, Get One on all Redken & Mizani products this month",
          "Featured product spotlight: the Acidic Cleansing Mist",
          "Ask your stylist for personalized recommendations at your next visit",
        ],
        validFrom: "July 1",
        validTo: "July 31",
      },
    ],
    spa: [
      {
        title: "Buy 3 Facials, Get 1 Free",
        badge: "4TH FACIAL FREE",
        image: "",
        details: [
          "Buy 3 facials and receive 1 additional facial free",
          "Perfect for keeping your skin glowing all summer",
          "Ask your esthetician to get started at your next appointment",
        ],
        validFrom: "July 1",
        validTo: "July 31",
      },
    ],
  },

  /* ---- 4. Birthday Celebrants ---- */
  birthdays: [
    { name: "Nevaeh",     date: "July 11", photo: "/assets/images/birthday-nevaeh.jpg" },
    { name: "Lorie Wall", date: "July 11" },
    { name: "Tari",       date: "July 25", photo: "/assets/images/birthday-tari.jpg" },
    { name: "Amy Lam",    date: "July 29" },
  ],

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
        { name: "Juliana Tarrats",   points: 106 },
        { name: "Tasha Stager",      points: 104 },
        { name: "Maddy Riordan",     points:  94 },
        { name: "Taylor Brotherton", points:  85 },
        { name: "Sam Dubenko",       points:  85 },
        { name: "Sadie Sferrazza",   points:  71 },
        { name: "Addison Witt",      points:  64 },
        { name: "Lily McCarthy",     points:  60 },
        { name: "Lacey Wetmore",     points:  50 },
        { name: "Kasandra Leal",     points:  37 },
        { name: "Mandi McGillic",    points:  34 },
        { name: "Madeline Gaston",   points:  23 },
        { name: "Erin Kramer",       points:  12 },
        { name: "Lea Blaskower",     points:  10 },
      ],
      twentyTwoChanges: [
        { name: "Ghina Ghosn",          points: 139 },
        { name: "Kelleigh Coy-Strange", points: 109 },
        { name: "Kya Mendoza",          points:  85 },
        { name: "Crystal Rohlfing",     points:  73 },
        { name: "Tari Brumfiel",        points:  65 },
        { name: "Regina Davidson",      points:  54 },
        { name: "Whitney Coltrane",     points:  54 },
        { name: "Ceana Kopsho",         points:  45 },
        { name: "Dejah Williams",       points:  40 },
        { name: "Nevaeh Spink",         points:  37 },
        { name: "Carissa DeLeon",       points:  27 },
        { name: "Gracie England",       points:  11 },
        { name: "Miriam Moldovan",      points:   5 },
      ],
    },
  },

  /* ---- 1B. Staff Meeting Reminders ---- */
  /* Set to { active: false } to hide the entire section. */
  staffMeetings: { active: false },

  /* ---- 7. Upcoming Education ---- */
  /* Set to { active: false } to hide the entire section. */
  education: [
    {
      title: "Redken Cutting — Day 1",
      date: "August 9, 2026 · 9:30 AM–4:00 PM",
      location: "Summit Salon Academy · Portland, OR",
      description:
        "Day 1 of a two-day Redken cutting intensive — a full day of hands-on cutting education alongside other stylists. Once you're confirmed to attend, use the button below to register on Eventbrite.",
      eventbriteUrl: "https://www.eventbrite.com/e/1981807955945?aff=oddtdtcreator",
    },
    {
      title: "Redken Cutting — Day 2",
      date: "August 10, 2026 · 9:30 AM–4:00 PM",
      location: "Summit Salon Academy · Portland, OR",
      description:
        "Day 2 of the Redken cutting intensive, building on everything from Day 1. Register on Eventbrite below.",
      eventbriteUrl: "https://www.eventbrite.com/e/1981810859630?aff=oddtdtcreator",
    },
  ],

  /* ---- 8. Applause Corner ---- */
  /* Set to { active: false } to hide the entire section for the month. */
  applause: [
    {
      from: "Maddy",
      to: "Ghina",
      message: "Loving her support on desk!! She is such a rockstar!!",
    },
    {
      from: "Anonymous",
      to: "Maddy Riordan",
      message: "Came into my desk shift and there were 18 welcome packages and 20+ gift bags made!!!",
    },
    {
      from: "Lillie",
      to: "Maddy R",
      message: "Cleaned the office — thank you!!!",
    },
    {
      from: "Lillie",
      to: "Ghina",
      message: "Spa inventory — thank you!!",
    },
    {
      from: "Lillie",
      to: "Maddy R",
      message: "Cleaning and organizing the front desk area.",
    },
  ],

  /* ---- 9. Google Review Champions (prior month) ---- */
  /*
   * Each champion: photo, name, and a "reviews" array (one entry per client review).
   * Add more { reviewer, review } objects to any champion as reviews come in.
   */
  reviewChampions: [
    {
      name: "Addison",
      photo: "/assets/images/champion-addison.jpg?v=3",
      reviews: [
        { reviewer: "Lindsay Crawford", review: "Addi is the best! She always achieves the look I'm going for and is so personable!! I came in wanting a totally different hair cut and color than what I currently had, and she outdid herself! She absolutely nailed everything about it!! Thank you, Addi!" },
        { reviewer: "Evan Walker", review: "Great experience for a first time trip to Ensemble Salon. Customer service is welcoming 10/10. The service is top tier. Cut and color for my beautiful girlfriend who was so happy with her new look. Thank you Addison for a superior cut." },
      ],
    },
    {
      name: "Juliana",
      photo: "/assets/images/champion-juliana.jpg",
      reviews: [
        { reviewer: "Josephine Quenette", review: "Juliana did a wonderful job taking care of me and my brother! She was very attentive and friendly, and I'm very happy with the service I received." },
        { reviewer: "Amanda Martinez", review: "Juliana is amazing, my hair never looked so good!! Not only did she give me a beautiful cut, she showed me how to style my hair to make my curls POP! She is the sweetest and I will only be going back to her from now on!" },
      ],
    },
    {
      name: "Mandi",
      photo: "/assets/images/champion-mandi.jpg?v=2",
      reviews: [
        { reviewer: "Ligia Gherman", review: "I've gone to Mandi at Ensemble twice this year already for extension installs. I have the k-tips and she was very knowledgeable and honest about all the kinds of extensions they offer and what they are before choosing k-tips." },
        { reviewer: "Lynn Smith", review: "Mandi did my hair extensions, and she did an amazing job! She took her time and was very meticulous with the placement of each K-tip extension." },
      ],
    },
    {
      name: "Erin",
      photo: "/assets/images/champion-erin.jpg",
      reviews: [
        { reviewer: "Erin Redding", review: "I'm IN LOVE Erin, where have you been my whole HAIR LIFE?! And had the best time with my daughter, too! Thanks for doing both our new, fresh summer looks!" },
      ],
    },
    {
      name: "Tari",
      photo: "/assets/images/champion-tari.jpg",
      reviews: [
        { reviewer: "Kat Lovesky", review: "Very thorough consultation and attention to the details for the haircut. It has been a struggle to find someone who cares and Tari really cared about the experience and the cut. Truly a great experience and a relief to know that someone still cares about not only the client and their needs but the cut and experience as well." },
      ],
    },
  ],

  /* ---- 10. Phorest 5-Star Review Recipients ---- */
  /* List everyone who earned a 5-star Phorest review this month, by location. */
  phorestStars: {
    ensemble: [
      "Addison Witt",
      "Erin Kramer",
      "Jessie (Jessica) Meyers",
      "Juliana Tarrats",
      "Lacey Wetmore",
      "Mandi McGillic",
      "Sadie Sferrazza",
      "Sam Dubenko",
      "Taylor Brotherton",
    ],
    twentyTwoChanges: [
      "Carissa DeLeon",
      "Dejah Williams",
      "Kelleigh Coy-Strange",
      "Nevaeh Spink",
      "Regina Davidson",
      "Tari Brumfiel",
    ],
  },
};

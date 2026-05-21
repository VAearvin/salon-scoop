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
 *   - "icon" fields take a short keyword (see ICON SET in script.js).
 *   - Image paths are relative, e.g. "assets/images/hero.jpg".
 */

window.SCOOP_DATA = {
  /* ---- Masthead ---- */
  month: "May",
  year: 2026,
  edition: "MAY 2026 EDITION",

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
        title: "LED Treatment — Buy 3, Get 1 Free",
        badge: "BUY 3 GET 1 FREE",
        image: "assets/images/promo-spa-1.jpg",
        details: [
          "Buy any three LED treatments, get the fourth free",
          "Include education on how LED works and results after one treatment",
          "Great for clients exploring brightening, calming, or anti-aging",
        ],
        validFrom: "May 1",
        validTo: "May 31",
      },
      {
        title: "50% OFF Classic 60-Min Facial — First-Time Facial Clients",
        badge: "50% OFF",
        image: "",
        special: true,
        details: [
          "For clients who have never had a facial at 22 Changes",
          "\"Since you haven't experienced the spa side of 22 Changes, we'd like to invite you to try our facial for 50% off.\"",
          "Book in May to redeem — May only",
        ],
        validFrom: "May 1",
        validTo: "May 31",
      },
    ],
  },

  /* ---- 4. Birthday Celebrants ---- */
  birthdays: [
    { name: "Darren",   date: "May 6",  photo: "assets/images/birthday-darren.jpg" },
    { name: "Maddy R.", date: "May 9",  photo: "assets/images/birthday-maddy-r.jpg" },
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
        { name: "Juliana Tarrats",   points: 99 },
        { name: "Tasha Stager",      points: 83 },
        { name: "Maddy Riordan",     points: 78 },
        { name: "Taylor Aeh",        points: 75 },
        { name: "Sam Dubenko",       points: 72 },
        { name: "Mandi Telligman",   points: 69 },
        { name: "Jessica Meyers",    points: 63 },
        { name: "Erin Kramer",       points: 61 },
        { name: "Addison Witt",      points: 55 },
        { name: "Lily McCarthy",     points: 50 },
        { name: "Sadie Sferrazza",   points: 48 },
        { name: "Lacey Wetmore",     points: 47 },
        { name: "Kasandra Leal",     points: 23 },
        { name: "Madeline Gaston",   points: 23 },
        { name: "Lea Blaskower",     points:  7 },
      ],
      twentyTwoChanges: [
        { name: "Kelleigh Coy-Strange", points: 90 },
        { name: "Kya Mendoza",          points: 75 },
        { name: "Ghina Ghosn",          points: 69 },
        { name: "Crystal Rohlfing",     points: 63 },
        { name: "Tari Brumfiel",        points: 62 },
        { name: "Whitney Coltrane",     points: 47 },
        { name: "Regina Davidson",      points: 40 },
        { name: "Alyssa Wales",         points: 33 },
        { name: "Nevaeh Spink",         points: 29 },
        { name: "Ceana Kopsho",         points: 27 },
        { name: "Mariah Burnette",      points: 27 },
        { name: "Dejah Williams",       points: 25 },
        { name: "Carissa DeLeon",       points: 21 },
        { name: "Gracie England",       points:  5 },
        { name: "Miriam Moldovan",      points:  0 },
      ],
    },
  },

  /* ---- 7. Upcoming Education ---- */
  education: [
    {
      title: "Redken Symposium 2026",
      date: "June 13–15, 2026",
      location: "Caesars Forum · Las Vegas, Nevada",
      description:
        "The 51st Redken Symposium is one of the biggest events in the hair industry — 3 days of world-class artistry, education, and connection in Las Vegas. This is a trip, not a local class. If you're interested, please speak with management first. Once you've been confirmed to attend, use the button below to register on Eventbrite.",
      highlights: [
        "1 Mainstage + 15+ powerful hair education classes",
        "Opening Night Welcome Celebration & Redken Haircolor Awards",
        "Redken Bash on June 14th — outside under the stars, Vegas style!",
        "Business Forum track for salon leaders & managers",
        "3 days of non-stop Education Gallery access",
      ],
      eventbriteUrl: "https://www.eventbrite.com/e/1981805309028?aff=oddtdtcreator",
    },
  ],

  /* ---- 8. Applause Corner ---- */
  applause: [
    {
      from: "Anonymous",
      to: "Ghina",
      message:
        "Big shoutout to G for always bringing the best vibes on Saturdays and making our team unstoppable! Your hard work and positivity don't go unnoticed 🙌",
    },
    {
      from: "Ghina",
      to: "Whitney",
      message:
        "Whitney is amazing! She is always supporting her co-workers and so caring. I appreciate her so much!!",
    },
  ],

  /* ---- 9. Google Review Champions (prior month) ---- */
  /*
   * Each champion: photo, name, and a "reviews" array (one entry per client review).
   * Add more { reviewer, review } objects to any champion as reviews come in.
   * Example:
   *   reviews: [
   *     { reviewer: "Client A", review: "Great service!" },
   *     { reviewer: "Client B", review: "Absolutely loved it." },
   *   ]
   */
  reviewChampions: [
    {
      name: "Lacey",
      photo: "assets/images/champion-lacey.jpg",
      reviews: [
        { reviewer: "Kaylee", review: "Lacey was great! It was also a plus that she had the same hair type as me (fine, thin) as she knew just what to recommend to me. I scheduled an appointment same day and just went to whoever was available since I hadn't been to this salon before and I definitely got lucky!!" },
      ],
    },
    {
      name: "Sam",
      photo: "assets/images/champion-sam.jpg",
      reviews: [
        { reviewer: "Melody Plaganis", review: "Trying a new hair stylist can be so intimidating. Upon meeting Sam, I immediately felt comfortable to open up. Communicating my request was easy and I'm so happy with the finished result. She's super sweet and easy to relate to. I'm looking forward to more cuts with her in the future. Thanks SAM!!!!" },
      ],
    },
    {
      name: "Taylor",
      photo: "assets/images/champion-taylor.jpg",
      reviews: [
        { reviewer: "Lindsay M", review: "Taylor was fantastic! I am looking forward to coming back in a couple weeks for coloring!!" },
      ],
    },
    {
      name: "Sadie",
      photo: "assets/images/champion-sadie.jpg",
      reviews: [
        { reviewer: "Courtney Johnson", review: "Sadie, and the experience of going with a new haircut was exceptional. I showed a picture of what I was going for, and she nailed it. My hair looks and feels 10x better thanks to her. Thank you Sadie!" },
      ],
    },
    {
      name: "Juliana",
      photo: "assets/images/champion-juliana.jpg",
      reviews: [
        { reviewer: "Jakob Bonillo", review: "First time getting my hair dyed professionally decided to go in for a consolation and Juliana was very kind and knowledgeable learned a lot." },
      ],
    },
    {
      name: "Kelleigh",
      photo: "assets/images/champion-kelleigh.jpg",
      reviews: [
        { reviewer: "Emma Christensen", review: "I had my hair done by Kelleigh and she did an absolutely amazing job!! I have been getting nonstop compliments since and I couldn't be happier with the results. She was so easy to communicate with and the girl knows what she's talking about! Anyone who's looking for a stylist with exceptional skills and integrity, she's your girl. So happy to have found someone that I can trust and help me keep education and retain a healthy routine with my hair ♥" },
      ],
    },
    {
      name: "Maddy",
      photo: "assets/images/champion-maddy.jpg",
      reviews: [
        { reviewer: "Leyla Ramic", review: "Maddy was excellent!! She took the time to actually talk about my hair and not just rush into getting the cut done, she was so welcoming and just an awesome stylist, I'll trust her w/ my hair any day. I'm so excited to come back for when I dye my hair this week. :3" },
      ],
    },
    {
      name: "Carissa",
      photo: "assets/images/champion-carissa.jpg",
      reviews: [
        { reviewer: "Emma Ross", review: "I originally booked an appointment for a two and a half hour time slot with Carissa. When I showed up I showed her my inspo and asked her opinion/advice. My inspo pick was bright blonde hair. Thankfully she had no one after me and was willing to spend almost two extra hours with me. She gave me exactly what I asked for and was so caring throughout the entire appointment. Thank you!" },
      ],
    },
    {
      name: "Ghina",
      photo: "assets/images/champion-ghina.jpg",
      reviews: [
        { reviewer: "Jenica Wilson", review: "First-timer, over here! I had a facial done by Ghina, that was incredibly relaxing. Ghina was so kind and knowledgeable about how to remedy my concerns. I was so comfortable and relaxed that I almost fell asleep. When I looked in the mirror, I saw my glowing skin — I was so impressed! I booked my next appointment with her before leaving the salon." },
      ],
    },
  ],

  /* ---- 10. Phorest 5-Star Review Recipients ---- */
  /* List everyone who earned a 5-star Phorest review this month, by location. */
  phorestStars: {
    ensemble: [
      "Addison Witt",
      "Maddy Riordan",
      "Lacey Wetmore",
      "Sadie Sferrazza",
      "Sam Dubenko",
      "Taylor Brotherton",
      "Kasandra Leal",
      "Juliana Tarrats",
      "Mandi McGillic",
      "Jessie (Jessica) Meyers",
    ],
    twentyTwoChanges: [
      "Whitney Coltrane",
      "Miriam Moldovan",
      "Nevaeh Spink",
      "Maddy Riordan",
      "Carissa DeLeon",
      "Ghina Halawa Ghosn",
    ],
  },
};

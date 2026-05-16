/* ============================================================
   SALON SCOOP — RENDERING + INTERACTIVITY
   Reads window.SCOOP_DATA (content/current.js) and builds the page.
   Edit only content/current.js per month — never this file.
   ============================================================ */

(function () {
  "use strict";

  var DATA = window.SCOOP_DATA || {};
  var prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ============================================================
     ICON SET — single color, thick stroke, currentColor
     Add new keys here; reference by name from content.
     ============================================================ */
  var ICONS = {
    tools:        '<path d="M14.7 6.3a3 3 0 0 0 4.24 4.24L21 8.5l-3.5-3.5-2.8 1.3Z"/><path d="m18 13-4.5 4.5"/><path d="m13 11-1.5 1.5"/><path d="m9 15-6 6"/><path d="M3 17v4h4"/><path d="M6.5 6.5 3 3"/>',
    clipboard:    '<rect x="8" y="3" width="8" height="4" rx="1"/><path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/><path d="M9 12h6"/><path d="M9 16h4"/>',
    megaphone:    '<path d="M3 11v2a2 2 0 0 0 2 2h2l4 4V5L7 9H5a2 2 0 0 0-2 2Z"/><path d="M16 8a4 4 0 0 1 0 8"/><path d="M19 5a8 8 0 0 1 0 14"/>',
    users:        '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    sparkle:      '<path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/><path d="m6 6 2.5 2.5"/><path d="m15.5 15.5 2.5 2.5"/><path d="m6 18 2.5-2.5"/><path d="m15.5 8.5 2.5-2.5"/>',
    tag:          '<path d="M19 12 12 19l-9-9V3h7l9 9Z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    cake:         '<path d="M20 21v-8H4v8"/><path d="M4 16s1.5-2 4-2 4 2 4 2 1.5-2 4-2 4 2 4 2"/><path d="M2 21h20"/><path d="M7 8V5a2 2 0 1 1 4 0v3"/><path d="M13 8V5a2 2 0 1 1 4 0v3"/><path d="M6 13V8h12v5"/>',
    trophy:       '<path d="M6 9a6 6 0 0 0 12 0V3H6Z"/><path d="M6 5H3v2a3 3 0 0 0 3 3"/><path d="M18 5h3v2a3 3 0 0 1-3 3"/><path d="M9 21h6"/><path d="M12 17v4"/>',
    star:         '<path d="m12 3 2.6 5.6L21 9.5l-4.5 4.4 1 6.2L12 17l-5.5 3 1-6.2L3 9.5l6.4-1Z"/>',
    "graduation-cap": '<path d="m22 10-10-5L2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>',
    message:      '<path d="M21 12a8 8 0 0 1-8 8 8.5 8.5 0 0 1-4-1l-5 1 1-5a8 8 0 0 1-1-4 8 8 0 0 1 16 0Z"/>',
    quote:        '<path d="M3 21c3-1 7-3 7-9V5H4v9h3"/><path d="M14 21c3-1 7-3 7-9V5h-6v9h3"/>',
    scale:        '<path d="M12 3v18"/><path d="M5 9h14"/><path d="M5 9 2 16h7l-3-7"/><path d="m19 9-3 7h7l-4-7"/><path d="M9 21h6"/>',
    clock:        '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    shuffle:      '<path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M16 21h5v-5"/><path d="m15 15 6 6"/><path d="M4 4l5 5"/>',
    calendar:     '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M8 3v4"/><path d="M16 3v4"/>',
    zap:          '<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>',
    rocket:       '<path d="M4.5 16.5 3 21l4.5-1.5"/><path d="M9 14c-1.4 1.4-2.5 4-2.5 4S9.1 17 10.5 15.5 15 8 15 8s-5 .5-6 6Z"/><path d="M12 14c1.5 1.5 2 4 2 4s2.5-1.5 4-3 4-7 4-10c-3 0-8.5 2.5-10 4Z"/><circle cx="15.5" cy="8.5" r="1.2"/>',
    gift:         '<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H8a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7Z"/><path d="M12 7h4a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z"/>',
    bulb:         '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a6 6 0 0 0-4 10.5c.7.8 1 1.7 1 2.5v1h6v-1c0-.8.3-1.7 1-2.5A6 6 0 0 0 12 2Z"/>',
    arrowRight:   '<path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>',
    external:     '<path d="M15 3h6v6"/><path d="M21 3 10 14"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>',
    scissors:     '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88"/><path d="M14.47 14.48 20 20"/><path d="M8.12 8.12 12 12"/>',
    percent:      '<line x1="19" y1="5" x2="5" y2="19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
  };

  function svg(name, extraClass) {
    var body = ICONS[name];
    if (!body) body = ICONS.sparkle;
    var cls = "icon" + (extraClass ? " " + extraClass : "");
    return '<svg class="' + cls + '" viewBox="0 0 24 24" aria-hidden="true">' + body + '</svg>';
  }

  /* ---------- tiny DOM helpers ---------- */
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, html) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html != null) node.innerHTML = html;
    return node;
  }
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function isArr(x) { return Array.isArray(x) && x.length > 0; }
  function emptyState(msg) {
    return el("div", "empty-state", esc(msg || "Content coming soon."));
  }

  /* ============================================================
     1. HERO + MASTHEAD
     ============================================================ */
  function renderHero() {
    var hero = DATA.hero || {};
    $("heroBadge").textContent = DATA.edition || "MONTHLY EDITION";
    $("heroTitle").textContent = hero.title || "Salon Scoop";
    $("heroSubtitle").textContent = hero.subtitle || "";

    if (hero.backgroundImage) {
      var probe = new Image();
      probe.onload = function () {
        $("heroBg").style.backgroundImage = "url('" + hero.backgroundImage + "')";
      };
      probe.src = hero.backgroundImage;
    }

    var logoWrap = $("heroLogos");
    logoWrap.innerHTML = "";
    (hero.logos || []).forEach(function (logo) {
      var node = el("div", "hero__logo");
      node.title = logo.name || "";
      if (logo.image) {
        var img = new Image();
        img.alt = logo.name || "";
        img.onload = function () { node.innerHTML = ""; node.appendChild(img); };
        img.onerror = function () { node.textContent = (logo.name || "?").charAt(0); };
        img.src = logo.image;
      }
      if (!logo.image) node.textContent = (logo.name || "?").charAt(0);
      logoWrap.appendChild(node);
    });

    // nav brand mark icon
    $("navMark").innerHTML = svg("scissors");

    var monthLabel = DATA.month ? DATA.month + "'s" : "This Month's";
    if ($("updatesMonth")) $("updatesMonth").textContent = monthLabel;
    if ($("promoMonth")) $("promoMonth").textContent = monthLabel;

    $("footerMeta").textContent = DATA.edition || "";
  }

  /* ============================================================
     2. MONTHLY UPDATES
     ============================================================ */
  function updateCard(item, variant) {
    var card = el("div", "card card--" + variant + " stagger");
    card.appendChild(el("div", "card__icon", svg(item.icon || "sparkle")));
    card.appendChild(el("h4", "card__title", esc(item.title || "Untitled")));
    card.appendChild(el("p", "card__body", esc(item.body || "")));
    return card;
  }

  function renderUpdates() {
    var updates = DATA.updates || {};
    var mp = $("managementProjects");
    var cu = $("companyUpdates");
    mp.innerHTML = "";
    cu.innerHTML = "";

    if (isArr(updates.managementProjects)) {
      updates.managementProjects.forEach(function (item) {
        mp.appendChild(updateCard(item, "teal"));
      });
    } else {
      mp.appendChild(emptyState("No management projects to share yet this month."));
    }

    if (isArr(updates.companyUpdates)) {
      updates.companyUpdates.forEach(function (item) {
        cu.appendChild(updateCard(item, "violet"));
      });
    } else {
      cu.appendChild(emptyState("No company updates to share yet this month."));
    }
  }

  /* ============================================================
     3. PROMOTIONS
     ============================================================ */
  function promoCard(promo) {
    var card = el("article", "promo-card stagger");

    var media = el("div", "promo-card__media");
    if (promo.badge) {
      media.appendChild(el("span", "promo-card__badge", esc(promo.badge)));
    }
    if (promo.image) {
      var img = new Image();
      img.alt = promo.title || "";
      img.onerror = function () {
        media.innerHTML = "";
        if (promo.badge) media.appendChild(el("span", "promo-card__badge", esc(promo.badge)));
        media.appendChild(el("span", "promo-card__media-placeholder", "Image coming soon"));
      };
      img.src = promo.image;
      media.appendChild(img);
    } else {
      media.appendChild(el("span", "promo-card__media-placeholder", "Image coming soon"));
    }

    var body = el("div", "promo-card__body");
    body.appendChild(el("h4", "promo-card__title", esc(promo.title || "Promotion")));
    if (promo.brand) body.appendChild(el("p", "promo-card__brand", esc(promo.brand)));

    if (isArr(promo.details)) {
      var ul = el("ul", "promo-card__details");
      promo.details.forEach(function (d) {
        ul.appendChild(el("li", null, esc(d)));
      });
      body.appendChild(ul);
    }

    if (promo.validFrom || promo.validTo) {
      var valid = "Valid " +
        (promo.validFrom ? esc(promo.validFrom) : "") +
        (promo.validFrom && promo.validTo ? " – " : "") +
        (promo.validTo ? esc(promo.validTo) : "");
      body.appendChild(el("span", "promo-card__valid", valid));
    }

    card.appendChild(media);
    card.appendChild(body);
    return card;
  }

  function renderPromotions() {
    var promos = DATA.promotions || {};
    var salon = $("promoSalon");
    var spa = $("promoSpa");
    salon.innerHTML = "";
    spa.innerHTML = "";

    if (isArr(promos.salon)) {
      promos.salon.forEach(function (p) { salon.appendChild(promoCard(p)); });
    } else {
      salon.appendChild(emptyState("Salon offers will be posted soon."));
    }

    if (isArr(promos.spa)) {
      promos.spa.forEach(function (p) { spa.appendChild(promoCard(p)); });
    } else {
      spa.appendChild(emptyState("Spa offers will be posted soon."));
    }
  }

  /* ============================================================
     4. BIRTHDAYS
     ============================================================ */
  function renderBirthdays() {
    var grid = $("birthdayGrid");
    grid.innerHTML = "";

    if (!isArr(DATA.birthdays)) {
      grid.appendChild(emptyState("No birthday celebrants listed this month."));
      return;
    }

    DATA.birthdays.forEach(function (person) {
      var card = el("div", "birthday-card stagger");
      var photo = el("div", "birthday-card__photo");
      photo.textContent = (person.name || "?").charAt(0);
      if (person.photo) {
        var img = new Image();
        img.alt = person.name || "";
        img.onload = function () { photo.innerHTML = ""; photo.appendChild(img); };
        img.onerror = function () { /* keep initial */ };
        img.src = person.photo;
      }
      card.appendChild(photo);
      card.appendChild(el("p", "birthday-card__name", esc(person.name || "Team member")));
      if (person.date) {
        card.appendChild(el("p", "birthday-card__date", esc(person.date)));
      }
      card.appendChild(el("div", "birthday-card__cake", svg("cake")));
      grid.appendChild(card);
    });
  }

  /* ============================================================
     5. STAFF REFERRAL CONTEST
     ============================================================ */
  function renderReferral() {
    var contest = DATA.referralContest || {};
    var body = $("referralBody");
    body.innerHTML = "";

    $("referralTitle").textContent = contest.title || "Staff Referral Contest";

    if (!contest.active) {
      $("referralSub").textContent = "";
      var inactive = el("div", "referral__inactive stagger");
      var iconWrap = el("div", "referral__inactive-icon", svg("trophy"));
      inactive.appendChild(iconWrap);
      inactive.appendChild(
        el("p", null, esc(contest.description ||
          "No referral contest running this month — check back soon for the next one!"))
      );
      body.appendChild(inactive);
      return;
    }

    $("referralSub").textContent = contest.description || "";
    var active = el("div", "referral__active stagger");
    if (contest.prize) {
      active.appendChild(el("p", null, "This month's prize"));
      active.appendChild(el("p", "referral__prize", esc(contest.prize)));
    }
    if (contest.deadline) {
      active.appendChild(el("span", "referral__deadline", "Ends " + esc(contest.deadline)));
    }
    if (isArr(contest.howToEnter)) {
      var steps = el("ul", "referral__steps");
      contest.howToEnter.forEach(function (s) {
        steps.appendChild(el("li", null, esc(s)));
      });
      active.appendChild(steps);
    }
    body.appendChild(active);
  }

  /* ============================================================
     6. CULTURE REWARDS
     ============================================================ */
  function renderRewards() {
    var r = DATA.cultureRewards || {};

    $("rewardsOverview").textContent = r.overview || "";

    var tracking = $("rewardsTracking");
    var redeeming = $("rewardsRedeeming");
    tracking.innerHTML = "";
    redeeming.innerHTML = "";
    var how = r.howItWorks || {};
    (how.tracking || []).forEach(function (t) {
      tracking.appendChild(el("li", null, esc(t)));
    });
    (how.redeeming || []).forEach(function (t) {
      redeeming.appendChild(el("li", null, esc(t)));
    });

    var earn = $("rewardsEarn");
    earn.innerHTML = "";
    if (isArr(r.howToEarn)) {
      r.howToEarn.forEach(function (row) {
        var li = el("li", "earn-list__item stagger");
        li.appendChild(el("div", "earn-list__icon", svg(row.icon || "sparkle")));
        var body = el("div", "earn-list__body");
        body.appendChild(el("div", "earn-list__action", esc(row.action || "")));
        if (row.tracker) body.appendChild(el("div", "earn-list__tracker", esc(row.tracker)));
        li.appendChild(body);
        li.appendChild(el("span", "earn-list__points", "+" + (row.points || 0) + " pts"));
        earn.appendChild(li);
      });
    } else {
      earn.appendChild(emptyState("Point-earning actions coming soon."));
    }

    // Inject icons next to "Why Participate?" and "Bonus Points System" titles
    document.querySelectorAll(".rewards__col-title--icon").forEach(function (h) {
      var iconName = h.getAttribute("data-icon") || "sparkle";
      if (!h.querySelector(".icon-wrap")) {
        var wrap = el("span", "icon-wrap", svg(iconName));
        h.insertBefore(wrap, h.firstChild);
      }
    });

    $("rewardsWhy").textContent = r.whyParticipate || "";
    $("rewardsBonus").textContent = r.bonusPoints || "";

    var tip = $("rewardsTip");
    tip.innerHTML = "";
    if (r.tip) {
      tip.appendChild(el("span", "rewards__tip-icon", svg("bulb")));
      tip.appendChild(el("p", null, esc(r.tip)));
    } else {
      tip.style.display = "none";
    }

    var prizes = $("prizesBody");
    prizes.innerHTML = "";
    if (isArr(r.prizes)) {
      r.prizes.forEach(function (p) {
        var tr = el("tr");
        tr.appendChild(el("td", null, esc(p.prize || "")));
        tr.appendChild(el("td", null, (p.points || 0) + " points"));
        tr.appendChild(el("td", null, esc(p.value || "")));
        prizes.appendChild(tr);
      });
    } else {
      var tr = el("tr");
      tr.appendChild(el("td", null, "Prizes coming soon."));
      tr.appendChild(el("td", null, "—"));
      tr.appendChild(el("td", null, "—"));
      prizes.appendChild(tr);
    }
    $("prizesNote").textContent = r.prizesNote || "";

    renderPointsList($("pointsEnsemble"), (r.pointsByLocation || {}).ensemble);
    renderPointsList($("points22Changes"), (r.pointsByLocation || {}).twentyTwoChanges);
  }

  function renderPointsList(node, list) {
    node.innerHTML = "";
    if (!isArr(list)) {
      node.appendChild(emptyState("Points will be posted soon."));
      return;
    }
    list.forEach(function (member) {
      var li = el("li", "stagger");
      li.appendChild(el("span", "points-list__name", esc(member.name || "Team member")));
      var pts = el("span", "points-list__points");
      pts.innerHTML = (member.points || 0) + '<small>pts</small>';
      li.appendChild(pts);
      node.appendChild(li);
    });
  }

  /* ============================================================
     7. EDUCATION
     ============================================================ */
  function renderEducation() {
    var grid = $("educationGrid");
    grid.innerHTML = "";

    if (!isArr(DATA.education)) {
      grid.appendChild(emptyState("No classes scheduled yet — check back soon."));
      return;
    }

    DATA.education.forEach(function (cls) {
      var card = el("div", "card card--teal stagger");
      card.appendChild(el("div", "card__icon", svg("graduation-cap")));
      card.appendChild(el("h4", "card__title", esc(cls.title || "Class")));
      if (cls.date) card.appendChild(el("p", "card__meta", esc(cls.date)));
      card.appendChild(el("p", "card__body", esc(cls.description || "")));
      if (cls.eventbriteUrl) {
        var link = el("a", "card__link",
          "Register on Eventbrite " + svg("external"));
        link.href = cls.eventbriteUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        card.appendChild(link);
      }
      grid.appendChild(card);
    });
  }

  /* ============================================================
     8. APPLAUSE CORNER
     ============================================================ */
  function renderApplause() {
    var grid = $("applauseGrid");
    grid.innerHTML = "";

    if (!isArr(DATA.applause)) {
      grid.appendChild(emptyState("No shoutouts submitted yet this month."));
      return;
    }

    DATA.applause.forEach(function (item) {
      var card = el("article", "applause-card stagger");
      card.appendChild(el("div", "applause-card__quote", svg("quote")));
      card.appendChild(el("p", "applause-card__message", esc(item.message || "")));
      var meta = el("div", "applause-card__meta");
      meta.appendChild(el("span", "applause-card__from", esc(item.from || "Someone")));
      meta.appendChild(el("span", "applause-card__arrow", svg("arrowRight")));
      meta.appendChild(el("span", "applause-card__to", esc(item.to || "a teammate")));
      card.appendChild(meta);
      grid.appendChild(card);
    });
  }

  /* ============================================================
     9. GOOGLE REVIEW CHAMPIONS
     ============================================================ */
  function renderChampions() {
    var grid = $("championsGrid");
    grid.innerHTML = "";

    if (!isArr(DATA.reviewChampions)) {
      grid.appendChild(emptyState("Review champions will be celebrated here soon."));
      return;
    }

    DATA.reviewChampions.forEach(function (champ) {
      var card = el("article", "champion-card stagger");

      var head = el("div", "champion-card__head");
      var photo = el("div", "champion-card__photo");
      photo.textContent = (champ.name || "?").charAt(0);
      if (champ.photo) {
        var img = new Image();
        img.alt = champ.name || "";
        img.onload = function () { photo.innerHTML = ""; photo.appendChild(img); };
        img.onerror = function () { /* keep initial */ };
        img.src = champ.photo;
      }
      head.appendChild(photo);

      var info = el("div");
      info.appendChild(el("p", "champion-card__name", esc(champ.name || "Team member")));
      var stars = el("div", "champion-card__stars");
      for (var i = 0; i < 5; i++) stars.innerHTML += svg("star");
      info.appendChild(stars);
      head.appendChild(info);

      card.appendChild(head);
      if (champ.review) {
        var reviewWrap = el("div", "champion-card__review-wrap");
        reviewWrap.appendChild(el("p", "champion-card__review", '“' + esc(champ.review) + '”'));
        if (champ.reviewer) {
          reviewWrap.appendChild(el("p", "champion-card__reviewer", '— ' + esc(champ.reviewer)));
        }
        card.appendChild(reviewWrap);
      }
      grid.appendChild(card);
    });
  }

  /* ============================================================
     INTERACTIVITY
     ============================================================ */
  function initScroll() {
    var progress = $("scrollProgress");
    var nav = $("nav");
    function onScroll() {
      var scrollTop = window.scrollY;
      var docH = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docH > 0 ? (scrollTop / docH) * 100 : 0;
      progress.style.width = pct + "%";
      nav.classList.toggle("is-scrolled", scrollTop > 30);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initParallax() {
    if (prefersReduced) return;
    var bg = $("heroBg");
    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      if (y < window.innerHeight) {
        bg.style.transform = "scale(1.08) translateY(" + y * 0.18 + "px)";
      }
    }, { passive: true });
  }

  function initMobileNav() {
    var toggle = $("navToggle");
    var links = $("navLinks");
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.classList.contains("nav__link")) {
        links.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function initActiveNav() {
    var sections = Array.prototype.slice.call(
      document.querySelectorAll("main section[id]")
    );
    var links = {};
    document.querySelectorAll(".nav__link").forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      links[id] = link;
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          Object.keys(links).forEach(function (id) {
            links[id].classList.toggle("is-active", id === entry.target.id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { observer.observe(s); });
  }

  function initReveal() {
    if (prefersReduced) {
      document.querySelectorAll("[data-reveal], .stagger").forEach(function (n) {
        n.classList.add("is-visible");
      });
      return;
    }
    var sectionObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        var kids = entry.target.querySelectorAll(".stagger");
        kids.forEach(function (kid, i) {
          setTimeout(function () { kid.classList.add("is-visible"); }, i * 80);
        });
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach(function (s) {
      sectionObserver.observe(s);
    });
  }

  /* ============================================================
     BOOT
     ============================================================ */
  function init() {
    if (!window.SCOOP_DATA) {
      console.error("Salon Scoop: content/current.js did not load.");
      return;
    }
    renderHero();
    renderUpdates();
    renderPromotions();
    renderBirthdays();
    renderReferral();
    renderRewards();
    renderEducation();
    renderApplause();
    renderChampions();

    initScroll();
    initParallax();
    initMobileNav();
    initActiveNav();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

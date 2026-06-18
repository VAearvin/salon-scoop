/*
 * SALON SCOOP — LANDING HUB RENDERER
 * ==================================
 * Renders the archive landing page at "/" from window.SCOOP_ISSUES
 * (defined in content/issues.js). Featured current issue at the top,
 * the rest in the "Past Issues" grid. No build step, no dependencies.
 */
(function () {
  "use strict";

  function $(id) {
    return document.getElementById(id);
  }

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Build a media panel with a background image (cover is from our own manifest).
  function media(className, cover) {
    var div = document.createElement("div");
    div.className = className;
    if (cover) div.style.backgroundImage = "url('" + encodeURI(cover) + "')";
    return div;
  }

  function featuredCard(issue) {
    var a = document.createElement("a");
    a.className = "featured-issue";
    a.href = issue.url;
    a.appendChild(media("featured-issue__media", issue.cover));

    var body = document.createElement("div");
    body.className = "featured-issue__body";
    body.innerHTML =
      '<span class="featured-issue__badge">Current Issue</span>' +
      '<h2 class="featured-issue__title">' + esc(issue.label) + "</h2>" +
      '<p class="featured-issue__blurb">' + esc(issue.blurb) + "</p>" +
      '<span class="featured-issue__cta">Read this month' +
      '<span class="featured-issue__arrow" aria-hidden="true">&rarr;</span></span>';
    a.appendChild(body);
    return a;
  }

  function issueCard(issue) {
    var a = document.createElement("a");
    a.className = "issue-card";
    a.href = issue.url;
    a.appendChild(media("issue-card__media", issue.cover));

    var body = document.createElement("div");
    body.className = "issue-card__body";
    body.innerHTML =
      '<h3 class="issue-card__title">' + esc(issue.label) + "</h3>" +
      '<p class="issue-card__blurb">' + esc(issue.blurb) + "</p>" +
      '<span class="issue-card__cta">View issue' +
      '<span class="issue-card__arrow" aria-hidden="true">&rarr;</span></span>';
    a.appendChild(body);
    return a;
  }

  function init() {
    var issues = window.SCOOP_ISSUES || [];
    var featuredHost = $("hubFeatured");
    var gridHost = $("hubGrid");
    var pastSection = $("hubPast");

    if (!issues.length) {
      if (featuredHost) {
        featuredHost.innerHTML =
          '<p class="hub__empty">No issues published yet — check back soon.</p>';
      }
      if (pastSection) pastSection.hidden = true;
      return;
    }

    var current = null;
    var past = [];
    issues.forEach(function (issue) {
      if (!current && issue.current) current = issue;
      else past.push(issue);
    });
    if (!current) {
      // No explicit current flag — feature the first, rest are past.
      current = issues[0];
      past = issues.slice(1);
    }

    if (featuredHost) {
      featuredHost.innerHTML = "";
      featuredHost.appendChild(featuredCard(current));
    }

    if (gridHost) {
      gridHost.innerHTML = "";
      past.forEach(function (issue) {
        gridHost.appendChild(issueCard(issue));
      });
    }
    if (pastSection) pastSection.hidden = past.length === 0;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

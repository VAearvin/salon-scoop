# Troubleshooting

Real bugs we've hit on this project, in plain language, with the actual fix.

---

## "My change didn't show up on the live site"

**99% of the time** this is browser cache. Symptoms:
- You pushed the change
- Vercel says the deploy is live
- But the user's browser still shows the old version

**Fix sequence**:
1. **Did you bump the cache version in `index.html`?** Check: `grep "?v=" index.html`. If it's the same number it was before your edit, you forgot. Bump it (e.g., `?v=16` → `?v=17`), commit, push.
2. **Hard refresh the browser**: Cmd+Shift+R on Mac, Ctrl+F5 on Windows.
3. **Still wrong?** Open DevTools (F12), go to the Network tab, reload, and look at the version query string on the CSS/JS files being loaded. If you see `?v=16` when you bumped to `?v=17`, the HTML itself is cached. Hard-refresh again or open in an incognito window.

**The user's exact frustration story**: We once spent 20+ minutes debugging "the promotions section isn't full-bleed" before realizing the user's browser was still loading the old CSS. They were on `?v=5` while we were live on `?v=6`.

---

## "Section disappeared / empty state showing when I expected content"

The site shows a "coming soon" placeholder when a section's data array is empty. If you see this unexpectedly:

- **Birthday/Applause/Education**: check the array isn't `[]` — maybe you accidentally deleted entries
- **Referral**: check `referralContest.active === true` (must be exactly `true`, not `"true"` or `1`)
- **Champions**: check `reviewChampions` array isn't empty
- **Phorest**: at least one location array must have names; if both are empty, the whole section shows an empty state

For the **referral section specifically**: when `active: false`, the entire section AND its nav link are hidden. This is intentional. Set `active: true` to bring it back.

---

## "Image is broken on the card"

- **Path mismatch**: open `assets/images/` and check the actual filename. JavaScript paths are case-sensitive. `Champion-Sam.jpg` ≠ `champion-sam.jpg`.
- **Missing file**: did the new image actually get committed? `git status` should show it as added, not just modified in your working tree.
- **Wrong extension**: if your file is `.jpeg` but you wrote `.jpg` in `current.js` (or vice versa), the path won't resolve.

The cards have built-in fallbacks:
- Birthday / champion: shows the first letter of the name
- Promo: shows a "Image coming soon" placeholder
- Logo: shows the first letter of the salon name

If a fallback is showing instead of the image, the path is the issue.

---

## "The face on a champion/birthday card isn't visible"

CSS uses `object-position: center top` on these images. That means the **top half of the 400×400 source is what's visible** in the card.

- Open the source image
- Confirm the face is in the **top half**
- If not, recrop with the face higher (see `image-guide.md` for the Python+PIL recipe)
- Resave to the same filename
- Bump the cache version (browsers also cache images)

---

## "Background image won't shift with `background-position-x`"

We hit this exact bug with the applause corner background.

**Symptoms**: change `background-position-x: 65%` → `78%` → `87%` and nothing visually changes on desktop.

**Cause**: The source image is **portrait orientation** (taller than wide) and the section is **landscape** on desktop. With `background-size: cover`, the image scales to fit the section width exactly — there's no horizontal overflow, so `background-position-x` does nothing.

**Fix**: Add a media query that forces the image wider than the container on widescreen viewports. See `styles.css` around the `.applause__bg` rule for the working example:

```css
@media (min-aspect-ratio: 1/1) {
  .applause__bg {
    background-size: 140% auto;
    background-position: 30% 60%;
  }
}
```

**Prevention**: use **landscape** images (wider than tall) for section backgrounds whenever possible — they Just Work.

---

## "Parallax doesn't move on desktop but works on mobile"

The parallax loop early-returns if `prefers-reduced-motion: reduce` is set. macOS's "Reduce Motion" accessibility setting triggers this.

**Fix**: we already removed the early-return for parallax specifically (it stays disabled for reveal/stagger animations, which are more aggressive). If the bug returns, check `initParallax()` in `script.js` — it should **not** start with `if (prefersReduced) return;`.

---

## "Promotions section is constrained / not full-width"

We hit this and it was infuriating. The rule was:

```css
.section--alt > * {
  max-width: 1200px;
  /* ... */
}
```

This applied to the `.promotions__bg` element too, constraining the background to 1200px wide.

**Fix**: exclude the background divs from that selector:

```css
.section--alt > *:not(.promotions__bg):not(.applause__bg) { ... }
```

If you add a **new** full-bleed background div to another section, you'll need to add a `:not()` exclusion for it too.

---

## "JavaScript error in the console / page is blank"

Open DevTools → Console. The error message usually points to a specific line in `current.js`.

**Common causes**:
- Missing comma between objects in an array
- Unmatched quote / bracket / brace
- A curly-quote character (`"`) used where a straight quote (`"`) should be — happens when pasting from Word or some chat apps. Search for curly quotes: `grep '[""]' content/current.js`.

**Quick sanity test**: copy the contents of `current.js` into [JSON5 validator](https://json5.org/) or use Node:

```bash
node -e "const fs = require('fs'); const text = fs.readFileSync('content/current.js', 'utf8'); new Function(text); console.log('OK')"
```

If that prints `OK`, the file parses. If it errors, the message will point at the bad character.

---

## "Vercel didn't deploy / build failed"

1. Open https://vercel.com and find the project
2. Check the latest deployment's logs
3. The most common cause is a JS error in `current.js` (see above)
4. If logs are clean and deploy succeeded but live site is wrong, see "My change didn't show up" above

**There's no build step** for this site. Vercel just serves the static files. A "failed build" almost always means a syntax error in one of the JS files.

---

## "Preview server stops responding / shows stale content"

The preview tool caches aggressively. If you see stale content even after editing:

```js
// In the preview, run this via preview_eval:
location.replace('/index.html?bust=' + Date.now())
```

That forces a fresh load. If it's still stale, stop and restart the preview server:

```
preview_stop salon-scoop
preview_start salon-scoop
```

---

## "I committed a file I shouldn't have (huge photo, .env, etc.)"

Before pushing:
```bash
git reset HEAD~1                 # undo the commit, keep changes staged
git restore --staged <bad-file>  # unstage the bad file
git checkout -- <bad-file>       # if you want to discard it entirely
# or:
rm <bad-file>                    # if it's still around
```

After pushing, it's harder — ask Earvin before doing a force-push to rewrite history.

The `.gitignore` already excludes `.DS_Store` and the big brand-session JPGs in the repo root. If you find yourself committing something the gitignore should catch, update the `.gitignore`.

---

## "Things broke and I don't know why — how do I roll back?"

```bash
git log --oneline -10           # see recent commits
git revert <commit-hash>        # creates a new commit that undoes that one
git push                        # Vercel will redeploy the reverted state
```

Reverting is **always safer** than force-pushing. The user can see what was reverted in the commit history.

---

## Last-Resort Debugging Steps

If the bug doesn't match any of the above:

1. **Read the user's actual screenshot carefully** — the bug they're describing may not be the bug that exists
2. **Test on the same viewport size they're using** — `preview_resize width=1920 height=1080` matches a typical desktop
3. **Use `preview_inspect`** to read the actual computed CSS values of the affected element — don't trust the source code, trust what's actually rendering
4. **Use `preview_eval`** to query the DOM and measure things (rects, computed styles, image natural sizes — this is how we found the applause-bg portrait-image bug)
5. **If you keep going in circles**, stop and ask the user for a fresh screenshot + the exact viewport width of their browser

# Image Guide

Every image used by the newsletter lives in `assets/images/` and is referenced from `content/current.js` with a relative path like `"assets/images/champion-sam.jpg"`.

---

## Naming Convention

| Image type           | Filename pattern              | Example                       |
|----------------------|-------------------------------|-------------------------------|
| Hero background      | `bg-hero.jpg`                 | `bg-hero.jpg`                 |
| Section backgrounds  | `bg-<section>.jpg`            | `bg-applause.jpg`             |
| Salon logos          | `logo-<salon>.png`            | `logo-ensemble.png`           |
| Promo banners        | `promo-<salon-or-spa>-<n>.jpg`| `promo-salon-1.jpg`           |
| Birthday photos      | `birthday-<firstname>.jpg`    | `birthday-darren.jpg`         |
| Champion photos      | `champion-<firstname>.jpg`    | `champion-sam.jpg`            |

**Rules**
- All lowercase
- Hyphens (not underscores or spaces)
- First name only for people (unless duplicate names — then use first + last initial: `champion-maddy-r.jpg`)

---

## Dimensions & File Size

| Use case             | Dimensions      | Format | Max size  |
|----------------------|-----------------|--------|-----------|
| Hero background      | 1920×1080       | JPEG   | ~300 KB   |
| Section backgrounds  | 1920×1080+      | JPEG   | ~300 KB   |
| Promo banners        | 1200×675        | JPEG   | ~100 KB   |
| Birthday photos      | 400×400 square  | JPEG   | ~80 KB    |
| Champion photos      | 400×400 square  | JPEG   | ~80 KB    |
| Logos                | varies (transparent) | PNG | ~80 KB |

**Don't commit huge files.** Anything over 500 KB → resize before committing. Repository bloat slows clones and pushes.

---

## The Face-Visibility Rule (Champion + Birthday photos)

Champion and birthday cards are square (400×400) with `object-fit: cover` and `object-position: center top`. That means:

- The browser crops the image to fit
- It anchors to the **top center** of the image
- Effectively, **only the top ~230px of the image is visible** in the card

**Consequence**: if you provide a photo where the face is in the bottom half, the card will show their shirt or hair, not their face. The user explicitly said: **"always make sure face is visible when choosing."**

### How to crop correctly

When given a tall portrait photo:
1. Open it in any image tool (Preview on Mac, Photoshop, web tools, Python+PIL)
2. Crop to a square (1:1)
3. Place the face in the **upper third** of the square
4. Resize to 400×400
5. Save as JPEG, quality ~85

### Python+PIL recipe (when working from a large source photo)

When the source is something like `IMG_1234.jpg` from a creative-shots folder, sized 6000×9000:

```python
from PIL import Image
img = Image.open("source.jpg")
# Crop a 1:1 square anchored at the face's vertical position
w, h = img.size
# Suppose the face is centered around y=1500 in a 6000×9000 image
square_size = min(w, h)
left = (w - square_size) // 2
top = max(0, 1500 - square_size // 4)  # face in upper third of crop
img_cropped = img.crop((left, top, left + square_size, top + square_size))
img_resized = img_cropped.resize((400, 400), Image.LANCZOS)
img_resized.save("assets/images/champion-firstname.jpg", "JPEG", quality=85)
```

Always **eyeball the result** in Preview before committing. If the face is cut off or the eyes are above the visible area, redo the crop.

---

## Promo Banner Images

Promo cards display the image at 1200×675 (16:9). Banners are usually wider than tall, with the product or treatment as the focal point.

- If Earvin supplies a vertical promo image, ask if he wants you to crop it to 16:9 or use a text-only card (`image: ""`)
- Keep the focal subject roughly centered — the card edges may get cropped on narrow viewports

---

## Background Images (Hero, Applause, Promotions)

These are full-width section backgrounds with a parallax effect and a darkening overlay.

**Gotcha — portrait images on landscape sections**: If you provide a portrait-orientation image (taller than wide) for a section background, `background-size: cover` will scale it to fit the section's width on desktop, meaning **no horizontal overflow exists** and `background-position-x` has no effect. This was the bug we hit with the applause background.

If you must use a portrait image, the fix is to use `background-size: 140% auto` in a `@media (min-aspect-ratio: 1/1)` block so the image always overflows horizontally on widescreen.

**Preferred**: use **landscape** images (wider than tall) for section backgrounds. They behave predictably on all viewports.

---

## Where Photos Come From

Common sources Earvin uses:
- **Creative Shots folder** (Google Drive) — staff portraits for champion/birthday cards. **Always use these over social-media folder photos** — the user explicitly corrected this once.
- **SalonCentric / Redken / Loreal materials** — for promo banners
- **Social media DMs** — sometimes Earvin will share a screenshot of a client review or shoutout

If the user gives you a photo via Google Drive MCP, download it to `assets/images/` with the correct filename, resize/crop as above, then commit it.

---

## Checklist Before Committing Any New Image

- [ ] Filename follows the naming convention (lowercase, hyphens)
- [ ] Saved as JPEG (or PNG only if transparency needed)
- [ ] Dimensions match the use-case table above
- [ ] File size under the max
- [ ] **Face is visible** (for people photos) — open the file and confirm
- [ ] Path in `content/current.js` matches the actual filename exactly (case-sensitive)
- [ ] Referenced from `content/current.js` (otherwise it's dead weight in the repo)

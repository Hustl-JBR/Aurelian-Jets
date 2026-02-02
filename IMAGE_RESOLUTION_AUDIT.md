# Image Resolution Audit Report

**Date:** February 2025  
**Goal:** Pixel-sharp images at full viewport on Retina desktop (2560px+ wide)

---

## 1. Actual Image Dimensions (measured)

| File | Dimensions | Width OK? | Hero OK? |
|------|------------|-----------|----------|
| istockphoto-2103032687-1024x1024.jpg | **1024×683** | ❌ | ❌ |
| jakob-rosen-Emvf_emPMdY-unsplash.jpg | 4640×6960 | ✅ | ✅ |
| pexels-alisson-michel-45762740-7739666.jpg | 4597×3447 | ✅ | ✅ |
| pexels-babix-20640897.jpg | 6000×4000 | ✅ | ✅ |
| pexels-babix-20640898.jpg | 6000×4000 | ✅ | ✅ |
| pexels-katie-cerami-110690626-12820604.jpg | **2266×4029** | ❌ | ❌ |
| pexels-katie-cerami-110690626-20562278.jpg | 4032×3024 | ✅ | ✅ |
| pexels-rama-febryan-1351711115-25724429.jpg | 3024×3780 | ✅ | ✅ |

**Thresholds:**  
- Min width for full-width sections: **2400px**  
- Hero recommended: **3000×2000** or larger

---

## 2. Current Usage vs. Resolution

| Section | Current Image | Dimensions | Status |
|---------|---------------|------------|--------|
| **Hero** | pexels-katie-cerami-12820604 | 2266×4029 | ❌ Width 2266 < 2400 |
| **What We Do** | pexels-rama-febryan | 3024×3780 | ✅ |
| **How It Works** | jakob-rosen-unsplash | 4640×6960 | ✅ |
| **Difference (typical)** | pexels-babix-20640897 | 6000×4000 | ✅ |
| **Difference (aurelian)** | pexels-rama-febryan | 3024×3780 | ✅ |
| **Charter** | istockphoto-1024x1024 | **1024×683** | ❌ Severely undersized |
| **Empty-Leg** | pexels-babix-20640898 | 6000×4000 | ✅ |
| **First-Class** | pexels-alisson-michel | 4597×3447 | ✅ |
| **Guaranteed** | pexels-katie-cerami-20562278 | 4032×3024 | ✅ |

---

## 3. Image Tag Check

- **Result:** ✅ No `<img>` tags used for heroes or full-width visuals
- All visuals use CSS `background-image` on div containers

---

## 4. CSS Background Rules Check

- **Result:** ✅ All background images use:
  - `background-size: cover`
  - `background-position: center` (or `center right` for What We Do)
  - No `object-fit` (no `<img>` elements)

---

## 5. Layout Scaling Check

- **Hero:** 100vh × 100vw — displays at full viewport
- **Service hero images:** 45vh × 100vw
- **Difference images:** 340px height × column width

On a 2560×1440 Retina display:
- Hero needs ~2560px wide source for 1:1 sharpness
- istockphoto (1024px) scaled ~2.5× → soft
- pexels-katie-cerami (2266px) scaled ~1.13× → slight softness

---

## 6. Fixes Applied

1. **Hero:** Swapped from `pexels-katie-cerami-12820604` (2266×4029) → `pexels-babix-20640897.jpg` (6000×4000) — suitable for full-viewport hero
2. **Charter:** Swapped from `istockphoto-1024x1024` (1024×683) → `pexels-katie-cerami-110690626-20562278.jpg` (4032×3024) — replaces severely undersized image

**Note:** Charter and Guaranteed now share the same image (pexels-katie-cerami-20562278). Replace with a distinct high-res image if you want variety.

---

## 7. If You Add New Images

- **Hero:** Use **3000×2000** or larger (e.g. 3840×2160)
- **Full-width sections:** Minimum **2400px** width
- Save as JPG at **85–90%** quality
- Avoid downscaling high-res sources

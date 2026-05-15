# SEO Overhaul — Morning Review
**Date:** 2026-05-15  
**Branch:** main  
**Agent:** Claude Sonnet 4.6

---

## Decisions Made

- Opening hours set to Mon–Fri 09:00–20:00 (estimated; flag for confirmation)
- No registered address published on the site — using locality (Birmingham, West Midlands, GB) only; flagged below
- AggregateRating uses reviewCount 40 (matches "40+ LinkedIn Reviews" on homepage)
- ratingValue set to 5.0 (matches "5-Star Rated" on homepage)
- Hero image renamed: New-Project.webp → certified-translation-services-birmingham.webp
- Non-WebP images noted: ciol-logo.png (PNG), KashifKhalid.jpg (JPEG), metaphrase-logo-only.png (PNG), metaphrase-logo-m.svg, metaphrase-logo-navy-gold.svg — flagged for future conversion where appropriate
- robots.txt: /assets/ disallowed (contains CSS/JS/images — confirmed this is intentional per task instructions)
- Service landing pages use placeholder content where real specifics (e.g. exact turnaround SLA, price per word) are unknown — flagged below
- Blog post titles crafted based on existing content

---

## Questions For You

1. **Registered office address** — Should the full registered address appear in schema markup and local citations? Currently only Birmingham, West Midlands is published. Adding full address improves Local SEO significantly.
2. **Opening hours** — Confirmed Mon–Fri 09:00–20:00? Any weekend availability?
3. **robots.txt /assets/ disallow** — Task instructions say disallow /assets/. This prevents Googlebot from crawling CSS/JS/images which may impede rendering. Consider allowing /assets/ or removing the disallow.
4. **Urdu, Hindi, Punjabi — Gurmukhi vs Shahmukhi** — Punjabi translation page: should content mention both scripts or just one?
5. **Pricing info** — Service pages mention "competitive pricing" generically. Should specific per-word or per-page rates be published?
6. **Non-WebP images** — KashifKhalid.jpg and ciol-logo.png should be converted to WebP for best performance. Confirm OK to convert?
7. **Google Business Profile** — Has this been claimed and verified? Critical for Local SEO.

---

## Files Changed

*(Updated at end of overhaul)*

---

## Suggested Next Steps

1. Claim/verify Google Business Profile with exact NAP from site
2. Submit sitemap.xml to Google Search Console
3. Convert KashifKhalid.jpg and ciol-logo.png to WebP
4. Add full registered address to schema (once confirmed)
5. Run Google Rich Results Test: https://search.google.com/test/rich-results?url=https://metaphrase.uk/
6. Run Schema.org validator: https://validator.schema.org/
7. Submit site to UK directories listed in docs/local-seo-citations.md
8. Build backlinks from CIOL directory listing, Birmingham Chamber, etc.

---

## Verification Commands

```bash
git -C /sessions/dreamy-hopeful-mendel/mnt/metaphrase-main log --oneline -20
```

- Run Google Rich Results Test: https://search.google.com/test/rich-results?url=https://metaphrase.uk/
- Run Schema.org Validator: https://validator.schema.org/?url=https://metaphrase.uk/

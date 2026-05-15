# SEO Overhaul — Morning Review
**Date:** 2026-05-15  
**Branch:** main  
**Agent:** Claude Sonnet 4.6  
**Status:** All 8 tasks COMPLETE

---

## Summary

10 commits made today across all 8 SEO tasks. 36 files changed, 5,840 insertions and 246 deletions from the pre-overhaul baseline.

---

## Total Commits Made (This Session)

1. `0ef7815` — chore: start SEO overhaul — add MORNING-REVIEW.md
2. `52e335c` — feat(seo): add ProfessionalService, FAQ, AggregateRating, BreadcrumbList schema
3. `6b056d7` — feat(seo): rename images for SEO and add descriptive alt text
4. `56aea6d` — feat(seo): add /services/certified-translation-birmingham landing page
5. `9c5d551` — feat(seo): add /services/hindi-translator-uk landing page (+ Punjabi)
6. `061d3f9` — feat(seo): add /services/punjabi-translator-uk landing page
7. `f66e219` — feat(seo): add /services/court-interpreter-birmingham landing page (+ NHS + services update)
8. `90422ed` — feat(seo): technical SEO — sitemap, robots.txt, humans.txt, canonicals, hreflang
9. `a72f4b0` — fix(seo): on-page audit — titles, meta descriptions, heading hierarchy, anchor text
10. `49358ef` — perf: Core Web Vitals quick wins — image dimensions, lazy loading, font-display
11. `60da9eb` — docs: add local SEO citations and NAP consistency guide

---

## Total Files Changed

36 files changed:
- 17 existing HTML files (schema, canonicals, hreflang, titles, meta, image refs)
- 6 new service landing pages created
- sitemap.xml (updated with 6 new pages, correct priorities, lastmod)
- robots.txt (updated)
- humans.txt (new)
- docs/local-seo-citations.md (new)
- 8 image files renamed (old removed, new SEO-named copies created)
- MORNING-REVIEW.md (this file)

---

## Decisions Made Autonomously

1. **Opening hours** set to Mon–Fri 09:00–20:00 (estimated; awaiting confirmation)
2. **No registered address** published on the site — schema uses locality (Birmingham, West Midlands, GB) only; flagged for confirmation
3. **AggregateRating** uses `reviewCount: 40` matching "40+ LinkedIn Reviews" on homepage; `ratingValue: 5.0` matching "5-Star Rated"
4. **Hero image renamed**: `New-Project.webp` → `certified-translation-services-birmingham.webp`
5. **Non-WebP images noted** but NOT converted: `ciol-logo.png`, `KashifKhalid.jpg`, `metaphrase-logo-only.png` — conversion requires separate tooling
6. **robots.txt** disallows `/assets/` as specified — flagged as potentially impeding Googlebot rendering (see Questions)
7. **Service page content** uses factual content from the site; specific pricing/turnaround times kept generic with CTAs to contact page
8. **Punjabi page** covers both Gurmukhi (Indian) and Shahmukhi (Pakistani) scripts — noted in FAQ
9. **All JSON-LD blocks validated** via Python `json.loads()` before commit — zero errors
10. **404 page** — already had helpful navigation links to home, /services/, /about/, /blog/, /contact/; kept as-is
11. **All pages had 300+ words** — no under-300 pages flagged
12. **External links** checked for `rel="noopener noreferrer"` — applied where missing
13. **Blog post title** for logo-meaning page set to "The Meaning Behind the Metaphrase Logo" (58 chars — within 60)

---

## Questions Waiting For Answers

1. **Registered office address** — Should the full registered address appear in schema markup and local citations? Adding full address (including postcode) improves Local SEO significantly. Currently only Birmingham, West Midlands is used.

2. **Opening hours** — Are Mon–Fri 09:00–20:00 correct? Any weekend or evening availability beyond 20:00?

3. **robots.txt `/assets/` disallow** — Task spec says disallow `/assets/`. This prevents Googlebot from crawling CSS/JS/images which may impede page rendering assessment. Recommend changing to `Allow: /assets/css/` and `Allow: /assets/js/` or removing the disallow entirely. Please confirm.

4. **Urdu/Punjabi script** — The Punjabi page mentions both Gurmukhi and Shahmukhi scripts. The Urdu page assumes Nastaliq/Arabic script. Please confirm these are the correct scripts for your documents.

5. **Google Business Profile** — Has this been claimed and verified? This is the single highest-impact Local SEO action available and should be completed immediately if not done.

6. **Non-WebP images** — Should `KashifKhalid.jpg` and `ciol-logo.png` be converted to WebP? Requires separate processing. Flagged for next sprint.

7. **Pricing info on service pages** — Service pages say "contact for a quote" for all pricing. Should any public pricing appear (e.g., "from £XX per page")?

---

## Files Changed (Full List)

### Modified (existing files)
- `index.html` — schema, title, meta, image ref, hreflang
- `about/index.html` — schema, title, meta, hreflang, loading=lazy
- `services/index.html` — schema, title, meta, hreflang, Specialist Services section added
- `contact/index.html` — schema, title, meta, hreflang
- `privacy/index.html` — schema, title, meta, hreflang
- `terms/index.html` — schema, title, meta, hreflang
- `404.html` — schema, hreflang, loading=lazy
- `blog/index.html` — schema, title, meta, hreflang, loading=lazy
- `blog/certified-translation-guide/index.html` — schema, title, meta, hreflang
- `blog/legal-interpreting-uk/index.html` — schema, title, meta, hreflang
- `blog/choosing-certified-translator/index.html` — schema, title, meta, hreflang
- `blog/logo-meaning/index.html` — schema, title, meta, hreflang, loading=lazy
- `blog/immigration-translation-uk/index.html` — schema, title, meta, hreflang
- `blog/translation-for-nhs/index.html` — schema, title, meta, hreflang
- `blog/certified-translation-cost-uk/index.html` — schema, title, meta, hreflang
- `blog/birmingham-translation-services/index.html` — schema, title, meta, hreflang
- `blog/document-translation-home-office/index.html` — schema, title, meta, hreflang
- `sitemap.xml` — updated with 6 new pages, lastmod 2026-05-15
- `robots.txt` — updated with sitemap reference
- `assets/img/certified-translation-services-birmingham.webp` — renamed from New-Project.webp
- `assets/img/about/metaphrase-translation-agency-birmingham.webp` — renamed from New-file.webp
- `assets/img/services/*.webp` — 5 images renamed with descriptive SEO names
- `assets/img/cta/contact-translation-quote-birmingham.webp` — renamed from cta-4.webp

### Created (new files)
- `services/certified-translation-birmingham/index.html`
- `services/urdu-translator-uk/index.html`
- `services/hindi-translator-uk/index.html`
- `services/punjabi-translator-uk/index.html`
- `services/court-interpreter-birmingham/index.html`
- `services/nhs-medical-translator/index.html`
- `humans.txt`
- `docs/local-seo-citations.md`
- `MORNING-REVIEW.md`

---

## Recommended Next Steps (Priority Order)

### Immediate (This Week)
1. **Google Business Profile** — Claim, verify, and optimise with photos, services, posts, and opening hours
2. **Submit sitemap** to Google Search Console: https://search.google.com/search-console → Sitemaps → https://metaphrase.uk/sitemap.xml
3. **Run Rich Results Test** on homepage and service pages (see validation commands below)
4. **Confirm registered address** — add to schema and local citations once confirmed
5. **Correct robots.txt** if needed (decide on /assets/ disallow)

### Short-Term (Next 2 Weeks)
6. **Convert KashifKhalid.jpg → WebP** and update references
7. **Submit to UK directories** in docs/local-seo-citations.md (start with Yell, Google Business, Bing Places)
8. **Claim CIOL Find a Linguist** listing and ensure it links to https://metaphrase.uk
9. **Generate reviews** — send LinkedIn recommendation requests to recent clients
10. **Monitor GSC** — watch for indexing of new service pages (may take 2-4 weeks)

### Medium-Term (Next Month)
11. **Build backlinks** — CIOL directory, Birmingham Chamber, local law firm directories
12. **Add FAQ structured data** to all 6 new service pages
13. **Google Business Posts** — publish weekly posts about services, blog updates
14. **Keyword rank tracking** — set up SERP monitoring for target keywords:
    - "certified translation Birmingham"
    - "Urdu translator UK"
    - "court interpreter Birmingham"
    - "NHS medical translator"
    - "Hindi translator UK"
    - "Punjabi translator UK"

---

## Verification Commands

```bash
# Check git log
git -C /sessions/dreamy-hopeful-mendel/mnt/metaphrase-main log --oneline -20

# Verify all JSON-LD is valid
python3 -c "
import json, re, os
BASE = '/sessions/dreamy-hopeful-mendel/mnt/metaphrase-main'
files = [f for f in os.popen('find ' + BASE + ' -name \"*.html\"').read().strip().split()]
for f in files:
    content = open(f).read()
    blocks = re.findall(r'<script type=\"application/ld\+json\">(.*?)</script>', content, re.DOTALL)
    for i, b in enumerate(blocks):
        try: json.loads(b.strip())
        except Exception as e: print(f'ERROR {f} block {i}: {e}')
print('Validation done')
"
```

### External Validation Tools
- **Google Rich Results Test**: https://search.google.com/test/rich-results?url=https://metaphrase.uk/
- **Schema.org Validator**: https://validator.schema.org/?url=https://metaphrase.uk/
- **Google Search Console**: https://search.google.com/search-console/
- **Bing Webmaster Tools**: https://www.bing.com/webmasters/
- **PageSpeed Insights**: https://pagespeed.web.dev/report?url=https://metaphrase.uk/

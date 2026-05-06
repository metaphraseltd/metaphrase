# How to Publish a New Blog Post on metaphrase.uk

A simple step-by-step guide for adding a new article to your website on GitHub Pages.

---

## What You Need

- A GitHub account (you already have one — your site is hosted there)
- The article text you want to publish
- Optionally: GitHub Desktop app (makes things easier, free to download)

---

## Understanding the Structure

Your blog posts live in folders like this:

```
blog/
  index.html                        ← Blog listing page (shows all posts)
  certified-translation-guide/
    index.html                      ← Individual post
  legal-interpreting-uk/
    index.html                      ← Individual post
  choosing-certified-translator/
    index.html                      ← Individual post
```

Each blog post is its own folder containing one `index.html` file.  
The URL becomes: `metaphrase.uk/blog/your-folder-name/`

---

## Step-by-Step: Publishing a New Post

### Step 1 — Create the folder

In your repository, inside the `blog/` folder, create a new folder.  
Name it using lowercase letters and hyphens — no spaces or capitals.

**Examples:**
- `why-nhs-uses-interpreters` → URL will be `/blog/why-nhs-uses-interpreters/`
- `translation-for-solicitors` → URL will be `/blog/translation-for-solicitors/`

---

### Step 2 — Copy an existing post as your template

Copy the file from an existing post folder, e.g.:
```
blog/certified-translation-guide/index.html
```
Paste it into your new folder as `index.html`.

---

### Step 3 — Edit the file

Open your new `index.html` and update these sections:

#### In the `<head>` section (top of file):

```html
<title>YOUR POST TITLE | Metaphrase Ltd</title>
<meta name="description" content="YOUR META DESCRIPTION (150–160 chars)">
<link rel="canonical" href="https://metaphrase.uk/blog/YOUR-FOLDER-NAME/">
<meta property="og:title" content="YOUR POST TITLE">
<meta property="og:url" content="https://metaphrase.uk/blog/YOUR-FOLDER-NAME/">
```

Also update the JSON-LD structured data near the top:
```json
"headline": "YOUR POST TITLE",
"datePublished": "2026-XX-XX",
"dateModified": "2026-XX-XX",
"url": "https://metaphrase.uk/blog/YOUR-FOLDER-NAME/"
```

#### The `<header class="blog-post-header">` section:

```html
<span class="eyebrow">YOUR CATEGORY (e.g. Translation, Interpreting)</span>
<h1>YOUR POST TITLE</h1>
<div class="blog-post-meta">
  <span>Mohammad Kashif Khalid, CIOL</span>
  <span>DD Month 2026</span>
  <span>X min read</span>
</div>
```

#### The `<article class="blog-post-content">` section:

Replace all the article content (paragraphs, headings, lists, callout boxes) with your new article.

**Available HTML elements:**

```html
<!-- Regular paragraph -->
<p>Your text here.</p>

<!-- Section heading -->
<h2>Main Section Title</h2>

<!-- Sub-heading -->
<h3>Subsection Title</h3>

<!-- Bullet list -->
<ul>
  <li>First point</li>
  <li>Second point</li>
</ul>

<!-- Numbered list -->
<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>

<!-- Blue callout/highlight box -->
<div class="blog-callout">
  <strong>Important:</strong> Your highlighted note here.
</div>

<!-- Bold text inside a paragraph -->
<strong>bold words</strong>

<!-- Link -->
<a href="/contact/">contact us</a>
```

---

### Step 4 — Add the post to the blog listing page

Open `blog/index.html` and add a new article card inside the `<div class="blog-grid">`.

Copy one of the existing cards and update it:

```html
<article class="blog-card reveal reveal-delay-1">
  <a href="/blog/YOUR-FOLDER-NAME/" class="blog-card-img-wrap">
    <div style="background: linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%);
                height:100%; display:flex; align-items:center; justify-content:center;
                font-size:3rem;">📝</div>
  </a>
  <div class="blog-card-body">
    <div class="blog-meta">
      <span class="blog-tag">YOUR CATEGORY</span>
      <span class="blog-date"><i class="bi bi-calendar3"></i> Month 2026</span>
    </div>
    <h2 class="blog-card-title">
      <a href="/blog/YOUR-FOLDER-NAME/">YOUR POST TITLE</a>
    </h2>
    <p class="blog-card-excerpt">A 1–2 sentence summary of what the article covers.</p>
    <a href="/blog/YOUR-FOLDER-NAME/" class="blog-read-more">
      Read Article <i class="bi bi-arrow-right"></i>
    </a>
  </div>
</article>
```

You can change the emoji (📝) to any relevant one. Add the new card **before** the existing cards so it appears first (newest first).

---

### Step 5 — Upload to GitHub

**Using GitHub.com (easiest, no software needed):**

1. Go to `github.com` and open your repository
2. Navigate to `blog/` → click **Add file** → **Create new file**
3. In the filename box, type: `your-folder-name/index.html`
   (GitHub automatically creates the folder when you include a `/`)
4. Paste your complete `index.html` content into the editor
5. Scroll down, add a commit message like: `Add blog post: Your Post Title`
6. Click **Commit new file**

Then repeat the same process to update `blog/index.html` with your new card.

**Using GitHub Desktop (recommended for regular use):**

1. Open GitHub Desktop and make sure your repository is selected
2. Copy your new folder into the local repository folder on your computer
3. GitHub Desktop will show the new files in the **Changes** panel
4. Add a summary (e.g. `Add blog post about X`)
5. Click **Commit to main**
6. Click **Push origin**

Your post will be live at `metaphrase.uk/blog/your-folder-name/` within 1–2 minutes.

---

## Tips for Good Blog Posts

- **Length:** 600–1,500 words is ideal for SEO and readability
- **Headings:** Use `<h2>` for main sections, `<h3>` for sub-sections
- **Keywords:** Include your target search phrase naturally in the first paragraph, at least one `<h2>`, and the meta description
- **Internal links:** Link to your services page (`/services/`) or contact page (`/contact/`) at least once
- **Call to action:** Every post should end with buttons pointing to `/contact/`
- **Date:** Always use the current year (2026) in dates

## Good UK-Focused Blog Topic Ideas

- "How to Get a Certified Translation Accepted by the UKVI"
- "Urdu Interpreters in Birmingham: What to Look For"
- "The Difference Between Translation and Interpreting"
- "What Documents Need Certified Translation for UK Visa Applications?"
- "How NHS Trusts Use Professional Interpreters"
- "Common Mistakes in Legal Translation and How to Avoid Them"

---

*Questions? Contact Kashif at info@metaphrase.uk or WhatsApp +44 7852 408 467*

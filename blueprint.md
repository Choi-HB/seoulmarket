# Project Blueprint: Seoul Traditional Market Guide (Blog & Magazine Edition)

## Purpose & Capabilities
A warm, editorial local travel blog & cultural archive dedicated to Seoul's 17 major traditional markets. Designed for genuine reader utility—providing subway exits, signature food price ranges, visiting hours, regular holidays, interactive course planning, a market trivia quiz, and a retro film photo lab—while fully adhering to Google AdSense program & spam policies.

## Implemented Improvements & AdSense Compliance Audit

### 1. Crawlability & Technical Health Fixes
- **`robots.txt`**: Fixed corrupted `-e User-agent: *` header to clean UTF-8 `User-agent: * / Allow: / / Sitemap: https://seoulmarket-es1.pages.dev/sitemap.xml`.
- **`sitemap.xml`**: Expanded to index all 29 complete pages (home, stories, course/quiz, photo lab, about, contact, privacy, terms, 17 market guides, and 4 local merchant stories).
- **Schema & Meta Cleanup**: Removed dead social URLs (`facebook.com/seoulmarket`, `instagram.com/seoulmarket`), aligned `SearchAction` (`?q={search_term_string}`), added `ItemList` / `Article` / `FAQPage` / `BreadcrumbList` structured data, and set `og:image` to real market photography (`광장시장.png` and each market's `.png`).

### 2. Original Market Photos Restored & Structural Layout Fix
- Preserved every original `.png` market photo (`./광장시장.png`, `./남대문시장.png`, `./망원시장.png`, `./가락시장.png`, etc., plus `./전통시장목록.png` fallback).
- Moved hero `<figure class="article-figure">` images cleanly inside `<main><article>` across all 21 guide/story pages with captions and accessible alt text.
- Replaced Shadow DOM `<market-card>` placeholders on `index.html` with all 17 pre-rendered semantic Light DOM `<article class="market-card">` entries, keyword search, district filtering, and a full 17-market comparison table.

### 3. Replaced Unrelated Demo Pages with Authentic Seoul Market Utilities
- **`play.html` / `play.js`**: Replaced the unrelated Teachable Machine webcam game and `alert()` fallback with an interactive **Seoul Market Half-Day Course Recommender** and **10-Question Seoul Market Culture & Food Quiz**.
- **`memory.html` / `memory.js`**: Transformed into the **Seoul Market Retro Film Photo Lab & Historical Archive** featuring 4 film presets, sample market images, 5 curated Seoul market photo spots, and a 120-year market timeline (1905–present).

### 4. Navigation & Trust (E-E-A-T)
- Kept top header navigation friendly and blog-focused (`홈 | 이야기 | 코스·퀴즈 | 사진관 | 소개 | 문의`) with `개인정보처리방침` placed discreetly in the bottom footer.
- Strengthened `about.html` and `contact.html` with transparent editing principles, update schedules, data references, and correction request FAQs.
- Unified warm archival editorial light theme (`#FAF8F5`) with optional dark mode (`:root.dark-mode`) in `style.css` across all 29 pages.

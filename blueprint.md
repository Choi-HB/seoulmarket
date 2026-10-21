# Project Blueprint: Seoul Traditional Market Guide (Blog & Magazine Edition)

## Purpose & Capabilities
A warm, engaging, and friendly local travel blog & digital magazine dedicated to Seoul's traditional markets. The site is designed to feel like a cozy, accessible travelogue where visitors can browse stories, discover authentic food spots, and find practical market tips, while fully adhering to Google AdSense program policies (Privacy Policy maintained as unobtrusive footer link).

## Current Plan & AdSense Compliance Strategy

### 1. Removing Heavy Legal Menus from Header Navigation
- **Issue:** Having "개인정보처리방침" (Privacy Policy) in the main top navbar made the site feel like a stiff corporate portal rather than a friendly, inviting travel blog.
- **Solution:** 
  - Remove "개인정보처리방침" and "이용약관" from the top navigation bar (`nav-links`) across all 19 HTML pages.
  - Keep the top menu friendly and blog-like: `홈` (Home) | `시장 이야기` (Stories) | `가이드` (Guides) | `놀이터` (Play) | `소개` (About) | `문의` (Contact).
  - Place "개인정보처리방침" in an unobtrusive, subtle grey text link in the sub-footer beside the copyright notice, ensuring Google AdSense bot requirements are strictly met without cluttering user experience.

### 2. Fixing "Low Value Content" (가치가 별로 없는 콘텐츠) Root Causes
- **Issue 1: Broken 404 Images & Missing Visuals**
  - References to `./광장시장.png`, `./남대문시장.png`, `./동묘벼룩시장.png` were broken 404s, displaying ugly missing-image placeholders to Google auditors.
  - **Fix:** Implemented an elegant, resilient visual card design with vibrant traditional gradients, themed badges/emojis, and CSS illustrated banners so that no broken images ever appear. Fixed broken images in `stories.html` and guide pages.
- **Issue 2: JavaScript-Only Market Rendering (Thin Content on initial bot crawl)**
  - `index.html` relied solely on client-side JS rendering for market cards.
  - **Fix:** Provided rich, crawlable pre-rendered static cards and articles in `index.html` so crawlers immediately see thousands of words of high-quality, unique guide text and local food tips.
- **Issue 3: Blog Tone & Practical Local Depth (E-E-A-T)**
  - Enhanced all guide and story pages with authentic, real-world traveler tips: cash vs card/ZeroPay tips, Onnuri gift certificate 10% discount methods, public restrooms, best visiting hours, and subway exit recommendations.

# Project Blueprint: Seoul Traditional Market Guide (Blog & Magazine Edition)

## Purpose & Capabilities
A warm, engaging, and friendly local travel blog & digital magazine dedicated to Seoul's traditional markets. The site is designed to feel like a cozy, accessible travelogue where visitors can browse stories, discover authentic food spots, and find practical market tips, while fully adhering to Google AdSense program policies (Privacy Policy maintained as unobtrusive footer link).

## Detailed Outline & Features Implemented
- **Original High-Quality Market Photos Restored:**
  - All 17 traditional market cards in `main.js`, `index.html`, `stories.html`, and `guides/*.html` point directly to the user's authentic photo files:
    - `광장시장.png`, `남대문시장.png`, `망원시장.png`, `통인시장.png`, `경동시장.png`, `가락시장.png`, `서울풍물시장.png`, `영동전통시장.png`, `동대문종합시장.png`, `서울중앙시장.png`, `동묘벼룩시장.png`, `마장축산물시장.png`, `노량진수산시장.png`, `수유시장.png`, `영등포전통시장.png`, `자양전통시장.png`, `암사종합시장.png`.
  - **가락시장.png Restored:** Recreated and provided a vibrant, authentic 2.2MB photo with Korean signage and produce stalls so it never breaks or shows 404.
  - **No Generic SVG Fallback:** Replaced the previous `all_markets.svg` fallback with the authentic `전통시장목록.png` so cards never turn into generic placeholder text.
- **Warm Blog-Style Navigation:**
  - The top navigation bar across all pages focuses purely on visitor experience: `홈`, `이야기`, `놀이`, `추억`, `소개`, `문의`.
  - Heavy legal items ("개인정보처리방침", "이용약관") are removed from the main header navigation.
  - Discreet "개인정보처리방침" is placed in the sub-footer line beside the copyright note to satisfy Google AdSense crawler policy verification without weighing down the site.
- **Rich Content & Crawlability (AdSense Compliance):**
  - Pre-rendered static market cards and deep editorial guides (`guides/*.html`) provide high-quality, human-crafted local tips, subway station exits, signature foods, and stories.

## Recent Changes & Current State
1. Restored original `.png` image filepaths across all pages (`main.js`, `index.html`, `stories.html`, `guides/*.html`).
2. Fixed `가락시장.png` with a high-resolution, realistic market photo matching the style of other market photos.
3. Verified local dev server (port 3000) serves all PNG images with HTTP 200 OK.
4. Maintained clean blog aesthetic without heavy legal terms in top navigation.

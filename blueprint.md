# Project Blueprint: Seoul Traditional Market Guide

## Purpose & Capabilities
A premium digital guide to Seoul's traditional markets, designed to help locals and tourists discover the rich culture, history, and food of these markets. The site features detailed guides, interactive AI tools, and a collection of human-centric stories from the markets.

## Current Implementation Status

### Core Features
- **Multilingual Support:** UI and core content support KO, EN, JA, ZH via `main.js`.
- **Market Directory:** 15+ markets with descriptions, maps, and official links.
- **Deep Guides:** 7 detailed articles for major markets (Gwangjang, Namdaemun, etc.).
- **Human Stories:** 4 long-form articles featuring interviews and local reports.
- **Interactive Tools:**
  - AI Rock-Paper-Scissors (Teachable Machine).
  - AI Image Filter (Memory tool).
- **SEO & Social:** Open Graph tags, meta descriptions, JSON-LD structured data, and updated `sitemap.xml`.

### Design System
- **Modern UI:** Glassmorphism, CSS Container Queries, and Cascade Layers.
- **Responsive:** Mobile-first design with unified navigation.
- **Accessibility:** High contrast, semantic HTML, and accessibility-first labels.

## AdSense Approval Fixes (Completed)
The site was improved to address the "Low Value Content" rejection:

### 1. Fixed Thin Content & Broken Links
- **Action:** Created 4 full article pages for stories.
- **Result:** No more broken links in `stories.html`. Increased total high-value text content.
- **Files:** `guides/story-gwangjang.html`, `guides/story-dongmyo.html`, `guides/story-tongin.html`, `guides/story-noryangjin.html`.

### 2. Navigation Consistency
- **Action:** Synchronized navigation menus and footers across all 18+ HTML files.
- **Result:** Seamless user experience and professional feel.

### 3. Professional Compliance
- **Action:** Added `terms.html` (Terms of Use) and improved `about.html` and `contact.html`.
- **Action:** Updated `main.js` to handle translations for all new legal and informational elements.

### 4. Content Volume Expansion
- **Action:** Added "Market Tips" and "Our Story" sections to `index.html` and `about.html`.
- **Result:** Higher ratio of static text content, improving SEO and bot readability.

### 5. Technical SEO
- **Action:** Updated `sitemap.xml` with all new pages and fixed broken links.
- **Action:** Added robots meta tags and canonical links to new pages.

## Current Update: Advanced SEO Strengthening (In Progress)
Optimizing the site for search engines (Google, Naver) to improve visibility and search rankings.

### 1. Global Meta Tag Synchronization
- **Action:** Adding Open Graph (OG), Twitter Card, and Canonical tags to ALL 18+ HTML files.
- **Action:** Ensuring `lang="ko"` attribute is present on all pages.
- **Action:** Adding `<link rel="icon" ...>` for favicons to improve SERP appearance.
- **Status:** In Progress.

### 2. Enhanced Structured Data (JSON-LD)
- **Action:** Implementing `BreadcrumbList` schema on all sub-pages for better search result snippets.
- **Action:** Refining `WebSite` and `Organization` schema on the home page.
- **Status:** In Progress.

### 3. Visual SEO Assets
- **Action:** Creating/Fixing `og-image.jpg` to ensure rich social sharing previews.
- **Action:** Adding `alt` text to all meaningful images for image search optimization.
- **Status:** In Progress.

### 4. Search Engine Indexing Tools
- **Action:** Verifying `sitemap.xml` accuracy for all new paths.
- **Action:** Ensuring `robots.txt` correctly points to the sitemap.
- **Status:** Completed.

## Project Structure
... (rest of the file)- `/index.html`: Home page with market filters and tips.
- `/stories.html`: Directory of market stories.
- `/play.html`: AI Rock-Paper-Scissors game.
- `/memory.html`: AI image transformation tool.
- `/about.html`: Project mission and background.
- `/contact.html`: Inquiry form.
- `/privacy.html`: Privacy Policy.
- `/terms.html`: Terms of Use.
- `/guides/`: Directory for market-specific guides and stories.
- `/main.js`: Central logic for translations, theme, and UI components.
- `/style.css`: Modern design system using CSS Cascade Layers.

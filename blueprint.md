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

## Current Update: Multilingual Content IDs & Header Synchronization (In Progress)
Standardizing all guide and story pages to support full multilingual translation and theme toggling.

### 1. Header Synchronization
- **Action:** Adding `lang-selector` and `theme-toggle` HTML to all pages in `/guides/` for consistency with `index.html`.
- **Status:** Guide files (7) verified; Story files (4) being updated.

### 2. Multilingual ID Tagging
- **Action:** Adding unique IDs to content elements in Story files (`article-h1`, `article-p1`, etc.) to enable translation via `main.js`.
- **Status:** In Progress.

### 3. Navigation Standardization
- **Action:** Ensuring all `nav-links` have standard IDs (`nav-home`, `nav-stories`, etc.) for consistent UI behavior.
- **Status:** In Progress.

## Project Structure
- `/index.html`: Home page with market filters and tips.
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

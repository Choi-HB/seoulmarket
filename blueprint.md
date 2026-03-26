# Blueprint: Seoul Traditional Markets Website

## Overview
'서울 맛거리 & 볼거리 전통시장' 웹사이트는 서울의 각 구별로 특색 있는 전통시장을 소개하는 프리미엄 디지털 가이드입니다. 사용자가 서울의 다양한 맛과 멋을 한눈에 확인하고, 구글 지도를 통해 쉽게 찾아갈 수 있도록 설계되었습니다.

## Project Outline

### Detailed Project Documentation
- **Name:** 서울 맛거리 & 볼거리 전통시장 (Seoul Traditional Markets Guide)
- **Goal:** 서울의 전통시장을 구역별로 체계적으로 정리하여 풍부한 설명과 함께 제공.
- **Visual Style:** 
  - **Typography:** 고급스러운 산세리프 폰트 (Pretendard 기반) 및 그라데이션 타이틀.
  - **Color:** 다크/라이트 모드 완전 지원 프리미엄 팔레트 (`oklch` 및 CSS 변수 활용).
  - **Texture:** 배경에 미세한 노이즈 텍스처를 적용하여 고급스러운 질감 표현.
  - **Effects:** Glassmorphism(배경 흐림), 3D 리프트 효과, 부드러운 전환.
  - **Layout:** **이미지 없는 깔끔한 텍스트 중심 카드 레이아웃** (사용자 요청에 따라 썸네일 제거).
- **Content:**
  - **구별 카테고리:** 종로구, 중구, 마포구, 동대문구 등 주요 구 필터링 및 '기타' 분류 제공.
  - **다국어 지원:** 한국어, 영어, 일본어, 중국어(간체) 번역 기능 탑재.
  - **테마 토글:** 사용자의 브라우저 저장소(localStorage)에 저장되는 테마 모드 전환.
  - **공식 링크:** 각 시장의 공식 채널(홈페이지, SNS 등) 바로가기 버튼 제공.

### Feature Implementation Status
- [x] Basic project structure (`index.html`, `style.css`, `main.js`)
- [x] District filtering system (Dynamic filtering with multi-language support)
- [x] Multi-language Translation (KO, EN, JA, ZH) - **Full detailed descriptions for all 4 languages**
- [x] Dark / Light Mode Theme Toggle with Persistence
- [x] Premium Market Card Web Component (`<market-card>`)
- [x] Detailed market data population (17 markets - Bangi Market removed)
- [x] Support for external links in MarketCard
- [x] Disqus Comment System Integration (Refined styling & dynamic config)
- [x] **AdSense Readiness: Privacy Policy & About Pages**
- [x] **AdSense Readiness: Global Navigation & Content Depth (Market Guide)**
- [x] **UI/UX: Optimized 3-column Market Grid for various screen sizes**
- [x] **UI/UX: Remove thumbnails for a cleaner, text-focused design**
- [x] **UI/UX: Full description visibility without line-clamping**

## AdSense Approval Strategy
To ensure the website passes Google AdSense approval, the following enhancements are implemented based on official guidelines:
- **Substantial Content:** Added a 'Market Travel Guide' section with detailed tips for visitors to increase text volume.
- **Clear Navigation:** Implemented a global navigation menu (Home, About, Privacy) for better user experience.
- **Policy Compliance:** Created a dedicated Privacy Policy page and About page.
- **Credibility:** Enhanced the 'About' section to clearly state the site's purpose and contact information.

## Current Plan & Steps

### 1. UI/UX Refinement (Grid & Design)
- [x] Update `style.css`: Change `.market-grid` to display 3 columns on desktop (`repeat(3, 1fr)`) and ensure smooth responsiveness for tablet and mobile.
- [x] **Remove thumbnails**: Remove `thumbnail-container` and related styles from `<market-card>` to simplify the visual layout.

### 2. Content Management
- [x] Remove Bangi Market as per user request to streamline the list.
- [x] Update `main.js`: Expand the `description` for each market in `marketsData` (especially for Korean language) to be at least 5 lines long.

### 3. Navigation Enhancement (Filter Bar)
- [x] Update `main.js`: Add a "서울 전통시장 목록" (Seoul Traditional Market List) button in the filter bar next to the "기타" (Other) button.
- [x] Configure this button to specifically highlight or display the comprehensive list card (Wikipedia link).
- [x] Update translations for the new button in all 4 languages.

### 4. Verification
- [x] Check the 3-column layout on various screen sizes.
- [x] Verify that descriptions are sufficiently long and visually appealing.
- [x] Test the new navigation button functionality and translation.
- [x] Confirm that thumbnails are completely removed and the card layout is adjusted.

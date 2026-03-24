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
- **Content:**
  - **구별 카테고리:** 종로구, 중구, 마포구, 동대문구 등 주요 구 필터링 및 '기타' 분류 제공.
  - **다국어 지원:** 한국어, 영어, 일본어, 중국어(간체) 번역 기능 탑재.
  - **테마 토글:** 사용자의 브라우저 저장소(localStorage)에 저장되는 테마 모드 전환.
  - **공식 링크:** 각 시장의 공식 채널(홈페이지, SNS 등) 바로가기 버튼 제공.

### Feature Implementation Status
- [x] Basic project structure (`index.html`, `style.css`, `main.js`)
- [x] District filtering system (Dynamic filtering with multi-language support)
- [x] Multi-language Translation (KO, EN, JA, ZH)
- [x] Dark / Light Mode Theme Toggle with Persistence
- [x] High-reliability image integration (Stabilized Unsplash & Wikimedia sources)
- [x] Premium Market Card Web Component (`<market-card>`)
- [x] Detailed market data population (18 markets)
- [x] Support for external links in MarketCard
- [x] Disqus Comment System Integration (Refined styling & dynamic config)
- [x] **AdSense Readiness: Privacy Policy & About Pages**
- [x] **AdSense Readiness: Global Navigation & Content Depth (Market Guide)**

## AdSense Approval Strategy
To ensure the website passes Google AdSense approval, the following enhancements are implemented based on official guidelines:
- **Substantial Content:** Added a 'Market Travel Guide' section with detailed tips for visitors to increase text volume.
- **Clear Navigation:** Implemented a global navigation menu (Home, About, Privacy) for better user experience.
- **Policy Compliance:** Created a dedicated Privacy Policy page and About page.
- **Credibility:** Enhanced the 'About' section to clearly state the site's purpose and contact information.

## Current Plan & Steps

### 1. Structure Expansion (AdSense Readiness)
- [ ] Create `privacy.html`: Comprehensive privacy policy including cookie usage.
- [ ] Create `about.html`: Detailed site mission and team information.
- [ ] Update `index.html`: 
    - Add a professional navigation bar.
    - Add a 'Market Travel Guide' section for more text-based value.
    - Update footer with mandatory policy links.
- [ ] Update `style.css`: Style the new navigation and informational pages.

### 2. Disqus Integration (Refined)
- `index.html`: `disqus_config`에서 현재 페이지의 URL과 식별자를 동적으로 받아오도록 설정하여 안정성을 강화했습니다.
- `style.css`: 댓글 창에 카드 형태의 디자인과 `backdrop-filter`를 적용하여 웹사이트 전체의 프리미엄 룩앤필과 일치시켰습니다.
- 라이트 모드와 다크 모드 각각에 최적화된 그림자 효과를 적용했습니다.

### 2. Structure & Data (Updated)
- `main.js`에 UI 문자열 및 시장 상세 정보의 다국어 번역 데이터(KO, EN, JA, ZH) 통합 관리.
- 모든 시장의 썸네일 이미지를 위키백과(Wikimedia Commons) 소스를 우선적으로 적용하여 고품질 및 신뢰성 확보. 위키백과 이미지가 없는 경우 공식 홈페이지 및 관련 기관(VisitKorea 등)의 이미지로 대체.
- 망원, 마장, 수유, 자양, 암사, 영동 등 모든 시장의 이미지 경로를 최신 고품질 소스로 전면 업데이트.

### 2. Premium Design (Updated)
- 라이트 모드 대응을 위해 `style.css`의 컬러 변수 체계 최적화.
- 다국어 선택 버튼(KO, EN, JP, CN) UI 디자인 및 배치 완료.

### 3. Web Component Development (Updated)
- `<market-card>`가 다국어 레이블(Signature Food, Top Sights 등)을 속성으로 전달받아 동적으로 렌더링하도록 수정.

### 4. Content Population (Completed)
- 모든 시장의 4개 국어 번역 텍스트 수록 및 검증 완료.

### 5. Verification (Completed)
- 다국어 전환 시 모든 텍스트가 정상적으로 번역되는지 확인.
- 다크/라이트 모드 전환 시 시각적 일관성 확인.
- 모든 시장 이미지의 로딩 안정성 확보 및 리모트 저장소 배포 완료.

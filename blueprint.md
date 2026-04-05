# Blueprint: Seoul Traditional Markets Website

## Overview
'서울 맛거리 & 볼거리 전통시장' 웹사이트는 서울의 각 구별로 특색 있는 전통시장을 소개하는 프리미엄 디지털 가이드입니다. 사용자가 서울의 다양한 맛과 멋을 한눈에 확인하고, 구글 지도를 통해 쉽게 찾아갈 수 있도록 설계되었습니다. 또한, Teachable Machine AI를 활용한 가위바위보 게임을 통해 사용자에게 즐거운 경험을 제공합니다.

## Project Outline

### Detailed Project Documentation
- **Name:** 서울 맛거리 & 볼거리 전통시장 (Seoul Traditional Markets Guide)
- **Goal:** 서울의 전통시장을 구역별로 체계적으로 정리하여 풍부한 설명과 함께 제공 및 AI 게임 콘텐츠 탑재.
- **Visual Style:** 
  - **Typography:** 고급스러운 산세리프 폰트 (Pretendard 기반) 및 그라데이션 타이틀.
  - **Color:** 다크/라이트 모드 완전 지원 프리미엄 팔레트 (`oklch` 및 CSS 변수 활용).
  - **Texture:** 배경에 미세한 노이즈 텍스처를 적용하여 고급스러운 질감 표현.
  - **Effects:** Glassmorphism(배경 흐림), 3D 리프트 효과, 부드러운 전환.
  - **Layout:** 이미지 없는 깔끔한 텍스트 중심 카드 레이아웃.
- **Content:**
  - **구별 카테고리:** 종로구, 중구, 마포구, 동대문구 등 주요 구 필터링.
  - **다국어 지원:** 한국어, 영어, 일본어, 중국어(간체) 번역 기능.
  - **AI 게임:** Teachable Machine을 이용한 실시간 가위바위보 게임.

### Feature Implementation Status
- [x] Basic project structure (`index.html`, `style.css`, `main.js`)
- [x] District filtering system (Dynamic filtering with multi-language support)
- [x] Multi-language Translation (KO, EN, JA, ZH)
- [x] Dark / Light Mode Theme Toggle with Persistence
- [x] Premium Market Card Web Component (`<market-card>`)
- [x] Detailed market data population (17 markets)
- [x] Support for external links in MarketCard
- [x] Disqus Comment System Integration
- [x] AdSense Readiness: Privacy Policy, About, Contact Pages
- [x] **AI Content: Rock-Paper-Scissors Game using Teachable Machine (`game.html`, `game.js`)**
- [x] **AI Tool: Image Transformer for Grayscale/Color conversion (`transform.html`, `transform.js`)**
- [x] **Navigation: Added 'Game' and 'Photo Transform' links to global navigation across all pages**

## Current Plan & Steps

### 1. AI Game Implementation
- [x] **New Page:** Create `game.html` with a modern, responsive game UI.
- [x] **AI Logic:** Implement `game.js` using TensorFlow.js and Teachable Machine Image model.

### 2. Image Transformer Implementation
- [x] **New Page:** Create `transform.html` with a glassmorphism image processing UI.
- [x] **Logic:** Implement `transform.js` using HTML5 Canvas for grayscale/color conversion.
- [x] **Download:** Add functionality to save the processed image to the local device.

### 3. Verification & Optimization
- [x] Test AI recognition accuracy and image processing speed.
- [x] Verify responsiveness and accessibility across all new pages.
- [x] Ensure multi-language support (KO, EN, JA, ZH) is fully integrated.


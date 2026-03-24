# Blueprint: Seoul Traditional Markets Website

## Overview
'서울 맛거리 & 볼거리 전통시장' 웹사이트는 서울의 각 구별로 특색 있는 전통시장을 소개하는 프리미엄 디지털 가이드입니다. 사용자가 서울의 다양한 맛과 멋을 한눈에 확인하고, 구글 지도를 통해 쉽게 찾아갈 수 있도록 설계되었습니다.

## Project Outline

### Detailed Project Documentation
- **Name:** 서울 맛거리 & 볼거리 전통시장 (Seoul Traditional Markets Guide)
- **Goal:** 서울의 전통시장을 구역별로 체계적으로 정리하여 풍부한 설명과 함께 제공.
- **Visual Style:** 
  - **Typography:** 고급스러운 산세리프 폰트 (Pretendard 기반) 및 그라데이션 타이틀.
  - **Color:** 다크/라이트 모드 지원 프리미엄 팔레트 (`oklch` 및 CSS 변수 활용).
  - **Texture:** 배경에 미세한 노이즈 텍스처를 적용하여 고급스러운 질감 표현.
  - **Effects:** Glassmorphism(배경 흐림), 3D 리프트 효과, 부드러운 전환.
- **Content:**
  - **구별 카테고리:** 종로구, 중구, 마포구, 동대문구, 송파구, 강남구 등 주요 구 필터링 및 '기타' 분류 제공.
  - **시장 정보:** 고해상도 이미지, 시장명, 상세 설명(5줄 이상), 대표 먹거리, 대표 볼거리.
  - **테마 토글:** 사용자 선호에 따른 다크/라이트 모드 전환 기능.
  - **공식 링크:** 각 시장의 공식 홈페이지, 인스타그램, 블로그 등으로 바로 연결되는 버튼 제공.

### Feature Implementation Status
- [x] Basic project structure (`index.html`, `style.css`, `main.js`)
- [x] District filtering system (District-based filter buttons including 'Miscellaneous')
- [x] Premium Market Card Web Component (`<market-card>`)
- [x] Detailed market data population (18 markets)
- [x] Dark / Light Mode Theme Toggle
- [x] High-reliability image integration (Unsplash & Wikimedia fixed)
- [x] Official Website/SNS link integration for every market
- [x] Support for external links in MarketCard for broad data lists
- [x] Responsive grid layout with CSS Layers and Container Queries

## Current Plan & Steps

### 1. Structure & Data (Updated)
- `main.js` 및 `style.css`에 테마 토글 로직과 스타일링 변수 추가.
- 망원, 마장, 수유 등 이미지 로딩 이슈가 있던 시장들을 고품질 Unsplash 이미지로 교체.

### 2. Premium Design (Updated)
- `oklch`를 사용하여 라이트 모드에서도 눈이 편안하고 현대적인 색감 구현.
- `localStorage`를 사용하여 사용자가 선택한 테마가 유지되도록 설정.

### 3. Web Component Development (Updated)
- `<market-card>`가 현재 테마(다크/라이트)에 맞춰 텍스트와 배경색이 유연하게 변하도록 CSS 변수 최적화.

### 4. Content Population (Updated)
- 모든 시장 이미지의 출력 안정성을 확보하고 최적의 시각적 경험 제공.

### 5. Verification (Ongoing)
- 다크/라이트 모드 전환 시 시인성 확인.
- 수정된 이미지들이 모든 브라우저에서 잘 나오는지 재점검.
- 리모트 저장소 푸시 및 배포 완료.

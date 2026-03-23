# Blueprint: Seoul Traditional Markets Website

## Overview
'서울 맛거리 & 볼거리 전통시장' 웹사이트는 서울의 각 구별로 특색 있는 전통시장을 소개하는 프리미엄 디지털 가이드입니다. 사용자가 서울의 다양한 맛과 멋을 한눈에 확인하고, 구글 지도를 통해 쉽게 찾아갈 수 있도록 설계되었습니다.

## Project Outline

### Detailed Project Documentation
- **Name:** 서울 맛거리 & 볼거리 전통시장 (Seoul Traditional Markets Guide)
- **Goal:** 서울의 전통시장을 구역별로 체계적으로 정리하여 풍부한 설명과 함께 제공.
- **Visual Style:** 
  - **Typography:** 고급스러운 산세리프 폰트 (Pretendard 기반) 및 그라데이션 타이틀.
  - **Color:** 다크 모드 기반의 프리미엄 팔레트 (`oklch` 활용).
  - **Texture:** 배경에 미세한 노이즈 텍스처를 적용하여 고급스러운 질감 표현.
  - **Effects:** Glassmorphism(배경 흐림), 3D 리프트 효과, 부드러운 전환.
- **Content:**
  - **구별 카테고리:** 종로구, 중구, 마포구, 동대문구, 송파구, 강남구 필터링 시스템.
  - **시장 정보:** 고해상도 이미지, 시장명, 상세 설명(5줄 이상), 대표 먹거리, 대표 볼거리.
  - **지도:** 각 시장별 구글 지도 실시간 임베드 연동.

### Feature Implementation Status
- [x] Basic project structure (`index.html`, `style.css`, `main.js`)
- [x] District filtering system (District-based filter buttons)
- [x] Premium Market Card Web Component (`<market-card>`)
- [x] Detailed market data population (8 markets: 광장, 남대문, 망원, 통인, 경동, 가락, 풍물, 영동)
- [x] Google Maps integration for each market
- [x] Responsive grid layout with CSS Layers and Container Queries

## Current Plan & Steps

### 1. Structure & Data (Completed)
- `main.js`에 서울 주요 시장 8곳의 상세 데이터(이름, 구, 설명, 먹거리, 볼거리, 지도 URL, 이미지)를 JSON으로 정의.

### 2. Premium Design (Completed)
- `style.css`에서 `@layer`를 사용하여 베이스, 레이아웃, 컴포넌트 스타일을 격리.
- `oklch` 컬러 스페이스를 사용하여 보다 생생하고 현대적인 색상 구현.
- `backdrop-filter`와 `radial-gradient`를 활용한 깊이 있는 레이아웃.

### 3. Web Component Development (Completed)
- `<market-card>` 커스텀 엘리먼트를 개발하여 정보의 응집도와 재사용성을 높임.
- Shadow DOM을 사용하여 스타일 충돌 방지 및 캡슐화.

### 4. Content Population (Completed)
- 각 시장별로 5줄 이상의 상세 설명을 작성하여 정보의 깊이를 더함.
- 실제 시장 이미지와 유사한 고품질 언스플래시 이미지를 썸네일로 사용.

### 5. Verification (Completed)
- 필터링 기능 작동 확인 (전체 및 각 구별 필터).
- 모바일 대응 확인 (반응형 그리드 및 컨테이너 쿼리).
- 구글 지도 임베딩 정상 출력 확인.

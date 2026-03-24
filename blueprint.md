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
- [x] Detailed market data population (19 markets: 광장, 남대문, 망원, 통인, 경동, 가락, 풍물, 영동, 동대문종합, 서울중앙, 동묘, 마장, 노량진, 수유, 영등포, 자양, 암사, 방이, 아현)
- [x] Google Maps integration for each market
- [x] Responsive grid layout with CSS Layers and Container Queries
- [x] Wikipedia-sourced high-reliability image integration

## Current Plan & Steps

### 1. Structure & Data (Updated)
- `main.js`에 서울 주요 시장 19곳의 상세 데이터(이름, 구, 설명, 먹거리, 볼거리, 지도 URL, 이미지)를 위키피디아 출처로 업데이트.
- 성동구, 동작구, 강북구, 영등포구, 광진구, 강동구 등 새로운 구(District) 데이터 추가.

### 2. Premium Design (Completed)
- `style.css`에서 `@layer`를 사용하여 베이스, 레이아웃, 컴포넌트 스타일을 격리.
- `oklch` 컬러 스페이스를 사용하여 보다 생생하고 현대적인 색상 구현.
- `backdrop-filter`와 `radial-gradient`를 활용한 깊이 있는 레이아웃.

### 3. Web Component Development (Completed)
- `<market-card>` 커스텀 엘리먼트를 개발하여 정보의 응집도와 재사용성을 높임.
- Shadow DOM을 사용하여 스타일 충돌 방지 및 캡슐화.

### 4. Content Population (Updated)
- 각 시장별로 5줄 이상의 상세 설명을 작성하여 정보의 깊이를 더함.
- 신뢰도 높은 위키피디아(Wikimedia Commons) 이미지를 사용하여 시각적 정확성 확보.
- 모든 이미지는 `Special:Redirect` 형식을 사용하여 항상 최신 고해상도 버전을 렌더링.
- 이미지 로딩 실패 시 서울의 대표적인 시장 이미지를 보여주는 `onerror` 폴백 메커니즘 적용.
- 카드 상단에 'Wikipedia Commons' 배지를 추가하여 정보 출처의 신뢰성을 시각적으로 강조.

### 5. Verification (Ongoing)
- 새로운 11개 시장이 필터링 시스템에 정상적으로 포함되는지 확인.
- 위키피디아 이미지 링크의 유효성 및 렌더링 확인.
- 모바일 대응 및 지도 임베딩 최종 점검.

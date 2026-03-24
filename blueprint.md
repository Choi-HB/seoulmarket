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
  - **구별 카테고리:** 종로구, 중구, 마포구, 동대문구, 송파구, 강남구 등 주요 구 필터링 및 '기타' 분류 제공.
  - **시장 정보:** 고해상도 위키피디아 이미지, 시장명, 상세 설명(5줄 이상), 대표 먹거리, 대표 볼거리.
  - **공식 링크:** 각 시장의 공식 홈페이지, 인스타그램, 블로그 등으로 바로 연결되는 버튼 제공.
  - **지도 및 리스트:** 구글 지도 실시간 임베드 또는 위키백과 목록 외부 링크 연동.

### Feature Implementation Status
- [x] Basic project structure (`index.html`, `style.css`, `main.js`)
- [x] District filtering system (District-based filter buttons including 'Miscellaneous')
- [x] Premium Market Card Web Component (`<market-card>`)
- [x] Detailed market data population (18 markets)
- [x] Wikipedia-sourced image filenames verification and integration
- [x] Official Website/SNS link integration for every market
- [x] Support for external links in MarketCard for broad data lists
- [x] Responsive grid layout with CSS Layers and Container Queries

## Current Plan & Steps

### 1. Structure & Data (Updated)
- `main.js`에 제공된 시장별 공식 홈페이지/SNS 링크 데이터를 추가.
- '기타' 분류의 위키백과 링크를 정밀한 URL로 업데이트.

### 2. Premium Design (Completed)
- `style.css`에서 `@layer`를 사용하여 스타일 격리 및 현대적인 디자인 적용.

### 3. Web Component Development (Updated)
- `<market-card>` 내부에 '공식 홈페이지 / SNS 방문' 버튼을 추가하여 사용성 증대.
- 버튼 그룹(`btn-group`) 스타일을 적용하여 링크와 지도를 깔끔하게 배치.

### 4. Content Population (Updated)
- 광장시장부터 방이시장까지 모든 시장의 고유 링크를 연동하여 정보의 완성도 향상.

### 5. Verification (Ongoing)
- 모든 시장의 공식 링크 버튼 작동 여부 확인.
- 리모트 저장소 푸시 및 배포 완료.

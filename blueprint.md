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
  - **지도 및 링크:** 구글 지도 실시간 임베드 또는 위키백과 목록 외부 링크 연동 (서울특별시의 시장 목록).

### Feature Implementation Status
- [x] Basic project structure (`index.html`, `style.css`, `main.js`)
- [x] District filtering system (District-based filter buttons including 'Miscellaneous')
- [x] Premium Market Card Web Component (`<market-card>`)
- [x] Detailed market data population (18 markets - Ahyeon removed)
- [x] Wikipedia-sourced image filenames verification and integration (Mangwon, Tongin, etc. fixed)
- [x] Support for external links in MarketCard for broad data lists
- [x] Responsive grid layout with CSS Layers and Container Queries

## Current Plan & Steps

### 1. Structure & Data (Updated)
- `main.js`에서 아현시장을 삭제하고, 망원시장, 통인시장 등 이미지 출력 오류가 있던 시장들의 파일명을 정확한 위키미디어 명칭으로 수정.
- '기타' 분류의 링크를 '서울특별시의 시장 목록' 위키백과 한국어 페이지로 정밀하게 업데이트.

### 2. Premium Design (Completed)
- `style.css`에서 `@layer`를 사용하여 베이스, 레이아웃, 컴포넌트 스타일을 격리.
- `oklch` 컬러 스페이스를 사용하여 보다 생생하고 현대적인 색상 구현.

### 3. Web Component Development (Completed)
- `<market-card>` 커스텀 엘리먼트가 지도 임베드뿐만 아니라 외부 링크(새 창 열기)도 처리할 수 있도록 로직 개선 완료.

### 4. Content Population (Updated)
- 각 시장별로 고해상도 위키피디아 이미지를 정확한 파일명(`File:Market_Name_01.jpg` 등)으로 연동하여 가독성 확보.

### 5. Verification (Ongoing)
- 모든 시장 이미지의 정상 출력 여부 최종 확인.
- 수정된 '기타' 링크의 정상 작동 여부 확인.
- 리모트 저장소 푸시 및 배포 완료.

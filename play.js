// Seoul Traditional Market Course Recommender & Trivia Quiz
document.addEventListener("DOMContentLoaded", () => {
    const courses = {
        food_clear: {
            badge: "마포구 · 6호선 망원역 2번 출구",
            title: "망원시장 미식 포장 & 망원 한강공원 피크닉 코스",
            guideUrl: "guides/mangwon.html",
            summary: "맑은 날 가장 인기 높은 서북권 코스입니다. 닭강정과 수제 고로케, 바삭한 고추튀김을 포장해 걸어서 10분 거리인 망원 한강공원 잔디밭에서 즐겨보세요.",
            steps: [
                { time: "1단계 · 오후 2:00", title: "망원시장 간식 투어", desc: "망원역 2번 출구에서 시장으로 진입해 닭강정, 수제 고로케, 홍두깨 손칼국수로 배를 채웁니다." },
                { time: "2단계 · 오후 3:30", title: "망리단길 소품샵·카페 산책", desc: "시장 옆 포은로 골목의 개성 있는 독립서점과 디저트 카페를 천천히 둘러봅니다." },
                { time: "3단계 · 오후 5:00", title: "망원 한강공원 노을 감상", desc: "보행 육교(망원나들목)를 건너 한강공원에서 피크닉과 서울의 황금빛 노을을 만끽합니다." }
            ]
        },
        food_indoor: {
            badge: "종로구 · 1호선 종로5가역 7·8번 출구",
            title: "광장시장 아케이드 전천후 먹거리 탐방 코스",
            guideUrl: "guides/gwangjang.html",
            summary: "전 구역에 비가림 아케이드가 설치되어 비나 눈이 와도 우산 없이 쾌적하게 다닐 수 있는 100년 전통 미식 코스입니다.",
            steps: [
                { time: "1단계 · 오후 2:30", title: "2층 구제상가 & 한복·직물 골목", desc: "식사 피크 시간 전 한적한 2층 빈티지 의류 상가와 1층 자개·한복 상점을 먼저 구경합니다." },
                { time: "2단계 · 오후 4:00", title: "맷돌 녹두빈대떡·육회 본점 투어", desc: "지글지글 부쳐내는 녹두빈대떡과 겨자소스 마약김밥, 신선한 육회 한 접시를 맛봅니다." },
                { time: "3단계 · 오후 5:30", title: "인근 방산시장 또는 종로 카페", desc: "시장 바로 건너편 방산시장 베이킹 골목을 구경하거나 종로 따뜻한 찻집에서 마무리합니다." }
            ]
        },
        shopping_clear: {
            badge: "종로구 · 1·6호선 동묘앞역 3번 출구",
            title: "동묘 벼룩시장 빈티지 보물찾기 & 서울풍물시장 연계 코스",
            guideUrl: "guides/dongmyo.html",
            summary: "구제 의류부터 LP판, 필름 카메라, 골동품까지 세상에 하나뿐인 아이템을 건질 수 있는 레트로 덕후 필수 코스입니다.",
            steps: [
                { time: "1단계 · 오후 1:30", title: "동묘앞역 ~ 동관왕묘 빈티지 골목", desc: "동묘 담벼락을 따라 늘어선 구제 의류와 헌책, 레코드 좌판을 보물찾기하듯 둘러봅니다." },
                { time: "2단계 · 오후 3:00", title: "동묘 명물 고기튀김·토스트 간식", desc: "시장 안쪽 노포에서 저렴하고 바삭한 고기튀김과 계란 토스트로 에너지를 보충합니다." },
                { time: "3단계 · 오후 4:00", title: "도보 10분 서울풍물시장 청춘1번가", desc: "신설동 방향 청계천을 건너 서울풍물시장 실내 2층에서 7080 추억 소품을 구경합니다." }
            ]
        },
        shopping_indoor: {
            badge: "종로구 · 1·4호선 동대문역 8·9번 출구",
            title: "동대문종합시장 원단·5층 액세서리 DIY 실내 코스",
            guideUrl: "guides/dongdaemun.html",
            summary: "거대한 실내 동(N·A·B·C·D동)이 모두 연결되어 계절과 날씨 영향을 받지 않고 수천 개 원단·비즈·액세서리 점포를 쇼핑할 수 있습니다.",
            steps: [
                { time: "1단계 · 오전 11:00", title: "5층 액세서리·키링 부자재 상가", desc: "국내 최대 규모의 비즈, 체인, 키링 파츠 상가에서 나만의 DIY 재료를 고릅니다." },
                { time: "2단계 · 오후 1:30", title: "동대문 닭한마리 & 생선구이 골목", desc: "시장 바로 옆 먹자골목에서 진한 육수의 닭한마리 칼국수 사리로 든든히 점심을 먹습니다." },
                { time: "3단계 · 오후 3:30", title: "2~4층 패브릭·홈데코 & DDP 전시", desc: "침구·커튼 원단 구경을 마친 뒤 지하철 연결 통로를 통해 DDP 실내 전시관으로 이동합니다." }
            ]
        },
        grocery_family: {
            badge: "송파구 · 3·8호선 가락시장역 2·2-1번 출구",
            title: "가락시장(가락몰) 쾌적 장보기 & 3층 식당가 가족 코스",
            guideUrl: "guides/garak.html",
            summary: "대형 지하주차장과 깔끔한 냉난방 실내 매장이 갖춰져 유모차를 동반한 가족 단위나 부모님 모시고 가기에 가장 쾌적한 도매시장 코스입니다.",
            steps: [
                { time: "1단계 · 오후 3:30", title: "가락몰 1층 청과·건어물 알뜰 쇼핑", desc: "제철 과일과 견과류를 시중보다 저렴한 도소매 가격으로 구경하고 구매합니다." },
                { time: "2단계 · 오후 4:40", title: "수산·축산 코너 횟감 & 한우 픽업", desc: "원하는 모둠회나 한우 부위를 고르고 점포에서 안내해 주는 상차림 식당으로 연결합니다." },
                { time: "3단계 · 오후 5:30", title: "3층 식당가 저녁 & 석촌호수 산책", desc: "3층 전문 식당가에서 매운탕·한우 구이를 즐긴 뒤 인근 석촌호수로 이동해 산책합니다." }
            ]
        },
        grocery_night: {
            badge: "동작구 · 1·9호선 노량진역 7·9번 출구",
            title: "노량진수산시장 활어회 & 여의도 한강 야경 코스",
            guideUrl: "guides/noryangjin.html",
            summary: "지하철역과 바로 연결되는 현대화 건물에서 싱싱한 제철 해산물을 고르고, 한강·여의도 전망을 바라보며 식사하는 서울 대표 해산물 코스입니다.",
            steps: [
                { time: "1단계 · 오후 5:00", title: "1층 활어 판매장 구경 & 시세 비교", desc: "여러 점포를 둘러보며 광어·방어·대게 등 제철 수산물 상태를 직접 확인하고 회를 뜹니다." },
                { time: "2단계 · 오후 6:00", title: "2·5층 초장집 매운탕 만찬", desc: "식당가에서 상차림을 받아 방금 뜬 회와 얼큰한 서더리 매운탕을 즐깁니다." },
                { time: "3단계 · 오후 7:30", title: "옥상 하늘광장 여의도 야경 감상", desc: "식사 후 수산시장 옥상 전망대에 올라 여의도 스카이라인과 63빌딩 야경을 사진으로 남깁니다." }
            ]
        },
        walk_seochon: {
            badge: "종로구 · 3호선 경복궁역 2번 출구",
            title: "통인시장 엽전 도시락 & 서촌 한옥 골목 산책 코스",
            guideUrl: "guides/tongin.html",
            summary: "조선 시대 엽전으로 반찬을 담아 먹는 특별한 경험과 경복궁 서촌의 고즈넉한 한옥 풍경이 어우러져 연인·혼자 산책객 모두에게 인기입니다.",
            steps: [
                { time: "1단계 · 오전 11:30", title: "통인시장 고객만족센터 엽전 교환", desc: "시장 중간 지점에서 엽전 꾸러미를 구입하고 원조 기름떡볶이와 떡갈비, 전을 담습니다." },
                { time: "2단계 · 오후 1:00", title: "도시락 카페 취식 & 전통 찻집", desc: "2층 도시락 카페에서 밥·국과 함께 도시락을 먹고 서촌 골목의 한옥 카페로 이동합니다." },
                { time: "3단계 · 오후 2:30", title: "윤동주 문학관 · 대오서점 산책", desc: "서울에서 가장 오래된 서점 대오서점과 수성동 계곡까지 서촌의 고즈넉한 골목을 걷습니다." }
            ]
        },
        walk_kmedi: {
            badge: "동대문구 · 1호선 제기동역 2번 출구",
            title: "경동시장 서울약령시 & 폐극장 카페(경동1960) 감성 코스",
            guideUrl: "guides/gyeongdong.html",
            summary: "은은한 한약재 향기가 감도는 시장 골목에서 시작해 1960년대 옛 극장을 개조한 이색 대형 카페로 이어지는 레트로·모던 공존 코스입니다.",
            steps: [
                { time: "1단계 · 오후 1:00", title: "서울약령시 & 한의약박물관 관람", desc: "한약재 거리를 걸으며 한방 족욕 체험이나 건강 간식(대추·생강차)을 구경합니다." },
                { time: "2단계 · 오후 2:30", title: "신관 3층 청년몰 & 노포 안동집", desc: "생활한복·수공예 청년 상점을 둘러보고 지하 칼국수 노포에서 소박한 점심을 즐깁니다." },
                { time: "3단계 · 오후 4:00", title: "경동극장 개조 스타벅스 경동1960점", desc: "극장 계단식 좌석과 스크린 조명이 어우러진 독특한 공간에서 커피 한 잔으로 마무리합니다." }
            ]
        }
    };

    const purposeEl = document.getElementById("course-purpose");
    const companionEl = document.getElementById("course-companion");
    const weatherEl = document.getElementById("course-weather");
    const recommendBtn = document.getElementById("recommend-course-btn");

    const badgeEl = document.getElementById("course-badge");
    const titleEl = document.getElementById("course-title");
    const guideLinkEl = document.getElementById("course-guide-link");
    const summaryEl = document.getElementById("course-summary");
    const stepsEl = document.getElementById("course-steps");

    function renderCourse() {
        const purpose = purposeEl.value;
        const companion = companionEl.value;
        const weather = weatherEl.value;

        let selected = courses.food_indoor;
        if (purpose === "food") {
            selected = weather === "clear" ? courses.food_clear : courses.food_indoor;
        } else if (purpose === "shopping") {
            selected = weather === "clear" ? courses.shopping_clear : courses.shopping_indoor;
        } else if (purpose === "grocery") {
            selected = companion === "family" ? courses.grocery_family : courses.grocery_night;
        } else if (purpose === "walk") {
            selected = weather === "clear" ? courses.walk_seochon : courses.walk_kmedi;
        }

        badgeEl.textContent = selected.badge;
        titleEl.textContent = selected.title;
        guideLinkEl.href = selected.guideUrl;
        summaryEl.textContent = selected.summary;
        stepsEl.innerHTML = selected.steps.map(step => `
            <div class="course-step-item">
                <span class="course-step-time">${step.time}</span>
                <strong>${step.title}</strong>
                <p style="font-size: 0.88rem; color: var(--text-color-secondary); margin-top: 6px;">${step.desc}</p>
            </div>
        `).join("");
    }

    if (recommendBtn) {
        recommendBtn.addEventListener("click", renderCourse);
        purposeEl.addEventListener("change", renderCourse);
        companionEl.addEventListener("change", renderCourse);
        weatherEl.addEventListener("change", renderCourse);
    }

    // 10-Question Seoul Traditional Market Trivia Quiz
    const quizData = [
        {
            q: "1905년 대한민국 최초의 상설시장으로 세워졌으며, 맷돌 녹두빈대떡과 육회 골목으로 유명한 종로구의 시장은?",
            options: ["광장시장", "망원시장", "가락시장", "영동전통시장"],
            answer: 0,
            explain: "광장시장은 1905년 조선 상인들이 세운 '광장주식회사'에서 출발한 대한민국 최초의 상설시장입니다."
        },
        {
            q: "조선 시대 '엽전'으로 바꿔 시장 가맹점에서 원하는 반찬을 골라 담는 '도시락 카페'로 유명한 서촌의 시장은?",
            options: ["서울중앙시장", "통인시장", "수유시장", "암사종합시장"],
            answer: 1,
            explain: "경복궁 서쪽 통인시장의 엽전 도시락 카페(월요일·셋째 일요일 등 휴무 확인)에서는 엽전으로 기름떡볶이와 떡갈비 등을 골라 담을 수 있습니다."
        },
        {
            q: "1960년대 옛 폐극장 공간을 리모델링해 독특한 극장식 계단 좌석을 갖춘 '스타벅스 경동1960점'이 있는 시장은?",
            options: ["동대문종합시장", "남대문시장", "경동시장", "서울풍물시장"],
            answer: 2,
            explain: "제기동역 인근 경동시장 본관 3·4층에는 옛 경동극장을 되살린 경동1960점과 청년몰이 자리해 있습니다."
        },
        {
            q: "숭례문 옆에 위치해 아동복·주방용품·카메라 등 만물 도소매 상권과 '갈치조림 골목'이 유명한 시장은?",
            options: ["영등포전통시장", "남대문시장", "자양전통시장", "마장 축산물시장"],
            answer: 1,
            explain: "남대문시장 중앙 골목에는 매콤달콤한 갈치조림 노포와 손칼국수 골목이 형성되어 있습니다."
        },
        {
            q: "닭강정과 수제 고로케를 포장해 도보 10분 거리의 한강공원으로 피크닉을 떠나기 가장 좋은 마포구의 시장은?",
            options: ["망원시장", "동묘 벼룩시장", "가락시장", "경동시장"],
            answer: 0,
            explain: "6호선 망원역 2번 출구 앞 망원시장은 망리단길 카페거리 및 망원 한강공원과 연계된 서울 대표 핫플 시장입니다."
        },
        {
            q: "서울 전통시장에서 모바일·카드형 온누리상품권을 사용하면 상시 충전 할인 외에 연말정산 소득공제 혜택은 몇 %일까요?",
            options: ["15%", "25%", "40%", "60%"],
            answer: 2,
            explain: "전통시장에서 지출한 금액은 일반 신용카드 공제율보다 높은 40%의 전통시장 소득공제 혜택을 받을 수 있습니다."
        },
        {
            q: "1층 정육점에서 고른 신선한 한우를 2층 먹자골목 식당에서 상차림비를 내고 바로 구워 먹는 성동구의 시장은?",
            options: ["노량진수산시장", "마장 축산물시장", "서울중앙시장", "수유시장"],
            answer: 1,
            explain: "마장 축산물시장에서는 고기 부위를 직접 보고 구매한 뒤 인근 정육식당에서 숯불 구이로 바로 즐길 수 있습니다."
        },
        {
            q: "동관왕묘(보물) 담벼락을 따라 형성되어 구제 빈티지 의류와 LP판, 고서적을 고르는 재미가 있는 시장은?",
            options: ["동묘 벼룩시장", "통인시장", "암사종합시장", "영동전통시장"],
            answer: 0,
            explain: "동묘앞역 3번 출구 앞 동묘 벼룩시장은 어르신들의 쉼터이자 젊은 층이 찾는 빈티지 패션의 성지입니다."
        },
        {
            q: "옷·가방 부자재와 키링·비즈 등 액세서리 DIY 재료를 구매하려는 사람들이 모이는 '5층 액세서리 상가'가 있는 곳은?",
            options: ["남대문시장", "동대문종합시장", "서울풍물시장", "자양전통시장"],
            answer: 1,
            explain: "동대문역 8·9번 출구 앞 동대문종합시장 A~C동 5층은 국내 최대 규모의 액세서리 DIY 부자재 상가입니다."
        },
        {
            q: "현대화 시설인 '가락몰'을 갖추어 1층에서 회·과일을 사고 3층 식당가에서 바로 먹을 수 있는 송파구 도매시장은?",
            options: ["노량진수산시장", "가락시장", "영등포전통시장", "수유시장"],
            answer: 1,
            explain: "송파구 가락시장역 2·2-1번 출구와 연결된 가락몰은 쾌적한 실내 환경과 대형 주차장을 갖춘 수도권 최대 도소매 시장입니다."
        }
    ];

    let currentIdx = 0;
    let score = 0;
    let answered = false;

    const counterEl = document.getElementById("quiz-counter");
    const scoreEl = document.getElementById("quiz-score-label");
    const questionEl = document.getElementById("quiz-question");
    const optionsEl = document.getElementById("quiz-options");
    const feedbackEl = document.getElementById("quiz-feedback");
    const nextBtn = document.getElementById("quiz-next-btn");
    const restartBtn = document.getElementById("quiz-restart-btn");

    function renderQuizQuestion() {
        const item = quizData[currentIdx];
        answered = false;
        counterEl.textContent = `문제 ${currentIdx + 1} / ${quizData.length}`;
        scoreEl.textContent = `현재 점수: ${score}점`;
        questionEl.textContent = item.q;
        feedbackEl.hidden = true;
        feedbackEl.textContent = "";
        nextBtn.hidden = true;
        restartBtn.hidden = true;

        optionsEl.innerHTML = "";
        item.options.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "quiz-option-btn";
            btn.textContent = `${idx + 1}. ${opt}`;
            btn.addEventListener("click", () => handleAnswer(idx, btn));
            optionsEl.appendChild(btn);
        });
    }

    function handleAnswer(selectedIdx, clickedBtn) {
        if (answered) return;
        answered = true;
        const item = quizData[currentIdx];
        const allBtns = optionsEl.querySelectorAll(".quiz-option-btn");

        allBtns.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === item.answer) {
                btn.classList.add("correct");
            }
        });

        if (selectedIdx === item.answer) {
            score += 10;
            scoreEl.textContent = `현재 점수: ${score}점`;
            feedbackEl.innerHTML = `<strong style="color: #16a34a;">정답입니다! (+10점)</strong> ${item.explain}`;
        } else {
            clickedBtn.classList.add("wrong");
            feedbackEl.innerHTML = `<strong style="color: #dc2626;">아쉽네요! 정답은 '${item.options[item.answer]}'입니다.</strong> ${item.explain}`;
        }

        feedbackEl.hidden = false;

        if (currentIdx < quizData.length - 1) {
            nextBtn.hidden = false;
        } else {
            showFinalSummary();
        }
    }

    function showFinalSummary() {
        let rank = "서울 전통시장 새내기 여행자";
        if (score >= 90) rank = "서울 17대 전통시장 마스터 에디터";
        else if (score >= 70) rank = "골목 노포를 꿰뚫는 미식 탐험가";
        else if (score >= 50) rank = "주말 시장 나들이 단골 손님";

        feedbackEl.innerHTML += `<hr style="margin: 14px 0; border: 0; border-top: 1px solid var(--border-color);"><strong>최종 점수: ${score} / 100점</strong> — 등급: <strong>${rank}</strong>`;
        restartBtn.hidden = false;
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentIdx++;
            renderQuizQuestion();
        });
    }

    if (restartBtn) {
        restartBtn.addEventListener("click", () => {
            currentIdx = 0;
            score = 0;
            renderQuizQuestion();
        });
    }

    if (optionsEl) {
        renderQuizQuestion();
    }
});

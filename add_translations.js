const fs = require('fs');

let mainJs = fs.readFileSync('main.js', 'utf8');

// Insert KO
const koInsert = `    footerTerms: "이용약관",
    articlesTitle: "전통시장 심층 가이드",
    readMore: "더 읽어보기 &rarr;",
    articleGwangjangTitle: "광장시장 완전 정복",
    articleGwangjangDesc: "100년 전통의 먹거리 천국, 광장시장의 빈대떡부터 육회까지 모든 정보를 담았습니다.",
    articleNamdaemunTitle: "남대문시장 쇼핑 팁",
    articleNamdaemunDesc: "갈치조림 골목과 아동복 상가 등 남대문시장에서 놓치지 말아야 할 쇼핑 포인트를 짚어드립니다.",
    articleMangwonTitle: "망원시장 핫플 가이드",
    articleMangwonDesc: "MZ세대가 열광하는 망원동의 힙한 감성과 전통시장의 맛있는 만남을 소개합니다.",
    articleNoryangjinTitle: "노량진 수산시장 정복",
    articleNoryangjinDesc: "도심 속 바다 여행! 신선한 횟감 고르는 법과 식당가 이용 꿀팁을 전해드립니다.",
    articleTonginTitle: "통인시장 엽전 도시락",
    articleTonginDesc: "엽전 들고 떠나는 서촌의 정겨운 맛 탐방! 나만의 도시락을 만드는 재미를 소개합니다.",
    articleGyeongdongTitle: "경동시장 건강 여행",
    articleGyeongdongDesc: "은은한 한약재 향기와 극장식 카페의 반전 매력! 서울약령시의 모든 것을 담았습니다.",
    articleDongdaemunTitle: "동대문 종합시장 가이드",
    articleDongdaemunDesc: "패션의 시작점! 원단부터 액세서리 부자재까지 보물찾기 같은 쇼핑 투어를 떠나보세요.",`;
mainJs = mainJs.replace(/footerTerms: "이용약관",/, koInsert);

// Insert EN
const enInsert = `    footerTerms: "Terms of Use",
    articlesTitle: "In-Depth Traditional Market Guide",
    readMore: "Read more &rarr;",
    articleGwangjangTitle: "Mastering Gwangjang Market",
    articleGwangjangDesc: "A food paradise with 100 years of history! Everything from bindaetteok to yukhoe.",
    articleNamdaemunTitle: "Namdaemun Market Shopping Tips",
    articleNamdaemunDesc: "Key shopping points like the galchi-jorim alley and children's clothing arcades.",
    articleMangwonTitle: "Mangwon Market Hotspot Guide",
    articleMangwonDesc: "A tasty meeting of Mangwon-dong's hip vibe and a traditional market.",
    articleNoryangjinTitle: "Noryangjin Fish Market Guide",
    articleNoryangjinDesc: "An ocean trip in the city! Tips on choosing fresh sashimi and using the restaurants.",
    articleTonginTitle: "Tongin Market Brass Coin Lunchbox",
    articleTonginDesc: "Make your own lunchbox with brass coins in Seochon's friendly flavor exploration!",
    articleGyeongdongTitle: "Gyeongdong Market Health Trip",
    articleGyeongdongDesc: "The scent of herbal medicine and the twist charm of a theater cafe!",
    articleDongdaemunTitle: "Dongdaemun General Market Guide",
    articleDongdaemunDesc: "The starting point of fashion! A treasure hunt shopping tour for fabrics and accessories.",`;
mainJs = mainJs.replace(/footerTerms: "Terms of Use",/, enInsert);

// Insert JA
const jaInsert = `    footerTerms: "利用規約",
    articlesTitle: "伝統市場 深掘りガイド",
    readMore: "続きを読む &rarr;",
    articleGwangjangTitle: "広蔵市場 完全攻略",
    articleGwangjangDesc: "100年の伝統を持つ食の楽園！ピンデトッからユッケまで全ての情報を盛り込みました。",
    articleNamdaemunTitle: "南大門市場 ショッピングのコツ",
    articleNamdaemunDesc: "太刀魚の煮付け横丁や子供服商店街など、見逃せないショッピングポイントをご紹介。",
    articleMangwonTitle: "望遠市場 ホットスポットガイド",
    articleMangwonDesc: "MZ世代が熱狂する望遠洞のヒップな感性と、伝統市場の美味しい出会いをご紹介。",
    articleNoryangjinTitle: "鷺梁津水産市場 攻略",
    articleNoryangjinDesc: "都心の中の海旅行！新鮮な刺身の選び方と食堂街の利用のコツをお伝えします。",
    articleTonginTitle: "通仁市場 葉銭弁当",
    articleTonginDesc: "葉銭を持って西村の味を探訪！自分だけの弁当を作る楽しさをご紹介します。",
    articleGyeongdongTitle: "京東市場 健康旅行",
    articleGyeongdongDesc: "ほのかな漢方薬の香りと劇場型カフェのギャップの魅力！ソウル薬令市の全てを盛り込みました。",
    articleDongdaemunTitle: "東大門総合市場 ガイド",
    articleDongdaemunDesc: "ファッションの始まり！生地からアクセサリーの副資材まで、宝探しのようなショッピングツアーへ。",`;
mainJs = mainJs.replace(/footerTerms: "利用規約",/, jaInsert);

// Insert ZH
const zhInsert = `    footerTerms: "服务条款",
    articlesTitle: "传统市场深度指南",
    readMore: "阅读更多 &rarr;",
    articleGwangjangTitle: "广藏市场完全攻略",
    articleGwangjangDesc: "拥有100年传统的传统美食天堂，从绿豆煎饼到生拌牛肉，应有尽有。",
    articleNamdaemunTitle: "南大门市场购物提示",
    articleNamdaemunDesc: "为您指出带鱼胡同和童装商街等不容错过的购物点。",
    articleMangwonTitle: "望远市场热门指南",
    articleMangwonDesc: "介绍MZ世代热捧的望远洞时尚感性与传统市场的美味碰撞。",
    articleNoryangjinTitle: "鹭梁津水产市场攻略",
    articleNoryangjinDesc: "市中心的海滨之旅！传授挑选新鲜生鱼片的方法和餐厅使用技巧。",
    articleTonginTitle: "通仁市场铜钱盒饭",
    articleTonginDesc: "带着铜钱去西村探寻熟悉的味道！介绍制作专属盒饭的乐趣。",
    articleGyeongdongTitle: "京东市场健康之旅",
    articleGyeongdongDesc: "淡淡的中药香与剧场式咖啡馆的反转魅力！包含首尔药令市的所有信息。",
    articleDongdaemunTitle: "东大门综合市场指南",
    articleDongdaemunDesc: "时尚的起点！从面料到辅料，开启如寻宝般的购物之旅。",`;
mainJs = mainJs.replace(/footerTerms: "服务条款",/, zhInsert);


// Update setLanguage function
const langFunctionUpdates = `
    const footerTerms = document.getElementById("footer-terms");
    if (footerTerms) footerTerms.textContent = t.footerTerms;

    // Articles Section
    const articlesTitle = document.getElementById("articles-title");
    if (articlesTitle) articlesTitle.textContent = t.articlesTitle;
    
    document.querySelectorAll(".read-more-text").forEach(el => {
        el.innerHTML = t.readMore;
    });

    const articleGwangjangTitle = document.getElementById("article-gwangjang-title");
    if (articleGwangjangTitle) articleGwangjangTitle.textContent = t.articleGwangjangTitle;
    const articleGwangjangDesc = document.getElementById("article-gwangjang-desc");
    if (articleGwangjangDesc) articleGwangjangDesc.textContent = t.articleGwangjangDesc;

    const articleNamdaemunTitle = document.getElementById("article-namdaemun-title");
    if (articleNamdaemunTitle) articleNamdaemunTitle.textContent = t.articleNamdaemunTitle;
    const articleNamdaemunDesc = document.getElementById("article-namdaemun-desc");
    if (articleNamdaemunDesc) articleNamdaemunDesc.textContent = t.articleNamdaemunDesc;

    const articleMangwonTitle = document.getElementById("article-mangwon-title");
    if (articleMangwonTitle) articleMangwonTitle.textContent = t.articleMangwonTitle;
    const articleMangwonDesc = document.getElementById("article-mangwon-desc");
    if (articleMangwonDesc) articleMangwonDesc.textContent = t.articleMangwonDesc;

    const articleNoryangjinTitle = document.getElementById("article-noryangjin-title");
    if (articleNoryangjinTitle) articleNoryangjinTitle.textContent = t.articleNoryangjinTitle;
    const articleNoryangjinDesc = document.getElementById("article-noryangjin-desc");
    if (articleNoryangjinDesc) articleNoryangjinDesc.textContent = t.articleNoryangjinDesc;

    const articleTonginTitle = document.getElementById("article-tongin-title");
    if (articleTonginTitle) articleTonginTitle.textContent = t.articleTonginTitle;
    const articleTonginDesc = document.getElementById("article-tongin-desc");
    if (articleTonginDesc) articleTonginDesc.textContent = t.articleTonginDesc;

    const articleGyeongdongTitle = document.getElementById("article-gyeongdong-title");
    if (articleGyeongdongTitle) articleGyeongdongTitle.textContent = t.articleGyeongdongTitle;
    const articleGyeongdongDesc = document.getElementById("article-gyeongdong-desc");
    if (articleGyeongdongDesc) articleGyeongdongDesc.textContent = t.articleGyeongdongDesc;

    const articleDongdaemunTitle = document.getElementById("article-dongdaemun-title");
    if (articleDongdaemunTitle) articleDongdaemunTitle.textContent = t.articleDongdaemunTitle;
    const articleDongdaemunDesc = document.getElementById("article-dongdaemun-desc");
    if (articleDongdaemunDesc) articleDongdaemunDesc.textContent = t.articleDongdaemunDesc;
`;

mainJs = mainJs.replace(/    const footerTerms = document\.getElementById\("footer-terms"\);\n    if \(footerTerms\) footerTerms\.textContent = t\.footerTerms;/, langFunctionUpdates);


fs.writeFileSync('main.js', mainJs, 'utf8');

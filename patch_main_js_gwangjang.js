const fs = require('fs');

let mainJs = fs.readFileSync('main.js', 'utf8');

// The replacement logic
const koInsert = `    guideGwangjangTitle: "광장시장 완전 정복 가이드:<br>먹거리부터 이용 꿀팁까지",
    guideGwangjangSubtitle: "서울의 정과 맛이 살아있는 100년 전통의 상설시장",
    guideGwangjangP1: "서울 종로구의 중심에 위치한 광장시장은 단순한 시장 그 이상의 의미를 지닙니다. 1905년에 세워진 대한민국 최초의 상설시장으로, 100년이 넘는 세월 동안 서울 시민들의 삶과 함께해온 역사적 장소입니다. 오늘날에는 국내외 관광객들이 가장 선호하는 서울의 관광 명소 중 하나로 꼽힙니다.",
    guideGwangjangH2_1: "1. 광장시장의 역사적 배경",
    guideGwangjangP2: "광장시장은 일제강점기 당시 일본 자본에 맞서 조선 상인들이 설립한 '광장주식회사'에서 시작되었습니다. 초기에는 농수산물을 주로 취급했으나, 한국전쟁 이후 구호물자와 군용물자들이 거래되면서 규모가 커졌고, 현재는 원단, 한복, 구제 의류부터 다양한 먹거리까지 갖춘 종합 시장으로 발전했습니다.",
    guideGwangjangH2_2: "2. 반드시 먹어봐야 할 3대 명물",
    guideGwangjangP3: "광장시장을 방문하는 가장 큰 이유는 단연 '먹거리'입니다. 시장 입구부터 코를 자극하는 고소한 냄새는 방문객들의 발길을 멈추게 합니다.",
    guideGwangjangLi1_Title: "녹두빈대떡:",
    guideGwangjangLi1_Desc: "맷돌에 직접 간 녹두로 만든 반죽을 기름에 튀기듯 구워낸 빈대떡은 광장시장의 상징입니다. 겉은 바삭하고 속은 촉촉한 식감이 일품입니다.",
    guideGwangjangLi2_Title: "마약김밥:",
    guideGwangjangLi2_Desc: "한 번 먹으면 멈출 수 없다고 해서 붙여진 이름입니다. 꼬마김밥에 톡 쏘는 겨자 소스를 찍어 먹는 간단한 조합이지만 그 중독성은 대단합니다.",
    guideGwangjangLi3_Title: "육회:",
    guideGwangjangLi3_Desc: "시장 한쪽에는 육회 골목이 형성되어 있습니다. 신선한 소고기와 달콤한 배, 그리고 노른자가 어우러진 육회는 저렴한 가격에 최고의 품질을 자랑합니다.",
    guideGwangjangH2_3: "3. 쇼핑의 즐거움: 한복과 구제시장",
    guideGwangjangP4: "먹거리 외에도 광장시장은 패션의 성지이기도 합니다. 특히 2층에 위치한 구제 의류 시장은 패션 피플들의 '보물찾기' 장소로 유명합니다. 전 세계에서 건너온 빈티지 옷들을 저렴하게 득템할 수 있습니다. 또한, 전통 한복과 각종 침구류, 원단 시장 역시 국내 최대 규모를 자랑합니다.",
    guideGwangjangH2_4: "4. 방문 전 알아두면 좋은 꿀팁",
    guideGwangjangP5: "광장시장을 더욱 스마트하게 즐기기 위한 몇 가지 팁을 소개합니다.",
    guideGwangjangLi4_Title: "현금 준비:",
    guideGwangjangLi4_Desc: "대부분 카드 결제가 가능하지만, 작은 노점의 경우 현금이나 계좌이체가 더 편리할 수 있습니다.",
    guideGwangjangLi5_Title: "방문 시간:",
    guideGwangjangLi5_Desc: "주말 점심시간은 매우 혼잡합니다. 여유로운 구경을 원하신다면 평일 오전이나 오후 3~4시경 방문을 추천합니다.",
    guideGwangjangLi6_Title: "주차:",
    guideGwangjangLi6_Desc: "시장 주변 주차는 매우 어렵습니다. 인근의 종묘 공영 주차장을 이용하거나, 가급적 지하철(종로5가역 7, 8번 출구)을 이용하는 것이 가장 좋습니다.",
    guideGwangjangP6: "광장시장은 서울의 과거와 현재가 공존하는 특별한 공간입니다. 이번 주말, 사람 냄새 나는 정겨운 시장에서 맛있는 음식과 함께 서울의 활기를 느껴보시는 건 어떨까요?",
    guideBreadcrumbHome: "홈",
    guideBreadcrumbGuide: "가이드",
    guideBreadcrumbCurrentGwangjang: "광장시장",
    articleDongdaemunDesc: "패션의 시작점! 원단부터 액세서리 부자재까지 보물찾기 같은 쇼핑 투어를 떠나보세요.",`;
mainJs = mainJs.replace(/    articleDongdaemunDesc: "패션의 시작점! 원단부터 액세서리 부자재까지 보물찾기 같은 쇼핑 투어를 떠나보세요.",/, koInsert);

const enInsert = `    guideGwangjangTitle: "Mastering Gwangjang Market:<br>From Food to Tips",
    guideGwangjangSubtitle: "A 100-year-old traditional market alive with the heart and taste of Seoul",
    guideGwangjangP1: "Located in the heart of Jongno-gu, Seoul, Gwangjang Market is more than just a market. As Korea's first permanent market established in 1905, it is a historical place that has been part of the lives of Seoul citizens for over a century. Today, it is considered one of the most preferred tourist attractions in Seoul by both domestic and foreign tourists.",
    guideGwangjangH2_1: "1. Historical Background of Gwangjang Market",
    guideGwangjangP2: "Gwangjang Market started with the 'Gwangjang Company' established by Joseon merchants to counter Japanese capital during the Japanese colonial period. Initially, it mainly handled agricultural and marine products, but grew in size as relief supplies and military supplies were traded after the Korean War. Now, it has developed into a comprehensive market offering everything from fabrics, hanbok, and vintage clothing to a variety of foods.",
    guideGwangjangH2_2: "2. Top 3 Must-Eats",
    guideGwangjangP3: "The biggest reason to visit Gwangjang Market is definitely the 'food'. The savory smell that stimulates your nose right from the market entrance makes visitors stop in their tracks.",
    guideGwangjangLi1_Title: "Mung Bean Pancake (Bindaetteok):",
    guideGwangjangLi1_Desc: "Pancakes made from mung bean batter ground on a millstone and pan-fried in oil are the symbol of Gwangjang Market. The crispy exterior and moist interior texture is excellent.",
    guideGwangjangLi2_Title: "Mayak Gimbap:",
    guideGwangjangLi2_Desc: "Named because you can't stop eating it once you start. It's a simple combination of mini gimbap dipped in pungent mustard sauce, but its addictiveness is incredible.",
    guideGwangjangLi3_Title: "Beef Tartare (Yukhoe):",
    guideGwangjangLi3_Desc: "There is a yukhoe alley formed on one side of the market. Yukhoe, a harmonious blend of fresh beef, sweet pear, and egg yolk, boasts the best quality at an affordable price.",
    guideGwangjangH2_3: "3. The Joy of Shopping: Hanbok and Vintage Market",
    guideGwangjangP4: "In addition to food, Gwangjang Market is also a mecca for fashion. In particular, the vintage clothing market located on the 2nd floor is famous as a 'treasure hunt' place for fashion people. You can score vintage clothes from all over the world at low prices. In addition, traditional hanbok, various bedding, and the fabric market are also the largest in the country.",
    guideGwangjangH2_4: "4. Tips to Know Before Visiting",
    guideGwangjangP5: "Here are some tips to enjoy Gwangjang Market more smartly.",
    guideGwangjangLi4_Title: "Prepare Cash:",
    guideGwangjangLi4_Desc: "Although most card payments are possible, cash or account transfers may be more convenient for small stalls.",
    guideGwangjangLi5_Title: "Visiting Time:",
    guideGwangjangLi5_Desc: "Lunchtime on weekends is very crowded. If you want a leisurely look around, visiting around weekday mornings or 3-4 pm is recommended.",
    guideGwangjangLi6_Title: "Parking:",
    guideGwangjangLi6_Desc: "Parking around the market is very difficult. It is best to use the nearby Jongmyo public parking lot or preferably the subway (Jongno 5-ga Station Exits 7, 8).",
    guideGwangjangP6: "Gwangjang Market is a special space where the past and present of Seoul coexist. How about feeling the vitality of Seoul with delicious food in a friendly market full of human warmth this weekend?",
    guideBreadcrumbHome: "Home",
    guideBreadcrumbGuide: "Guide",
    guideBreadcrumbCurrentGwangjang: "Gwangjang Market",
    articleDongdaemunDesc: "The starting point of fashion! A treasure hunt shopping tour for fabrics and accessories.",`;
mainJs = mainJs.replace(/    articleDongdaemunDesc: "The starting point of fashion! A treasure hunt shopping tour for fabrics and accessories.",/, enInsert);

const jaInsert = `    guideGwangjangTitle: "広蔵市場 完全攻略ガイド:<br>グルメから利用のコツまで",
    guideGwangjangSubtitle: "ソウルの人情と味が生きる100年の伝統の常設市場",
    guideGwangjangP1: "ソウル鍾路区の中心に位置する広蔵市場は、単なる市場以上の意味を持ちます。1905年に建てられた韓国初の常設市場であり、100年以上の歳月の間、ソウル市民の生活と共にしてきた歴史的な場所です。今日では、国内外の観光客が最も好むソウルの観光名所の一つとして数えられています。",
    guideGwangjangH2_1: "1. 広蔵市場の歴史的背景",
    guideGwangjangP2: "広蔵市場は日本統治時代当時、日本の資本に対抗して朝鮮の商人たちが設立した「広蔵株式会社」から始まりました。初期には農水産物を主に取り扱っていましたが、朝鮮戦争以降、救援物資や軍需物資が取引されるようになり規模が大きくなり、現在は生地、韓服、古着から様々なグルメまで揃う総合市場へと発展しました。",
    guideGwangjangH2_2: "2. 必ず食べるべき3大名物",
    guideGwangjangP3: "広蔵市場を訪れる最大の理由は断然「グルメ」です。市場の入り口から鼻を刺激する香ばしい匂いは、訪問客の足を止めさせます。",
    guideGwangjangLi1_Title: "緑豆ピンデトッ:",
    guideGwangjangLi1_Desc: "石臼で直接挽いた緑豆で作った生地を油で揚げるように焼いたピンデトッは、広蔵市場の象徴です。外はサクサク、中はしっとりとした食感が絶品です。",
    guideGwangjangLi2_Title: "麻薬キンパ:",
    guideGwangjangLi2_Desc: "一度食べたら止められないということで付けられた名前です。コマキンパ（小さな海苔巻き）にツンとするマスタードソースをつけて食べるシンプルな組み合わせですが、その中毒性はすごいものです。",
    guideGwangjangLi3_Title: "ユッケ:",
    guideGwangjangLi3_Desc: "市場の一角にはユッケ横丁が形成されています。新鮮な牛肉と甘い梨、そして卵黄が調和したユッケは、手頃な価格で最高の品質を誇ります。",
    guideGwangjangH2_3: "3. ショッピングの楽しみ: 韓服と古着市場",
    guideGwangjangP4: "グルメ以外にも、広蔵市場はファッションの聖地でもあります。特に2階に位置する古着市場は、ファッションピープルの「宝探し」の場所として有名です。世界中から渡ってきたヴィンテージ服を安く手に入れることができます。また、伝統的な韓服や各種寝具類、生地市場も国内最大規模を誇ります。",
    guideGwangjangH2_4: "4. 訪問前に知っておきたいコツ",
    guideGwangjangP5: "広蔵市場をさらにスマートに楽しむためのいくつかのヒントをご紹介します。",
    guideGwangjangLi4_Title: "現金の準備:",
    guideGwangjangLi4_Desc: "ほとんどカード決済が可能ですが、小さな露店の場合は現金や口座振替がより便利な場合があります。",
    guideGwangjangLi5_Title: "訪問時間:",
    guideGwangjangLi5_Desc: "週末のランチタイムは非常に混雑します。ゆったりと見学したい場合は、平日の午前中や午後3〜4時頃の訪問をお勧めします。",
    guideGwangjangLi6_Title: "駐車:",
    guideGwangjangLi6_Desc: "市場周辺の駐車は非常に困難です。近隣の宗廟公営駐車場を利用するか、なるべく地下鉄（鍾路5街駅7、8番出口）を利用するのが一番良いです。",
    guideGwangjangP6: "広蔵市場はソウルの過去と現在が共存する特別な空間です。今週末、人間味あふれる温かい市場で、美味しい食べ物と共にソウルの活気を感じてみてはいかがでしょうか？",
    guideBreadcrumbHome: "ホーム",
    guideBreadcrumbGuide: "ガイド",
    guideBreadcrumbCurrentGwangjang: "広蔵市場",
    articleDongdaemunDesc: "ファッションの始まり！生地からアクセサリーの副資材まで、宝探しのようなショッピングツアーへ。",`;
mainJs = mainJs.replace(/    articleDongdaemunDesc: "ファッションの始まり！生地からアクセサリーの副資材まで、宝探しのようなショッピングツアーへ。",/, jaInsert);

const zhInsert = `    guideGwangjangTitle: "广藏市场完全攻略指南:<br>从美食到使用小贴士",
    guideGwangjangSubtitle: "充满首尔人情与美味的百年传统常设市场",
    guideGwangjangP1: "位于首尔钟路区中心的广藏市场，意义远不止一个市场。作为1905年建立的韩国首个常设市场，在一百多年的岁月里，它是与首尔市民的生活息息相关的历史性场所。如今，它被认为是国内外游客最喜欢的首尔旅游景点之一。",
    guideGwangjangH2_1: "1. 广藏市场的历史背景",
    guideGwangjangP2: "广藏市场始于日本殖民统治时期，由朝鲜商人为对抗日本资本而成立的“广藏株式会社”。初期主要经营农水产品，但韩战后由于救济物资和军用物资的交易而扩大了规模，现在已发展成为从面料、韩服、二手服装到各种美食一应俱全的综合市场。",
    guideGwangjangH2_2: "2. 必尝的3大名吃",
    guideGwangjangP3: "访问广藏市场的最大原因绝对是“美食”。从市场入口开始，刺激鼻尖的香味就让人停下脚步。",
    guideGwangjangLi1_Title: "绿豆煎饼:",
    guideGwangjangLi1_Desc: "用石磨亲自研磨的绿豆面糊像油炸一样煎出的煎饼是广藏市场的象征。外酥里嫩的口感堪称一绝。",
    guideGwangjangLi2_Title: "麻药紫菜包饭:",
    guideGwangjangLi2_Desc: "因为一旦吃起来就停不下来而得名。虽然只是迷你紫菜包饭蘸着刺鼻的芥末酱吃的简单组合，但其令人上瘾的程度是惊人的。",
    guideGwangjangLi3_Title: "生拌牛肉:",
    guideGwangjangLi3_Desc: "市场的一侧形成了生拌牛肉胡同。新鲜的牛肉、甜甜的梨和蛋黄交融在一起的生拌牛肉，以低廉的价格夸耀着最高的品质。",
    guideGwangjangH2_3: "3. 购物的乐趣: 韩服和二手市场",
    guideGwangjangP4: "除了美食，广藏市场也是时尚的圣地。尤其是位于2楼的二手服装市场，作为时尚达人们的“寻宝”场所而闻名。能以低廉的价格淘到来自世界各地的复古服装。此外，传统韩服、各种床上用品、面料市场也是韩国最大规模的。",
    guideGwangjangH2_4: "4. 访问前要知道的小贴士",
    guideGwangjangP5: "介绍几个能更聪明地享受广藏市场的小贴士。",
    guideGwangjangLi4_Title: "准备现金:",
    guideGwangjangLi4_Desc: "大部分可以刷卡，但小摊位的话，现金或转账可能更方便。",
    guideGwangjangLi5_Title: "访问时间:",
    guideGwangjangLi5_Desc: "周末午餐时间非常拥挤。如果想悠闲地逛逛，建议平日上午或下午3~4点左右访问。",
    guideGwangjangLi6_Title: "停车:",
    guideGwangjangLi6_Desc: "市场周边停车非常困难。最好使用附近的宗庙公营停车场，或者尽量乘坐地铁（钟路5街站7、8号出口）。",
    guideGwangjangP6: "广藏市场是首尔的过去和现在共存的特殊空间。这个周末，在充满人情味的温馨市场里，伴着美味的食物感受一下首尔的活力如何？",
    guideBreadcrumbHome: "主页",
    guideBreadcrumbGuide: "指南",
    guideBreadcrumbCurrentGwangjang: "广藏市场",
    articleDongdaemunDesc: "时尚的起点！从面料到辅料，开启如寻宝般的购物之旅。",`;
mainJs = mainJs.replace(/    articleDongdaemunDesc: "时尚的起点！从面料到辅料，开启如寻宝般的购物之旅。",/, zhInsert);


const fnUpdates = `
    const articleDongdaemunDesc = document.getElementById("article-dongdaemun-desc");
    if (articleDongdaemunDesc) articleDongdaemunDesc.textContent = t.articleDongdaemunDesc;

    // Gwangjang Guide Updates
    const gjH1 = document.getElementById("gj-h1");
    if (gjH1) gjH1.innerHTML = t.guideGwangjangTitle;
    const gjSubtitle = document.getElementById("gj-subtitle");
    if (gjSubtitle) gjSubtitle.textContent = t.guideGwangjangSubtitle;
    const gjP1 = document.getElementById("gj-p1");
    if (gjP1) gjP1.textContent = t.guideGwangjangP1;
    const gjH2_1 = document.getElementById("gj-h2-1");
    if (gjH2_1) gjH2_1.textContent = t.guideGwangjangH2_1;
    const gjP2 = document.getElementById("gj-p2");
    if (gjP2) gjP2.textContent = t.guideGwangjangP2;
    const gjH2_2 = document.getElementById("gj-h2-2");
    if (gjH2_2) gjH2_2.textContent = t.guideGwangjangH2_2;
    const gjP3 = document.getElementById("gj-p3");
    if (gjP3) gjP3.textContent = t.guideGwangjangP3;
    const gjLi1Title = document.getElementById("gj-li1-title");
    if (gjLi1Title) gjLi1Title.textContent = t.guideGwangjangLi1_Title;
    const gjLi1Desc = document.getElementById("gj-li1-desc");
    if (gjLi1Desc) gjLi1Desc.textContent = t.guideGwangjangLi1_Desc;
    const gjLi2Title = document.getElementById("gj-li2-title");
    if (gjLi2Title) gjLi2Title.textContent = t.guideGwangjangLi2_Title;
    const gjLi2Desc = document.getElementById("gj-li2-desc");
    if (gjLi2Desc) gjLi2Desc.textContent = t.guideGwangjangLi2_Desc;
    const gjLi3Title = document.getElementById("gj-li3-title");
    if (gjLi3Title) gjLi3Title.textContent = t.guideGwangjangLi3_Title;
    const gjLi3Desc = document.getElementById("gj-li3-desc");
    if (gjLi3Desc) gjLi3Desc.textContent = t.guideGwangjangLi3_Desc;
    const gjH2_3 = document.getElementById("gj-h2-3");
    if (gjH2_3) gjH2_3.textContent = t.guideGwangjangH2_3;
    const gjP4 = document.getElementById("gj-p4");
    if (gjP4) gjP4.textContent = t.guideGwangjangP4;
    const gjH2_4 = document.getElementById("gj-h2-4");
    if (gjH2_4) gjH2_4.textContent = t.guideGwangjangH2_4;
    const gjP5 = document.getElementById("gj-p5");
    if (gjP5) gjP5.textContent = t.guideGwangjangP5;
    const gjLi4Title = document.getElementById("gj-li4-title");
    if (gjLi4Title) gjLi4Title.textContent = t.guideGwangjangLi4_Title;
    const gjLi4Desc = document.getElementById("gj-li4-desc");
    if (gjLi4Desc) gjLi4Desc.textContent = t.guideGwangjangLi4_Desc;
    const gjLi5Title = document.getElementById("gj-li5-title");
    if (gjLi5Title) gjLi5Title.textContent = t.guideGwangjangLi5_Title;
    const gjLi5Desc = document.getElementById("gj-li5-desc");
    if (gjLi5Desc) gjLi5Desc.textContent = t.guideGwangjangLi5_Desc;
    const gjLi6Title = document.getElementById("gj-li6-title");
    if (gjLi6Title) gjLi6Title.textContent = t.guideGwangjangLi6_Title;
    const gjLi6Desc = document.getElementById("gj-li6-desc");
    if (gjLi6Desc) gjLi6Desc.textContent = t.guideGwangjangLi6_Desc;
    const gjP6 = document.getElementById("gj-p6");
    if (gjP6) gjP6.textContent = t.guideGwangjangP6;
    
    // Breadcrumbs
    const bcHome = document.getElementById("bc-home");
    if (bcHome) bcHome.textContent = t.guideBreadcrumbHome;
    const bcGuide = document.getElementById("bc-guide");
    if (bcGuide) bcGuide.textContent = t.guideBreadcrumbGuide;
    const bcCurrent = document.getElementById("bc-current");
    if (bcCurrent) bcCurrent.textContent = t.guideBreadcrumbCurrentGwangjang;
`;

mainJs = mainJs.replace(/    const articleDongdaemunDesc = document\.getElementById\("article-dongdaemun-desc"\);\n    if \(articleDongdaemunDesc\) articleDongdaemunDesc\.textContent = t\.articleDongdaemunDesc;/, fnUpdates);

fs.writeFileSync('main.js', mainJs, 'utf8');

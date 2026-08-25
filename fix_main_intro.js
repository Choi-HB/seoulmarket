const fs = require('fs');

let mainJs = fs.readFileSync('main.js', 'utf8');

const koIntro = `    introHeading: "서울 전통시장: 과거와 현재가 공존하는 문화 공간",
    introP1: "대한민국의 수도 서울은 최첨단 빌딩 숲과 화려한 네온사인이 가득한 현대적인 도시입니다. 하지만 그 화려함 이면에는 수십 년, 길게는 백 년이 넘는 세월 동안 서민들의 삶과 애환을 함께해 온 <strong>전통시장</strong>들이 굳건히 자리 잡고 있습니다. 서울의 전통시장은 단순한 상거래의 장소를 넘어, 한국의 깊은 역사와 따뜻한 '정(情)', 그리고 역동적인 문화를 온몸으로 느낄 수 있는 살아있는 박물관과도 같습니다.",
    introP2: "각 구마다 특색 있게 자리한 시장들은 저마다의 독특한 매력을 뽐냅니다. 종로구의 <strong>광장시장</strong>은 빈대떡과 마약김밥, 육회 등 한국의 대표적인 길거리 음식을 맛볼 수 있는 미식의 천국이며, 중구의 <strong>남대문시장</strong>은 의류, 그릇, 액세서리 등 없는 것이 없는 국내 최대 규모의 종합 시장입니다. 마포구의 <strong>망원시장</strong>은 젊은 세대(MZ세대)의 발길을 사로잡는 트렌디한 먹거리와 감성적인 분위기로 새롭게 떠오르고 있으며, 동대문구의 <strong>경동시장</strong>은 전국 최대 규모의 한약재와 농수산물이 거래되는 건강의 중심지입니다.",
    introP3: "'서울 전통시장 가이드'는 이렇게 다채로운 매력을 지닌 서울 곳곳의 전통시장 정보를 한곳에 모아 제공합니다. 현지인들이 사랑하는 숨은 맛집부터 외국인 관광객을 위한 필수 쇼핑 리스트, 그리고 주차장 및 대중교통 이용 팁까지, 전통시장을 200% 즐길 수 있는 유용한 가이드를 확인해 보세요. 우리의 전통시장이 전하는 따뜻한 온기와 활기찬 에너지를 직접 경험해 보시기를 바랍니다.",
`;

const enIntro = `    introHeading: "Seoul Traditional Markets: Where Past and Present Coexist",
    introP1: "Seoul, the capital of South Korea, is a modern city filled with skyscrapers and bright neon signs. However, behind its glamour, <strong>traditional markets</strong> have stood firmly for decades, even over a century, sharing the joys and sorrows of the common people. Seoul's traditional markets are more than just places of commerce; they are living museums where you can fully experience Korea's deep history, warm 'Jeong' (affection), and dynamic culture.",
    introP2: "The markets, each uniquely situated in different districts, boast their own distinct charms. <strong>Gwangjang Market</strong> in Jongno-gu is a gastronomic paradise where you can taste Korea's representative street foods like bindaetteok (mung bean pancakes), mayak gimbap, and yukhoe (beef tartare). <strong>Namdaemun Market</strong> in Jung-gu is the largest comprehensive market in Korea with everything from clothing and tableware to accessories. <strong>Mangwon Market</strong> in Mapo-gu is emerging as a trendy spot capturing the hearts of the younger generation (Gen Z) with hip foods and an emotional atmosphere, while <strong>Gyeongdong Market</strong> in Dongdaemun-gu is a center for health where the largest volume of medicinal herbs and agricultural products are traded.",
    introP3: "'Seoul Traditional Market Guide' gathers and provides information on these diverse and charming traditional markets across Seoul. From hidden foodie gems loved by locals to essential shopping lists for foreign tourists, as well as parking and public transportation tips, check out our useful guide to enjoy traditional markets 200%. We hope you will personally experience the warm glow and vibrant energy that our traditional markets convey.",
`;

const jaIntro = `    introHeading: "ソウルの伝統市場：過去と現在が共存する文化空間",
    introP1: "大韓民国の首都ソウルは、最先端のビル群と華やかなネオンサインにあふれる現代的な都市です。しかし、その華やかさの裏には、数十年、長くは百年以上の歳月の間、庶民の生活と哀歓を共にしてきた<strong>伝統市場</strong>がしっかりと根付いています。ソウルの伝統市場は、単なる商取引の場所を超えて、韓国の深い歴史と温かい「情」、そして躍動的な文化を体全体で感じることができる生きた博物館のようなものです。",
    introP2: "各区ごとに特色を持って位置する市場は、それぞれ独自の魅力を誇っています。鍾路区の<strong>広蔵市場</strong>は、ピンデトッや麻薬キンパ、ユッケなど、韓国を代表する屋台料理を味わえる美食の天国であり、中区の<strong>南大門市場</strong>は、衣類、食器、アクセサリーなどないものがない国内最大規模の総合市場です。麻浦区の<strong>望遠市場</strong>は、若い世代（MZ世代）の足を引きつけるトレンディな食べ物と感性的な雰囲気で新たに浮上しており、東大門区の<strong>京東市場</strong>は、全国最大規模の漢方薬材と農水産物が取引される健康の中心地です。",
    introP3: "「ソウル伝統市場ガイド」は、このように多彩な魅力を持つソウル各地の伝統市場情報を一堂に集めて提供しています。地元の人々に愛される隠れた名店から、外国人観光客のための必須ショッピングリスト、そして駐車場や公共交通機関の利用のコツまで、伝統市場を200%楽しむための便利なガイドをご確認ください。私たちの伝統市場が伝える温かいぬくもりと活気あるエネルギーをぜひ直接体験してみてください。",
`;

const zhIntro = `    introHeading: "首尔传统市场：过去与现在共存的文化空间",
    introP1: "大韩民国的首都首尔，是一座充满尖端建筑群和华丽霓虹灯的现代都市。然而，在这份华丽的背后，数十乃至上百年来，与平民百姓的生活和悲欢离合紧密相连的<strong>传统市场</strong>依然稳稳地屹立着。首尔的传统市场不仅仅是商业交易的场所，更像是活着的博物馆，在这里你可以全身心地感受到韩国深厚的历史、温暖的“情”以及充满活力的文化。",
    introP2: "各区特色鲜明的市场都展现着自己独特的魅力。钟路区的<strong>广藏市场</strong>是美食的天堂，可以品尝到绿豆煎饼、麻药紫菜包饭、生拌牛肉等韩国代表性的街头小吃；中区的<strong>南大门市场</strong>则是韩国规模最大的综合市场，服装、餐具、饰品等应有尽有。麻浦区的<strong>望远市场</strong>以其吸引年轻一代（MZ世代）的时尚美食和感性氛围而正在崛起，而东大门区的<strong>京东市场</strong>则是全国最大规模的中药材和农水产品交易的健康中心。",
    introP3: "“首尔传统市场指南”将这些充满多样魅力的首尔各地的传统市场信息汇集在一起提供给您。从当地人喜爱的隐藏美食店到外国游客必备的购物清单，再到停车场和公共交通使用提示，查看我们实用的指南，让您200%地享受传统市场。希望您能亲自体验我们的传统市场所传递的温暖和充满活力的能量。",
`;


mainJs = mainJs.replace(/    title: "서울 맛거리 & 볼거리 전통시장",/, koIntro + '    title: "서울 맛거리 & 볼거리 전통시장",');
mainJs = mainJs.replace(/    title: "Seoul Traditional Markets",/, enIntro + '    title: "Seoul Traditional Markets",');
mainJs = mainJs.replace(/    title: "ソウル 伝統市場",/, jaIntro + '    title: "ソウル 伝統市場",');
mainJs = mainJs.replace(/    title: "首尔 传统市场",/, zhIntro + '    title: "首尔 传统市场",');

const updateLogic = `
    const introHeading = document.getElementById("intro-heading");
    if (introHeading) introHeading.textContent = t.introHeading;
    const introP1 = document.getElementById("intro-p1");
    if (introP1) introP1.innerHTML = t.introP1;
    const introP2 = document.getElementById("intro-p2");
    if (introP2) introP2.innerHTML = t.introP2;
    const introP3 = document.getElementById("intro-p3");
    if (introP3) introP3.innerHTML = t.introP3;
`;

mainJs = mainJs.replace(/    const footerTerms = document\.getElementById\("footer-terms"\);/, updateLogic + '\n    const footerTerms = document.getElementById("footer-terms");');

fs.writeFileSync('main.js', mainJs, 'utf8');
console.log("Updated main.js with intro text translations.");

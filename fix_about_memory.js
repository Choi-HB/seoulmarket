const fs = require('fs');

// 1. Update about.html
let aboutHtml = fs.readFileSync('about.html', 'utf8');
aboutHtml = aboutHtml.replace('<p style="margin-bottom: 20px;">서울의 전통시장은', '<p id="story-p1" style="margin-bottom: 20px;">서울의 전통시장은');
aboutHtml = aboutHtml.replace('<p style="margin-bottom: 20px;">우리는 이 귀중한', '<p id="story-p2" style="margin-bottom: 20px;">우리는 이 귀중한');
aboutHtml = aboutHtml.replace('<p>기름 냄새 고소한', '<p id="story-p3">기름 냄새 고소한');
fs.writeFileSync('about.html', aboutHtml);

// 2. Update main.js translations
let mainJs = fs.readFileSync('main.js', 'utf8');

// KO
const koAdd = `
    memSubtitle: "업로드한 사진을 흑백 또는 컬러로 간직하고 다운로드하세요.",
    aboutStoryTitle: "시작하게 된 배경",
    aboutStoryP1: "서울의 전통시장은 단순한 상업 공간 그 이상의 의미를 지닙니다. 그곳은 누군가에게는 평생의 터전이었고, 또 누군가에게는 어린 시절 어머니의 손을 잡고 걷던 추억의 장소입니다. 하지만 빠르게 변화하는 디지털 시대 속에서, 많은 시장 정보들은 여전히 낡은 채로 머물러 있거나 찾기 어려운 곳에 흩어져 있었습니다.",
    aboutStoryP2: "우리는 이 귀중한 로컬 자산들이 디지털 공간에서도 빛을 발하기를 바랐습니다. '서울 전통시장 가이드'는 발로 뛰며 수집한 생생한 정보와 현대적인 기술을 결합하여, 젊은 세대와 외국인들에게는 새로운 문화적 발견을, 기성세대에게는 편리한 정보 접근성을 제공하고자 합니다.",
    aboutStoryP3: "기름 냄새 고소한 전 골목부터 짤랑이는 엽전 소리가 들리는 서촌의 시장까지, 서울의 골목 구석구석 숨어있는 정취를 기록하는 일. 그것이 우리가 이 사이트를 운영하는 가장 큰 이유이자 보람입니다.",
`;
mainJs = mainJs.replace(/    memTitle: "AI 이미지 추억",/, koAdd + '    memTitle: "AI 이미지 추억",');

// EN
const enAdd = `
    memSubtitle: "Keep and download your uploaded photos in black and white or color.",
    aboutStoryTitle: "Background Story",
    aboutStoryP1: "Seoul's traditional markets hold meaning beyond simple commercial spaces. For some, they have been a lifelong home, and for others, a place of memories walking hand in hand with their mothers in childhood. However, in the rapidly changing digital era, much market information remained outdated or scattered in hard-to-find places.",
    aboutStoryP2: "We wanted these precious local assets to shine in the digital space as well. 'Seoul Traditional Market Guide' aims to provide new cultural discoveries for younger generations and foreigners, and convenient information access for older generations by combining vivid information collected on foot with modern technology.",
    aboutStoryP3: "From the savory smell of pancakes in the alley to the clinking sound of brass coins in Seochon's market, recording the hidden mood in every corner of Seoul's alleys. That is our biggest reason and reward for running this site.",
`;
mainJs = mainJs.replace(/    memTitle: "AI Image Memory",/, enAdd + '    memTitle: "AI Image Memory",');

// JA
const jaAdd = `
    memSubtitle: "アップロードした写真を白黒またはカラーで保存してダウンロードしてください。",
    aboutStoryTitle: "始まった背景",
    aboutStoryP1: "ソウルの伝統市場は、単なる商業空間以上の意味を持っています。誰かにとっては生涯の拠り所であり、また誰かにとっては子供の頃に母親と手をつないで歩いた思い出の場所です。しかし、急速に変化するデジタル時代の中で、多くの市場情報は古いまま放置されたり、見つけにくい場所に散在していました。",
    aboutStoryP2: "私たちは、この貴重なローカル資産がデジタル空間でも輝くことを願っていました。「ソウル伝統市場ガイド」は、足で稼いだ生きた情報と現代の技術を組み合わせることで、若い世代や外国人には新たな文化的発見を、上の世代には便利な情報へのアクセスを提供したいと考えています。",
    aboutStoryP3: "香ばしいチヂミの路地から、チャリンと葉銭の音が聞こえる西村（ソチョン）の市場まで、ソウルの路地の隅々に隠れた風情を記録すること。それが、私たちがこのサイトを運営する最大の理由であり、やりがいなのです。",
`;
mainJs = mainJs.replace(/    memTitle: "AI 画像の思い出",/, jaAdd + '    memTitle: "AI 画像の思い出",');

// ZH
const zhAdd = `
    memSubtitle: "保留并下载您上传的黑白或彩色照片。",
    aboutStoryTitle: "背景故事",
    aboutStoryP1: "首尔的传统市场不仅仅是商业空间。对于一些人来说，这是他们一生的家，而对于另一些人来说，这是他们小时候牵着母亲的手走过的回忆之地。然而，在快速变化的数字时代，许多市场信息仍然过时或散落在难以找到的地方。",
    aboutStoryP2: "我们希望这些珍贵的本地资产也能在数字空间中发光。'首尔传统市场指南'旨在通过将实地收集的生动信息与现代技术相结合，为年轻一代和外国人提供新的文化发现，并为老一代提供便捷的信息获取途径。",
    aboutStoryP3: "从飘着煎饼香味的胡同，到能听到铜钱叮当响的西村市场，记录首尔胡同各个角落隐藏的韵味。这就是我们运营这个网站的最大理由和回报。",
`;
mainJs = mainJs.replace(/    memTitle: "AI 图片回忆",/, zhAdd + '    memTitle: "AI 图片回忆",');

// 3. Update DOM logic in main.js
const domUpdate = `
    const transformSubtitle = document.getElementById("transform-subtitle");
    if (transformSubtitle) transformSubtitle.textContent = t.memSubtitle;
    const aboutStoryTitle = document.getElementById("story-title");
    if (aboutStoryTitle) aboutStoryTitle.textContent = t.aboutStoryTitle;
    const storyP1 = document.getElementById("story-p1");
    if (storyP1) storyP1.textContent = t.aboutStoryP1;
    const storyP2 = document.getElementById("story-p2");
    if (storyP2) storyP2.textContent = t.aboutStoryP2;
    const storyP3 = document.getElementById("story-p3");
    if (storyP3) storyP3.textContent = t.aboutStoryP3;
`;

mainJs = mainJs.replace(/    const transformTitle = document\.getElementById\("transform-title"\);/, domUpdate + '\n    const transformTitle = document.getElementById("transform-title");');

fs.writeFileSync('main.js', mainJs, 'utf8');
console.log("Translation added successfully.");

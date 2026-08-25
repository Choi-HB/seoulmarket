const fs = require('fs');

let mainJs = fs.readFileSync('main.js', 'utf8');

const koExtra = `
    playSeoH2: "전통시장과 어우러지는 골목 놀이 문화",
    playSeoP1: "가위바위보는 시대를 막론하고 전 세계인이 즐기는 가장 직관적이고 공평한 놀이입니다. 한국의 전통시장 골목 어귀에서도 아이들의 가위바위보 소리는 끊이지 않았습니다. 시장 상인들도 가끔은 흥정을 하다가 웃으며 가위바위보로 덤을 결정하기도 했던, 한국인 특유의 '정'과 해학이 담긴 소통 방식이기도 합니다.",
    playSeoP2: "과거에는 구슬치기, 딱지치기, 고무줄놀이 등 다양한 골목 놀이들이 시장의 활기찬 분위기와 어우러져 하나의 문화를 형성했습니다. 비록 현대에 들어서며 아이들이 뛰어노는 골목길의 풍경은 많이 사라졌지만, 그 시절의 따뜻한 기억은 여전히 시장 사람들의 마음속에 남아있습니다.",
    playSeoP3: "이 AI 가위바위보 게임은 최신 인공지능 기술(Teachable Machine)을 활용하여 과거 우리가 골목길에서 친구들과 나누던 단순하고 즐거운 놀이를 디지털 공간에 재현한 것입니다. 복잡한 일상을 잠시 내려놓고, 시장 골목에서 뛰어놀던 어린 시절의 동심으로 돌아가 AI와의 가벼운 승부를 즐겨보세요!",
    memSeoH2: "흑백 사진으로 만나는 옛 시장의 향수",
    memSeoP1: "사진은 시간을 멈추고 기억을 보존하는 가장 강력한 도구입니다. 특히 흑백 사진은 화려한 색상에 가려질 수 있는 사람들의 표정, 질감, 그리고 그 시대의 분위기를 더욱 깊이 있게 전달하는 매력을 지니고 있습니다. 과거 필름 카메라 시절, 서울의 전통시장을 담은 흑백 사진 속에는 상인들의 주름진 미소와 손님들과의 활기찬 흥정, 그리고 갓 쪄낸 만두에서 피어오르는 김까지 생생하게 기록되어 있습니다.",
    memSeoP2: "시장은 단순히 물건을 사고파는 상업적 공간을 넘어, 서민들의 땀방울과 애환이 녹아있는 삶의 터전입니다. 오래된 시장 골목을 거닐다 보면 마치 수십 년 전 과거로 시간 여행을 떠난 듯한 기분을 느끼게 됩니다. 낡은 간판과 투박하지만 정겨운 풍경들은 화려한 현대 도시에서는 느낄 수 없는 깊은 안정감과 향수를 선사합니다.",
    memSeoP3: "이 'AI 이미지 추억' 변환 도구는 여러분이 전통시장을 방문하며 찍은 현대의 컬러 사진을, 클릭 한 번으로 클래식한 흑백 사진으로 변환해 줍니다. 첨단 웹 기술을 활용한 이 도구를 통해 스마트폰으로 찍은 사진에 아날로그 감성을 더해보세요. 잊혀져 가는 옛 시장의 정취를 여러분만의 고유한 사진 작품으로 간직하고, 그 소중한 추억을 주변 사람들과 나누어 보시길 바랍니다.",
`;

const enExtra = `
    playSeoH2: "Alley Play Culture Blending with Traditional Markets",
    playSeoP1: "Rock-paper-scissors is the most intuitive and fair game enjoyed by people worldwide regardless of the era. The sound of children playing rock-paper-scissors was endless in the alleys of Korea's traditional markets. It was also a unique communication method containing Korean 'Jeong' (affection) and humor, as market merchants sometimes decided on extras (deom) through a laughing rock-paper-scissors match while haggling.",
    playSeoP2: "In the past, various alley games such as marbles, ttakji (paper tiles), and rubber band jumping blended with the vibrant atmosphere of the market to form a culture. Although the scenery of alleys where children run and play has largely disappeared in modern times, the warm memories of those days still remain in the hearts of market people.",
    playSeoP3: "This AI rock-paper-scissors game utilizes the latest artificial intelligence technology (Teachable Machine) to recreate the simple and joyful games we used to share with friends in the alleys in a digital space. Put down your complex daily life for a moment, return to the childlike innocence of running around in the market alleys, and enjoy a light match with the AI!",
    memSeoH2: "Nostalgia of Old Markets Met Through Black and White Photos",
    memSeoP1: "Photography is the most powerful tool to stop time and preserve memories. In particular, black and white photography has the charm of conveying people's expressions, textures, and the atmosphere of the era more deeply, which might be overshadowed by brilliant colors. In the past film camera era, black and white photos of Seoul's traditional markets vividly recorded merchants' wrinkled smiles, energetic haggling with customers, and even the steam rising from freshly steamed dumplings.",
    memSeoP2: "The market is more than a commercial space for buying and selling goods; it is a foundation of life where the sweat and joys and sorrows of common people are melted. Walking through old market alleys makes you feel as if you've traveled back in time to decades ago. Old signboards and rugged but affectionate sceneries offer a deep sense of stability and nostalgia that cannot be felt in modern, flashy cities.",
    memSeoP3: "This 'AI Image Memory' conversion tool turns your modern color photos taken while visiting a traditional market into classic black and white photos with a single click. Add an analog sensibility to photos taken with your smartphone through this tool utilizing advanced web technology. We hope you will keep the fading mood of old markets as your own unique photographic artwork and share those precious memories with people around you.",
`;

const jaExtra = `
    playSeoH2: "伝統市場と調和する路地遊びの文化",
    playSeoP1: "じゃんけんは時代を問わず、世界中の人々が楽しむ最も直感的で公平な遊びです。韓国の伝統市場の路地裏でも、子供たちのじゃんけんの声は絶えませんでした。市場の商人たちも、時には値引き交渉をしながら笑ってじゃんけんでおまけ（オマケ）を決めることもあった、韓国特有の「情」とユーモアが込められたコミュニケーション手段でもあります。",
    playSeoP2: "過去には、ビー玉遊び、メンコ遊び、ゴム飛びなど、様々な路地遊びが市場の活気ある雰囲気と調和し、一つの文化を形成していました。現代になって子供たちが駆け回る路地裏の風景は多く消え去りましたが、その時代の温かい記憶は今でも市場の人々の心の中に残っています。",
    playSeoP3: "このAIじゃんけんゲームは、最新の人工知能技術（Teachable Machine）を活用して、過去私たちが路地裏で友達と分かち合ったシンプルで楽しい遊びをデジタル空間に再現したものです。複雑な日常を少し置いておき、市場の路地裏で遊び回った子供の頃の童心に帰って、AIとの軽い勝負を楽しんでみてください！",
    memSeoH2: "白黒写真で出会う昔の市場の郷愁",
    memSeoP1: "写真は時間を止め、記憶を保存する最も強力な道具です。特に白黒写真は、華やかな色に隠れがちな人々の表情、質感、そしてその時代の雰囲気をより深く伝える魅力を持っています。過去のフィルムカメラ時代、ソウルの伝統市場を収めた白黒写真の中には、商人たちのしわくちゃな笑顔や客との活気ある値引き交渉、そして蒸したての餃子から立ち上る湯気まで生々しく記録されています。",
    memSeoP2: "市場は単に物を売り買いする商業空間を超えて、庶民の汗と哀歓が溶け込んだ生活の場です。古い市場の路地裏を歩いていると、まるで数十年前にタイムスリップしたかのような気分になります。古い看板や無骨だけど温かい風景は、華やかな現代都市では感じられない深い安定感と郷愁をもたらしてくれます。",
    memSeoP3: "この「AI画像思い出」変換ツールは、皆さんが伝統市場を訪問して撮った現代のカラー写真を、クリック一つでクラシックな白黒写真に変換してくれます。先端のウェブ技術を活用したこのツールを通じて、スマートフォンで撮った写真にアナログの感性を加えてみてください。忘れ去られていく昔の市場の風情を皆さん独自の写真作品として大事にし、その大切な思い出を周りの人々と分かち合ってみてはいかがでしょうか。",
`;

const zhExtra = `
    playSeoH2: "与传统市场融为一体的胡同游戏文化",
    playSeoP1: "剪刀石头布是无论时代如何，全世界人民都喜欢的最直观、最公平的游戏。在韩国传统市场的胡同口，孩子们的剪刀石头布声也是连绵不绝。市场商人们有时也会在讨价还价时笑着通过剪刀石头布来决定赠品（添头），这也是一种包含韩国特有“情”和幽默的沟通方式。",
    playSeoP2: "过去，弹珠游戏、打画片、跳皮筋等各种胡同游戏与市场充满活力的氛围融为一体，形成了一种文化。虽然到了现代，孩子们奔跑玩耍的胡同风景已经消失了很多，但那个时代的温暖记忆依然留在市场人们的心中。",
    playSeoP3: "这款AI剪刀石头布游戏利用最新的以人工智能技术（Teachable Machine），将过去我们在胡同里与朋友分享的简单快乐的游戏在数字空间中重现。暂时放下复杂的日常生活，回到在市场胡同里奔跑玩耍的童心，享受与AI的轻松对决吧！",
    memSeoH2: "在黑白照片中邂逅昔日市场的乡愁",
    memSeoP1: "照片是停止时间、保存记忆的最强大的工具。特别是黑白照片，它具有更深刻地传达人们的表情、质感以及那个时代氛围的魅力，而这些在华丽的色彩中可能会被掩盖。在过去的胶片相机时代，记录首尔传统市场的黑白照片中，生动地记录了商人们布满皱纹的微笑、与顾客充满活力的讨价还价，甚至刚蒸好的饺子上升腾的热气。",
    memSeoP2: "市场不仅仅是买卖物品的商业空间，更是融化了平民百姓汗水和悲欢离合的生活家园。漫步在古老的市场胡同里，会让人感觉仿佛时光倒流到了几十年前。破旧的招牌和粗犷却充满人情味的风景，带来了在华丽的现代都市中无法感受到的深深的安定感和乡愁。",
    memSeoP3: "这款“AI图片记忆”转换工具可以将您在参观传统市场时拍摄的现代彩色照片，只需点击一下即可转换为经典的黑白照片。通过这款利用先进网络技术的工具，为智能手机拍摄的照片增添一丝复古的情怀。希望您能将逐渐被遗忘的昔日市场风情作为您自己独特的摄影作品珍藏，并与周围的人分享这份珍贵的回忆。",
`;

mainJs = mainJs.replace(/    title: "서울 맛거리 & 볼거리 전통시장",/, koExtra + '    title: "서울 맛거리 & 볼거리 전통시장",');
mainJs = mainJs.replace(/    title: "Seoul Traditional Markets",/, enExtra + '    title: "Seoul Traditional Markets",');
mainJs = mainJs.replace(/    title: "ソウル 伝統市場",/, jaExtra + '    title: "ソウル 伝統市場",');
mainJs = mainJs.replace(/    title: "首尔 传统市场",/, zhExtra + '    title: "首尔 传统市场",');

const updateLogicExtra = `
    const playSeoH2 = document.getElementById("play-seo-h2");
    if (playSeoH2) playSeoH2.textContent = t.playSeoH2;
    const playSeoP1 = document.getElementById("play-seo-p1");
    if (playSeoP1) playSeoP1.textContent = t.playSeoP1;
    const playSeoP2 = document.getElementById("play-seo-p2");
    if (playSeoP2) playSeoP2.textContent = t.playSeoP2;
    const playSeoP3 = document.getElementById("play-seo-p3");
    if (playSeoP3) playSeoP3.textContent = t.playSeoP3;
    
    const memSeoH2 = document.getElementById("mem-seo-h2");
    if (memSeoH2) memSeoH2.textContent = t.memSeoH2;
    const memSeoP1 = document.getElementById("mem-seo-p1");
    if (memSeoP1) memSeoP1.textContent = t.memSeoP1;
    const memSeoP2 = document.getElementById("mem-seo-p2");
    if (memSeoP2) memSeoP2.textContent = t.memSeoP2;
    const memSeoP3 = document.getElementById("mem-seo-p3");
    if (memSeoP3) memSeoP3.textContent = t.memSeoP3;
`;

mainJs = mainJs.replace(/    const footerTerms = document\.getElementById\("footer-terms"\);/, updateLogicExtra + '\n    const footerTerms = document.getElementById("footer-terms");');

fs.writeFileSync('main.js', mainJs, 'utf8');
console.log("Updated main.js with play and memory SEO translations.");

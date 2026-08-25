const fs = require('fs');

let mainJs = fs.readFileSync('main.js', 'utf8');

const enIntroAndExtra = `
    introHeading: "Seoul Traditional Markets: Where Past and Present Coexist",
    introP1: "Seoul, the capital of South Korea, is a modern city filled with skyscrapers and bright neon signs. However, behind its glamour, <strong>traditional markets</strong> have stood firmly for decades, even over a century, sharing the joys and sorrows of the common people. Seoul's traditional markets are more than just places of commerce; they are living museums where you can fully experience Korea's deep history, warm 'Jeong' (affection), and dynamic culture.",
    introP2: "The markets, each uniquely situated in different districts, boast their own distinct charms. <strong>Gwangjang Market</strong> in Jongno-gu is a gastronomic paradise where you can taste Korea's representative street foods like bindaetteok (mung bean pancakes), mayak gimbap, and yukhoe (beef tartare). <strong>Namdaemun Market</strong> in Jung-gu is the largest comprehensive market in Korea with everything from clothing and tableware to accessories. <strong>Mangwon Market</strong> in Mapo-gu is emerging as a trendy spot capturing the hearts of the younger generation (Gen Z) with hip foods and an emotional atmosphere, while <strong>Gyeongdong Market</strong> in Dongdaemun-gu is a center for health where the largest volume of medicinal herbs and agricultural products are traded.",
    introP3: "'Seoul Traditional Market Guide' gathers and provides information on these diverse and charming traditional markets across Seoul. From hidden foodie gems loved by locals to essential shopping lists for foreign tourists, as well as parking and public transportation tips, check out our useful guide to enjoy traditional markets 200%. We hope you will personally experience the warm glow and vibrant energy that our traditional markets convey.",
    playSeoH2: "Alley Play Culture Blending with Traditional Markets",
    playSeoP1: "Rock-paper-scissors is the most intuitive and fair game enjoyed by people worldwide regardless of the era. The sound of children playing rock-paper-scissors was endless in the alleys of Korea's traditional markets. It was also a unique communication method containing Korean 'Jeong' (affection) and humor, as market merchants sometimes decided on extras (deom) through a laughing rock-paper-scissors match while haggling.",
    playSeoP2: "In the past, various alley games such as marbles, ttakji (paper tiles), and rubber band jumping blended with the vibrant atmosphere of the market to form a culture. Although the scenery of alleys where children run and play has largely disappeared in modern times, the warm memories of those days still remain in the hearts of market people.",
    playSeoP3: "This AI rock-paper-scissors game utilizes the latest artificial intelligence technology (Teachable Machine) to recreate the simple and joyful games we used to share with friends in the alleys in a digital space. Put down your complex daily life for a moment, return to the childlike innocence of running around in the market alleys, and enjoy a light match with the AI!",
    memSeoH2: "Nostalgia of Old Markets Met Through Black and White Photos",
    memSeoP1: "Photography is the most powerful tool to stop time and preserve memories. In particular, black and white photography has the charm of conveying people's expressions, textures, and the atmosphere of the era more deeply, which might be overshadowed by brilliant colors. In the past film camera era, black and white photos of Seoul's traditional markets vividly recorded merchants' wrinkled smiles, energetic haggling with customers, and even the steam rising from freshly steamed dumplings.",
    memSeoP2: "The market is more than a commercial space for buying and selling goods; it is a foundation of life where the sweat and joys and sorrows of common people are melted. Walking through old market alleys makes you feel as if you've traveled back in time to decades ago. Old signboards and rugged but affectionate sceneries offer a deep sense of stability and nostalgia that cannot be felt in modern, flashy cities.",
    memSeoP3: "This 'AI Image Memory' conversion tool turns your modern color photos taken while visiting a traditional market into classic black and white photos with a single click. Add an analog sensibility to photos taken with your smartphone through this tool utilizing advanced web technology. We hope you will keep the fading mood of old markets as your own unique photographic artwork and share those precious memories with people around you.",
`;

const jaIntroAndExtra = `
    introHeading: "ソウルの伝統市場：過去と現在が共存する文化空間",
    introP1: "大韓民国の首都ソウルは、最先端のビル群と華やかなネオンサインにあふれる現代的な都市です。しかし、その華やかさの裏には、数十年、長くは百年以上の歳月の間、庶民の生活と哀歓を共にしてきた<strong>伝統市場</strong>がしっかりと根付いています。ソウルの伝統市場は、単なる商取引の場所を超えて、韓国の深い歴史と温かい「情」、そして躍動的な文化を体全体で感じることができる生きた博物館のようなものです。",
    introP2: "各区ごとに特色を持って位置する市場は、それぞれ独自の魅力を誇っています。鍾路区の<strong>広蔵市場</strong>は、ピンデトッや麻薬キンパ、ユッケなど、韓国を代表する屋台料理を味わえる美食の天国であり、中区の<strong>南大門市場</strong>は、衣類、食器、アクセサリーなどないものがない国内最大規模の総合市場です。麻浦区の<strong>望遠市場</strong>は、若い世代（MZ世代）の足を引きつけるトレンディな食べ物と感性的な雰囲気で新たに浮上しており、東大門区の<strong>京東市場</strong>は、全国最大規模の漢方薬材と農水産物が取引される健康の中心地です。",
    introP3: "「ソウル伝統市場ガイド」は、このように多彩な魅力を持つソウル各地の伝統市場情報を一堂に集めて提供しています。地元の人々に愛される隠れた名店から、外国人観光客のための必須ショッピングリスト、そして駐車場や公共交通機関の利用のコツまで、伝統市場を200%楽しむための便利なガイドをご確認ください。私たちの伝統市場が伝える温かいぬくもりと活気あるエネルギーをぜひ直接体験してみてください。",
    playSeoH2: "伝統市場と調和する路地遊びの文化",
    playSeoP1: "じゃんけんは時代を問わず、世界中の人々が楽しむ最も直感的で公平な遊びです。韓国の伝統市場の路地裏でも、子供たちのじゃんけんの声は絶えませんでした。市場の商人たちも、時には値引き交渉をしながら笑ってじゃんけんでおまけ（オマケ）を決めることもあった、韓国特有の「情」とユーモアが込められたコミュニケーション手段でもあります。",
    playSeoP2: "過去には、ビー玉遊び、メンコ遊び、ゴム飛びなど、様々な路地遊びが市場の活気ある雰囲気と調和し、一つの文化を形成していました。現代になって子供たちが駆け回る路地裏の風景は多く消え去りましたが、その時代の温かい記憶は今でも市場の人々の心の中に残っています。",
    playSeoP3: "このAIじゃんけんゲームは、最新の人工知能技術（Teachable Machine）を活用して、過去私たちが路地裏で友達と分かち合ったシンプルで楽しい遊びをデジタル空間に再現したものです。複雑な日常を少し置いておき、市場の路地裏で遊び回った子供の頃の童心に帰って、AIとの軽い勝負を楽しんでみてください！",
    memSeoH2: "白黒写真で出会う昔の市場の郷愁",
    memSeoP1: "写真は時間を止め、記憶を保存する最も強力な道具です。特に白黒写真は、華やかな色に隠れがちな人々の表情、質感、そしてその時代の雰囲気をより深く伝える魅力を持っています。過去のフィルムカメラ時代、ソウルの伝統市場を収めた白黒写真の中には、商人たちのしわくちゃな笑顔や客との活気ある値引き交渉、そして蒸したての餃子から立ち上る湯気まで生々しく記録されています。",
    memSeoP2: "市場は単に物を売り買いする商業空間を超えて、庶民の汗と哀歓が溶け込んだ生活の場です。古い市場の路地裏を歩いていると、まるで数十年前にタイムスリップしたかのような気分になります。古い看板や無骨だけど温かい風景は、華やかな現代都市では感じられない深い安定感と郷愁をもたらしてくれます。",
    memSeoP3: "この「AI画像思い出」変換ツールは、皆さんが伝統市場を訪問して撮った現代のカラー写真を、クリック一つでクラシックな白黒写真に変換してくれます。先端のウェブ技術を活用したこのツールを通じて、スマートフォンで撮った写真にアナログの感性を加えてみてください。忘れ去られていく昔の市場の風情を皆さん独自の写真作品として大事にし、その大切な思い出を周りの人々と分かち合ってみてはいかがでしょうか。",
`;

const zhIntroAndExtra = `
    introHeading: "首尔传统市场：过去与现在共存的文化空间",
    introP1: "大韩民国的首都首尔，是一座充满尖端建筑群和华丽霓虹灯的现代都市。然而，在这份华丽的背后，数十乃至上百年来，与平民百姓的生活和悲欢离合紧密相连的<strong>传统市场</strong>依然稳稳地屹立着。首尔的传统市场不仅仅是商业交易的场所，更像是活着的博物馆，在这里你可以全身心地感受到韩国深厚的历史、温暖的“情”以及充满活力的文化。",
    introP2: "各区特色鲜明的市场都展现着自己独特的魅力。钟路区的<strong>广藏市场</strong>是美食的天堂，可以品尝到绿豆煎饼、麻药紫菜包饭、生拌牛肉等韩国代表性的街头小吃；中区的<strong>南大门市场</strong>则是韩国规模最大的综合市场，服装、餐具、饰品等应有尽有。麻浦区的<strong>望远市场</strong>以其吸引年轻一代（MZ世代）的时尚美食和感性氛围而正在崛起，而东大门区的<strong>京东市场</strong>则是全国最大规模的中药材和农水产品交易的健康中心。",
    introP3: "“首尔传统市场指南”将这些充满多样魅力的首尔各地的传统市场信息汇集在一起提供给您。从当地人喜爱的隐藏美食店到外国游客必备的购物清单，再到停车场和公共交通使用提示，查看我们实用的指南，让您200%地享受传统市场。希望您能亲自体验我们的传统市场所传递的温暖和充满活力的能量。",
    playSeoH2: "与传统市场融为一体的胡同游戏文化",
    playSeoP1: "剪刀石头布是无论时代如何，全世界人民都喜欢的最直观、最公平的游戏。在韩国传统市场的胡同口，孩子们的剪刀石头布声也是连绵不绝。市场商人们有时也会在讨价还价时笑着通过剪刀石头布来决定赠品（添头），这也是一种包含韩国特有“情”和幽默的沟通方式。",
    playSeoP2: "过去，弹珠游戏、打画片、跳皮筋等各种胡同游戏与市场充满活力的氛围融为一体，形成了一种文化。虽然到了现代，孩子们奔跑玩耍的胡同风景已经消失了很多，但那个时代的温暖记忆依然留在市场人们的心中。",
    playSeoP3: "这款AI剪刀石头布游戏利用最新的以人工智能技术（Teachable Machine），将过去我们在胡同里与朋友分享的简单快乐的游戏在数字空间中重现。暂时放下复杂的日常生活，回到在市场胡同里奔跑玩耍的童心，享受与AI的轻松对决吧！",
    memSeoH2: "在黑白照片中邂逅昔日市场的乡愁",
    memSeoP1: "照片是停止时间、保存记忆的最强大的工具。特别是黑白照片，它具有更深刻地传达人们的表情、质感以及那个时代氛围的魅力，而这些在华丽的色彩中可能会被掩盖。在过去的胶片相机时代，记录首尔传统市场的黑白照片中，生动地记录了商人们布满皱纹的微笑、与顾客充满活力的讨价还价，甚至刚蒸好的饺子上升腾的热气。",
    memSeoP2: "市场不仅仅是买卖物品的商业空间，更是融化了平民百姓汗水和悲欢离合的生活家园。漫步在古老的市场胡同里，会让人感觉仿佛时光倒流到了几十年前。破旧的招牌和粗犷却充满人情味的风景，带来了在华丽的现代都市中无法感受到的深深的安定感和乡愁。",
    memSeoP3: "这款“AI图片记忆”转换工具可以将您在参观传统市场时拍摄的现代彩色照片，只需点击一下即可转换为经典的黑白照片。通过这款利用先进网络技术的工具，为智能手机拍摄的照片增添一丝复古的情怀。希望您能将逐渐被遗忘的昔日市场风情作为您自己独特的摄影作品珍藏，并与周围的人分享这份珍贵的回忆。",
`;

mainJs = mainJs.replace(/    title: "Seoul Traditional Markets Guide",/, enIntroAndExtra + '    title: "Seoul Traditional Markets Guide",');
mainJs = mainJs.replace(/    title: "ソウル伝統市場ガイド",/, jaIntroAndExtra + '    title: "ソウル伝統市場ガイド",');
mainJs = mainJs.replace(/    title: "首尔传统市场指南",/, zhIntroAndExtra + '    title: "首尔传统市场指南",');

fs.writeFileSync('main.js', mainJs, 'utf8');
console.log("Fixed main.js translations for en, ja, zh.");

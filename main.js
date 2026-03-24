const translations = {
  ko: {
    title: "서울 맛거리 & 볼거리 전통시장",
    subtitle: "서울의 정과 맛이 살아있는 구별 대표 전통시장 가이드",
    all: "전체",
    other: "기타",
    food: "대표 먹거리",
    sights: "대표 볼거리",
    visitOfficial: "공식 홈페이지 / SNS 방문",
    viewAllList: "전체 목록 확인하기",
    footer: "&copy; 2026 서울 전통시장 가이드. All rights reserved.",
    miscMarketName: "서울 특별시 전통시장 목록",
    miscMarketDesc: "서울 전역에 위치한 모든 전통시장의 상세 리스트를 확인하실 수 있습니다. 구별로 정리된 방대한 데이터를 통해 숨겨진 로컬 시장까지 모두 찾아보세요.",
    miscMarketFood: "서울 전역의 모든 로컬 푸드",
    miscMarketSights: "수백 곳의 서울 전통시장 가이드"
  },
  en: {
    title: "Seoul Traditional Markets Guide",
    subtitle: "Premium digital guide to the unique traditional markets in each district of Seoul",
    all: "All",
    other: "Other",
    food: "Signature Food",
    sights: "Top Sights",
    visitOfficial: "Visit Official Website / SNS",
    viewAllList: "View Full Market List",
    footer: "&copy; 2026 Seoul Market Guide. All rights reserved.",
    miscMarketName: "List of Traditional Markets in Seoul",
    miscMarketDesc: "You can check the detailed list of all traditional markets located throughout Seoul. Find hidden local markets through the vast data organized by district.",
    miscMarketFood: "All local foods across Seoul",
    miscMarketSights: "Guide to hundreds of Seoul markets"
  },
  ja: {
    title: "ソウル伝統市場ガイド",
    subtitle: "ソウルの各区別にある特色豊かな伝統市場を紹介するプレミアムガイド",
    all: "すべて",
    other: "その他",
    food: "代表的な食べ物",
    sights: "見どころ",
    visitOfficial: "公式サイト / SNS 訪問",
    viewAllList: "全市場リストを見る",
    footer: "&copy; 2026 ソウル市場ガイド. All rights reserved.",
    miscMarketName: "ソウル特別市の伝統市場リスト",
    miscMarketDesc: "ソウル全域にあるすべての伝統市場の詳細なリストを確認できます。区別に整理された膨大なデータを通じて、隠れた地元の市場まで見つけてください。",
    miscMarketFood: "ソウル全域のローカルフード",
    miscMarketSights: "数百カ所のソウル伝統市場ガイド"
  },
  zh: {
    title: "首尔传统市场指南",
    subtitle: "为您介绍首尔各区特色传统市场的精品数字指南",
    all: "全部",
    other: "其他",
    food: "代表美食",
    sights: "代表景点",
    visitOfficial: "访问官网 / SNS",
    viewAllList: "查看完整市场列表",
    footer: "&copy; 2026 首尔市场指南. All rights reserved.",
    miscMarketName: "首尔特别市传统市场列表",
    miscMarketDesc: "您可以查看位于首尔全境的所有传统市场的详细列表。通过按区整理的海量数据，寻找隐藏的本地市场。",
    miscMarketFood: "首尔全境的所有本地美食",
    miscMarketSights: "数百个首尔传统市场指南"
  }
};

const marketsData = [
  {
    id: "gwangjang",
    district: "종로구",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Korea-Seoul-Gwangjang_Market-01.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=광장시장&output=embed",
    officialUrl: "http://www.kwangjangmarket.co.kr/",
    translations: {
      ko: { name: "광장시장", description: "100년이 넘는 역사를 가진 대한민국 최초의 상설시장으로, 활발한 분위기가 가득합니다. 빈대떡, 마약김밥 등 전 세계적으로 유명한 길거리 음식들이 가득하며, 전통 한복과 침구류 등 다양한 상품을 취급합니다. 밤이 되면 야시장의 정취가 더해져 여행자들의 필수 코스로 손꼽힙니다.", food: "빈대떡, 마약김밥, 육회", sights: "한복 거리, 구제 시장, 야시장" },
      en: { name: "Gwangjang Market", description: "The first permanent market in Korea with over 100 years of history. It's famous for street foods like Bindaetteok and Mayak Gimbap. At night, it turns into a vibrant night market, making it a must-visit spot for travelers.", food: "Bindaetteok, Mayak Gimbap, Beef Tartare", sights: "Hanbok Street, Vintage Market, Night Market" },
      ja: { name: "広蔵市場", description: "100年以上の歴史を持つ韓国初の常設市場。ピンデトッや麻薬キンパなど、世界的に有名な屋台料理が充実しています。夜になると夜市の情緒が加わり、旅行者の必須コースとなっています。", food: "ピンデトッ、麻薬キンパ、ユッケ", sights: "韓服通り、古着市場、夜市" },
      zh: { name: "广藏市场", description: "拥有100多年历史的韩国首家常设市场。这里布满了绿豆饼、麻药紫菜包饭等享誉全球的街头美食。入夜后，夜市氛围浓厚，是游客的必经之地。", food: "绿豆饼、麻药紫菜包饭、肉脍", sights: "韩服街、二手市场、夜市" }
    }
  },
  {
    id: "namdaemun",
    district: "중구",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Seoul-Namdaemun.Market.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=남대문시장&output=embed",
    officialUrl: "https://namdaemunmarket.co.kr/",
    translations: {
      ko: { name: "남대문시장", description: "숭례문 인근에 위치한 한국 최대 규모의 전통시장입니다. 아동복, 액세서리, 카메라 등 없는 것이 없는 만물시장으로 불립니다. 갈치조림 골목과 칼국수 골목은 시장의 대표적인 맛의 성지로 유명합니다.", food: "갈치조림, 칼국수, 호떡", sights: "숭례문, 액세서리 상가, 카메라 거리" },
      en: { name: "Namdaemun Market", description: "Korea's largest traditional market located near Sungnyemun Gate. Known as a 'everything market' selling children's wear, accessories, and cameras. The Braised Cutlassfish and Kalguksu alleys are food landmarks.", food: "Braised Cutlassfish, Kalguksu, Hotteok", sights: "Sungnyemun Gate, Wholesale Accessories, Camera Street" },
      ja: { name: "南大門市場", description: "崇礼門の近くに位置する韓国最大規模の伝統市場。子供服、アクセサリー、カメラなど、ないものがないと言われる「万物市場」です。太刀魚の煮付け横丁とカルグクス横丁が有名です。", food: "太刀魚の煮付け、カルグクス、ホットク", sights: "崇礼門、アクセサリー卸売商街、カメラ通り" },
      zh: { name: "南大门市场", description: "位于崇礼门附近的韩国最大规模传统市场。被称为“万物市场”，从童装、饰品到相机应有尽有。带鱼胡同和刀切面胡同是这里的代表美食圣地。", food: "炖带鱼、刀切面、糖饼", sights: "崇礼门、饰品批发商街、相机街" }
    }
  },
  {
    id: "mangwon",
    district: "마포구",
    image: "https://images.unsplash.com/photo-1590333746438-d81ff1551522?auto=format&fit=crop&q=80&w=1200",
    mapUrl: "https://www.google.com/maps?q=망원시장&output=embed",
    officialUrl: "https://www.mangwonmarket.com/",
    translations: {
      ko: { name: "망원시장", description: "MZ세대에게 가장 사랑받는 시장 중 하나로, 세련된 감각과 전통이 공존합니다. 저렴하고 맛있는 주전부리가 많아 식도락 여행에 최적입니다. 망원 한강공원과 인접해 나들이 코스로도 훌륭합니다.", food: "닭강정, 수제 고로케, 칼국수", sights: "망원동 카페거리, 망원 한강공원" },
      en: { name: "Mangwon Market", description: "One of the most loved markets by Gen Z, where trendy vibes meet tradition. Ideal for a food tour with many affordable snacks. Close to Mangwon Hangang Park for a perfect day out.", food: "Dakgangjeong, Handmade Croquettes, Kalguksu", sights: "Mangwon-dong Cafe Street, Hangang Park" },
      ja: { name: "望遠市場", description: "MZ世代に最も愛される市場の一つ。洗練された感覚と伝統が共存しています。安くて美味しい軽食が多く、食べ歩きに最適です。望遠漢江公園に近く、お出かけコースにもぴったりです。", food: "タッカンジョン、手作りコロッケ、カルグクス", sights: "望遠洞カフェ通り、望遠漢江公園" },
      zh: { name: "望远市场", description: "深受MZ世代喜爱的市场之一，时尚感与传统共存。有很多便宜又美味的小吃，非常适合美食之旅。紧邻望远汉江公园，是郊游的好去处。", food: "炸鸡块、手工可乐饼、刀切面", sights: "望远洞咖啡街、望远汉江公园" }
    }
  },
  {
    id: "tongin",
    district: "종로구",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Tongin_Market_2018-06-17-18-28-59.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=통인시장&output=embed",
    officialUrl: "https://www.instagram.com/tongin_official/",
    translations: {
      ko: { name: "통인시장", description: "경복궁 옆에 위치한 아담하고 정겨운 시장입니다. '엽전 도시락' 시스템으로 유명하여 외국인 관광객들에게 인기가 매우 높습니다. 서촌의 고즈넉한 분위기와 함께 시장 구경을 즐기기 좋습니다.", food: "기름떡볶이, 엽전 도시락", sights: "경복궁, 서촌 한옥마을" },
      en: { name: "Tongin Market", description: "A cozy market located next to Gyeongbokgung Palace. Famous for its 'Brass Coin Lunchbox' system, it's highly popular among foreign tourists. Perfect for exploring alongside the quiet Seochon village.", food: "Oil Tteokbokki, Coin Lunchbox", sights: "Gyeongbokgung Palace, Seochon Village" },
      ja: { name: "通仁市場", description: "景福宮の隣にあるこぢんまりとした市場。「お弁当カフェ」システムで有名で、外国人観光客にも非常に人気があります。西村の静かな雰囲気とともに市場巡りを楽しめます。", food: "油トッポギ、お弁当カフェ", sights: "景福宮、西村韓屋村" },
      zh: { name: "通仁市场", description: "位于景福宫旁的温馨小市场。以“铜钱便当”系统闻名，深受外国游客欢迎。可以在感受西村宁静氛围的同时逛市场。", food: "油炒年糕、铜钱便当", sights: "景福宫、西村韩屋村" }
    }
  },
  {
    id: "gyeongdong",
    district: "동대문구",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Korea-Seoul-Gyeongdong_Market-04.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=경동시장&output=embed",
    officialUrl: "https://www.kyungdongmarket.co.kr/",
    translations: {
      ko: { name: "경동시장", description: "대한민국 최대 규모의 약령시장이 위치한 곳으로, 신선한 한약재 향기가 가득합니다. 제철 농산물과 수산물도 매우 저렴하며, 최근에는 오래된 공간을 개조한 이색적인 카페들로 젊은 층의 방문이 늘고 있습니다.", food: "한방차, 시장 통닭", sights: "서울약령시, 한의약박물관" },
      en: { name: "Gyeongdong Market", description: "Home to Korea's largest herbal medicine market. Filled with the scent of fresh herbs. Recently, trendy cafes in renovated spaces have been attracting younger visitors.", food: "Herbal Tea, Market Fried Chicken", sights: "Seoul K-Medi Center, Herb Museum" },
      ja: { name: "京東市場", description: "韓国最大規模の薬令市場がある場所で、韓方の香りが漂います。旬の農水産物も安く、最近は古い空間を改造したユニークなカフェにより若者の訪問が増えています。", food: "韓方茶、市場の丸焼きチキン", sights: "ソウル薬令市、韓医薬博物館" },
      zh: { name: "京东市场", description: "韩国最大规模的药令市场所在地，充满着韩药材的香气。时令农产品和海鲜也非常便宜，最近由老旧空间改造的特色咖啡馆吸引了大量年轻人。", food: "韩方茶、市场炸鸡", sights: "首尔药令市、韩医药博物馆" }
    }
  },
  {
    id: "garak",
    district: "송파구",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Korea-Seoul-Garak_Fish_Market-02.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=가락시장&output=embed",
    officialUrl: "https://www.instagram.com/saffc_official/",
    translations: {
      ko: { name: "가락시장", description: "서울 최대 규모의 농수산물 도매시장입니다. 현대화 시설인 '가락몰'에서 신선한 회와 고기를 즉석에서 즐길 수 있습니다. 새벽 경매의 치열함과 낮의 풍요로움을 동시에 볼 수 있는 곳입니다.", food: "신선한 회, 축산물 구이", sights: "가락몰 도서관, 야간 경매" },
      en: { name: "Garak Market", description: "Seoul's largest agricultural and marine products wholesale market. At 'Garak Mall,' you can enjoy fresh sashimi and meat on the spot. Witness the intensity of dawn auctions and daytime abundance.", food: "Fresh Sashimi, Grilled Meat", sights: "Garak Mall Library, Night Auction" },
      ja: { name: "可楽市場", description: "ソウル最大規模の農水産物卸売市場。現代化された「可楽モール」で新鮮なお刺身やお肉をその場で楽しめます。明け方の競りの熱気と昼の豊かさを同時に体験できます。", food: "新鮮な刺身、精肉焼き", sights: "可楽モール図書館、夜間の競り" },
      zh: { name: "可乐市场", description: "首尔最大规模的农水产品批发市场。在现代化的“可乐Mall”可以即时品尝新鲜的海鲜刺身和烤肉。这里可以同时看到凌晨拍卖的激烈和白天的丰饶。", food: "新鲜刺身、烤肉", sights: "可乐Mall图书馆、夜间拍卖" }
    }
  },
  {
    id: "pungmul",
    district: "동대문구",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/KOCIS_Korea_SeoulFolkFleaMarket_14_(8641373889).jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=서울풍물시장&output=embed",
    officialUrl: "https://pungmul.or.kr/",
    translations: {
      ko: { name: "서울풍물시장", description: "골동품과 추억 속의 물건들이 가득한 벼룩시장입니다. 마치 타임머신을 타고 과거로 여행을 떠나는 듯한 독특한 분위기를 자아냅니다. 희귀한 수집품을 찾는 재미가 쏠쏠합니다.", food: "전통 주전부리", sights: "청계천 산책길, 추억의 거리" },
      en: { name: "Seoul Folk Flea Market", description: "A flea market filled with antiques and nostalgic items. It offers a unique atmosphere as if traveling back in time. It's a great place to find rare collectibles.", food: "Traditional Snacks", sights: "Cheonggyecheon Walk, Memories Street" },
      ja: { name: "ソウル風物市場", description: "骨董品や思い出の品々が並ぶフリーマーケット。タイムマシンに乗って過去へ旅をするような独特な雰囲気が漂います。珍しい収集品を探す楽しみがあります。", food: "伝統的なおやつ", sights: "清渓川散歩道、思い出の通り" },
      zh: { name: "首尔风物市场", description: "充满古董和回忆物品的跳蚤市场。营造出一种仿佛乘坐时光机回到过去的独特氛围。寻找珍稀收藏品极具乐趣。", food: "传统零食", sights: "清溪川散步道、回忆之街" }
    }
  },
  {
    id: "yeongdong",
    district: "강남구",
    image: "https://images.unsplash.com/photo-1505567745926-ba89000d255a?auto=format&fit=crop&q=80&w=1200",
    mapUrl: "https://www.google.com/maps?q=영동전통시장&output=embed",
    officialUrl: "https://pf.kakao.com/_MBdxdG",
    translations: {
      ko: { name: "영동전통시장", description: "강남 논현동 한복판에 위치해 낮과 밤의 매력이 다른 이색적인 시장입니다. 주변 직장인들의 회식 장소로 사랑받는 맛집들이 즐비하며, 강남의 현대적인 빌딩 숲 사이 정겨움을 느낄 수 있습니다.", food: "족발, 전 요리", sights: "강남 야경, 논현 가구거리" },
      en: { name: "Yeongdong Traditional Market", description: "Located in the heart of Nonhyeon-dong, Gangnam, this market has different charms day and night. Packed with restaurants loved by office workers, it's a cozy spot among skyscrapers.", food: "Jokbal, Savory Pancakes", sights: "Gangnam Night View, Furniture Street" },
      ja: { name: "永東伝統市場", description: "江南の論峴洞の真ん中に位置し、昼と夜で異なる魅力を持つ市場。周辺の会社員の会食場所として愛される名店が並び、現代的なビル群の中で人情味を感じられます。", food: "豚足(チョッパル)、ジョン料理", sights: "江南の夜景、論峴家具通り" },
      zh: { name: "永东传统市场", description: "位于江南论岘洞中心，昼夜魅力各异。这里布满了深受附近上班族喜爱的美食店，在江南的现代建筑丛林中感受一份温馨。", food: "猪蹄、各类煎饼", sights: "江南夜景、论岘家具街" }
    }
  },
  {
    id: "ddm_mall",
    district: "종로구",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/2020-05-16_10.23.37_동대문종합시장_한복_가게.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=동대문종합시장&output=embed",
    officialUrl: "https://www.ddm-mall.com/",
    translations: {
      ko: { name: "동대문종합시장", description: "세계적인 규모의 원단 및 의류 부자재 전문 시장입니다. 한복, 침구, 액세서리 재료 등 모든 창작 재료가 모여 있어 디자이너들의 성지로 꼽힙니다. 한국 패션 산업의 심장부입니다.", food: "닭한마리, 생선구이", sights: "DDP, 청계천, 흥인지문" },
      en: { name: "Dongdaemun Shopping Complex", description: "A world-class market specializing in fabrics and garment materials. As a mecca for designers, it houses everything from Hanbok to accessory components. The heart of the K-fashion industry.", food: "Whole Chicken Soup, Grilled Fish", sights: "DDP, Cheonggyecheon, Heunginjimun" },
      ja: { name: "東大門総合市場", description: "世界的な規模の生地および衣類副資材の専門市場。韓服、寝具、アクセサリー材料など、あらゆる創作材料が集まるデザイナーの聖地。韓国ファッション産業の心臓部です。", food: "タッカンマリ、焼き魚", sights: "DDP、清渓川、興仁之門" },
      zh: { name: "东大门综合市场", description: "世界级规模的面料及服装辅料专业市场。汇集了韩服、床上用品、饰品材料等所有创作材料，被誉为设计师的圣地。是韩国时尚产业的心脏。", food: "一只鸡、烤鱼", sights: "DDP、清溪川、兴仁之门" }
    }
  },
  {
    id: "jungang",
    district: "중구",
    image: "https://dbscthumb-phinf.pstatic.net/3716_000_1/20160503194758582_01SCB2CB1.jpg/fa5_77_i1.jpg?type=m4500_4500_fst_n&wm=Y",
    mapUrl: "https://www.google.com/maps?q=서울중앙시장&output=embed",
    officialUrl: "https://blog.naver.com/jungangmk",
    translations: {
      ko: { name: "서울중앙시장", description: "신당동에 위치한 역사 깊은 시장으로, 최근 '힙당동' 열풍과 함께 젊은 층에게 주목받고 있습니다. 전통적인 주방 가구 거리와 감각적인 맛집들이 독특한 분위기를 자아냅니다.", food: "보리밥, 수제 어묵", sights: "신당동 떡볶이 타운" },
      en: { name: "Seoul Central Market", description: "A historic market in Sindang-dong, gaining attention as part of the 'Hip-dangdong' trend. It offers a unique mix of traditional kitchenware shops and trendy eateries.", food: "Barley Rice, Handmade Fish Cakes", sights: "Sindang-dong Tteokbokki Town" },
      ja: { name: "ソウル中央市場", description: "新堂洞にある歴史ある市場。最近「ヒップダン洞」ブームとともに若者に注目されています。伝統的な厨房家具通りとおしゃれなグルメ店が独特な雰囲気を醸し出しています。", food: "麦ご飯、手作りさつま揚げ", sights: "新堂洞トッポギタウン" },
      zh: { name: "首尔中央市场", description: "位于新堂洞的悠久市场，随着最近的“Hip堂洞”热潮备受年轻人关注。传统的厨房家具街与感性美食店交织出独特的氛围。", food: "大麦饭、手工鱼饼", sights: "新堂洞年糕街" }
    }
  },
  {
    id: "dongmyo",
    district: "종로구",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Dongmyo_Flea_Market_06.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=동묘벼룩시장&output=embed",
    officialUrl: "https://korean.visitseoul.net/shopping/%EB%8F%99%EB%AC%98-%EB%B2%BC%EB%A3%A9%EC%8B%9C%EC%9E%A5-KR_/9648",
    translations: {
      ko: { name: "동묘 벼룩시장", description: "대한민국의 빈티지 성지로 불리는 곳입니다. 구제 옷, 오래된 LP, 카메라 등 세월의 흔적이 묻어나는 물건들을 저렴하게 득템할 수 있습니다. 독특한 세대 간 조화를 볼 수 있습니다.", food: "토스트, 고기튀김", sights: "동묘공원, 빈티지 샵 거리" },
      en: { name: "Dongmyo Flea Market", description: "Known as Korea's vintage mecca. You can find second-hand clothes, old LPs, and cameras at bargain prices. It's a place where different generations harmonize uniquely.", food: "Street Toast, Meat Fritters", sights: "Dongmyo Park, Vintage Shop Street" },
      ja: { name: "東廟フリーマーケット", description: "韓国のヴィンテージの聖地。古着、古いLP、カメラなど、歳月の跡が感じられる品々を安く手に入れることができます。独特な世代間の調和が見られます。", food: "トースト、肉の天ぷら", sights: "東廟公園、ヴィンテージショップ通り" },
      zh: { name: "东庙跳蚤市场", description: "被称为韩国的复古圣地。可以廉价淘到二手衣物、旧唱片、相机等带有岁月痕迹的物品。可以看到独特的世代交融。", food: "吐司、炸肉块", sights: "东庙公园、复古商店街" }
    }
  },
  {
    id: "majang",
    district: "성동구",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=1200",
    mapUrl: "https://www.google.com/maps?q=마장축산물시장&output=embed",
    officialUrl: "https://namu.wiki/w/%EB%A7%88%EC%9E%A5%EB%8F%99%20%EC%B6%95%EC%82%B0%EB%AC%BC%EC%8B%9C%EC%9E%A5",
    translations: {
      ko: { name: "마장 축산물시장", description: "대한민국 최대 규모의 축산물 전문 시장입니다. 신선하고 품질 좋은 한우와 돼지고기를 도매 가격으로 즐길 수 있습니다. 구입한 고기를 바로 구워 먹을 수 있는 식당가가 잘 마련되어 있습니다.", food: "한우 구이, 육회", sights: "청계천 산책로" },
      en: { name: "Majang Meat Market", description: "The largest livestock market in Korea. Enjoy fresh, high-quality Hanwoo beef and pork at wholesale prices. There's an alley of restaurants where you can grill your purchased meat.", food: "Grilled Hanwoo, Beef Tartare", sights: "Cheonggyecheon Stream Walk" },
      ja: { name: "馬場畜産物市場", description: "韓国最大規模の畜産物専門市場。新鮮で質の高い韓牛や豚肉を卸売価格で楽しめます。購入したお肉をその場で焼いて食べられる食堂街が充実しています。", food: "韓牛焼き、ユッケ", sights: "清渓川散歩道" },
      zh: { name: "马场畜产物市场", description: "韩国最大规模的畜产物专业市场。可以以批发价格品尝新鲜优质的韩牛和猪肉。这里设有完善的食堂街，可以即时加工品尝购买的肉类。", food: "烤韩牛、肉脍", sights: "清溪川散步道" }
    }
  },
  {
    id: "noryangjin",
    district: "동작구",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Korea-Seoul-Noryangjin_Fish_Market-01.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=노량진수산시장&output=embed",
    officialUrl: "https://www.susansijang.co.kr/nsis/miw/intro",
    translations: {
      ko: { name: "노량진수산시장", description: "100년 역사의 서울 최고 수산물 도매시장입니다. 현대화된 시설에서 갓 잡은 신선한 해산물을 합리적인 가격에 즐길 수 있습니다. 새벽 경매 모습은 서울의 역동성을 상징합니다.", food: "모둠회, 매운탕, 킹크랩", sights: "경매 현장, 여의도 야경" },
      en: { name: "Noryangjin Fish Market", description: "A 100-year-old top seafood wholesale market in Seoul. Enjoy fresh seafood at reasonable prices in modernized facilities. The dawn auction symbolizes Seoul's dynamism.", food: "Assorted Sashimi, Fish Stew, King Crab", sights: "Auction Scene, Yeouido Night View" },
      ja: { name: "鷺梁津水産市場", description: "100年の歴史を持つソウル最高の水産物卸売市場。現代化された施設で、獲れたての新鮮な魚介類をリーズナブルな価格で楽しめます。明け方の競りはソウルの躍動感を象徴しています。", food: "刺身の盛り合わせ、メウンタン、カニ料理", sights: "競りの現場、汝矣島の夜景" },
      zh: { name: "鹭梁津水产市场", description: "拥有百年历史的首尔顶级水产批发市场。在现代化的设施中，可以以合理的价格享用刚捕捞的新鲜海鲜。凌晨拍卖的景象象征着首尔的活力。", food: "综合刺身、辣鱼汤、帝王蟹", sights: "拍卖现场、汝矣岛夜景" }
    }
  },
  {
    id: "suyu",
    district: "강북구",
    image: "https://images.unsplash.com/photo-1516211697149-41efbc3a2dfb?auto=format&fit=crop&q=80&w=1200",
    mapUrl: "https://www.google.com/maps?q=수유시장&output=embed",
    officialUrl: "https://sooyu.tistory.com/",
    translations: {
      ko: { name: "수유시장", description: "서울 북부를 대표하는 현대화된 전통시장입니다. 매우 깔끔한 시설과 상인들의 넉넉한 인심이 느껴집니다. 떡볶이, 족발 등 시장 특유의 먹거리들이 매우 유명합니다.", food: "떡볶이, 만두, 족발", sights: "북한산 국립공원 입구" },
      en: { name: "Suyu Market", description: "A modernized traditional market representing northern Seoul. Known for its clean facilities and generous hospitality. Famous for market staples like Tteokbokki and Jokbal.", food: "Tteokbokki, Dumplings, Jokbal", sights: "Bukhansan National Park Entrance" },
      ja: { name: "水踰市場", description: "ソウル北部を代表する現代化された伝統市場。非常に清潔な施設と商人たちの温かい人情が感じられます。トッポギや豚足など、市場ならではのグルメが有名です。", food: "トッポギ、マンドゥ、豚足", sights: "北漢山国立公園入口" },
      zh: { name: "水逾市场", description: "代表首尔北部的现代化传统市场。可以感受到整洁的设施和商人们宽厚的人情味。炒年糕、猪蹄等市场特色美食非常有名。", food: "炒年糕、饺子、猪蹄", sights: "北汉山国立公园入口" }
    }
  },
  {
    id: "yeongdeungpo",
    district: "영등포구",
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=1200",
    mapUrl: "https://www.google.com/maps?q=영등포전통시장&output=embed",
    officialUrl: "https://access.visitkorea.or.kr/ms/detail.do?cotId=15351285-5cda-4443-afa3-a1b7042dec82",
    translations: {
      ko: { name: "영등포전통시장", description: "서울 서남권 최대 규모를 자랑하는 시장으로 오랜 역사를 이어왔습니다. 농수산물부터 의류까지 방대한 상품군을 갖추고 있으며, 숨겨진 노포 맛집들이 즐비합니다.", food: "순대국, 머릿고기", sights: "영등포 타임스퀘어" },
      en: { name: "Yeongdeungpo Traditional Market", description: "The largest market in southwestern Seoul with a long history. It offers a vast range of goods from produce to clothing and is home to many hidden legendary restaurants.", food: "Sundaeguk, Steamed Pork", sights: "Yeongdeungpo Times Square" },
      ja: { name: "永登浦伝統市場", description: "ソウル南西圏で最大規模を誇る市場で、長い歴史を持っています。農水産物から衣類まで膨大な商品群を揃えており、隠れた名店が立ち並んでいます。", food: "スンデク、モリ肉", sights: "永登浦タイムズスクエア" },
      zh: { name: "永登浦传统市场", description: "首尔西南圈规模最大的市场，历史悠久。拥有从农水产品到服装的庞大商品种类，隐藏的老字号美食店鳞次栉比。", food: "血肠汤、白切肉", sights: "永登浦时代广场" }
    }
  },
  {
    id: "jayang",
    district: "광진구",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1200",
    mapUrl: "https://www.google.com/maps?q=자양전통시장&output=embed",
    officialUrl: "https://www.gwangjin.go.kr/portal/bbs/B0000104/view.do?nttId=134138&menuNo=200734",
    translations: {
      ko: { name: "자양전통시장", description: "저렴한 물가와 뛰어난 맛의 주전부리가 가득한 활기 넘치는 시장입니다. 스마트한 현대화 사업을 통해 모바일 결제와 배송 서비스가 잘 갖춰져 있습니다. 뚝섬 한강공원과 가깝습니다.", food: "닭강정, 꽈배기, 칼국수", sights: "뚝섬 한강공원" },
      en: { name: "Jayang Traditional Market", description: "A vibrant market with affordable prices and delicious snacks. Well-equipped with mobile payment and delivery services through smart modernization. Close to Ttukseom Hangang Park.", food: "Dakgangjeong, Twists, Kalguksu", sights: "Ttukseom Hangang Park" },
      ja: { name: "紫陽伝統市場", description: "安い物価と優れた味の軽食が溢れる活気あふれる市場。スマートな現代化事業により、モバイル決済や配送サービスが整っています。トゥクソム漢江公園の近くです。", food: "タッカンジョン、クァベギ、カルグクス", sights: "トゥクソム漢江公園" },
      zh: { name: "紫阳传统市场", description: "物价低廉、美食丰富、充满活力的市场。通过智能现代化项目，移动支付和配送服务非常完善。靠近纛岛汉江公园。", food: "炸鸡块、麻花、刀切面", sights: "纛岛汉江公园" }
    }
  },
  {
    id: "amsa",
    district: "강동구",
    image: "https://images.unsplash.com/photo-1466632346460-9d533a2d1c86?auto=format&fit=crop&q=80&w=1200",
    mapUrl: "https://www.google.com/maps?q=암사종합시장&output=embed",
    officialUrl: "https://blog.naver.com/amsamarket_",
    translations: {
      ko: { name: "암사종합시장", description: "암사동 선사 유적지 인근의 정겨운 시장입니다. 신선한 채소와 품질 좋은 과일로 유명하며, 집밥 같은 반찬 가게들이 지역 주민들에게 인기가 높습니다. 가족 친화적인 분위기입니다.", food: "떡갈비, 닭강정, 반찬", sights: "암사동 선사유적지" },
      en: { name: "Amsa General Market", description: "A friendly market near the Amsa-dong Prehistoric Site. Famous for fresh vegetables and high-quality fruit. Side dish shops are popular among locals for their homemade taste.", food: "Tteok-galbi, Dakgangjeong, Side Dishes", sights: "Amsa-dong Prehistoric Site" },
      ja: { name: "岩寺総合市場", description: "岩寺洞の先史遺跡地近くにあるアットホームな市場。新鮮な野菜と質の良い果物で有名。家庭料理のようなおかず屋さんが地元住民に人気です。家族連れに優しい雰囲気です。", food: "トッカルビ、タッカンジョン、おかず", sights: "岩寺洞先史遺跡地" },
      zh: { name: "岩寺综合市场", description: "位于岩寺洞史前遗址附近的温馨市场。以新鲜蔬菜和优质水果闻名，像家常饭一样的小菜店深受当地居民喜爱。氛围非常适合家庭出游。", food: "烤肉饼、炸鸡块、小菜", sights: "岩寺洞史前遗址" }
    }
  },
  {
    id: "bangi",
    district: "송파구",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200",
    mapUrl: "https://www.google.com/maps?q=방이시장&output=embed",
    officialUrl: "https://access.visitkorea.or.kr/ms/detail.do?cotId=1c91f5ba-d28b-4bdb-a58a-d2788733a625",
    translations: {
      ko: { name: "방이시장", description: "올림픽공원 인근의 생활 밀착형 시장입니다. 세련된 카페와 전통 노포가 조화롭게 섞여 있으며, 가성비 좋은 맛집이 많아 인근 직장인과 학생들에게 인기가 많습니다.", food: "순대국, 돈까스, 호떡", sights: "올림픽공원, 롯데월드타워" },
      en: { name: "Bangi Market", description: "A lifestyle market near Olympic Park. A blend of trendy cafes and traditional shops. Popular among office workers and students for its cost-effective eateries.", food: "Sundaeguk, Pork Cutlet, Hotteok", sights: "Olympic Park, Lotte World Tower" },
      ja: { name: "芳荑市場", description: "オリンピック公園近くの生活密着型市場。おしゃれなカフェと伝統的な老舗が調和しており、コスパの良い名店が多く、近くの会社員や学生に人気です。", food: "スンデク、トンカツ、ホットク", sights: "オリンピック公園、ロッテワールドタワー" },
      zh: { name: "芳荑市场", description: "靠近奥林匹克公园的生活化市场。时尚咖啡馆与传统老店和谐交织，有很多性价比极高的美食店，深受附近上班族和学生的喜爱。", food: "血肠汤、猪排、糖饼", sights: "奥林匹克公园、乐天世界大厦" }
    }
  }
];

class MarketCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["name", "district", "description", "food", "sights", "image", "map-url", "official-url", "lang-food", "lang-sights", "lang-visit", "lang-viewlist"];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute("name") || "";
    const district = this.getAttribute("district") || "";
    const description = this.getAttribute("description") || "";
    const food = this.getAttribute("food") || "";
    const sights = this.getAttribute("sights") || "";
    const image = this.getAttribute("image") || "";
    const mapUrl = this.getAttribute("map-url") || "";
    const officialUrl = this.getAttribute("official-url") || "";
    
    // Labels
    const labelFood = this.getAttribute("lang-food") || "Signature Food";
    const labelSights = this.getAttribute("lang-sights") || "Top Sights";
    const labelVisit = this.getAttribute("lang-visit") || "Visit Official";
    const labelViewList = this.getAttribute("lang-viewlist") || "View List";

    if (!name) return;

    const isExternalMap = mapUrl.includes("wikipedia.org");

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: var(--card-bg, rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          color: inherit;
          container-type: inline-size;
        }

        :host(:hover) {
          transform: translateY(-10px);
          box-shadow: var(--shadow, 0 20px 40px rgba(0, 0, 0, 0.4));
          border-color: rgba(255, 255, 255, 0.2);
        }

        .thumbnail-container {
          width: 100%;
          height: 250px;
          background: #222;
          overflow: hidden;
          position: relative;
        }

        .thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: block;
        }

        .wiki-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.7rem;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          pointer-events: none;
          z-index: 1;
        }

        .content {
          padding: 24px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .name {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(45deg, var(--accent-color, #fff), #888);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .district {
          font-size: 0.9rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 4px 12px;
          border-radius: 20px;
          opacity: 0.8;
          white-space: nowrap;
        }

        .description {
          font-size: 1rem;
          line-height: 1.7;
          opacity: 0.8;
          margin-bottom: 24px;
          text-align: justify;
          word-break: keep-all;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }

        .info-item h4 {
          font-size: 0.85rem;
          opacity: 0.6;
          text-transform: uppercase;
          margin: 0 0 8px 0;
          letter-spacing: 1px;
        }

        .info-item p {
          font-size: 1rem;
          margin: 0;
        }

        .btn-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 8px;
        }

        .official-btn {
          display: block;
          width: 100%;
          padding: 14px;
          background: var(--btn-grad, linear-gradient(45deg, #444, #222));
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: inherit !important;
          text-align: center;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .official-btn:hover {
          filter: brightness(1.2);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .map-container {
          width: 100%;
          height: 200px;
          border-radius: 12px;
          overflow: hidden;
          background: #111;
          position: relative;
        }

        iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        .external-btn {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.4);
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          backdrop-filter: blur(2px);
          transition: all 0.3s ease;
        }

        .external-btn:hover {
          background: rgba(0, 0, 0, 0.6);
          font-size: 1.1rem;
        }

        @container (max-width: 400px) {
          .info-grid {
            grid-template-columns: 1fr;
          }
          .name {
            font-size: 1.5rem;
          }
        }
      </style>
      <div class="thumbnail-container">
        <img src="${image}" 
             alt="${name}" 
             class="thumbnail" 
             loading="lazy" 
             referrerpolicy="no-referrer" 
             onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Korea-Seoul-Gwangjang_Market-01.jpg/1200px-Korea-Seoul-Gwangjang_Market-01.jpg'; this.onerror=null;">
        <div class="wiki-badge">Images</div>
      </div>
      <div class="content">
        <div class="header">
          <h2 class="name">${name}</h2>
          <span class="district">${district}</span>
        </div>
        <p class="description">${description}</p>
        <div class="info-grid">
          <div class="info-item">
            <h4>${labelFood}</h4>
            <p>${food}</p>
          </div>
          <div class="info-item">
            <h4>${labelSights}</h4>
            <p>${sights}</p>
          </div>
        </div>
        <div class="btn-group">
          ${officialUrl ? `<a href="${officialUrl}" target="_blank" class="official-btn">${labelVisit}</a>` : ""}
          <div class="map-container">
            ${isExternalMap 
              ? `<a href="${mapUrl}" target="_blank" class="external-btn">${labelViewList}</a>` 
              : `<iframe src="${mapUrl}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("market-card", MarketCard);

function init() {
  const container = document.getElementById("markets-container");
  const filterContainer = document.getElementById("filter-container");
  const themeToggle = document.getElementById("theme-toggle");
  const langButtons = document.querySelectorAll(".lang-btn");
  
  let currentLang = localStorage.getItem("lang") || "ko";
  let currentDistrict = "전체";

  // Theme Toggle
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("light-mode");
    const isLight = document.documentElement.classList.contains("light-mode");
    themeToggle.textContent = isLight ? "🌙" : "🌓";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });

  if (localStorage.getItem("theme") === "light") {
    document.documentElement.classList.add("light-mode");
    themeToggle.textContent = "🌙";
  }

  // Language Switch
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    
    // Update UI Strings
    const t = translations[lang];
    document.getElementById("main-title").textContent = t.title;
    document.getElementById("main-subtitle").textContent = t.subtitle;
    document.getElementById("footer-text").innerHTML = t.footer;
    
    // Update Active Button
    langButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    renderFilters();
    renderMarkets();
  }

  langButtons.forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  function renderFilters() {
    filterContainer.innerHTML = "";
    const t = translations[currentLang];
    
    const districts = [t.all, "종로구", "중구", "성동구", "동작구", "마포구", "동대문구", "강북구", "영등포구", "송파구", "강남구", "광진구", "강동구", t.other];
    
    districts.forEach(d => {
      const btn = document.createElement("button");
      btn.className = `filter-btn ${currentDistrict === d ? "active" : ""}`;
      btn.textContent = d;
      btn.addEventListener("click", () => {
        currentDistrict = d;
        renderFilters();
        renderMarkets();
      });
      filterContainer.appendChild(btn);
    });
  }

  function renderMarkets() {
    container.innerHTML = "";
    const t = translations[currentLang];
    
    let filtered = marketsData;
    if (currentDistrict !== t.all) {
      const districtValue = currentDistrict === t.other ? "기타" : currentDistrict;
      filtered = marketsData.filter(m => m.district === districtValue);
    }

    filtered.forEach(market => {
      const card = document.createElement("market-card");
      const m = market.translations[currentLang];
      
      card.setAttribute("name", m.name);
      card.setAttribute("district", market.district);
      card.setAttribute("description", m.description);
      card.setAttribute("food", m.food);
      card.setAttribute("sights", m.sights);
      card.setAttribute("image", market.image);
      card.setAttribute("map-url", market.mapUrl);
      card.setAttribute("official-url", market.officialUrl || "");
      
      // Pass localized labels
      card.setAttribute("lang-food", t.food);
      card.setAttribute("lang-sights", t.sights);
      card.setAttribute("lang-visit", t.visitOfficial);
      card.setAttribute("lang-viewlist", t.viewAllList);
      
      container.appendChild(card);
    });

    // Add Misc Market for 'Other' category if not already in marketsData
    if (currentDistrict === t.all || currentDistrict === t.other) {
      const card = document.createElement("market-card");
      card.setAttribute("name", t.miscMarketName);
      card.setAttribute("district", t.other);
      card.setAttribute("description", t.miscMarketDesc);
      card.setAttribute("food", t.miscMarketFood);
      card.setAttribute("sights", t.miscMarketSights);
      card.setAttribute("image", "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Seoul_Jungang_Market.JPG&width=1200");
      card.setAttribute("map-url", "https://ko.wikipedia.org/wiki/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EC%9D%98_%EC%8B%9C%EC%9E%A5_%EB%AA%A9%EB%A1%9D");
      
      card.setAttribute("lang-food", t.food);
      card.setAttribute("lang-sights", t.sights);
      card.setAttribute("lang-visit", t.visitOfficial);
      card.setAttribute("lang-viewlist", t.viewAllList);
      
      container.appendChild(card);
    }
  }

  // Initial Render
  setLanguage(currentLang);
}

document.addEventListener("DOMContentLoaded", init);

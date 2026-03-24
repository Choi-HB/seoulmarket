const marketsData = [
  {
    name: "광장시장",
    district: "종로구",
    description: "100년이 넘는 역사를 가진 대한민국 최초의 상설시장으로, 활발한 분위기가 가득합니다. 빈대떡, 마약김밥 등 전 세계적으로 유명한 길거리 음식들이 가득하며, 전통 한복과 침구류 등 다양한 상품을 취급합니다. 밤이 되면 야시장의 정취가 더해져 여행자들의 필수 코스로 손꼽힙니다. 서울의 전통과 현대적 먹거리가 공존하는 가장 대표적인 장소입니다.",
    food: "빈대떡, 마약김밥, 육회",
    sights: "한복 거리, 구제 시장, 야시장",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Korea-Seoul-Gwangjang_Market-01.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=광장시장&output=embed",
    officialUrl: "http://www.kwangjangmarket.co.kr/"
  },
  {
    name: "남대문시장",
    district: "중구",
    description: "조선시대부터 이어져 온 역사 깊은 시장으로, 숭례문 인근에 위치한 한국 최대 규모의 전통시장입니다. 아동복, 액세서리, 카메라, 옷 등 없는 것이 없는 만물시장으로 불리며, 활기찬 상인들의 모습을 볼 수 있습니다. 갈치조림 골목과 칼국수 골목은 시장의 대표적인 맛의 성지로 유명합니다. 외국인 관광객들에게 한국의 역동성을 보여주는 최고의 쇼핑 명소입니다.",
    food: "갈치조림, 칼국수, 호떡",
    sights: "숭례문, 액세서리 도매상가, 카메라 거리",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Seoul-Namdaemun.Market.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=남대문시장&output=embed",
    officialUrl: "https://namdaemunmarket.co.kr/"
  },
  {
    name: "망원시장",
    district: "마포구",
    description: "최근 MZ세대에게 가장 사랑받는 시장 중 하나로, 세련된 감각과 전통이 공존하는 곳입니다. 저렴하고 맛있는 주전부리가 많아 식도락 여행을 즐기기에 최적이며, 인근 망원 한강공원과 연계하여 나들이 코스로도 좋습니다. 시장 특유의 활기찬 에너지와 정겨움이 동시에 느껴지는 특별한 공간입니다. 트렌디한 카페와 전통적인 맛이 어우러진 마포의 명물입니다.",
    food: "닭강정, 수제 고로케, 칼국수",
    sights: "망원동 카페거리, 망원 한강공원",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Mangwon_Market_01.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=망원시장&output=embed",
    officialUrl: "https://www.mangwonmarket.com/"
  },
  {
    name: "통인시장",
    district: "종로구",
    description: "경복궁 옆에 위치하여 역사적 정취를 함께 느낄 수 있는 아담하고 정겨운 시장입니다. '엽전 도시락'이라는 독특한 시스템으로 유명하여 외국인 관광객들에게도 인기가 매우 높습니다. 기름떡볶이를 포함한 전통적인 맛과 현대적인 재미가 결합된 서울의 대표적인 명소입니다. 서촌의 고즈넉한 분위기와 함께 시장 구경을 즐기기에 더없이 좋은 곳입니다.",
    food: "기름떡볶이, 엽전 도시락, 효자동 닭꼬치",
    sights: "경복궁, 서촌 한옥마을",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Tongin_Market_01.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=통인시장&output=embed",
    officialUrl: "https://www.instagram.com/tongin_official/"
  },
  {
    name: "경동시장",
    district: "동대문구",
    description: "대한민국 최대 규모의 약령시장이 위치한 곳으로, 신선한 약초와 한약재 향기가 가득한 곳입니다. 제기동 일대에 넓게 퍼져 있으며, 제철 농산물과 수산물도 매우 저렴하게 구입할 수 있는 서울의 부엌 같은 시장입니다. 최근에는 시장 내 오래된 공간을 개조한 이색적인 카페들이 생겨나며 젊은 층의 방문도 늘고 있습니다. 건강한 삶을 지향하는 사람들에게 영감을 주는 전통적인 공간입니다.",
    food: "한방차, 제철 과일, 시장 통닭",
    sights: "서울약령시 한의약박물관, 청년몰",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Korea-Seoul-Gyeongdong_Market-04.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=경동시장&output=embed",
    officialUrl: "https://www.kyungdongmarket.co.kr/"
  },
  {
    name: "가락시장",
    district: "송파구",
    description: "서울 동남권의 물류 거점이자 최대 규모의 농수산물 도매시장으로, 24시간 활기가 넘치는 곳입니다. 현대화 시설인 '가락몰'이 들어서면서 더욱 쾌적하게 쇼핑과 식사를 즐길 수 있게 되었습니다. 신선한 회와 고기를 즉석에서 구입해 먹을 수 있는 식당가가 잘 마련되어 있어 미식가들의 발길이 끊이지 않습니다. 새벽 경매의 치열함과 낮의 풍요로움을 동시에 볼 수 있는 곳입니다.",
    food: "신선한 회, 축산물 구이, 제철 해산물",
    sights: "가락몰 도서관, 야간 경매 현장",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Korea-Seoul-Garak_Fish_Market-02.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=가락시장&output=embed",
    officialUrl: "https://www.instagram.com/saffc_official/"
  },
  {
    name: "서울풍물시장",
    district: "동대문구",
    description: "골동품과 구제 옷, 추억 속의 물건들이 가득한 서울의 대표적인 벼룩시장입니다. 황학동 시장에서 유래되었으며, 마치 타임머신을 타고 과거로 여행을 떠나는 듯한 독특한 분위기를 자아냅니다. 희귀한 수집품부터 정겨운 옛 물건들까지 구경하는 재미가 쏠쏠하여 출사지로도 인기가 높습니다. 골동품 애호가라면 반드시 들러야 할 서울의 보물 창고 같은 시장입니다.",
    food: "전통 주전부리, 빈대떡",
    sights: "청계천로 산책길, 추억의 거리 전시관",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Seoul_Folk_Flea_Market_01.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=서울풍물시장&output=embed",
    officialUrl: "https://pungmul.or.kr/"
  },
  {
    name: "영동전통시장",
    district: "강남구",
    description: "화려한 강남 한복판인 논현동에 위치하여 낮과 밤의 매력이 확연히 다른 이색적인 시장입니다. 주변 직장인들의 회식 장소로 사랑받는 맛집들이 즐비하며, 전통시장의 정겨움과 도시의 세련됨이 어우러져 있습니다. 신선한 반찬과 과일부터 트렌디한 안주까지 다양한 먹거리를 만나볼 수 있는 곳입니다. 강남의 현대적인 빌딩 숲 사이에서 만나는 소박한 따스함이 매력적입니다.",
    food: "족발, 전 요리, 반찬",
    sights: "강남 야경, 논현동 가구거리",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Yeongdong_Traditional_Market_01.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=영동전통시장&output=embed",
    officialUrl: "https://pf.kakao.com/_MBdxdG"
  },
  {
    name: "동대문종합시장",
    district: "종로구",
    description: "세계적인 규모의 원단 및 의류 부자재 전문 시장으로, 패션의 메카로 불리는 곳입니다. 한복, 침구, 액세서리 재료 등 창작을 위한 모든 재료가 모여 있어 디자이너와 공예가들의 성지로 꼽힙니다. 복잡한 시장 미로 속에서 보물 같은 아이템을 찾는 재미가 있으며, 청계천과 인접하여 쇼핑 후 산책하기에도 좋습니다. 한국 패션 산업의 심장부와 같은 활기를 느낄 수 있는 곳입니다.",
    food: "생선구이 골목, 닭한마리, 핫바",
    sights: "청계천, DDP(동대문디자인플라자), 흥인지문",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/2020-05-16_10.23.37_동대문종합시장_한복_가게.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=동대문종합시장&output=embed",
    officialUrl: "https://www.ddm-mall.com/"
  },
  {
    name: "서울중앙시장",
    district: "중구",
    description: "신당동에 위치한 역사 깊은 시장으로, 최근 '힙당동' 열풍과 함께 젊은 층에게 새롭게 주목받고 있는 명소입니다. 전통적인 주방 가구 거리와 어우러진 감각적인 맛집과 술집들이 독특한 분위기를 자아냅니다. 보리밥 골목과 어묵 골목 등 전통적인 먹거리도 여전히 큰 사랑을 받고 있습니다. 과거의 정취를 간직하면서도 현대적인 감각이 더해진 매력적인 공간입니다.",
    food: "보리밥, 수제 어묵, 갑오징어 구이",
    sights: "신당동 떡볶이 타운, 주방가구거리",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Seoul_Central_Market_01.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=서울중앙시장&output=embed",
    officialUrl: "https://blog.naver.com/jungangmk"
  },
  {
    name: "동묘 벼룩시장",
    district: "종로구",
    description: "무한도전 등 예능 프로그램을 통해 전국적으로 유명해진 서울의 대표적인 빈티지 성지입니다. 구제 옷, 오래된 LP, 골동품 카메라 등 세월의 흔적이 묻어나는 물건들을 저렴하게 득템할 수 있는 곳입니다. 어르신들의 쉼터이자 젊은이들의 패션 놀이터가 되는 독특한 세대 간 조화를 볼 수 있습니다. 날것 그대로의 활기와 구제 패션의 즐거움을 동시에 만끽할 수 있는 특별한 시장입니다.",
    food: "토스트, 고기튀김, 동묘 짜장면",
    sights: "동묘공원, 빈티지 샵 거리",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Dongmyo_Flea_Market_06.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=동묘벼룩시장&output=embed",
    officialUrl: "https://korean.visitseoul.net/shopping/%EB%8F%99%EB%AC%98-%EB%B2%BC%EB%A3%A9%EC%8B%9C%EC%9E%A5-KR_/9648"
  },
  {
    name: "마장 축산물시장",
    district: "성동구",
    description: "수도권 육류 유통의 60% 이상을 담당하는 대한민국 최대 규모의 축산물 전문 시장입니다. 신선하고 품질 좋은 한우와 돼지고기를 도매 가격으로 저렴하게 구입할 수 있어 고기 애호가들의 필수 방문 코스입니다. 시장 내 '먹자골목'에서는 구입한 고기를 바로 구워 먹을 수 있는 식당들이 줄지어 있어 활기찬 미식 경험을 제공합니다. 고기에 대한 모든 것을 만날 수 있는 전문적인 공간입니다.",
    food: "한우 구이, 육회, 머릿고기",
    sights: "청계천 산책로, 마장동 벽화마을",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Majang_Meat_Market_01.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=마장축산물시장&output=embed",
    officialUrl: "https://namu.wiki/w/%EB%A7%88%EC%9E%A5%EB%8F%99%20%EC%B6%95%EC%82%B0%EB%AC%BC%EC%8B%9C%EC%9E%A5"
  },
  {
    name: "노량진수산시장",
    district: "동작구",
    description: "100년 가까운 역사를 자랑하는 서울 최고의 수산물 전문 도매시장입니다. 현대화 사업을 통해 쾌적한 시설을 갖추었으며, 매일 새벽 열리는 활발한 경매 모습은 서울의 역동성을 상징하는 풍경입니다. 갓 잡은 신선한 회와 각종 해산물을 합리적인 가격에 즐길 수 있는 식당가가 잘 마련되어 있습니다. 도심 한복판에서 바다의 풍요로움과 생동감을 느낄 수 있는 최고의 명소입니다.",
    food: "모둠회, 매운탕, 킹크랩/대게",
    sights: "경매 현장(새벽), 여의도 야경 뷰",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Korea-Seoul-Noryangjin_Fish_Market-01.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=노량진수산시장&output=embed",
    officialUrl: "https://www.susansijang.co.kr/nsis/miw/intro"
  },
  {
    name: "수유시장",
    district: "강북구",
    description: "서울 북부 지역을 대표하는 현대화된 전통시장으로, 매우 깔끔하고 정돈된 시설이 인상적인 곳입니다. 다양한 먹거리가 가득한 미로 같은 골목마다 상인들의 넉넉한 인심이 느껴지며, 특히 떡볶이와 족발 등 분식류 맛집이 많기로 유명합니다. 시장 내부가 아케이드로 덮여 있어 날씨와 상관없이 쾌적한 쇼핑이 가능합니다. 지역 주민들의 삶과 정이 깊게 배어 있는 따뜻한 시장입니다.",
    food: "떡볶이, 만두, 족발",
    sights: "북한산 국립공원 입구, 우이천 산책길",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Suyu_Market_01.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=수유시장&output=embed",
    officialUrl: "https://sooyu.tistory.com/"
  },
  {
    name: "영등포전통시장",
    district: "영등포구",
    description: "서울 서남권에서 가장 큰 규모를 자랑하는 전통시장으로, 공구 거리와 함께 오랜 역사를 이어온 곳입니다. 신선한 농수산물부터 의류, 잡화까지 방대한 상품군을 갖추고 있어 구경하는 재미가 매우 큽니다. 시장 골목마다 숨겨진 노포 맛집들이 즐비하며, 특히 순대골목은 오랜 단골들이 끊이지 않는 명물입니다. 대형 쇼핑몰인 타임스퀘어와 인접하여 전통과 현대가 극명하게 교차하는 매력을 느낄 수 있습니다.",
    food: "순대국, 머릿고기, 곰탕",
    sights: "영등포 타임스퀘어, 문래창작촌",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Yeongdeungpo_Traditional_Market_01.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=영등포전통시장&output=embed",
    officialUrl: "https://access.visitkorea.or.kr/ms/detail.do?cotId=15351285-5cda-4443-afa3-a1b7042dec82"
  },
  {
    name: "자양전통시장",
    district: "광진구",
    description: "광진구 주민들의 든든한 먹거리를 책임지는 활기 넘치는 시장으로, 저렴한 물가와 뛰어난 맛의 주전부리가 가득합니다. 최근에는 전통시장 현대화 사업을 통해 모바일 결제와 배송 서비스가 잘 갖춰진 스마트한 시장으로 변모했습니다. 시장 주변의 뚝섬 한강공원과 건대입구 상권이 가까워 나들이 코스로도 매우 훌륭합니다. 소박하지만 알찬 서울 골목 시장의 정석을 보여주는 곳입니다.",
    food: "닭강정, 꽈배기, 칼국수",
    sights: "뚝섬 한강공원, 건대 양꼬치거리",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Jayang_Traditional_Market_01.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=자양전통시장&output=embed",
    officialUrl: "https://www.gwangjin.go.kr/portal/bbs/B0000104/view.do?nttId=134138&menuNo=200734"
  },
  {
    name: "암사종합시장",
    district: "강동구",
    description: "선사 시대 유적지가 있는 암사동에 위치한 시장으로, 역사적인 동네 분위기와 어우러진 정겨운 시장입니다. 인근 아파트 단지와 인접하여 항상 장을 보는 사람들로 붐비며, 신선한 제철 채소와 과일의 품질이 좋기로 소문나 있습니다. 시장 내 반찬 가게들은 집밥 같은 맛으로 지역 주민들에게 인기가 높습니다. 깔끔하게 정비된 아케이드 시설 덕분에 아이들과 함께 방문하기에도 좋은 가족 친화적 시장입니다.",
    food: "떡갈비, 닭강정, 수제 반찬",
    sights: "암사동 선사유적지, 광나루 한강공원",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Amsa_General_Market_01.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=암사종합시장&output=embed",
    officialUrl: "https://blog.naver.com/amsamarket_"
  },
  {
    name: "방이시장",
    district: "송파구",
    description: "올림픽공원 인근에 위치한 송파구의 대표적인 생활 밀착형 시장입니다. 주변의 대규모 단지와 빌라촌을 배후로 하고 있어 항상 생기가 넘치며, 세련된 카페와 전통적인 노포가 조화롭게 섞여 있습니다. 특히 저렴하고 푸짐한 양의 맛집들이 많아 인근 직장인과 학생들의 발길이 끊이지 않습니다. 석촌호수, 롯데타워 등 서울의 랜드마크와 가까워 관광 후 들러보기 좋은 위치적 장점이 있습니다.",
    food: "순대국, 돈까스, 호떡",
    sights: "올림픽공원, 롯데월드타워, 석촌호수",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Bangi_Market_01.jpg&width=1200",
    mapUrl: "https://www.google.com/maps?q=방이시장&output=embed",
    officialUrl: "https://access.visitkorea.or.kr/ms/detail.do?cotId=1c91f5ba-d28b-4bdb-a58a-d2788733a625"
  },
  {
    name: "서울 특별시 전통시장 목록",
    district: "기타",
    description: "서울 전역에 위치한 모든 전통시장의 상세 리스트를 확인하실 수 있습니다. 구별로 정리된 방대한 데이터를 통해 숨겨진 로컬 시장까지 모두 찾아보세요. 서울의 맛과 멋을 탐험하는 가장 확실한 가이드가 되어줄 것입니다.",
    food: "서울 전역의 모든 로컬 푸드",
    sights: "수백 곳의 서울 전통시장 가이드",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Seoul_Jungang_Market.JPG&width=1200",
    mapUrl: "https://ko.wikipedia.org/wiki/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EC%9D%98_%EC%8B%9C%EC%9E%A5_%EB%AA%A9%EB%A1%9D",
    officialUrl: "https://ko.wikipedia.org/wiki/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EC%9D%98_%EC%8B%9C%EC%9E%A5_%EB%AA%A9%EB%A1%9D"
  }
];

class MarketCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["name", "district", "description", "food", "sights", "image", "map-url", "official-url"];
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

    if (!name) return;

    const isExternalMap = mapUrl.includes("wikipedia.org");

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          color: #fff;
          container-type: inline-size;
        }

        :host(:hover) {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
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
          background: linear-gradient(45deg, #fff, #aaa);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .district {
          font-size: 0.9rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 4px 12px;
          border-radius: 20px;
          color: #ddd;
          white-space: nowrap;
        }

        .description {
          font-size: 1rem;
          line-height: 1.7;
          color: #bbb;
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
          color: #888;
          text-transform: uppercase;
          margin: 0 0 8px 0;
          letter-spacing: 1px;
        }

        .info-item p {
          font-size: 1rem;
          margin: 0;
          color: #eee;
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
          background: linear-gradient(45deg, #444, #222);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: #fff;
          text-align: center;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .official-btn:hover {
          background: linear-gradient(45deg, #666, #333);
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
        <div class="wiki-badge">Wikipedia Commons</div>
      </div>
      <div class="content">
        <div class="header">
          <h2 class="name">${name}</h2>
          <span class="district">${district}</span>
        </div>
        <p class="description">${description}</p>
        <div class="info-grid">
          <div class="info-item">
            <h4>대표 먹거리</h4>
            <p>${food}</p>
          </div>
          <div class="info-item">
            <h4>대표 볼거리</h4>
            <p>${sights}</p>
          </div>
        </div>
        <div class="btn-group">
          ${officialUrl ? `<a href="${officialUrl}" target="_blank" class="official-btn">공식 홈페이지 / SNS 방문</a>` : ""}
          <div class="map-container">
            ${isExternalMap 
              ? `<a href="${mapUrl}" target="_blank" class="external-btn">전체 목록 확인하기</a>` 
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
  const filterButtons = document.querySelectorAll(".filter-btn");

  function renderMarkets(district = "전체") {
    container.innerHTML = "";
    const filteredMarkets = district === "전체" 
      ? marketsData 
      : marketsData.filter(m => m.district === district);

    filteredMarkets.forEach(market => {
      const card = document.createElement("market-card");
      card.setAttribute("name", market.name);
      card.setAttribute("district", market.district);
      card.setAttribute("description", market.description);
      card.setAttribute("food", market.food);
      card.setAttribute("sights", market.sights);
      card.setAttribute("image", market.image);
      card.setAttribute("map-url", market.mapUrl);
      card.setAttribute("official-url", market.officialUrl || "");
      container.appendChild(card);
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderMarkets(btn.dataset.district);
    });
  });

  renderMarkets();
}

document.addEventListener("DOMContentLoaded", init);

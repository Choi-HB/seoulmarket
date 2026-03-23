const marketsData = [
  {
    name: "광장시장",
    district: "종로구",
    description: "100년이 넘는 역사를 가진 대한민국 최초의 상설시장으로, 활발한 분위기가 가득합니다. 빈대떡, 마약김밥 등 전 세계적으로 유명한 길거리 음식들이 가득하며, 전통 한복과 침구류 등 다양한 상품을 취급합니다. 밤이 되면 야시장의 정취가 더해져 여행자들의 필수 코스로 손꼽힙니다. 서울의 전통과 현대적 먹거리가 공존하는 가장 대표적인 장소입니다.",
    food: "빈대떡, 마약김밥, 육회",
    sights: "한복 거리, 구제 시장, 야시장",
    image: "https://images.unsplash.com/photo-1664402636605-e115b0266070?auto=format&fit=crop&q=80&w=1200",
    mapUrl: "https://www.google.com/maps?q=광장시장&output=embed"
  },
  {
    name: "남대문시장",
    district: "중구",
    description: "조선시대부터 이어져 온 역사 깊은 시장으로, 숭례문 인근에 위치한 한국 최대 규모의 전통시장입니다. 아동복, 액세서리, 카메라, 옷 등 없는 것이 없는 만물시장으로 불리며, 활기찬 상인들의 모습을 볼 수 있습니다. 갈치조림 골목과 칼국수 골목은 시장의 대표적인 맛의 성지로 유명합니다. 외국인 관광객들에게 한국의 역동성을 보여주는 최고의 쇼핑 명소입니다.",
    food: "갈치조림, 칼국수, 호떡",
    sights: "숭례문, 액세서리 도매상가, 카메라 거리",
    image: "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&q=80&w=1200",
    mapUrl: "https://www.google.com/maps?q=남대문시장&output=embed"
  },
  {
    name: "망원시장",
    district: "마포구",
    description: "최근 MZ세대에게 가장 사랑받는 시장 중 하나로, 세련된 감각과 전통이 공존하는 곳입니다. 저렴하고 맛있는 주전부리가 많아 식도락 여행을 즐기기에 최적이며, 인근 망원 한강공원과 연계하여 나들이 코스로도 좋습니다. 시장 특유의 활기찬 에너지와 정겨움이 동시에 느껴지는 특별한 공간입니다. 트렌디한 카페와 전통적인 맛이 어우러진 마포의 명물입니다.",
    food: "닭강정, 수제 고로케, 칼국수",
    sights: "망원동 카페거리, 망원 한강공원",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c71f06ec?auto=format&fit=crop&q=80&w=1200",
    mapUrl: "https://www.google.com/maps?q=망원시장&output=embed"
  },
  {
    name: "통인시장",
    district: "종로구",
    description: "경복궁 옆에 위치하여 역사적 정취를 함께 느낄 수 있는 아담하고 정겨운 시장입니다. '엽전 도시락'이라는 독특한 시스템으로 유명하여 외국인 관광객들에게도 인기가 매우 높습니다. 기름떡볶이를 포함한 전통적인 맛과 현대적인 재미가 결합된 서울의 대표적인 명소입니다. 서촌의 고즈넉한 분위기와 함께 시장 구경을 즐기기에 더없이 좋은 곳입니다.",
    food: "기름떡볶이, 엽전 도시락, 효자동 닭꼬치",
    sights: "경복궁, 서촌 한옥마을",
    image: "https://images.unsplash.com/photo-1606240453300-348633792019?auto=format&fit=crop&q=80&w=1200",
    mapUrl: "https://www.google.com/maps?q=통인시장&output=embed"
  },
  {
    name: "경동시장",
    district: "동대문구",
    description: "대한민국 최대 규모의 약령시장이 위치한 곳으로, 신선한 약초와 한약재 향기가 가득한 곳입니다. 제기동 일대에 넓게 퍼져 있으며, 제철 농산물과 수산물도 매우 저렴하게 구입할 수 있는 서울의 부엌 같은 시장입니다. 최근에는 시장 내 오래된 공간을 개조한 이색적인 카페들이 생겨나며 젊은 층의 방문도 늘고 있습니다. 건강한 삶을 지향하는 사람들에게 영감을 주는 전통적인 공간입니다.",
    food: "한방차, 제철 과일, 시장 통닭",
    sights: "서울약령시 한의약박물관, 청년몰",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1200",
    mapUrl: "https://www.google.com/maps?q=경동시장&output=embed"
  },
  {
    name: "가락시장",
    district: "송파구",
    description: "서울 동남권의 물류 거점이자 최대 규모의 농수산물 도매시장으로, 24시간 활기가 넘치는 곳입니다. 현대화 시설인 '가락몰'이 들어서면서 더욱 쾌적하게 쇼핑과 식사를 즐길 수 있게 되었습니다. 신선한 회와 고기를 즉석에서 구입해 먹을 수 있는 식당가가 잘 마련되어 있어 미식가들의 발길이 끊이지 않습니다. 새벽 경매의 치열함과 낮의 풍요로움을 동시에 볼 수 있는 곳입니다.",
    food: "신선한 회, 축산물 구이, 제철 해산물",
    sights: "가락몰 도서관, 야간 경매 현장",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1200",
    mapUrl: "https://www.google.com/maps?q=가락시장&output=embed"
  },
  {
    name: "서울풍물시장",
    district: "동대문구",
    description: "골동품과 구제 옷, 추억 속의 물건들이 가득한 서울의 대표적인 벼룩시장입니다. 황학동 시장에서 유래되었으며, 마치 타임머신을 타고 과거로 여행을 떠나는 듯한 독특한 분위기를 자아냅니다. 희귀한 수집품부터 정겨운 옛 물건들까지 구경하는 재미가 쏠쏠하여 출사지로도 인기가 높습니다. 골동품 애호가라면 반드시 들러야 할 서울의 보물 창고 같은 시장입니다.",
    food: "전통 주전부리, 빈대떡",
    sights: "청계천로 산책길, 추억의 거리 전시관",
    image: "https://images.unsplash.com/photo-1531685633497-581339fe657e?auto=format&fit=crop&q=80&w=1200",
    mapUrl: "https://www.google.com/maps?q=서울풍물시장&output=embed"
  },
  {
    name: "영동전통시장",
    district: "강남구",
    description: "화려한 강남 한복판인 논현동에 위치하여 낮과 밤의 매력이 확연히 다른 이색적인 시장입니다. 주변 직장인들의 회식 장소로 사랑받는 맛집들이 즐비하며, 전통시장의 정겨움과 도시의 세련됨이 어우러져 있습니다. 신선한 반찬과 과일부터 트렌디한 안주까지 다양한 먹거리를 만나볼 수 있는 곳입니다. 강남의 현대적인 빌딩 숲 사이에서 만나는 소박한 따스함이 매력적입니다.",
    food: "족발, 전 요리, 반찬",
    sights: "강남 야경, 논현동 가구거리",
    image: "https://images.unsplash.com/photo-1544126592-807daa2b567b?auto=format&fit=crop&q=80&w=1200",
    mapUrl: "https://www.google.com/maps?q=영동전통시장&output=embed"
  }
];

class MarketCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["name", "district", "description", "food", "sights", "image", "map-url"];
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

    if (!name) return; // 속성이 아직 설정되지 않았으면 렌더링 건너뜀

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

        .map-container {
          width: 100%;
          height: 200px;
          border-radius: 12px;
          overflow: hidden;
          background: #111;
        }

        iframe {
          width: 100%;
          height: 100%;
          border: 0;
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
        <img src="${image}" alt="${name}" class="thumbnail" loading="lazy">
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
        <div class="map-container">
          <iframe 
            src="${mapUrl}" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
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
      // 속성을 먼저 설정한 후 추가
      card.setAttribute("name", market.name);
      card.setAttribute("district", market.district);
      card.setAttribute("description", market.description);
      card.setAttribute("food", market.food);
      card.setAttribute("sights", market.sights);
      card.setAttribute("image", market.image);
      card.setAttribute("map-url", market.mapUrl);
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

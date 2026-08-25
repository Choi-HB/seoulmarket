const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const introContent = `
    <section class="seo-intro-section" style="padding: 40px 0; border-bottom: 1px solid var(--border-color); margin-bottom: 40px;">
        <div class="container" style="max-width: 900px; margin: 0 auto; text-align: justify; line-height: 1.8; color: var(--text-color-secondary);">
            <h2 id="intro-heading" style="text-align: center; color: var(--text-color); margin-bottom: 25px; font-size: 2rem;">서울 전통시장: 과거와 현재가 공존하는 문화 공간</h2>
            <p id="intro-p1" style="margin-bottom: 20px; font-size: 1.05rem;">
                대한민국의 수도 서울은 최첨단 빌딩 숲과 화려한 네온사인이 가득한 현대적인 도시입니다. 하지만 그 화려함 이면에는 수십 년, 길게는 백 년이 넘는 세월 동안 서민들의 삶과 애환을 함께해 온 <strong>전통시장</strong>들이 굳건히 자리 잡고 있습니다. 서울의 전통시장은 단순한 상거래의 장소를 넘어, 한국의 깊은 역사와 따뜻한 '정(情)', 그리고 역동적인 문화를 온몸으로 느낄 수 있는 살아있는 박물관과도 같습니다.
            </p>
            <p id="intro-p2" style="margin-bottom: 20px; font-size: 1.05rem;">
                각 구마다 특색 있게 자리한 시장들은 저마다의 독특한 매력을 뽐냅니다. 종로구의 <strong>광장시장</strong>은 빈대떡과 마약김밥, 육회 등 한국의 대표적인 길거리 음식을 맛볼 수 있는 미식의 천국이며, 중구의 <strong>남대문시장</strong>은 의류, 그릇, 액세서리 등 없는 것이 없는 국내 최대 규모의 종합 시장입니다. 마포구의 <strong>망원시장</strong>은 젊은 세대(MZ세대)의 발길을 사로잡는 트렌디한 먹거리와 감성적인 분위기로 새롭게 떠오르고 있으며, 동대문구의 <strong>경동시장</strong>은 전국 최대 규모의 한약재와 농수산물이 거래되는 건강의 중심지입니다.
            </p>
            <p id="intro-p3" style="font-size: 1.05rem;">
                '서울 전통시장 가이드'는 이렇게 다채로운 매력을 지닌 서울 곳곳의 전통시장 정보를 한곳에 모아 제공합니다. 현지인들이 사랑하는 숨은 맛집부터 외국인 관광객을 위한 필수 쇼핑 리스트, 그리고 주차장 및 대중교통 이용 팁까지, 전통시장을 200% 즐길 수 있는 유용한 가이드를 확인해 보세요. 우리의 전통시장이 전하는 따뜻한 온기와 활기찬 에너지를 직접 경험해 보시기를 바랍니다.
            </p>
        </div>
    </section>
`;

if (!html.includes('seo-intro-section')) {
    html = html.replace('</header>', '</header>' + introContent);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log("Added intro text to index.html");
}

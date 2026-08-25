const fs = require('fs');

// Fix play.html
let playHtml = fs.readFileSync('play.html', 'utf8');
const playSeoContent = `
            <div class="seo-content" style="margin-top: 60px; text-align: left; opacity: 0.9; font-size: 1rem; line-height: 1.8; background: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px;">
                <h2 id="play-seo-h2">전통시장과 어우러지는 골목 놀이 문화</h2>
                <p id="play-seo-p1" style="margin-bottom: 20px;">
                    가위바위보는 시대를 막론하고 전 세계인이 즐기는 가장 직관적이고 공평한 놀이입니다. 한국의 전통시장 골목 어귀에서도 아이들의 가위바위보 소리는 끊이지 않았습니다. 시장 상인들도 가끔은 흥정을 하다가 웃으며 가위바위보로 덤을 결정하기도 했던, 한국인 특유의 '정'과 해학이 담긴 소통 방식이기도 합니다.
                </p>
                <p id="play-seo-p2" style="margin-bottom: 20px;">
                    과거에는 구슬치기, 딱지치기, 고무줄놀이 등 다양한 골목 놀이들이 시장의 활기찬 분위기와 어우러져 하나의 문화를 형성했습니다. 비록 현대에 들어서며 아이들이 뛰어노는 골목길의 풍경은 많이 사라졌지만, 그 시절의 따뜻한 기억은 여전히 시장 사람들의 마음속에 남아있습니다.
                </p>
                <p id="play-seo-p3">
                    이 AI 가위바위보 게임은 최신 인공지능 기술(Teachable Machine)을 활용하여 과거 우리가 골목길에서 친구들과 나누던 단순하고 즐거운 놀이를 디지털 공간에 재현한 것입니다. 복잡한 일상을 잠시 내려놓고, 시장 골목에서 뛰어놀던 어린 시절의 동심으로 돌아가 AI와의 가벼운 승부를 즐겨보세요!
                </p>
            </div>
`;
if (!playHtml.includes('seo-content')) {
    playHtml = playHtml.replace('</main>', playSeoContent + '    </main>');
    fs.writeFileSync('play.html', playHtml, 'utf8');
}

// Fix memory.html
let memHtml = fs.readFileSync('memory.html', 'utf8');
const memSeoContent = `
            <div class="seo-content glass" style="margin-top: 60px; text-align: left; opacity: 0.9; font-size: 1rem; line-height: 1.8; padding: 30px; border-radius: 20px;">
                <h2 id="mem-seo-h2" style="color: var(--accent-color); margin-bottom: 20px;">흑백 사진으로 만나는 옛 시장의 향수</h2>
                <p id="mem-seo-p1" style="margin-bottom: 20px;">
                    사진은 시간을 멈추고 기억을 보존하는 가장 강력한 도구입니다. 특히 흑백 사진은 화려한 색상에 가려질 수 있는 사람들의 표정, 질감, 그리고 그 시대의 분위기를 더욱 깊이 있게 전달하는 매력을 지니고 있습니다. 과거 필름 카메라 시절, 서울의 전통시장을 담은 흑백 사진 속에는 상인들의 주름진 미소와 손님들과의 활기찬 흥정, 그리고 갓 쪄낸 만두에서 피어오르는 김까지 생생하게 기록되어 있습니다.
                </p>
                <p id="mem-seo-p2" style="margin-bottom: 20px;">
                    시장은 단순히 물건을 사고파는 상업적 공간을 넘어, 서민들의 땀방울과 애환이 녹아있는 삶의 터전입니다. 오래된 시장 골목을 거닐다 보면 마치 수십 년 전 과거로 시간 여행을 떠난 듯한 기분을 느끼게 됩니다. 낡은 간판과 투박하지만 정겨운 풍경들은 화려한 현대 도시에서는 느낄 수 없는 깊은 안정감과 향수를 선사합니다.
                </p>
                <p id="mem-seo-p3">
                    이 'AI 이미지 추억' 변환 도구는 여러분이 전통시장을 방문하며 찍은 현대의 컬러 사진을, 클릭 한 번으로 클래식한 흑백 사진으로 변환해 줍니다. 첨단 웹 기술을 활용한 이 도구를 통해 스마트폰으로 찍은 사진에 아날로그 감성을 더해보세요. 잊혀져 가는 옛 시장의 정취를 여러분만의 고유한 사진 작품으로 간직하고, 그 소중한 추억을 주변 사람들과 나누어 보시길 바랍니다.
                </p>
            </div>
`;
if (!memHtml.includes('seo-content')) {
    memHtml = memHtml.replace('</main>', memSeoContent + '    </main>');
    fs.writeFileSync('memory.html', memHtml, 'utf8');
}
console.log("Added SEO text to play.html and memory.html");

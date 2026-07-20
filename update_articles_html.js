const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Replace article titles and descriptions with IDs
content = content.replace(/<h3 style="margin-bottom: 15px; color: var\(--accent-color\);">광장시장 완전 정복<\/h3>/, '<h3 id="article-gwangjang-title" style="margin-bottom: 15px; color: var(--accent-color);">광장시장 완전 정복</h3>');
content = content.replace(/<p style="font-size: 0.95rem; opacity: 0.8; line-height: 1.6;">100년 전통의 먹거리 천국, 광장시장의 빈대떡부터 육회까지 모든 정보를 담았습니다.<\/p>/, '<p id="article-gwangjang-desc" style="font-size: 0.95rem; opacity: 0.8; line-height: 1.6;">100년 전통의 먹거리 천국, 광장시장의 빈대떡부터 육회까지 모든 정보를 담았습니다.</p>');

content = content.replace(/<h3 style="margin-bottom: 15px; color: var\(--accent-color\);">남대문시장 쇼핑 팁<\/h3>/, '<h3 id="article-namdaemun-title" style="margin-bottom: 15px; color: var(--accent-color);">남대문시장 쇼핑 팁</h3>');
content = content.replace(/<p style="font-size: 0.95rem; opacity: 0.8; line-height: 1.6;">갈치조림 골목과 아동복 상가 등 남대문시장에서 놓치지 말아야 할 쇼핑 포인트를 짚어드립니다.<\/p>/, '<p id="article-namdaemun-desc" style="font-size: 0.95rem; opacity: 0.8; line-height: 1.6;">갈치조림 골목과 아동복 상가 등 남대문시장에서 놓치지 말아야 할 쇼핑 포인트를 짚어드립니다.</p>');

content = content.replace(/<h3 style="margin-bottom: 15px; color: var\(--accent-color\);">망원시장 핫플 가이드<\/h3>/, '<h3 id="article-mangwon-title" style="margin-bottom: 15px; color: var(--accent-color);">망원시장 핫플 가이드</h3>');
content = content.replace(/<p style="font-size: 0.95rem; opacity: 0.8; line-height: 1.6;">MZ세대가 열광하는 망원동의 힙한 감성과 전통시장의 맛있는 만남을 소개합니다.<\/p>/, '<p id="article-mangwon-desc" style="font-size: 0.95rem; opacity: 0.8; line-height: 1.6;">MZ세대가 열광하는 망원동의 힙한 감성과 전통시장의 맛있는 만남을 소개합니다.</p>');

content = content.replace(/<h3 style="margin-bottom: 15px; color: var\(--accent-color\);">노량진 수산시장 정복<\/h3>/, '<h3 id="article-noryangjin-title" style="margin-bottom: 15px; color: var(--accent-color);">노량진 수산시장 정복</h3>');
content = content.replace(/<p style="font-size: 0.95rem; opacity: 0.8; line-height: 1.6;">도심 속 바다 여행! 신선한 횟감 고르는 법과 식당가 이용 꿀팁을 전해드립니다.<\/p>/, '<p id="article-noryangjin-desc" style="font-size: 0.95rem; opacity: 0.8; line-height: 1.6;">도심 속 바다 여행! 신선한 횟감 고르는 법과 식당가 이용 꿀팁을 전해드립니다.</p>');

content = content.replace(/<h3 style="margin-bottom: 15px; color: var\(--accent-color\);">통인시장 엽전 도시락<\/h3>/, '<h3 id="article-tongin-title" style="margin-bottom: 15px; color: var(--accent-color);">통인시장 엽전 도시락</h3>');
content = content.replace(/<p style="font-size: 0.95rem; opacity: 0.8; line-height: 1.6;">엽전 들고 떠나는 서촌의 정겨운 맛 탐방! 나만의 도시락을 만드는 재미를 소개합니다.<\/p>/, '<p id="article-tongin-desc" style="font-size: 0.95rem; opacity: 0.8; line-height: 1.6;">엽전 들고 떠나는 서촌의 정겨운 맛 탐방! 나만의 도시락을 만드는 재미를 소개합니다.</p>');

content = content.replace(/<h3 style="margin-bottom: 15px; color: var\(--accent-color\);">경동시장 건강 여행<\/h3>/, '<h3 id="article-gyeongdong-title" style="margin-bottom: 15px; color: var(--accent-color);">경동시장 건강 여행</h3>');
content = content.replace(/<p style="font-size: 0.95rem; opacity: 0.8; line-height: 1.6;">은은한 한약재 향기와 극장식 카페의 반전 매력! 서울약령시의 모든 것을 담았습니다.<\/p>/, '<p id="article-gyeongdong-desc" style="font-size: 0.95rem; opacity: 0.8; line-height: 1.6;">은은한 한약재 향기와 극장식 카페의 반전 매력! 서울약령시의 모든 것을 담았습니다.</p>');

content = content.replace(/<h3 style="margin-bottom: 15px; color: var\(--accent-color\);">동대문 종합시장 가이드<\/h3>/, '<h3 id="article-dongdaemun-title" style="margin-bottom: 15px; color: var(--accent-color);">동대문 종합시장 가이드</h3>');
content = content.replace(/<p style="font-size: 0.95rem; opacity: 0.8; line-height: 1.6;">패션의 시작점! 원단부터 액세서리 부자재까지 보물찾기 같은 쇼핑 투어를 떠나보세요.<\/p>/, '<p id="article-dongdaemun-desc" style="font-size: 0.95rem; opacity: 0.8; line-height: 1.6;">패션의 시작점! 원단부터 액세서리 부자재까지 보물찾기 같은 쇼핑 투어를 떠나보세요.</p>');

// Replace "더 읽어보기 ->" with class span
content = content.replace(/<span style="display: inline-block; margin-top: 15px; font-weight: 600; font-size: 0.9rem;">더 읽어보기 &rarr;<\/span>/g, '<span class="read-more-text" style="display: inline-block; margin-top: 15px; font-weight: 600; font-size: 0.9rem;">더 읽어보기 &rarr;</span>');

fs.writeFileSync('index.html', content, 'utf8');

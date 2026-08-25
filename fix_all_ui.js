const fs = require('fs');

let mainJs = fs.readFileSync('main.js', 'utf8');

// Step 1: Add new translation keys for Play and Memory UI to each language

const koPlayMem = `
    gameTitle: "AI 가위바위보 놀이",
    gameUserLabel: "나",
    gameAiLabel: "AI",
    gameAiChoice: "AI의 선택",
    gameReady: "준비되셨나요?",
    gameStart: "놀이 시작!",
    gameHowTitle: "놀이 방법:",
    gameHow1: "'놀이 시작!' 버튼을 누르면 3초 카운트다운이 시작됩니다.",
    gameHow2: "카운트다운이 끝나기 전, 카메라를 향해 <strong>가위, 바위, 보</strong> 중 하나를 내주세요.",
    gameHow3: "AI가 당신의 손 모양을 인식하여 승패를 결정합니다.",
    gameHow4: "팁: 밝은 곳에서 손이 잘 보이게 해주세요!",
    memTitle: "AI 이미지 추억",
    memLabelUpload: "사진을 업로드하려면 클릭하세요",
    memBtnUpload: "사진 업로드",
    memBtnToggle: "흑백/컬러 전환",
    memBtnDownload: "이미지 저장",
    memHowTitle: "사용 방법:",
    memHow1: "'사진 업로드' 버튼을 눌러 간직하고 싶은 사진을 선택하세요.",
    memHow2: "'흑백/컬러 전환' 버튼을 누르면 사진의 색상이 바뀝니다.",
    memHow3: "'이미지 저장' 버튼을 누르면 현재 보이는 이미지가 파일로 저장됩니다.",
    memHow4: "팁: 고화질 사진도 빠르게 간직하여 다운로드할 수 있습니다!",
    btnDirections: "길찾기",
    btnInfo: "정보보기",
    btnDetailedGuide: "상세 가이드",
`;

const enPlayMem = `
    gameTitle: "AI Rock-Paper-Scissors",
    gameUserLabel: "Me",
    gameAiLabel: "AI",
    gameAiChoice: "AI's Choice",
    gameReady: "Are you ready?",
    gameStart: "Start Game!",
    gameHowTitle: "How to Play:",
    gameHow1: "Press the 'Start Game!' button to begin the 3-second countdown.",
    gameHow2: "Before the countdown ends, show <strong>Rock, Paper, or Scissors</strong> to the camera.",
    gameHow3: "The AI will recognize your hand shape to determine the winner.",
    gameHow4: "Tip: Make sure your hand is clearly visible in a well-lit area!",
    memTitle: "AI Image Memory",
    memLabelUpload: "Click to upload a photo",
    memBtnUpload: "Upload Photo",
    memBtnToggle: "B&W/Color Toggle",
    memBtnDownload: "Save Image",
    memHowTitle: "How to Use:",
    memHow1: "Click 'Upload Photo' to select a picture you want to keep.",
    memHow2: "Click 'B&W/Color Toggle' to change the image color.",
    memHow3: "Click 'Save Image' to save the current displayed image as a file.",
    memHow4: "Tip: High-quality photos can also be quickly converted and downloaded!",
    btnDirections: "Directions",
    btnInfo: "More Info",
    btnDetailedGuide: "Detailed Guide",
`;

const jaPlayMem = `
    gameTitle: "AI じゃんけん遊び",
    gameUserLabel: "私",
    gameAiLabel: "AI",
    gameAiChoice: "AIの選択",
    gameReady: "準備はいいですか？",
    gameStart: "ゲーム開始！",
    gameHowTitle: "遊び方：",
    gameHow1: "「ゲーム開始！」ボタンを押すと、3秒のカウントダウンが始まります。",
    gameHow2: "カウントダウンが終わる前に、カメラに向かって<strong>グー、チョキ、パー</strong>のいずれかを出してください。",
    gameHow3: "AIがあなたの手の形を認識して勝敗を決定します。",
    gameHow4: "ヒント：明るい場所で手がよく見えるようにしてください！",
    memTitle: "AI 画像の思い出",
    memLabelUpload: "クリックして写真をアップロード",
    memBtnUpload: "写真アップロード",
    memBtnToggle: "白黒/カラー切替",
    memBtnDownload: "画像保存",
    memHowTitle: "使い方：",
    memHow1: "「写真アップロード」ボタンを押して、保存したい写真を選択します。",
    memHow2: "「白黒/カラー切替」ボタンを押すと、写真の色が変わります。",
    memHow3: "「画像保存」ボタンを押すと、現在表示されている画像がファイルとして保存されます。",
    memHow4: "ヒント：高画質の写真も素早く変換してダウンロードできます！",
    btnDirections: "ルート検索",
    btnInfo: "詳細情報",
    btnDetailedGuide: "詳細ガイド",
`;

const zhPlayMem = `
    gameTitle: "AI 剪刀石头布",
    gameUserLabel: "我",
    gameAiLabel: "AI",
    gameAiChoice: "AI的选择",
    gameReady: "准备好了吗？",
    gameStart: "开始游戏！",
    gameHowTitle: "游戏方法：",
    gameHow1: "点击'开始游戏！'按钮即可开始3秒倒计时。",
    gameHow2: "在倒计时结束前，对着摄像头出<strong>剪刀、石头或布</strong>。",
    gameHow3: "AI将识别您的手势以决定胜负。",
    gameHow4: "提示：请在明亮的地方确保手部清晰可见！",
    memTitle: "AI 图片回忆",
    memLabelUpload: "点击上传照片",
    memBtnUpload: "上传照片",
    memBtnToggle: "黑白/彩色切换",
    memBtnDownload: "保存图片",
    memHowTitle: "使用方法：",
    memHow1: "点击“上传照片”按钮选择想要保存的照片。",
    memHow2: "点击“黑白/彩色切换”按钮，照片的颜色将会改变。",
    memHow3: "点击“保存图片”按钮，当前显示的图片将保存为文件。",
    memHow4: "提示：高画质照片也能快速转换并下载！",
    btnDirections: "路线查询",
    btnInfo: "更多信息",
    btnDetailedGuide: "详细指南",
`;

mainJs = mainJs.replace(/    title: "서울 맛거리 & 볼거리 전통시장",/, koPlayMem + '    title: "서울 맛거리 & 볼거리 전통시장",');
mainJs = mainJs.replace(/    title: "Seoul Traditional Markets Guide",/, enPlayMem + '    title: "Seoul Traditional Markets Guide",');
mainJs = mainJs.replace(/    title: "ソウル伝統市場ガイド",/, jaPlayMem + '    title: "ソウル伝統市場ガイド",');
mainJs = mainJs.replace(/    title: "首尔传统市场指南",/, zhPlayMem + '    title: "首尔传统市场指南",');


// Step 2: Update renderMarkets to use translated strings for buttons and district

mainJs = mainJs.replace(
  /<div class="card-district">\${market\.district}<\/div>/g,
  '<div class="card-district">${t.districts ? (t.districts[market.district] || market.district) : market.district}</div>'
);
mainJs = mainJs.replace(
  /<a href="\${market\.mapUrl}" target="_blank" class="btn primary">길찾기<\/a>/g,
  '<a href="${market.mapUrl}" target="_blank" class="btn primary">${t.btnDirections || "길찾기"}</a>'
);
mainJs = mainJs.replace(
  /<a href="\${market\.officialUrl}" target="_blank" class="btn secondary">정보보기<\/a>/g,
  '<a href="${market.officialUrl}" target="_blank" class="btn secondary">${t.btnInfo || "정보보기"}</a>'
);
mainJs = mainJs.replace(
  /상세 가이드<\/a>/g,
  '${t.btnDetailedGuide || "상세 가이드"}</a>'
);

// Step 3: Add DOM element text update logic to setLanguage() function

const domUpdates = `
    const gameTitle = document.getElementById("game-title");
    if (gameTitle) gameTitle.textContent = t.gameTitle;
    const userLabelText = document.getElementById("user-label-text");
    if (userLabelText) userLabelText.textContent = t.gameUserLabel;
    const aiLabelText = document.getElementById("ai-label-text");
    if (aiLabelText) aiLabelText.textContent = t.gameAiLabel;
    const aiChoiceLabel = document.getElementById("ai-choice-label");
    if (aiChoiceLabel) aiChoiceLabel.textContent = t.gameAiChoice;
    const resultText = document.getElementById("result-text");
    if (resultText && (resultText.textContent === "준비되셨나요?" || resultText.textContent === "Are you ready?" || resultText.textContent === "準備はいいですか？" || resultText.textContent === "准备好了吗？")) {
        resultText.textContent = t.gameReady;
    }
    const startBtn = document.getElementById("start-btn");
    if (startBtn && !startBtn.disabled) startBtn.textContent = t.gameStart;
    const gameHowTitle = document.getElementById("game-how-title");
    if (gameHowTitle) gameHowTitle.textContent = t.gameHowTitle;
    const gameHow1 = document.getElementById("game-how-1");
    if (gameHow1) gameHow1.textContent = t.gameHow1;
    const gameHow2 = document.getElementById("game-how-2");
    if (gameHow2) gameHow2.innerHTML = t.gameHow2;
    const gameHow3 = document.getElementById("game-how-3");
    if (gameHow3) gameHow3.textContent = t.gameHow3;
    const gameHow4 = document.getElementById("game-how-4");
    if (gameHow4) gameHow4.textContent = t.gameHow4;

    const transformTitle = document.getElementById("transform-title");
    if (transformTitle) transformTitle.textContent = t.memTitle;
    const labelUpload = document.getElementById("label-upload");
    if (labelUpload) labelUpload.textContent = t.memLabelUpload;
    const btnUploadText = document.getElementById("btn-upload-text");
    if (btnUploadText) btnUploadText.textContent = t.memBtnUpload;
    const btnToggleText = document.getElementById("btn-toggle-text");
    if (btnToggleText) btnToggleText.textContent = t.memBtnToggle;
    const btnDownloadText = document.getElementById("btn-download-text");
    if (btnDownloadText) btnDownloadText.textContent = t.memBtnDownload;
    
    const guideHowTitle = document.getElementById("guide-how-title");
    if (guideHowTitle) guideHowTitle.textContent = t.memHowTitle;
    const guideHow1 = document.getElementById("guide-how-1");
    if (guideHow1) guideHow1.textContent = t.memHow1;
    const guideHow2 = document.getElementById("guide-how-2");
    if (guideHow2) guideHow2.textContent = t.memHow2;
    const guideHow3 = document.getElementById("guide-how-3");
    if (guideHow3) guideHow3.textContent = t.memHow3;
    const guideHow4 = document.getElementById("guide-how-4");
    if (guideHow4) guideHow4.textContent = t.memHow4;
    
    // Also re-render the markets if we're on the main page
    if (document.getElementById("filter-container")) {
        // Trigger a re-render by finding the active filter and clicking it
        // Or directly calling renderMarkets()
        if (typeof renderMarkets === 'function') {
           const activeBtn = document.querySelector('.filter-btn.active');
           const filterVal = activeBtn ? activeBtn.dataset.filter : 'all';
           renderMarkets(filterVal);
        }
    }
`;

mainJs = mainJs.replace(/    const footerTerms = document\.getElementById\("footer-terms"\);/, domUpdates + '\n    const footerTerms = document.getElementById("footer-terms");');

fs.writeFileSync('main.js', mainJs, 'utf8');
console.log("Play UI, Memory UI, and Card buttons translations updated in main.js.");

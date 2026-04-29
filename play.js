// Teachable Machine Model URL
const URL = "https://teachablemachine.withgoogle.com/models/JJOC-3YBW/";

let model, webcam, maxPredictions;
let userScore = 0;
let aiScore = 0;
let isPlaying = false;

// DOM Elements
const startBtn = document.getElementById("start-btn");
const resultText = document.getElementById("result-text");
const userScoreEl = document.getElementById("user-score");
const aiScoreEl = document.getElementById("ai-score");
const countdownEl = document.getElementById("countdown");
const aiEmojiEl = document.getElementById("ai-choice-emoji");
const loadingOverlay = document.getElementById("loading-overlay");

const emojis = {
    "Rock": "✊",
    "Paper": "✋",
    "Scissors": "✌️",
    "Background": "🤖"
};

const choices = ["Rock", "Paper", "Scissors"];

// Translation Helper
function getT() {
    const lang = localStorage.getItem("lang") || "ko";
    return translations[lang];
}

function updateGameUI() {
    const t = getT();
    document.title = `${t.gameTitle} - ${t.title}`;
    document.getElementById("game-title").textContent = t.gameTitle;
    document.getElementById("game-subtitle").textContent = t.gameSubtitle;
    document.getElementById("user-label-text").textContent = t.userLabel;
    document.getElementById("ai-label-text").textContent = t.aiLabel;
    document.getElementById("ai-choice-label").textContent = t.aiChoiceLabel;
    document.getElementById("game-how-title").textContent = t.gameHowTitle;
    document.getElementById("game-how-1").textContent = t.gameHow1;
    document.getElementById("game-how-2").textContent = t.gameHow2;
    document.getElementById("game-how-3").textContent = t.gameHow3;
    document.getElementById("game-how-4").textContent = t.gameHow4;
    loadingOverlay.textContent = t.gameLoading;
    
    if (!isPlaying) {
        startBtn.textContent = startBtn.textContent === "다시 하기" || startBtn.textContent === getT().gameAgain ? t.gameAgain : t.gameStartBtn;
        if (resultText.textContent === "준비되셨나요?" || resultText.textContent === "Are you ready?" || resultText.textContent === "準備はいいですか？" || resultText.textContent === "准备好了吗？") {
            resultText.textContent = t.gameReady;
        }
    }
}

// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    try {
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        const flip = true;
        webcam = new tmImage.Webcam(400, 400, flip);
        await webcam.setup();
        await webcam.play();
        window.requestAnimationFrame(loop);

        document.getElementById("webcam-container").appendChild(webcam.canvas);
        
        loadingOverlay.style.display = "none";
        startBtn.disabled = false;
        updateGameUI();
    } catch (e) {
        console.error(e);
        const t = getT();
        alert(t.lang === 'ko' ? "카메라를 불러올 수 없습니다. 권한을 허용해주세요." : "Unable to access camera. Please allow permission.");
        loadingOverlay.textContent = "Error: Camera access required.";
    }
}

async function loop() {
    webcam.update();
    window.requestAnimationFrame(loop);
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);
    let maxProb = 0;
    let bestMatch = "Background";
    
    for (let i = 0; i < maxPredictions; i++) {
        if (prediction[i].probability > maxProb) {
            maxProb = prediction[i].probability;
            bestMatch = prediction[i].className;
        }
    }
    return bestMatch;
}

function getAiChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(user, ai) {
    if (user === ai) return "draw";
    if (
        (user === "Rock" && ai === "Scissors") ||
        (user === "Paper" && ai === "Rock") ||
        (user === "Scissors" && ai === "Paper")
    ) {
        return "user";
    }
    return "ai";
}

async function startGame() {
    if (isPlaying) return;
    const t = getT();
    isPlaying = true;
    startBtn.disabled = true;
    resultText.textContent = t.gameCountdownReady;
    aiEmojiEl.textContent = "🎲";

    // Countdown
    for (let i = 3; i > 0; i--) {
        countdownEl.textContent = i;
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    countdownEl.textContent = "Go!";
    
    await new Promise(resolve => setTimeout(resolve, 500));
    countdownEl.textContent = "";

    const userChoice = await predict();
    const aiChoice = getAiChoice();

    aiEmojiEl.textContent = emojis[aiChoice];
    
    if (userChoice === "Background" || !choices.includes(userChoice)) {
        resultText.textContent = t.gameNoHand;
    } else {
        const winner = determineWinner(userChoice, aiChoice);
        const userEmoji = emojis[userChoice];
        const aiEmoji = emojis[aiChoice];

        if (winner === "user") {
            userScore++;
            resultText.textContent = `${t.gameWin} (${userEmoji} vs ${aiEmoji})`;
        } else if (winner === "ai") {
            aiScore++;
            resultText.textContent = `${t.gameLoss} (${userEmoji} vs ${aiEmoji})`;
        } else {
            resultText.textContent = `${t.gameDraw} (${userEmoji} vs ${aiEmoji})`;
        }

        userScoreEl.textContent = userScore;
        aiScoreEl.textContent = aiScore;
    }

    isPlaying = false;
    startBtn.disabled = false;
    startBtn.textContent = t.gameAgain;
}

// Event Listeners
startBtn.addEventListener("click", startGame);

// Override setLanguage from main.js to also update Game UI
const originalSetLanguage = window.setLanguage;
// Note: In main.js, setLanguage is inside init(). 
// I will add a MutationObserver or just poll/event based update if needed,
// but simpler is to add event listeners to lang buttons here as well.

// Initialize on load
window.addEventListener('load', () => {
    // Add listeners to lang buttons for game UI update
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            setTimeout(updateGameUI, 10); // Small delay to let main.js set localStorage
        });
    });
    
    init();
});

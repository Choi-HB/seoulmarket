// Teachable Machine Model URL
const URL = "https://teachablemachine.withgoogle.com/models/JJOC-3YBW/";

let model, webcam, labelContainer, maxPredictions;
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

const choiceMap = {
    "Rock": 0,
    "Paper": 1,
    "Scissors": 2
};

const choices = ["Rock", "Paper", "Scissors"];

// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    try {
        // load the model and metadata
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const flip = true; // whether to flip the webcam
        webcam = new tmImage.Webcam(400, 400, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append elements to the DOM
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        
        loadingOverlay.style.display = "none";
        startBtn.disabled = false;
    } catch (e) {
        console.error(e);
        alert("카메라를 불러올 수 없습니다. 권한을 허용해주세요.");
        loadingOverlay.textContent = "에러: 카메라 권한이 필요합니다.";
    }
}

async function loop() {
    webcam.update(); // update the webcam frame
    window.requestAnimationFrame(loop);
}

async function predict() {
    // predict can take in an image, canvas or html video element
    const prediction = await model.predict(webcam.canvas);
    
    // Find the class with highest probability
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
    isPlaying = true;
    startBtn.disabled = true;
    resultText.textContent = "준비...";
    aiEmojiEl.textContent = "🎲";

    // Countdown
    for (let i = 3; i > 0; i--) {
        countdownEl.textContent = i;
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    countdownEl.textContent = "Go!";
    
    // Slight delay for "Go!"
    await new Promise(resolve => setTimeout(resolve, 500));
    countdownEl.textContent = "";

    // Predict user choice
    const userChoice = await predict();
    const aiChoice = getAiChoice();

    aiEmojiEl.textContent = emojis[aiChoice];
    
    if (userChoice === "Background" || !choices.includes(userChoice)) {
        resultText.textContent = "손이 보이지 않아요! 다시 시도해주세요.";
    } else {
        const winner = determineWinner(userChoice, aiChoice);
        
        const userEmoji = emojis[userChoice];
        const aiEmoji = emojis[aiChoice];

        if (winner === "user") {
            userScore++;
            resultText.textContent = `이겼습니다! (${userEmoji} vs ${aiEmoji})`;
        } else if (winner === "ai") {
            aiScore++;
            resultText.textContent = `졌습니다... (${userEmoji} vs ${aiEmoji})`;
        } else {
            resultText.textContent = `비겼습니다! (${userEmoji} vs ${aiEmoji})`;
        }

        userScoreEl.textContent = userScore;
        aiScoreEl.textContent = aiScore;
    }

    isPlaying = false;
    startBtn.disabled = false;
    startBtn.textContent = "다시 하기";
}

// Event Listeners
startBtn.addEventListener("click", startGame);

// Initialize on load
window.onload = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-mode');
    }
    init();
};

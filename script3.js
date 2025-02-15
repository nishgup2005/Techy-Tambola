// Updated JavaScript for TECHY TAMBOLA - WIE WEEK BY IEEE BVCOE
const questions = [
    "Which company created the first microprocessor?",
    "Which planet has the strongest winds in the Solar System?",
    "Who is known as the father of the computer?",
    "What is the algorithm for finding the shortest path?",
    "What do you call a bee from America?",
    "Which company owns the Android operating system?",
    "What is a model that describes how applications communicate over a network?",
    "What was the first search engine on the internet?",
    "What is the extension for saving a Power BI file?",
    "What is the term for a temporary storage area in a computer’s memory?",
    "I’m a recipe for machines to decide, step by step, I’m your trusted guide. What am I?",
    "Which AI assistant is developed by Amazon?",
    "What is the name of the AI model used by ChatGPT?",
    "Which test is used to determine if a machine can think like a human?",
    "Which term refers to AI learning from past data without being explicitly programmed?",
    "Which AI robot was granted citizenship by Saudi Arabia?",
    "What enables a computer program's ability to understand human language?",
    "ChatGPT ka Sasta Version",
    "What do you call a system modeled after the human brain to recognize patterns?",
    "What is the process of joining two metals using heat?",
    "Which language implements Write Once Run Everywhere?",
    "Which term describes software designed to damage or gain unauthorized access to computers?",
    "What does the 'S' in HTTPS stand for?",
    "What is the ability of a material to return to its original shape after deformation?",
    "What is the term for a hacker who uses their skills for ethical hacking?",
    "What is the process of converting plain text into unreadable text for security?",
    "Which cybersecurity attack involves tricking users into revealing sensitive information?",
    "What does the F in 2FA stand for in cybersecurity?",
    "Which country is known for developing the famous ransomware 'WannaCry'?",
    "Which programming language is commonly used for ethical hacking?",
    "Which space agency launched the Apollo missions?",
    "What is IEEE's Women Affinity Group?",
    "Which Indian organization is responsible for space research?",
    "Which country was the first to land a rover on the Moon?",
    "I guard your secrets behind a lock, but if you forget me, you’ll have to knock. What am I?",
    "Frontend framework by Meta.",
    "Which planet is known as the 'Red Planet'?",
    "Which Indian mission successfully landed near the Moon’s South Pole?",
    "I have keys but open no locks. Press me and letters pop up on clocks. What am I?",
    "I come as an email or a link, tricking you into giving me secrets. What am I?",
    "I can crash your system and spread like wildfire, but I am not a storm. What am I?",
    "I protect your computer, but I am not a policeman. What am I?",
    "I make you prove you are human before I let you in. What am I?",
    "I connect the world without a single wire, yet I am not magic. What am I?",
    "I fly in the sky but have no wings. I can take pictures but am not a camera. What am I?",
    "The paradigm that models real-world entities using classes and objects.",
    "I give you power when I am full, but you search for me when I am low. What am I?",
    "What do you call a tech support person who always says, 'Turn it off and on again'?",
    "Which company was originally called 'BackRub'?",
    "Which phone brand was the first to introduce a touchscreen phone?",
    "Which brand’s logo was inspired by Isaac Newton and gravity?",
    "I lock your files and demand a price, pay me once, I might strike twice. What am I?",
    "Which brand’s first product was instant noodles before electronics?",
    "Which famous car company also makes jet engines?",
    "I’m tiny and square, but without me, nothing is there. What am I?",
    "What is the name of the technology used for wireless device storage?",
    "What famous theorem is represented as a² + b² = c²?",
    "Which Indian mathematician gave the world the concept of zero?",
    "What do we call a polygon with 8 sides?",
    "What is the formula for the area of a circle?",
    "Which shape has no edges and no vertices?",
    "What is the term for a number that reads the same forward and backward?",
    "What is the most abundant gas in Earth’s atmosphere?",
    "Which element has the chemical symbol ‘K’?",
    "What is the lightest element in the periodic table?",
    "Which metal is a liquid at room temperature?",
    "What is the powerhouse of the cell?",
    "What is the main metal used in aircraft manufacturing?",
    "Which unit is used to measure electric current?",
    "Most common renewable energy source?",
    "Which Python keyword is used to exit a loop?",
    "Which Python library is used for numerical computing?",
    "I am the smallest piece of something grand, I build up elements hand in hand. What am I?",
    "What is the symbol for pointers in C++?",
    "Which was the first satellite launched by ISRO?",
    "Which ISRO mission successfully landed on the Moon in 2019?",
    "Backend Framework for MERN stack",
    "Which planet is referred to as Earth's 'twin' because of its similar size and composition?",
    "Which brand created the first electric car, the Roadster?",
    "Which company makes the popular gaming console PlayStation?",
    "Which company is known for its ThinkPad laptop series?",
    "What does UI stand for?",
    "Which color model is commonly used in digital design?",
    "Which styling language is used to control the layout and appearance of a website?",
    "Which term refers to designing a website across different devices?",
    "Which open-source operating system is based on the Linux kernel?",
    "Which famous scientist developed the theory of relativity?",
    "Who was the Indian woman astronaut?",
    "Which country is known as the Land of the Kangaroo?",
    "Who is the founder of Microsoft?"
]

let shuffledQuestions = [];

function shuffleQuestions() {
    shuffledQuestions = [...questions];
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
}

function getNextQuestion() {
    const questionDisplay = document.getElementById("questionDisplay");
    const button = document.getElementById("nextQuestionButton");
    
    if (shuffledQuestions.length === 0) {
        questionDisplay.innerText = "🎉 No more questions! You're a TECHY TAMBOLA champ! 🎉";
        button.innerText = "Restart Quiz";
        button.onclick = restartQuiz;
        return;
    }
    
    questionDisplay.style.opacity = "0";
    setTimeout(() => {
        questionDisplay.innerText = shuffledQuestions.shift();
        questionDisplay.style.opacity = "1";
        triggerAnimation();
    }, 500);
    
    questionDisplay.style.animation = "fadeIn 0.5s ease";
    setTimeout(() => questionDisplay.style.animation = "", 500);
}

function restartQuiz() {
    shuffleQuestions();
    document.getElementById("nextQuestionButton").innerText = "Next Question";
    document.getElementById("nextQuestionButton").onclick = getNextQuestion;
    getNextQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
    shuffleQuestions();
    document.getElementById("nextQuestionButton").addEventListener("click", getNextQuestion);
});

// Apply a fun, dynamic background with animated tech shapes
const backgroundContainer = document.createElement("div");
backgroundContainer.style.position = "fixed";
backgroundContainer.style.top = "0";
backgroundContainer.style.left = "0";
backgroundContainer.style.width = "100vw";
backgroundContainer.style.height = "100vh";
backgroundContainer.style.zIndex = "-1";
backgroundContainer.style.background = "#FF4F79";
backgroundContainer.style.overflow = "hidden";
document.body.prepend(backgroundContainer);

// Add animated techy shapes
for (let i = 0; i < 15; i++) {
    let shape = document.createElement("div");
    shape.style.position = "absolute";
    shape.style.width = "50px";
    shape.style.height = "50px";
    shape.style.background = ["#FFD700", "#FF8C42", "#4A90E2", "#79D70F", "#A459D1"][Math.floor(Math.random() * 5)];
    shape.style.opacity = "0.6";
    shape.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
    shape.style.top = `${Math.random() * 100}vh`;
    shape.style.left = `${Math.random() * 100}vw`;
    shape.style.animation = `floatShape ${Math.random() * 10 + 5}s infinite alternate ease-in-out`;
    backgroundContainer.appendChild(shape);
}

const style = document.createElement("style");
// style.innerHTML = `
//     @keyframes fadeIn {
//         0% { transform: scale(0.9); opacity: 0; }
//         100% { transform: scale(1); opacity: 1; }
//     }
//     @keyframes floatShape {
//         from { transform: translateY(-20px) rotate(0deg); }
//         to { transform: translateY(20px) rotate(360deg); }
//     }
//     .question-box {
//         font-size: 32px;
//         font-weight: bold;
//         color: #fff;
//         padding: 30px;
//         border-radius: 20px;
//         background: linear-gradient(135deg, #FF8C42, #FFD700);
//         transition: opacity 0.5s ease, transform 0.3s ease;
//         box-shadow: 0px 10px 20px rgba(0,0,0,0.4);
//         text-align: center;
//     }
//     .question-box.animate {
//         animation: pulse 0.8s ease-in-out;
//     }
//     @keyframes pulse {
//         0% { transform: scale(0.95); }
//         50% { transform: scale(1.05); }
//         100% { transform: scale(1); }
//     }
// `;
document.head.appendChild(style);

// Function to trigger a smooth animation
function triggerAnimation() {
    const questionDisplay = document.getElementById("questionDisplay");
    questionDisplay.classList.add("animate");
    setTimeout(() => questionDisplay.classList.remove("animate"), 800);
}

// Apply styles to the question display for a vibrant look
document.getElementById("questionDisplay").classList.add("question-box");


let timer;
let timeLeft = 45; // Timer duration in seconds
let isRunning = true;

function updateTimerDisplay() {
    document.getElementById("timerDisplay").innerText = `Next question in: ${timeLeft}s`;
}

function startTimer() {
    updateTimerDisplay();
    if (!timer) { // Only start a new interval if one isn't already running
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } 
            if (timeLeft === 0) {
                getNextQuestion();
                resetTimer();
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timer);
    timer = null; // Reset the timer variable so it can start again
    timeLeft = 45;
    startTimer();
}

function toggleTimer() {
    const button = document.getElementById("toggleTimerButton");
    if (isRunning) {
        clearInterval(timer);
        timer = null; // Ensure the interval is properly cleared
        button.innerText = "Resume Timer";
    } else {
        startTimer();
        button.innerText = "Stop Timer";
    }
    isRunning = !isRunning;
}

// Initialize when the page loads
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("toggleTimerButton").addEventListener("click", toggleTimer);
    startTimer(); // Start the timer automatically
});

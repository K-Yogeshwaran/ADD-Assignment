const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Shakespeare", "Dickens", "Austen", "Hemingway"],
        correctAnswer: "Shakespeare"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        correctAnswer: "Vatican City"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer = 30;
let quizInterval;

// Load the first question
function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById("question").textContent = question.question;
        const optionsContainer = document.getElementById("options");
        optionsContainer.innerHTML = ""; // Clear previous options

        question.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => checkAnswer(option);
            optionsContainer.appendChild(button);
        });
        document.getElementById("next-button").style.display = "none"; // Hide next button until answer is chosen
    } else {
        showResult();
    }
}


function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    document.getElementById("next-button").style.display = "inline-block"; // Show next button
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}


function showResult() {
    clearInterval(quizInterval); // Stop the timer
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = score;
}


function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timer = 30;
    document.getElementById("result").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    loadQuestion();
    startTimer();
}


function startTimer() {
    quizInterval = setInterval(() => {
        timer--;
        document.getElementById("time").textContent = timer;
        if (timer <= 0) {
            clearInterval(quizInterval);
            showResult();
        }
    }, 1000);
}


startTimer();
loadQuestion();
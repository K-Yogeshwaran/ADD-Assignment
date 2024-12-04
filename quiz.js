const questions = [
    {
        question: "Who is called as Mr.IPL?",
        options: ["Jos Butler", "Ajinkya Rahane", "Andre Russel", "Suresh Raina"],
        correctAnswer: "Suresh Raina"
    },
    {
        question: "Who won the 2019 ODI WorldCup?",
        options: ["India", "England", "Australia", "New Zealand"],
        correctAnswer: "England"
    },
    {
        question: "Who holds the record for the highest individual score in ODI cricket?",
        options: ["Virat Kohli", "AB Devilliars", "Rohit Sharma", "Chris Gayle"],
        correctAnswer: "Rohit Sharma"
    },
    {
        question: "Which bowler(spin) has taken the most wickets in Test cricket history?",
        options: ["Shane Warne", "Ravichandran Ashwin", "Imran Tahir", "Muttaiah Muralitharan"],
        correctAnswer: "Muttaiah Muralitharan"
    },
    {
        question: "Who was the first cricketer to score a double century in ODI cricket?",
        options: ["Alaister Cook", "Sachin Ramesh Tendulkar", "Virat Kohli", "AB Devilliers"],
        correctAnswer: "Sachin Ramesh Tendulkar"
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
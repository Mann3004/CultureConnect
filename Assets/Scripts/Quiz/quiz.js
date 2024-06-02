const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const questionContainerElement = document.getElementById('question-container');
const resultContainerElement = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('score');

let shuffledQuestions, currentQuestionIndex, score;

const questions = [
    {
        question: "Who commissioned the construction of Adalaj Vav?",
        answers: [
            { text: "Mahmud Begada", correct: false },
            { text: "Rani Roopba", correct: true },
            { text: "Bhimdev I", correct: false },
            { text: "Ahmed Shah", correct: false }
        ]
    },

    {
        question: "In which city is Bai Harir Stepwell located?",
        answers: [
            { text: "Jaipur", correct: false },
            { text: "Ahmedabad", correct: true },
            { text: "Udaipur", correct: false },
            { text: "Delhi", correct: false }
        ]
    },

    {
        question: "Which ruler built Bhadra Fort in Ahmedabad?",
        answers: [
            { text: "Akbar", correct: false },
            { text: "Ahmed Shah I", correct: true },
            { text: "Jahangir", correct: false },
            { text: "Sher Shah Suri", correct: false }
        ]
    },

    {
        question: "Who commissioned the construction of Hutheesing Jain Temple?",
        answers: [
            { text: "Seth Hathisinh Kesarisinh", correct: true },
            { text: "Rani Sipri", correct: false },
            { text: "Rao Jodha", correct: false },
            { text: "Mirza Ismail", correct: false }
        ]
    },

    {
        question: "What is Rani no Hajiro also known as?",
        answers: [
            { text: "Queen's Tomb", correct: false },
            { text: "Market of Queens", correct: true },
            { text: "Queen's Mosque", correct: false },
            { text: "Tomb of Queens", correct: false }
        ]
    },

    {
        question: "Who founded Sabarmati Ashram?",
        answers: [
            { text: "Mahatma Gandhi", correct: true },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Sardar Vallabhbhai Patel", correct: false },
            { text: "Rajendra Prasad", correct: false }
        ]
    },

    {
        question: "Which ruler's tomb is located at Sarkhej Roza?",
        answers: [
            { text: "Akbar", correct: false },
            { text: "Aurangzeb", correct: false },
            { text: "Ahmed Shah I", correct: false },
            { text: "Mahmud Begada", correct: true }
        ]
    },

    {
        question: "What is the iconic feature of Sidi Saiyyed Mosque?",
        answers: [
            { text: "Minarets", correct: false },
            { text: "Jharokhas", correct: false },
            { text: "Stone Lattice Work", correct: true },
            { text: "Domes", correct: false }
        ]
    },

    {
        question: "What is the architectural style of Adalaj Vav?",
        answers: [
            { text: "Mughal", correct: false },
            { text: "Rajput", correct: false },
            { text: "Solanki", correct: true },
            { text: "Maratha", correct: false }
        ]
    },

    {
        question: "What is the main deity worshipped at Hutheesing Jain Temple?",
        answers: [
            { text: "Lord Krishna", correct: false },
            { text: "Lord Shiva", correct: false },
            { text: "Lord Rishabhdev", correct: true },
            { text: "Lord Ganesha", correct: false }
        ]
    },
    // Add more questions as needed
];

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', startQuiz);

function startQuiz() {
    startButton.classList.add('hide');
    resultContainerElement.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        setNextQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainerElement.classList.add('hide');
    resultContainerElement.classList.remove('hide');
    scoreElement.innerText = `${score} out of ${shuffledQuestions.length}`;
}

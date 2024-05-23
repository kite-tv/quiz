const questions = [
    { question: "Sample question 1?", options: ["Option 1", "Option 2", "Option 3", "Option 4"], answer: "Option 2" },
    { question: "Sample question 2?", options: ["Option 1", "Option 2", "Option 3", "Option 4"], answer: "Option 3" },
    // More questions will be added here...
];

let currentQuestionIndex = 0;
let selectedAnswers = Array(questions.length).fill(null);

function displayQuestion(index) {
    const quizContent = document.getElementById('question-content');
    quizContent.innerHTML = ''; // Clear current content

    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';

    const questionTitle = document.createElement('h3');
    questionTitle.innerText = `${index + 1}. ${questions[index].question}`;
    questionDiv.appendChild(questionTitle);

    const optionsList = document.createElement('ul');
    optionsList.className = 'options';

    questions[index].options.forEach(option => {
        const optionItem = document.createElement('li');

        const optionButton = document.createElement('button');
        optionButton.className = 'option-btn';
        optionButton.innerText = option;
        optionButton.onclick = () => selectOption(index, option, optionButton);

        optionItem.appendChild(optionButton);
        optionsList.appendChild(optionItem);
    });

    questionDiv.appendChild(optionsList);
    quizContent.appendChild(questionDiv);

    // Hide the "Previous" button
    document.getElementById('prev-btn').classList.add('hidden');
    // Update navigation buttons visibility
    document.getElementById('next-btn').classList.toggle('hidden', index === questions.length - 1);
    document.getElementById('submit-btn').classList.toggle('hidden', index !== questions.length - 1);
}

function selectOption(questionIndex, selectedOption, button) {
    selectedAnswers[questionIndex] = selectedOption;

    // Highlight the correct and wrong buttons immediately
    const buttons = button.parentElement.parentElement.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.disabled = true; // Disable all buttons once an option is selected
        if (btn.innerText === questions[questionIndex].answer) {
            btn.classList.add('correct');
        } else if (btn.innerText === selectedOption) {
            btn.classList.add('incorrect');
        }
    });
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    }
}

function submitQuiz() {
    let score = 0;

    questions.forEach((q, index) => {
        if (selectedAnswers[index] === q.answer) {
            score++;
        }
    });

    displayScore(score);
}

function displayScore(score) {
    document.getElementById('quiz-content').classList.add('hidden');
    document.getElementById('score-container').style.display = 'block';

    const scoreText = `Your score is ${score} out of ${questions.length}.`;
    document.getElementById('user-score').innerText = scoreText;

    const detailedResults = document.getElementById('detailed-results');
    detailedResults.innerHTML = ''; // Clear previous content

    questions.forEach((q, index) => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result';

        const questionTitle = document.createElement('h4');
        questionTitle.innerText = `${index + 1}. ${q.question}`;
        resultDiv.appendChild(questionTitle);

        const userAnswer = document.createElement('p');
        userAnswer.innerText = `Your answer: ${selectedAnswers[index] || 'No answer'}`;
        if (selectedAnswers[index] === q.answer) {
            userAnswer.classList.add('correct');
        } else {
            userAnswer.classList.add('incorrect');
        }
        resultDiv.appendChild(userAnswer);

        const correctAnswer = document.createElement('p');
        correctAnswer.innerText = `Correct answer: ${q.answer}`;
        correctAnswer.classList.add('correct');
        resultDiv.appendChild(correctAnswer);

        detailedResults.appendChild(resultDiv);
    });
}

// Display the first question initially
displayQuestion(currentQuestionIndex);

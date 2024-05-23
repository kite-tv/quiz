const questions = [
            { question: "What are the celestial bodies that do not twinkle called?", options: ["Stars", "Planets", "Asteroids", "Meteoroids"], answer: "Planets" },
            { question: "Which star is known to always remain in the same position in the sky?", options: ["Pole Star", "Sirius", "Alpha Centauri", "Betelgeuse"], answer: "Pole Star" },
            { question: "What is the term used for the complete moon's appearance?", options: ["Amavasya", "Poornima", "Eclipse", "New Moon"], answer: "Poornima" },
            { question: "How far is the sun from the Earth approximately?", options: ["150 million km", "200 million km", "250 million km", "100 million km"], answer: "150 million km" },
            { question: "Which planet is known as Earth's twin?", options: ["Mars", "Venus", "Jupiter", "Saturn"], answer: "Venus" },
            { question: "What is the closest planet to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
            { question: "Which planet is known for its rings?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn" },
            { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
            { question: "What is the name of the galaxy we live in?", options: ["Andromeda", "Milky Way", "Triangulum", "Whirlpool"], answer: "Milky Way" },
            { question: "What is the hottest planet in our solar system?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Venus" },
            { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
            { question: "What is the smallest planet in our solar system?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
            { question: "Which planet has the most moons?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
            { question: "What planet is famous for its big red spot?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
            { question: "What is the name of Earth's only natural satellite?", options: ["Moon", "Phobos", "Deimos", "Europa"], answer: "Moon" },
            { question: "Which planet is known as the Morning Star or the Evening Star?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Venus" },
            { question: "What is the second smallest planet in our solar system?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mars" },
            { question: "Which planet is known for having a Great Dark Spot?", options: ["Earth", "Mars", "Jupiter", "Neptune"], answer: "Neptune" },
            { question: "Which planet is tilted on its side?", options: ["Earth", "Mars", "Uranus", "Neptune"], answer: "Uranus" },
            { question: "Which planet is known as the Earth's twin?", options: ["Mars", "Venus", "Jupiter", "Saturn"], answer: "Venus" },
            { question: "Which planet is known for its extreme winds?", options: ["Earth", "Mars", "Jupiter", "Neptune"], answer: "Neptune" },
            { question: "Which planet has a surface temperature hot enough to melt lead?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Venus" },
            { question: "Which planet is known for its blue color due to methane in its atmosphere?", options: ["Earth", "Mars", "Jupiter", "Neptune"], answer: "Neptune" },
            { question: "Which planet has the longest day of any planet in the solar system?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Venus" },
            { question: "What is the fifth planet from the Sun?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
            { question: "What is the main component of the Sun?", options: ["Oxygen", "Carbon", "Hydrogen", "Helium"], answer: "Hydrogen" },
            { question: "What is the name of the fourth planet from the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mars" },
            { question: "Which planet is known as the Earth's twin?", options: ["Mars", "Venus", "Jupiter", "Saturn"], answer: "Venus" },
            { question: "Which planet has the highest mountain in the solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
            { question: "What is the largest moon of Saturn?", options: ["Titan", "Europa", "Ganymede", "Callisto"], answer: "Titan" },
            { question: "Which planet has a day longer than its year?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Venus" },
            { question: "What planet has the largest volcano in the solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
            { question: "What is the smallest and innermost planet in the solar system?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
            { question: "What is the second planet from the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Venus" },
            { question: "Which planet has the largest ring system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Saturn" },
            { question: "What is the name of the planet famous for its rings?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Saturn" },
            { question: "What planet has the Great Red Spot?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
            { question: "Which planet is known for having ice giants?", options: ["Earth", "Mars", "Jupiter", "Uranus"], answer: "Uranus" },
            { question: "Which planet has the most extensive rings in the solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Saturn" },
            { question: "Which planet is known for its tilted rotation?", options: ["Earth", "Mars", "Jupiter", "Uranus"], answer: "Uranus" },
            { question: "Which planet has the largest ocean in the solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Earth" },
            { question: "Which planet is known as the blue planet?", options: ["Earth", "Mars", "Jupiter", "Neptune"], answer: "Earth" },
            { question: "What planet has a storm known as the Great Dark Spot?", options: ["Earth", "Mars", "Jupiter", "Neptune"], answer: "Neptune" },
            { question: "Which planet has the coldest atmosphere?", options: ["Earth", "Mars", "Jupiter", "Neptune"], answer: "Neptune" },
            { question: "Which planet has the shortest day?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
            { question: "What planet is known for having a massive storm system called the Great Red Spot?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
            { question: "Which planet is known for its many moons?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
            { question: "Which planet has the most complex ring system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Saturn" }
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

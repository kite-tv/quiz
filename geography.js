const questions = [
            { question: "What is the true shape of the Earth?", options: ["Perfect sphere", "Flattened at the poles", "Cuboid", "Cylindrical"], answer: "Flattened at the poles" },
            { question: "What is a globe?", options: ["A flat map of the Earth", "A true model (miniature form) of the Earth", "A drawing of a country", "A satellite image of the Earth"], answer: "A true model (miniature form) of the Earth" },
            { question: "What is the latitudinal value of the Tropic of Cancer?", options: ["23½° N", "23½° S", "66½° N", "0°"], answer: "23½° N" },
            { question: "What are the three heat zones of the Earth?", options: ["Polar, Temperate, Equatorial", "Torrid, Temperate, Frigid", "Tropical, Subtropical, Arctic", "Equatorial, Subpolar, Polar"], answer: "Torrid, Temperate, Frigid" },
            { question: "What are parallels of latitude?", options: ["Semi-circles running from pole to pole", "Circular lines parallel to the equator", "Lines indicating time zones", "Imaginary lines passing through Greenwich"], answer: "Circular lines parallel to the equator" },
            { question: "Why does the torrid zone receive the maximum amount of heat?", options: ["It is closest to the poles", "The sun's rays fall directly over it", "It has the largest land area", "It is covered with deserts"], answer: "The sun's rays fall directly over it" },
            { question: "Why is it 5:30 p.m. in India when it is 12:00 noon in London?", options: ["India is to the west of Greenwich", "India is to the east of Greenwich", "Both are on the same longitude", "India's time is set by its own standard"], answer: "India is to the east of Greenwich" },
            { question: "Which is the Standard Meridian of India?", options: ["82½° E", "90° E", "75° E", "66½° E"], answer: "82½° E" },
            { question: "What are meridians of longitude?", options: ["Circular lines parallel to the equator", "Semi-circles running from pole to pole", "Lines indicating time zones", "Imaginary lines passing through the poles"], answer: "Semi-circles running from pole to pole" },
            { question: "What is the value of the Prime Meridian?", options: ["0°", "90°", "180°", "360°"], answer: "0°" },
            { question: "How many time zones are there in the world?", options: ["12", "24", "36", "48"], answer: "24" },
            { question: "Which longitude is selected as the Standard Meridian of India?", options: ["82½° E", "90° E", "75° E", "66½° E"], answer: "82½° E" },
            { question: "What is the name of the 0° longitude?", options: ["Prime Meridian", "Standard Meridian", "International Date Line", "Equator"], answer: "Prime Meridian" },
            { question: "How are the latitudinal and longitudinal values written?", options: ["Degrees", "Miles", "Kilometers", "Meters"], answer: "Degrees" },
            { question: "Which is the longest latitude?", options: ["Equator", "Tropic of Cancer", "Tropic of Capricorn", "Arctic Circle"], answer: "Equator" },
            { question: "What is the significance of the Prime Meridian?", options: ["Divides Earth into Eastern and Western Hemispheres", "Divides Earth into Northern and Southern Hemispheres", "Measures height of mountains", "Measures depth of oceans"], answer: "Divides Earth into Eastern and Western Hemispheres" },
            { question: "What is the latitudinal value of the Arctic Circle?", options: ["66½° N", "66½° S", "23½° N", "23½° S"], answer: "66½° N" },
            { question: "What is the latitudinal value of the Antarctic Circle?", options: ["66½° S", "66½° N", "23½° S", "23½° N"], answer: "66½° S" },
            { question: "What is the local time of the places on the Prime Meridian known as?", options: ["Greenwich Mean Time", "Local Standard Time", "Indian Standard Time", "Eastern Standard Time"], answer: "Greenwich Mean Time" },
            { question: "What is the latitude of the North Pole?", options: ["90° N", "90° S", "66½° N", "66½° S"], answer: "90° N" },
            { question: "What is the latitude of the South Pole?", options: ["90° S", "90° N", "66½° S", "66½° N"], answer: "90° S" },
            { question: "What is the latitudinal value of the Tropic of Capricorn?", options: ["23½° S", "23½° N", "66½° S", "66½° N"], answer: "23½° S" },
            { question: "What is the distance between the longitudes measured in?", options: ["Degrees", "Miles", "Kilometers", "Meters"], answer: "Degrees" },
            { question: "Which two meridians are on the same line of longitude?", options: ["0° and 180°", "90° and 180°", "45° and 90°", "30° and 60°"], answer: "0° and 180°" },
            { question: "What is the time difference for each degree of longitude?", options: ["4 minutes", "10 minutes", "15 minutes", "30 minutes"], answer: "4 minutes" },
            { question: "Which countries are on the same line of longitude?", options: ["India and Sri Lanka", "USA and Canada", "Russia and China", "Brazil and Argentina"], answer: "India and Sri Lanka" },
            { question: "Which line of latitude is known as the Equator?", options: ["0°", "23½° N", "23½° S", "66½° N"], answer: "0°" },
            { question: "What is the local time of the places on the International Date Line known as?", options: ["Greenwich Mean Time", "Local Standard Time", "Indian Standard Time", "Eastern Standard Time"], answer: "Local Standard Time" },
            { question: "What is the significance of the Equator?", options: ["Divides Earth into Northern and Southern Hemispheres", "Divides Earth into Eastern and Western Hemispheres", "Measures height of mountains", "Measures depth of oceans"], answer: "Divides Earth into Northern and Southern Hemispheres" },
            { question: "What is the value of the longitude at the International Date Line?", options: ["180°", "0°", "90°", "360°"], answer: "180°" },
            { question: "How many degrees are there in a full circle?", options: ["360", "180", "90", "45"], answer: "360" },
            { question: "Which is the smallest latitude?", options: ["0°", "23½° N", "23½° S", "66½° N"], answer: "0°" },
            { question: "What is the time difference between the two places 15 degrees apart in longitude?", options: ["1 hour", "30 minutes", "2 hours", "4 hours"], answer: "1 hour" },
            { question: "What is the significance of 23½° N latitude?", options: ["Tropic of Cancer", "Tropic of Capricorn", "Arctic Circle", "Antarctic Circle"], answer: "Tropic of Cancer" },
            { question: "What is the significance of 23½° S latitude?", options: ["Tropic of Capricorn", "Tropic of Cancer", "Arctic Circle", "Antarctic Circle"], answer: "Tropic of Capricorn" },
            { question: "Which line of longitude is used to determine the standard time of a country?", options: ["Standard Meridian", "Prime Meridian", "International Date Line", "Equator"], answer: "Standard Meridian" },
            { question: "What is the significance of 66½° N latitude?", options: ["Arctic Circle", "Antarctic Circle", "Tropic of Cancer", "Tropic of Capricorn"], answer: "Arctic Circle" },
            { question: "What is the significance of 66½° S latitude?", options: ["Antarctic Circle", "Arctic Circle", "Tropic of Cancer", "Tropic of Capricorn"], answer: "Antarctic Circle" },
            { question: "How many main directions are there?", options: ["4", "8", "12", "16"], answer: "4" },
            { question: "What are the four main directions?", options: ["North, South, East, West", "North, South, Left, Right", "Up, Down, Left, Right", "North, East, Up, Down"], answer: "North, South, East, West" },
            { question: "What is the name of the circle passing through the North and South Poles?", options: ["Meridian", "Equator", "Latitude", "Longitude"], answer: "Meridian" },
            { question: "What is the name of the circle passing through the center of the Earth?", options: ["Equator", "Meridian", "Latitude", "Longitude"], answer: "Equator" },
            { question: "Which line divides the Earth into two equal halves?", options: ["Equator", "Prime Meridian", "Tropic of Cancer", "Tropic of Capricorn"], answer: "Equator" },
            { question: "Which circle is used to measure the longitude?", options: ["Meridian", "Equator", "Latitude", "Longitude"], answer: "Meridian" },
            { question: "Which circle is used to measure the latitude?", options: ["Equator", "Meridian", "Latitude", "Longitude"], answer: "Equator" },
            { question: "Which line divides the Earth into Eastern and Western Hemispheres?", options: ["Prime Meridian", "Equator", "Tropic of Cancer", "Tropic of Capricorn"], answer: "Prime Meridian" },
            { question: "What is the main use of the lines of latitude?", options: ["To determine the climate of a place", "To determine the time of a place", "To determine the height of a place", "To determine the depth of a place"], answer: "To determine the climate of a place" },
            { question: "What is the main use of the lines of longitude?", options: ["To determine the time of a place", "To determine the climate of a place", "To determine the height of a place", "To determine the depth of a place"], answer: "To determine the time of a place" },
            { question: "Which latitude is known as the Tropic of Cancer?", options: ["23½° N", "23½° S", "66½° N", "66½° S"], answer: "23½° N" },
            { question: "Which latitude is known as the Tropic of Capricorn?", options: ["23½° S", "23½° N", "66½° S", "66½° N"], answer: "23½° S" },
            { question: "Which latitude is known as the Arctic Circle?", options: ["66½° N", "66½° S", "23½° N", "23½° S"], answer: "66½° N" },
            { question: "Which latitude is known as the Antarctic Circle?", options: ["66½° S", "66½° N", "23½° S", "23½° N"], answer: "66½° S" },
            { question: "How many main lines of latitude are there?", options: ["5", "6", "7", "8"], answer: "5" },
            { question: "What is the time difference between the two places 1 degree apart in longitude?", options: ["4 minutes", "10 minutes", "15 minutes", "30 minutes"], answer: "4 minutes" },
            { question: "Which lines are used to measure the distance from the Equator?", options: ["Latitude", "Longitude", "Meridian", "Standard Meridian"], answer: "Latitude" },
            { question: "Which lines are used to measure the distance from the Prime Meridian?", options: ["Longitude", "Latitude", "Meridian", "Standard Meridian"], answer: "Longitude" },
            { question: "Which hemisphere is the North Pole located in?", options: ["Northern Hemisphere", "Southern Hemisphere", "Eastern Hemisphere", "Western Hemisphere"], answer: "Northern Hemisphere" },
            { question: "Which hemisphere is the South Pole located in?", options: ["Southern Hemisphere", "Northern Hemisphere", "Eastern Hemisphere", "Western Hemisphere"], answer: "Southern Hemisphere" },
            { question: "Which hemisphere is India located in?", options: ["Northern Hemisphere", "Southern Hemisphere", "Eastern Hemisphere", "Western Hemisphere"], answer: "Northern Hemisphere" },
            { question: "Which hemisphere is Australia located in?", options: ["Southern Hemisphere", "Northern Hemisphere", "Eastern Hemisphere", "Western Hemisphere"], answer: "Southern Hemisphere" },
            { question: "What is the name of the circle passing through the North Pole?", options: ["Arctic Circle", "Antarctic Circle", "Tropic of Cancer", "Tropic of Capricorn"], answer: "Arctic Circle" },
            { question: "What is the name of the circle passing through the South Pole?", options: ["Antarctic Circle", "Arctic Circle", "Tropic of Cancer", "Tropic of Capricorn"], answer: "Antarctic Circle" },
            { question: "What is the significance of the lines of longitude?", options: ["To determine the time zones", "To determine the climate", "To measure the height", "To measure the depth"], answer: "To determine the time zones" },
            { question: "What is the name of the 180° longitude?", options: ["International Date Line", "Prime Meridian", "Equator", "Standard Meridian"], answer: "International Date Line" },
            { question: "What is the latitudinal value of the Equator?", options: ["0°", "23½° N", "23½° S", "66½° N"], answer: "0°" },
            { question: "What is the latitudinal value of the Prime Meridian?", options: ["0°", "23½° N", "23½° S", "66½° N"], answer: "0°" },
            { question: "What is the time difference between the two places 30 degrees apart in longitude?", options: ["2 hours", "1 hour", "4 hours", "6 hours"], answer: "2 hours" },
            { question: "Which line of longitude is used to determine the standard time of India?", options: ["82½° E", "75° E", "90° E", "66½° E"], answer: "82½° E" },
            { question: "What is the distance between the two longitudes?", options: ["111 km", "222 km", "333 km", "444 km"], answer: "111 km" },
            { question: "Which line divides the Earth into the Northern and Southern Hemispheres?", options: ["Equator", "Prime Meridian", "Tropic of Cancer", "Tropic of Capricorn"], answer: "Equator" },
            { question: "Which line divides the Earth into the Eastern and Western Hemispheres?", options: ["Prime Meridian", "Equator", "Tropic of Cancer", "Tropic of Capricorn"], answer: "Prime Meridian" },
            { question: "Which lines are known as parallels?", options: ["Latitudes", "Longitudes", "Meridians", "Standard Meridians"], answer: "Latitudes" },
            { question: "Which lines are known as meridians?", options: ["Longitudes", "Latitudes", "Equator", "Standard Meridians"], answer: "Longitudes" },
            { question: "How many main lines of longitude are there?", options: ["2", "3", "4", "5"], answer: "2" },
            { question: "How many main lines of latitude are there?", options: ["5", "6", "7", "8"], answer: "5" },
            { question: "Which line of longitude passes through Greenwich?", options: ["Prime Meridian", "International Date Line", "Equator", "Standard Meridian"], answer: "Prime Meridian" },
            { question: "What is the main use of the Prime Meridian?", options: ["To divide Earth into Eastern and Western Hemispheres", "To divide Earth into Northern and Southern Hemispheres", "To measure the height of mountains", "To measure the depth of oceans"], answer: "To divide Earth into Eastern and Western Hemispheres" },
            { question: "Which line is used to determine the standard time of a place?", options: ["Standard Meridian", "Prime Meridian", "International Date Line", "Equator"], answer: "Standard Meridian" },
            { question: "Which latitude is known as the Equator?", options: ["0°", "23½° N", "23½° S", "66½° N"], answer: "0°" },
            { question: "Which latitude is known as the Tropic of Cancer?", options: ["23½° N", "23½° S", "66½° N", "66½° S"], answer: "23½° N" },
            { question: "Which latitude is known as the Tropic of Capricorn?", options: ["23½° S", "23½° N", "66½° S", "66½° N"], answer: "23½° S" },
            { question: "Which latitude is known as the Arctic Circle?", options: ["66½° N", "66½° S", "23½° N", "23½° S"], answer: "66½° N" },
            { question: "Which latitude is known as the Antarctic Circle?", options: ["66½° S", "66½° N", "23½° S", "23½° N"], answer: "66½° S" }
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

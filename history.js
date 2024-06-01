const questions = [{ question: "What activities did early people living along the Narmada river engage in?", options: ["Skilled gathering", "Agriculture", "Fishing", "Pottery"], answer: "Skilled gathering" },
{ question: "Where did people first begin to grow crops such as wheat and barley?", options: ["Vindhyas", "Sulaiman and Kirthar hills", "Narmada Valley", "Garo hills"], answer: "Sulaiman and Kirthar hills" },
{ question: "Which river's banks saw the development of the first cities around 4700 years ago?", options: ["Ganga", "Yamuna", "Indus", "Godavari"], answer: "Indus" },
{ question: "What was the name of the powerful kingdom located to the south of the Ganga?", options: ["Magadha", "Maurya", "Kushana", "Gupta"], answer: "Magadha" },
{ question: "What are the natural frontiers of the South Asian subcontinent?", options: ["Rivers, deserts, and seas", "Hills, mountains, and seas", "Forests and plains", "Lakes and rivers"], answer: "Hills, mountains, and seas" },
{ question: "What are manuscripts?", options: ["Printed books", "Books written by hand", "Digital documents", "Stone inscriptions"], answer: "Books written by hand" },
{ question: "What is the significance of the Indus river in historical context?", options: ["Early agriculture", "First cities", "First inscriptions", "First pottery"], answer: "First cities" },
{ question: "What did the Iranians and Greeks call the river Indus?", options: ["Sindhu", "Hindos or Indos", "Ganga", "Narmada"], answer: "Hindos or Indos" },
{ question: "What materials were early manuscripts usually written on?", options: ["Palm leaf and birch bark", "Stone and metal", "Clay tablets", "Animal skins"], answer: "Palm leaf and birch bark" },
{ question: "What is an inscription?", options: ["Printed book", "Handwritten book", "Writing on hard surfaces", "Digital document"], answer: "Writing on hard surfaces" },
{ question: "Who studies the remains of buildings, tools, and other objects made in the past?", options: ["Historians", "Archaeologists", "Linguists", "Geologists"], answer: "Archaeologists" },
{ question: "What is the term for smaller rivers that flow into a larger river?", options: ["Streams", "Tributaries", "Estuaries", "Brooks"], answer: "Tributaries" },
{ question: "What does BC stand for?", options: ["Before Common", "Before Century", "Before Christ", "Before Current"], answer: "Before Christ" },
{ question: "What does AD stand for?", options: ["After Death", "Anno Domini", "Annual Date", "After Date"], answer: "Anno Domini" },
{ question: "Which material among the following survives the longest?", options: ["Paper", "Wood", "Bone", "Stone"], answer: "Stone" },
{ question: "What term is used for objects made and used in the past?", options: ["Artifacts", "Fossils", "Scripts", "Manuscripts"], answer: "Artifacts" },
{ question: "What language is the word 'manuscript' derived from?", options: ["Greek", "Latin", "Sanskrit", "Prakrit"], answer: "Latin" },
{ question: "Which ruler is mentioned in the inscriptions found in Kandahar, present-day Afghanistan?", options: ["Chandragupta", "Ashoka", "Akbar", "Harsha"], answer: "Ashoka" },
{ question: "What is one major difference between manuscripts and inscriptions?", options: ["Material used", "Language", "Age", "Region"], answer: "Material used" },
{ question: "What does CE stand for?", options: ["Christian Era", "Common Era", "Current Era", "Common Epoch"], answer: "Common Era" },
{ question: "What is the meaning of 'BCE'?", options: ["Before Common Era", "Before Christian Era", "Before Century Era", "Before Current Era"], answer: "Before Common Era" },
{ question: "What term refers to sources of information from manuscripts, inscriptions, and archaeology?", options: ["Artifacts", "Sources", "Evidences", "Clues"], answer: "Sources" },
{ question: "What do historians often compare themselves to when learning about the past?", options: ["Scientists", "Detectives", "Teachers", "Engineers"], answer: "Detectives" },
{ question: "What kind of objects do archaeologists study to find out what people ate in the past?", options: ["Tools", "Weapons", "Bones", "Coins"], answer: "Bones" },
{ question: "What are the two words often used for our country?", options: ["India and Bharat", "Hindustan and Bharat", "Hindustan and India", "Bharat and Hind"], answer: "India and Bharat" },
{ question: "Which ancient text mentions the group of people called Bharata?", options: ["Rigveda", "Mahabharata", "Ramayana", "Upanishads"], answer: "Rigveda" },
{ question: "What kind of objects made of hard, imperishable substances usually survive for a long time?", options: ["Paper", "Stone", "Wood", "Cloth"], answer: "Stone" },
{ question: "What do we use to read what is written or to speak?", options: ["Scripts", "Signs", "Language", "Symbols"], answer: "Language" },
{ question: "Which ruler's inscription was found in Kandahar, Afghanistan?", options: ["Chandragupta", "Ashoka", "Harsha", "Kanishka"], answer: "Ashoka" },
{ question: "What is the primary focus of historians?", options: ["Studying the past", "Studying languages", "Studying cultures", "Studying geography"], answer: "Studying the past" },
{ question: "What are the advantages of writing on a hard surface?", options: ["Easily erasable", "Durability", "Flexibility", "Lightweight"], answer: "Durability" },
{ question: "What is often used by historians and archaeologists like clues?", options: ["Documents", "Artifacts", "Scripts", "Manuscripts"], answer: "Artifacts" },
{ question: "What type of manuscript is shown on page 4 of the PDF?", options: ["Palm leaf manuscript", "Birch bark manuscript", "Stone inscription", "Metal inscription"], answer: "Palm leaf manuscript" },
{ question: "Where have many manuscripts been preserved?", options: ["Libraries", "Monasteries and temples", "Universities", "Private collections"], answer: "Monasteries and temples" },
{ question: "Who is Rasheeda?", options: ["A historian", "A character in the book", "An archaeologist", "A ruler"], answer: "A character in the book" },
{ question: "What led to the sharing of ideas between people in ancient times?", options: ["Isolation", "Migration", "Trade", "Wars"], answer: "Migration" },
{ question: "Who studies the lives of farmers and herders?", options: ["Historians", "Archaeologists", "Anthropologists", "Geologists"], answer: "Archaeologists" },
{ question: "What did the earliest people do for a living?", options: ["Hunting and gathering", "Farming", "Trading", "Crafting"], answer: "Hunting and gathering" },
{ question: "What type of government did the people of Magadha have?", options: ["Monarchy", "Democracy", "Oligarchy", "Republic"], answer: "Monarchy" },
{ question: "Who are called specialists?", options: ["People trained to do specific work", "General laborers", "Farmers", "Merchants"], answer: "People trained to do specific work" },
{ question: "Which period is considered prehistoric?", options: ["Before writing was invented", "After writing was invented", "Middle Ages", "Modern times"], answer: "Before writing was invented" },
{ question: "What were the places where stone tools were found called?", options: ["Sites", "Towns", "Villages", "Cities"], answer: "Sites" },
{ question: "What kind of evidence do bones provide?", options: ["Diet", "Clothing", "Housing", "Language"], answer: "Diet" },
{ question: "What are charred grains and seeds found in?", options: ["Fireplaces", "Hearths", "Kitchens", "Fields"], answer: "Hearths" },
{ question: "What term is used for the process of adapting wild plants and animals for human use?", options: ["Domestication", "Cultivation", "Breeding", "Farming"], answer: "Domestication" },
{ question: "What material were the houses in the earliest cities made of?", options: ["Mud bricks", "Stone", "Wood", "Clay"], answer: "Mud bricks" },
{ question: "What do archaeologists study apart from bones and pottery?", options: ["Tools", "Scripts", "Paintings", "Literature"], answer: "Tools" },
{ question: "Which people lived along the banks of the Narmada river?", options: ["Hunter-gatherers", "Farmers", "Traders", "Craftsmen"], answer: "Hunter-gatherers" },
{ question: "Where did people grow rice first?", options: ["Garo hills", "Vindhyas", "Narmada Valley", "Sulaiman hills"], answer: "Garo hills" },
{ question: "What is a village headman called in Prakrit?", options: ["Grama Bhojaka", "King", "Minister", "Priest"], answer: "Grama Bhojaka" },
{ question: "What do historians study?", options: ["Past", "Future", "Technology", "Nature"], answer: "Past" },
{ question: "What were the occupations of people who lived along the Ganga and its tributaries?", options: ["Farming and herding", "Hunting", "Fishing", "Pottery"], answer: "Farming and herding" },
{ question: "What is the meaning of 'history'?", options: ["Inquiry", "Story", "Science", "Religion"], answer: "Inquiry" },
{ question: "Which language was mostly used in north India for inscriptions?", options: ["Sanskrit", "Prakrit", "Tamil", "Pali"], answer: "Prakrit" },
{ question: "Which language was mostly used in south India for inscriptions?", options: ["Tamil", "Telugu", "Kannada", "Malayalam"], answer: "Tamil" },
{ question: "Who is regarded as the 'father of history'?", options: ["Herodotus", "Homer", "Thucydides", "Plato"], answer: "Herodotus" },
{ question: "Which book did Herodotus write?", options: ["Histories", "Odyssey", "Iliad", "Republic"], answer: "Histories" },
{ question: "What do we call the study of coins?", options: ["Numismatics", "Epigraphy", "Paleography", "Cartography"], answer: "Numismatics" },
{ question: "What are natural resources?", options: ["Materials from nature", "Man-made objects", "Digital data", "Ancient texts"], answer: "Materials from nature" },
{ question: "What do we call the study of inscriptions?", options: ["Epigraphy", "Numismatics", "Paleography", "Anthropology"], answer: "Epigraphy" },
{ question: "What were the earliest tools made of?", options: ["Stone", "Metal", "Wood", "Bone"], answer: "Stone" },
{ question: "Which type of grain was grown in Mehrgarh?", options: ["Wheat", "Rice", "Barley", "Millets"], answer: "Barley" },
{ question: "What is the primary source of information about ancient farming?", options: ["Tools", "Grains", "Inscriptions", "Bones"], answer: "Grains" },
{ question: "What do fossils represent?", options: ["Remains of living organisms", "Man-made objects", "Ancient buildings", "Written records"], answer: "Remains of living organisms" },
{ question: "What are the small-scale maps called?", options: ["Plans", "Sketches", "Globes", "Atlases"], answer: "Sketches" },
{ question: "What is cartography?", options: ["Map making", "Coin study", "Inscription study", "Bone study"], answer: "Map making" },
{ question: "What term is used for the earth's surface divided into different parts?", options: ["Continents", "Oceans", "Countries", "States"], answer: "Continents" },
{ question: "What were the ancient people who used stone tools called?", options: ["Stone Age people", "Bronze Age people", "Iron Age people", "Modern Age people"], answer: "Stone Age people" },
{ question: "Which form of writing was used in ancient Egypt?", options: ["Hieroglyphics", "Cuneiform", "Alphabet", "Pictograms"], answer: "Hieroglyphics" },
{ question: "What were ancient Egyptian kings called?", options: ["Pharaohs", "Emperors", "Sultans", "Shoguns"], answer: "Pharaohs" },
{ question: "Which river is associated with ancient Egyptian civilization?", options: ["Nile", "Tigris", "Euphrates", "Amazon"], answer: "Nile" },
{ question: "What is the oldest known written story?", options: ["Epic of Gilgamesh", "Iliad", "Odyssey", "Mahabharata"], answer: "Epic of Gilgamesh" },
{ question: "What is the capital of ancient Mesopotamia?", options: ["Babylon", "Nineveh", "Ur", "Jericho"], answer: "Babylon" },
{ question: "Which script was used in ancient Mesopotamia?", options: ["Cuneiform", "Hieroglyphics", "Alphabet", "Pictograms"], answer: "Cuneiform" },
{ question: "Who was the king of the Babylonian empire known for his code of laws?", options: ["Hammurabi", "Nebuchadnezzar", "Sargon", "Ashurbanipal"], answer: "Hammurabi" },
{ question: "What were the structures called that were built as tombs for the Egyptian pharaohs?", options: ["Pyramids", "Ziggurats", "Temples", "Palaces"], answer: "Pyramids" },
{ question: "What was the writing material used by the ancient Egyptians?", options: ["Papyrus", "Clay tablets", "Stone", "Bark"], answer: "Papyrus" },
{ question: "Which civilization is known as the 'land between the rivers'?", options: ["Mesopotamia", "Egypt", "Indus Valley", "China"], answer: "Mesopotamia" },
{ question: "Which Chinese philosopher wrote the Analects?", options: ["Confucius", "Laozi", "Sun Tzu", "Mencius"], answer: "Confucius" },
{ question: "What was the primary material used for tools in the Neolithic Age?", options: ["Stone", "Bronze", "Iron", "Wood"], answer: "Stone" },
{ question: "What is the name of the ancient trade route that connected China with the Mediterranean Sea?", options: ["Silk Road", "Royal Road", "Incense Route", "Amber Road"], answer: "Silk Road" },
{ question: "What is the name of the ancient Greek city known for its philosophers?", options: ["Athens", "Sparta", "Corinth", "Thebes"], answer: "Athens" },
{ question: "Who is known as the 'Father of Western Philosophy'?", options: ["Socrates", "Plato", "Aristotle", "Heraclitus"], answer: "Socrates" },
{ question: "What was the primary form of government in ancient Athens?", options: ["Democracy", "Monarchy", "Oligarchy", "Republic"], answer: "Democracy" },
{ question: "Who wrote the Iliad and the Odyssey?", options: ["Homer", "Virgil", "Ovid", "Sophocles"], answer: "Homer" },
{ question: "What was the central marketplace in ancient Greek city-states called?", options: ["Agora", "Forum", "Piazza", "Plaza"], answer: "Agora" },
{ question: "What was the dominant form of architecture in ancient Greece?", options: ["Doric, Ionic, and Corinthian columns", "Gothic arches", "Baroque style", "Romanesque style"], answer: "Doric, Ionic, and Corinthian columns" },
{ question: "What was the primary form of entertainment in ancient Rome?", options: ["Gladiatorial games", "Theatre", "Chariot racing", "Music concerts"], answer: "Gladiatorial games" },
{ question: "What was the legal code of ancient Rome called?", options: ["Twelve Tables", "Code of Hammurabi", "Magna Carta", "Napoleonic Code"], answer: "Twelve Tables" },
{ question: "Which river was considered sacred by the ancient Romans?", options: ["Tiber", "Nile", "Danube", "Rhine"], answer: "Tiber" },
{ question: "What was the common language of the Roman Empire?", options: ["Latin", "Greek", "Aramaic", "Hebrew"], answer: "Latin" },
{ question: "Who was the first emperor of Rome?", options: ["Augustus", "Julius Caesar", "Nero", "Constantine"], answer: "Augustus" },
{ question: "What is the name of the large amphitheater in Rome?", options: ["Colosseum", "Pantheon", "Circus Maximus", "Roman Forum"], answer: "Colosseum" },
{ question: "What was the primary material used for construction in ancient Rome?", options: ["Concrete", "Wood", "Brick", "Stone"], answer: "Concrete" },
{ question: "Who was the Carthaginian general who crossed the Alps to invade Rome?", options: ["Hannibal", "Scipio", "Caesar", "Cato"], answer: "Hannibal" },
{ question: "Which Roman god was considered the king of the gods?", options: ["Jupiter", "Mars", "Neptune", "Apollo"], answer: "Jupiter" }
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

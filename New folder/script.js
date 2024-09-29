let currentLevel = 1;

const questions = [
    { question: "What is the output of `cout << 5 + 4;`?", options: ["A) 5", "B) 9", "C) 53", "D) Error"], answer: "B) 9" },
    { question: "Which data type is used to represent a whole number?", options: ["A) float", "B) double", "C) int", "D) char"], answer: "C) int" },
    { question: "What is the correct syntax for a for loop?", options: ["A) for (int i = 0; i < 10; i++)", "B) for (i = 0; i < 10; i++)", "C) for (int i < 10; i++)", "D) for (i = 0; i < 10)"], answer: "A) for (int i = 0; i < 10; i++)" },
    { question: "What is the output of the following code? `cout << \"C++\" << endl;`", options: ["A) C++", "B) Hello, world!", "C) C++ (with new line)", "D) Error"], answer: "C) C++ (with new line)" },
    { question: "Which operator is used for logical AND in C++?", options: ["A) &", "B) &&", "C) ||", "D) !"], answer: "B) &&" },
    { question: "What is the default value of an uninitialized pointer?", options: ["A) 0", "B) NULL", "C) Undefined", "D) Random"], answer: "B) NULL" },
    { question: "Which of the following is a standard library in C++?", options: ["A) stdio.h", "B) stdlib.h", "C) iostream", "D) string.h"], answer: "C) iostream" },
    { question: "How can you print 'Hello, World!'", options: ["A) cout << \"Hello, World!\";", "B) printf(\"Hello, World!\");", "C) Both A and B", "D) None of the above"], answer: "C) Both A and B" }
];

document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    loadNextChallenge();
});


document.getElementById('submit').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    const outputElement = document.getElementById('output');
    const errorElement = document.getElementById('error');

    outputElement.innerText = '';
    errorElement.innerText = '';

    if (selectedOption) {
        const userAnswer = selectedOption.value;
        if (userAnswer === questions[currentLevel - 1].answer) {
            outputElement.innerText = 'Correct!';
            currentLevel++;
            loadNextChallenge();
        } else {
            errorElement.innerText = 'Incorrect. Try again!';
        }
    } else {
        errorElement.innerText = 'Please select an option.';
    }
});

document.getElementById('run').addEventListener('click', function() {
    handleCodingChallenges();
});

function loadNextChallenge() {
    const title = document.getElementById('level-title');
    const challengeText = document.getElementById('challenge-text');
    const optionsContainer = document.getElementById('options');
    const codeTextarea = document.getElementById('code');
    const runButton = document.getElementById('run');
    const submitButton = document.getElementById('submit');

    
    optionsContainer.innerHTML = '';
    document.getElementById('output').innerText = '';
    document.getElementById('error').innerText = '';

    if (currentLevel <= 8) {
        title.innerText = `Level ${currentLevel}`;
        challengeText.innerText = questions[currentLevel - 1].question;

        questions[currentLevel - 1].options.forEach(option => {
            optionsContainer.innerHTML += `<div><input type="radio" name="option" value="${option}"> ${option}</div>`;
        });

       
        submitButton.style.display = 'block';
        codeTextarea.style.display = 'none';
        runButton.style.display = 'none';
    } else if (currentLevel === 9) {
        title.innerText = 'Level 9: Input Any 2 Numbers';
        challengeText.innerText = 'Write your C++ code to input two numbers and find their sum.';

        
        codeTextarea.style.display = 'block';
        runButton.style.display = 'block';
        submitButton.style.display = 'none';
    } else if (currentLevel === 10) {
        title.innerText = 'Level 10: Calculate Simple Interest';
        challengeText.innerText = 'Write your C++ code to calculate simple interest.';
    } else if (currentLevel === 11) {
        title.innerText = 'Level 11: Divide Two Numbers and Find Remainder';
        challengeText.innerText = 'Write your C++ code to find the remainder of two numbers.';
    } else {
        title.innerText = 'Congratulations! You completed all levels!';
        document.getElementById('run').disabled = true; // Disable button
    }
}

function handleCodingChallenges() {
    const code = document.getElementById('code').value.trim();
    const outputElement = document.getElementById('output');
    const errorElement = document.getElementById('error');

    outputElement.innerText = '';
    errorElement.innerText = '';

    switch (currentLevel) {
        case 9:
            if (code.includes('cin') && code.includes('+')) {
                outputElement.innerText = 'Success! Your code correctly inputs two numbers and finds their sum.';
                currentLevel++;
                loadNextChallenge();
            } else {
                errorElement.innerText = 'Error: Your code must use "cin" and include a sum calculation.';
            }
            break;
        case 10:
            if (code.includes('cin') && code.includes('principal') && code.includes('rate') && code.includes('time')) {
                outputElement.innerText = 'Success! Your code correctly calculates simple interest.';
                currentLevel++;
                loadNextChallenge();
            } else {
                errorElement.innerText = 'Error: Make sure your code calculates simple interest correctly.';
            }
            break;

        case 11:
            if (code.includes('%')) {
                outputElement.innerText = 'Success! Your code correctly finds the remainder.';
                outputElement.innerText += '\nCongratulations! You completed all levels!';
                document.getElementById('run').disabled = true; 
            } else {
                errorElement.innerText = 'Error: Make sure your code calculates the remainder of two numbers.';
            }
            break;
    }
}
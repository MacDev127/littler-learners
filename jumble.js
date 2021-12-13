const userGuess = document.getElementById("user-guess");
const submitBtn = document.getElementById("submit-btn");
const usersWord = document.getElementById("jumbled-word");
const info = document.getElementById("info");
const levelOutput = document.getElementById("level");
const scoreOutput = document.getElementById("score");
const game = document.getElementById("game");
const guessWrapper = document.getElementById("guess-wrapper");
const resetBtn = document.getElementById("reset-btn");

let level = 1;
let score = 0;
let word;
let attempts = 0;
let correct = 0;

const lvlOneWords = [
    "aim",
    "ace",
    "bed",
    "bee",
    "buy",
    "can",
    "cat",
    "cow",
    "cod",
    "did",
    "dog",
    "duo",
    "dry",
    "dug",
    "elf",
    "egg",
    "elk",
    "fat",
];

const lvlTwoWords = [
    "able",
    "aced",
    "also",
    "arcs",
    "area",
    "arch",
    "aunt",
    "axis",
    "baby",
    "back",
    "ball",
    "babe",
    "bass",
    "bell",
    "bets",
    "bind",
    "bios",
    "book",
    "cabs",
    "case",
];

const lvlThreeWords = [
    "abide",
    "about",
    "abort",
    "above",
    "adapt",
    "array",
    "aisle",
    "angry",
    "basic",
    "beers",
];

function reset() {
    level = 1;
    score = 0;
    correct = 0;
    word = "";
    updateBoard();
    info.innerHTML = "";
    userGuess.value = "";
}

function randomWord(lvl) {
    word = lvl[Math.floor(Math.random() * lvl.length + 1) - 1];
    return word;
}

function jumbledWord(word) {
    let letters = word.split("");
    let currentIndex = letters.length;

    // Shuffle remaining elements
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = letters[currentIndex];
        letters[currentIndex] = letters[randomIndex];
        letters[randomIndex] = temporaryValue;
    }

    return letters.join(" ");
}

function updateBoard() {
    scoreOutput.innerHTML = score;
    levelOutput.innerHTML = level;
}

function checkAnswer(guess) {
    console.log(`Correct: ${correct}`);
    if (correct == 4) {
        level += 1;
        correct = 0;
    }

    if (guess === word) {
        info.innerHTML = "<span class='correct'>CORRECT</span>";
        score += 1;
        correct += 1;
        setLevel();
    } else {
        info.innerHTML = "<span class='incorrect'>Oops! Try Again</span>";
        score -= 1;
    }

    updateBoard();
}

function setLevel() {
    if (level == 1) {
        randomWord(lvlOneWords);
    } else if (level == 2) {
        randomWord(lvlTwoWords);
    } else if (level == 3) {
        randomWord(lvlThreeWords);

        info.innerHTML =
            "<span class='win'>You Win! Great job! </br> You can reset or try level 3.</span>";
    }

    console.log(`Word: ${word}`);
    usersWord.innerHTML = jumbledWord(word);
}

submitBtn.addEventListener("click", function(e) {
    checkAnswer(userGuess.value.toLowerCase());
    userGuess.value = "";
});

resetBtn.addEventListener("click", function(e) {
    reset();
    setLevel();
    guessContainer.classList.remove("hidden");
    userGuess.value = "";
});

setLevel();
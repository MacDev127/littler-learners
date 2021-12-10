// --------------Navigation----------------------------//
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});

// --------------------------Alphabet Quiz-----------------------//
const correctAnswers = ["A", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [
        form.Q1.value,
        form.Q2.value,
        form.Q3.value,
        form.Q4.value,
    ];

    //Check answers

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    //Show percentage result on page

    // scrollTo(0, 0); // takes user to top of page after submitting quiz

    result.querySelector("span").textContent = `${score}%`; // looks inside scope of .result div for a span tag, then updates text content with template literal (template string) with score variable

    result.classList.remove("d-none");

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector("span").textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});

//window object (global object)

// setTimeout(() => {
//     alert('hello');
// }, 3000);

// setTime out waits certain amount of time before perform a selected action

// let i = 0;
// const timer = setInterval(() => {
//     console.log('hello');
//     i++;
//     if (i === 5) {
//         clearInterval(timer);
//     }
// }, 1000);

//setInterval keeps firing a function at intervals
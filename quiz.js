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
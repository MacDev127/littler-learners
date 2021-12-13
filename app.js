// --------------Navigation----------------------------//
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});

// --------------------------Alphabet Quiz-----------------------//

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
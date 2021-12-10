// array of animal names
var animalName = new Array("dog", "cat", "shark", "horse");

// array of replies
var replies = new Array(
    "try again",
    "you'll get it next time!",
    "oops!",
    "sorry, no!"
);
// dog function
function checkDog() {
    var text = document.getElementById("dogText").value;

    if (text == animalName[0]) {
        // snake answer

        document.getElementById("dogAnswer").innerHTML = "correct";
    } else {
        document.getElementById("dogAnswer").innerHTML = "try again!";
    }
}

// function to check spelling of horse
function checkCat() {
    var text = document.getElementById("catText").value;

    if (text == animalName[1]) {
        // cat answer//
        document.getElementById("catAnswer").innerHTML = "correct";
    } else {
        // cat answer //
        document.getElementById("catAnswer").innerHTML = "try again!";
    }
}

function checkShark() {
    var text = document.getElementById("sharkText").value;

    if (text == animalName[2]) {
        document.getElementById("sharkAnswer").innerHTML = "correct";
    } else {
        // Shark answer//
        document.getElementById("sharkAnswer").innerHTML = "try again!";
    }
}
// horse answer//
function checkHorse() {
    var text = document.getElementById("horseText").value;

    if (text == animalName[3]) {
        document.getElementById("horseAnswer").innerHTML = "correct";
    } else {
        document.getElementById("horseAnswer").innerHTML = "try again!";
    }
}
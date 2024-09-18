//Change dice number
const randomNumber1 = Math.floor(Math.random() * 6 + 1);
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

const randomNumber2 = Math.floor(Math.random() * 6 + 1);
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

//If randomNumber1 is equal to randomNumber2 = Drawl!.
if (randomNumber1 === randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Drawl!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "🚩Player 1 wins!";
} else {
    document.querySelector(".container h1").innerHTML = "Player 2 wins!🚩";
}

//if click button, reload.
if(document.querySelector("button")) {
    document.querySelector("button").addEventListener("click", function() {
        location.reload();
    });
}
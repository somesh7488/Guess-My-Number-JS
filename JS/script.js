

//Creating a secretno:
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 20;
let highScore = 0;


//Logics:
document.getElementById('checkBtn').addEventListener('click', () => {
    const guessedNo = Number(document.getElementById('guess').value);
    console.log(guessedNo);

    // if there is no input:
    if (!guessedNo) {
        document.querySelector('.message').textContent = "No Number!"
    }

    //When playe wins:
    else if (guessedNo === secretNumber) {
        document.querySelector(".message").textContent = "Correct Number!";
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "lightGreen";
        // somes line

        //for Highscore:
        if (score > highScore) {
            highScore = score;
            document.getElementById('highScore').textContent = highScore;
        }
    }


    // when guess is too high:
    else if (guessedNo > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too High";
            score = score - 1;
            document.getElementById("score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You Lost The Game";
            document.getElementById("score").textContent = 0;
        }
    }

    //when the guess is too Low:
    else if (guessedNo < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too Low";
            score = score - 1;
            document.getElementById("score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You Lost The Game";
            document.getElementById("score").textContent = 0;
        }
    }
});

// For Again Button:
document.querySelector(".again").addEventListener('click',()=>{
    score=20;
    secretNumber=Math.trunc(Math.random() * 20 + 1);
    console.log(secretNumber);
    document.querySelector(".message").textContent = "Start guessing...";
    document.getElementById("score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.getElementById('guess').value="";


    document.querySelector("body").style.backgroundColor = "black";


})
// Declaring variables
//submitbutton
//message
//lives

const $submitbutton = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");

const guessNumber = Math.round(Math.random() * 100);

var message;
var lives = 10;

// Game function

$submitbutton.onclick=()=>{
    console.log(guessNumber);
    let userInput = document.getElementById("number-input").value;
    lives--;
    if(userInput == guessNumber){
        location.href="./win.html";
    }
     else if(lives==0){
        location.href="./lose.html";
     }
     else if(userInput < guessNumber){
        message=`Oops 😶! Your guess is too low. You have ${lives} remaining.`;
}
else if(userInput > guessNumber){
    message=`Oops 😶! Your guess is too high. You have ${lives} remaining.`;
}

$message.style.display="inherit"
$message.innerHTML=message;
$lives.innerHTML=lives;
}

// background sound
const backgroundSound = new Audio(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/soundtrack.mp3"
    );
    backgroundSound.play();
    backgroundSound.loop = true;
    

//creates random words and returns it

  const phraseArr = ['Quality time' , 'The plot thickens' , 'Cut to the chase', 'Burst your bubble' , 'Birds of a feather flock together' , 'Back to the drawing board', 'Hard pill to swallow'
, 'Dropping like flies' , 'Down and out' , 'Cut the mustard' , 'Down to earth', 'Cry over spilt milk' , 'You cant judge a book by its cover' , 'Swinging for the fences',];



let round = 0


//ONE PLAYER//
const solobtn = document.querySelector("#one")
solobtn.addEventListener("click", soloSelected);
const roundt = document.querySelector("#round")
function soloSelected(){
  document.getElementById("numPlayers").style.display = "none";
  const intervalID = setInterval(() => {

        const clocktimer = document.querySelector('#timer')
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
        clocktimer.innerHTML = timeLeft +'s remaining';
        timeLeft--;
        roundt.innerHTML = "<- - - Player 1 Turn";

        // decrement the timer variable


        if (timeLeft < 0) {
          clearInterval(intervalID)
          alert("lLets fight");
          round++;
          roundt.innerHTML = "MATCH STARTED"
          console.log(round);

          document.getElementById("phrasebox").style.display = "none";
          document.getElementById("userinput").style.display = "none";
          // this.timer = 5
        }

      }, 1000)
    }


//TWO PLAYERS//
const twobtn = document.querySelector("#two")
twobtn.addEventListener("click", twoSelected);
let timeLeft =30;
function twoSelected(){
document.getElementById("numPlayers").style.display = "none";
const intervalID = setInterval(() => {


      const clocktimer = document.querySelector('#timer')
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
      clocktimer.innerHTML = timeLeft +'s remaining';
      timeLeft--;

      // decrement the timer variable
      if (timeLeft < 0) {
        clearInterval(intervalID)
        alert("player 2 is up");
        round++;
        roundt.innerHTML = 'Player2 Turn->';

        // this.timer = 5
      }


    }, 1000)
  }








//how to playerBscore
const helpbtn =document.querySelector("#foot")
helpbtn.addEventListener("click", helpSelected);

function helpSelected(){
  alert(" WELCOME! Type as many correct phrases in the  text box before the time runs out. You will earn points for correct phrases. After the  typing round is complete your Kangaroo will box it." );
}


// const restartBTN = document.querySelector("#restart")
// restartBTN.addEventListener("click", restartSelected());

function refreshPage(){
    window.location.reload();
}
//ROUND TIMER//
// let timeLeft = 30;
// let clocktimer = document.getElementById('timer');


// start when user hits enter on the text input box


//     const s=t scoreElement = getElementById("score");
//     function updateScore() {
//       score++;
//       scoreElement.innerHTML = score;
//     }
// //typing game/////


//  add new phrase to the screen
 function getPhrase(){
   let phrase =""
    return phrase += phraseArr[Math.floor(Math.random() * phraseArr.length)];
 }


 const phraseboxdisplayElement = document.getElementById('phrasebox')
 const userinputsubmitted=document.getElementById('userinput')

//this allows the
 function addPhrase(){
  const phrase = getPhrase()
  phraseboxdisplayElement.innerText = ''
  phrase.split('').forEach(character => {
    const characterSpan = document.createElement('span')
    characterSpan.innerText= character
    phraseboxdisplayElement.appendChild(characterSpan)
console.log(`${phrase}`);
return phrase
  })
  userinputsubmitted.value = null

}


 addPhrase()
///


let playerBscore =0

//this is important for add information when stuff changes
userinputsubmitted.addEventListener('input',() =>{
const phraseAddedChar = phraseboxdisplayElement.querySelectorAll('span')
const userInputedChar = userinputsubmitted.value.split('')
phraseAddedChar.forEach((characterSpan, index) => {
  const character = userInputedChar[index]
  if (character == null){
    characterSpan.classList.remove('green');
      characterSpan.classList.remove('red');
  }
  else if (character === characterSpan.innerText){
    characterSpan.classList.add('green');
      characterSpan.classList.remove('red');

} else{
  characterSpan.classList.add('red');
    characterSpan.classList.remove('green');
}
if('green'){
  console.log("yes");
  addPoint();
}



})
})
userinputsubmitted.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click


    addPhrase();
  }
});


function eraseText() {
    document.getElementById("output").value = "";
}

function addPoint(){
  if('userinputsubmitted'==='phrase')
  playerBscore++;
  playerBscore.innerHTML=playerBscore;

}

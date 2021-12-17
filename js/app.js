
//creates random words and returns it

  const phraseArr = ['Quality time' , 'The plot thickens' , 'Cut to the chase', 'Burst your bubble' , 'Birds of a feather flock together' , 'Back to the drawing board', 'Hard pill to swallow'
, 'Dropping like flies' , 'Down and out' , 'Cut the mustard' , 'Down to earth', 'Cry over spilt milk' , 'You cant judge a book by its cover' , 'Swinging for the fences',];






//ONE PLAYER//
const solobtn = document.querySelector("#one")
solobtn.addEventListener("click", soloSelected);

function soloSelected(){
  document.getElementById("numPlayers").style.display = "none";
document.getElementById("phrasebox").innerHTML = createRandomPhrase();
}

//TWO PLAYERS//
const twobtn = document.querySelector("#two")
twobtn.addEventListener("click", twoSelected);

function twoSelected(){
document.getElementById("numPlayers").style.display = "none";
createRandomPhrase();
}

//how to playerBscore
const helpbtn =document.querySelector("#foot")
helpbtn.addEventListener("click", helpSelected);

function helpSelected(){
  alert(" WELCOME! Type as many correct phrases in the  text box before the time runs out. You will earn points for correct phrases. After the  typing round is complete your Kangaroo will box it." );
}

//ROUND TIMER//
let timeLeft = 30;
let clocktimer = document.getElementById('timer');


// start when user hits enter on the text input box
  let timerId = setInterval(countdown, 1000);

    function countdown() {
      if (timeLeft >-1) {
        clocktimer.innerHTML = timeLeft +'s remaining';
        timeLeft--;

      }

    }
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
async function addPhrase(){
  const phrase = await getPhrase()
  phraseboxdisplayElement.innerText = ''
  phrase.split('').forEach(character => {
    const characterSpan = document.createElement('span')
    characterSpan.innerText= character
    phraseboxdisplayElement.appendChild(characterSpan)

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

  if (character === characterSpan.innerText){
    characterSpan.classList.add('green')


  }
  if(phraseAddedChar===userInputedChar){
    playerBscore++
        console.log(playerBscore);
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

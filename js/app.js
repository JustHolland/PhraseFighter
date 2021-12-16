console.log("hi");


//creates random words and returns it
function createRandomPhrase() {
  let phraseArr = ['Quality time' , 'The plot thickens' , 'Cut to the chase', 'Burst your bubble' , 'Birds of a feather flock together' , 'Back to the drawing board', 'Hard pill to swallow'
, 'Dropping like flies' , 'Down and out' , 'Cut the mustard' , 'Down to earth', 'Cry over spilt milk' , 'You cant judge a book by its cover' , 'Swinging for the fences',];
  let phrase =""
     phrase += phraseArr[Math.floor(Math.random() * phraseArr.length)];
  return phrase;

}


//add new phrase to screen
document.getElementById("phrasebox").innerHTML = createRandomPhrase();




// GAME SETUP ///


//ONE PLAYER//
const solobtn = document.querySelector("#one")
solobtn.addEventListener("click", soloSelected);

function soloSelected(){
  document.getElementById("numPlayers").style.display = "none";
  createRandomPhrase();
}

//TWO PLAYERS//
const twobtn = document.querySelector("#two")
twobtn.addEventListener("click", twoSelected);

function twoSelected(){
document.getElementById("numPlayers").style.display = "none";
createRandomPhrase();
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


//typing game/////










// document.getElementById("typebox").addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//     	document.getElementById("typebox").submit();
// 		return false;
//     }
// });

// function evaluatePlayerText{
//   playertext = input_area.value;
// curr_input_array = curr_input.split('');
// }

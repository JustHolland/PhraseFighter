console.log("hi");

//creates random words and returns it
function makeHardWords() {
  let words = ""
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for ( i = 0; i < 10; i++)
    words += letters.charAt(Math.floor(Math.random() * letters.length));

  return words;
}

console.log(makeHardWords(10));


// let nameR =
// let nameB =


class KANG{
  constructor(name, health, punchpoint,) {
    this.name =name
    this.health= health
    this.punchpoint =punchpoint


  }
}

const solobtn = document.querySelector("#one")
solobtn.addEventListener("click", soloSelected);

function soloSelected(){
  document.getElementById("numPlayers").style.display = "none";
}


const twobtn = document.querySelector("#two")
twobtn.addEventListener("click", twoSelected);

function twoSelected(){
document.getElementById("numPlayers").style.display = "none";
}


// function showNamePlayersBox{
//
// }

// function getPlayers() {
//   let player1 = document.getElementById('bname').value;
//   let player2 = document.getElementById('rname').value;
//   alert(player1)



// const feed = document.querySelector('#feedbtn')
//   // console.log(life started)
// feed.addEventListener('click', (event) => {
//   event.target.clicked = true
//   game.feedDino()
//    document.getElementById("foodhide").style.display = "block";

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

class KANG{
  constructor(name, health, punchpoint,) {

  }
}

var randomNumber1 =Math.floor(Math.random()*6+1);
console.log(randomNumber1);
var randomNumber2 =Math.floor(Math.random()*6+1);
console.log(randomNumber2);

// random dice
  // left dice
  document.querySelectorAll("img")[0].setAttribute("src", "images\\dice"+randomNumber1+".png");
// right dice
  document.querySelectorAll("img")[1].setAttribute("src", "images\\dice"+randomNumber2+".png");


// h1 text change
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🎉Player 1 wins!";
} else {
  document.querySelector("h1").textContent = "Player 2 wins!🎉";
}

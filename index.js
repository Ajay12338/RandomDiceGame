const pic1El = document.querySelector("#pic1-el");
const buttonEl = document.getElementById("button-el");
const textEl = document.getElementById("text-el");
const pic2El = document.getElementById("pic2-el");

function generateRandomNo() {
  let randomNo = Math.floor(Math.random() * 6) + 1;
  return randomNo;
}
function setImageOne(randomNo) {
  console.log(randomNo);
  if (randomNo === 1) {
    pic1El.src = "Pictures/1.png";
  } else if (randomNo === 2) {
    pic1El.src = "Pictures/2.png";
  } else if (randomNo === 3) {
    pic1El.src = "Pictures/3.png";
  } else if (randomNo === 4) {
    pic1El.src = "Pictures/4.png";
  } else if (randomNo === 5) {
    pic1El.src = "Pictures/5.png";
  } else {
    pic1El.src = "Pictures/6.png";
  }
}
function setImageTwo(randomNo) {
  console.log(randomNo);
  if (randomNo === 1) {
    pic2El.src = "Pictures/1.png";
  } else if (randomNo === 2) {
    pic2El.src = "Pictures/2.png";
  } else if (randomNo === 3) {
    pic2El.src = "Pictures/3.png";
  } else if (randomNo === 4) {
    pic2El.src = "Pictures/4.png";
  } else if (randomNo === 5) {
    pic2El.src = "Pictures/5.png";
  } else {
    pic2El.src = "Pictures/6.png";
  }
}
function whoWon() {}
buttonEl.addEventListener("click", function () {
  let randomNo1 = generateRandomNo();
  let randomNo2 = generateRandomNo();
  setImageOne(randomNo1);
  setImageTwo(randomNo2);
  if (randomNo1 > randomNo2) {
    textEl.textContent = "Player 1 won Whoo!!!!";
  } else if (randomNo1 === randomNo2) {
    textEl.textContent = "It's a draw!!!!";
  } else {
    textEl.textContent = "Player 2 won Whoo!!!!";
  }
});

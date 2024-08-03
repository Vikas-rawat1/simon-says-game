let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  // console.log("Game started")
  if (started == false) {
    // console.log("game started")
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 100);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 100);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  //random button choose
  let randomIndex = Math.floor(Math.random() * 3);
  let randomColor = btns[randomIndex];
  let randomButton = document.querySelector(`.${randomColor}`);
  // console.log(randomButton);
  gameSeq.push(randomColor);
  console.log(gameSeq);
  gameFlash(randomButton);
}

function checkAns(idx) {
  // console.log("Current level:", level);
  // let idx = level - 1;
  if (userSeq[idx] === gameSeq[idx]) {
    // console.log("same");
    if (userSeq.length === gameSeq.length) {
      // levelUp();
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your scrore was <b>${level}</b></br> 
    Press Any Key To Start A New Game`;
    document.querySelector("body").style.backgroundColor = "red";

    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "whitesmoke";
    }, 400);
    reset();
  }
}
function btnPress() {
  // console.log("Button Press");
  // console.log(this);
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  // console.log(userColor);
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

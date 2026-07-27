//Tic Tac Toe
// variables for reset button
const resetBtn = document.getElementById("restartBtn");
// status variable
const gameStatus = document.getElementById("statusText");
//player starts with 
let playerStatus = '❌';
let player = '❌';
// array that will hold indexes of choices
const playsArr = ["", "", "", "", "", "", "", "", ""];
//winningconditions
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// getting the whole thing
const cellUlAr = document.querySelectorAll(".cell");

cellUlAr.forEach(e => {

  e.addEventListener('click', function () {

    const indexString = this.getAttribute('cellIndex');
    const index = parseInt(indexString);
    playMe();//initialize the game
    winOrLose();//determines win, lose, or draw
    changePlayer();//switches players
    function playMe() {
      cellUlAr[index].textContent = playerStatus;
      if (playerStatus == '❌') {
        playsArr[index] = playerStatus;
        playerStatus = '⭕';
        gameStatus.textContent = `Player ⭕'s Turn`;
      }
      else if (playerStatus == '⭕') {
        playsArr[index] = playerStatus;
        playerStatus = '❌';
        gameStatus.textContent = `Player ❌'s Turn`;
      }
    }

    function winOrLose() {
      for (let i = 0; i < winningConditions.length; i++) {
        let win = winningConditions[i];
        console.log(win)
        let cond1 = playsArr[win[0]];
        let cond2 = playsArr[win[1]];
        let cond3 = playsArr[win[2]];

        if (cond1 === "" || cond2 === "" || cond3 === "") {
          continue;
        }

        if (cond1 === cond2 && cond2 === cond3) {
          gameStatus.textContent = winningAnim();
          break;
        }
      }
      if (!playsArr.includes("")) {
        window.alert(`Draw! Try again!`)
      }
    }

    function changePlayer() {
      if (player === '❌') {
        player = '⭕';
      }
      else if (player === '⭕') {
        player = '❌';
      }
    }
  })
})

// function for reset 
function resetMe() {
  window.location.reload()
}

//my svg graphics
function winningAnim() {
  document.open();
  document.write(`<svg width="600" height="600">
    <rect id="rec" x="300" y="100" width="300" height="100" style="fill:lime"> 
      <animate attributeName="x" attributeType="XML" begin="0s" dur="6s" fill="freeze" from="300" to="0" /> 
      <animate attributeName="y" attributeType="XML" begin="0s" dur="6s" fill="freeze" from="100" to="0" /> 
      <animate attributeName="width" attributeType="XML" begin="0s" dur="6s" fill="freeze" from="300" to="800" /> 
      <animate attributeName="height" attributeType="XML" begin="0s" dur="6s" fill="freeze" from="100" to="300" /> 
      <animate attributeName="fill" attributeType="CSS" from="lime" to="red" begin="2s" dur="4s" fill="freeze" />
    </rect>
    <g transform="translate(100,100)"> 
      <text id="TextElement" x="0" y="0" style="font-family:Verdana;font-size:24; visibility:hidden"> You Won!
        <set attributeName="visibility" attributeType="CSS" to="visible" begin="1s" dur="5s" fill="freeze" />
        <animateMotion path="M 0 0 L 100 100" begin="1s" dur="5s" fill="freeze" />
        <animate attributeName="fill" attributeType="CSS" from="red" to="blue" begin="1s" dur="5s" fill="freeze" /> 
        <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="-30" to="0" begin="1s" dur="5s" fill="freeze" /> 
        <animateTransform attributeName="transform" attributeType="XML" type="scale" from="1" to="3" additive="sum" begin="1s" dur="5s" fill="freeze" /> 
      </text> 
    </g>
  
  </svg>`);
  document.close();
}
resetBtn.addEventListener('click', resetMe);
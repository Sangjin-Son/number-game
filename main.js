// 랜덤번호 지정
// 유저가 번호를 입력한다 그리고 go라는 버튼을 누름
// 만약에 유저가 랜던번호를 맞추면, 맞췄습니다.
// 랜덤번호가 < 유저번호 Down!
// 랜덤번호가 > 유저번호 Up!
// rest 버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다 쓰면 게임이 끝난다(더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 안흔다
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않느다.

// test

let test = 0;
let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let uservalue = userInput.value;

  if (uservalue < 1 || uservalue > 100) {
    resultArea.textContent = "1과 100 사이 숫자를 입력해 주세요";
    return;
  }

  if (history.includes(uservalue)) {
    resultArea.textContent =
      "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요";
    return;
  }
  chances--;
  chanceArea.textContent = `남은기회:${chances}번`;
  console.log("chance", chances);
  if (uservalue < computerNum) {
    resultArea.textContent = "UP!!";
  } else if (uservalue > computerNum) {
    resultArea.textContent = "Down!!";
  } else {
    resultArea.textContent = "정답!!";
    gameOver = true;
  }

  history.push(uservalue);
  console.log(history);
  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  // user input창이 꺠끗하게 정리
  userInput.value = "";

  // 새로운 번호가 생성되고
  pickRandomNum();

  resultArea.textContent = "결과값이 여기 나옵니다!";
}

pickRandomNum();

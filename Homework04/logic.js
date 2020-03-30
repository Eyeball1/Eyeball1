var totalTime = 60;
var secondsLeft = 15;
var timeEl = document.querySelector("time");
var mainEl = document.querySelector("main");
var startBtn = document.getElementById("startBtn");
var quest0 = document.getElementById("quest0");
var answ1 = document.getElementById("answ1");
var answ2 = document.getElementById("answ2");
var answ3 = document.getElementById("answ3");
var answ4 = document.getElementById("answ4");
var score = 0;
const log = document.getElementById('log');
document.addEventListener('keypress', logKey);

var quests1 = [
  "a) The sky is blue.",
  "b) The sky is light green.",
  "c) The sky is orange.",
  "d) The sky is purple.",
  "What color is the sky generally",
  "a) 7",
  "b) 77",
  "c) 11",
  "d) -7",
  "What is 7 times 1.",
  "a) A war documentary.",
  "b) A miniature wargame.",
  "c) A futurisitc weapon.",
  "d) A SciFi TV show.",
  "What is Warhammer 40K",
  "a) Fish.",
  "b) Lizards.",
  "c) Mammals.",
  "d) Dinosaurs.",
  "What are birds most closely related to?"
];

  // Compare answers

function Question1() {
  for (var i = 0; i < quests1.length; i++);
  var timerInterval = setInterval(function() {
    secondsLeft--; totalTime--;
    mainE1 = secondsLeft + "<Time Remaining Question 1" + totalTime + "<time remaining on quiz";
    quest0 = quests1[4];
    answ1 = quests1[0];
    answ2 = quests1[1]; 
    answ3 = quests1[2];
    answ4 = quests1[3];
    if (logKey("a")) {
      score++;
      Question2();
    }
    else {
      TotalTime - 5;
    }

    if(TotalTime === 0) {
      clearInterval(timerInterval);
      OutOfTime();
    }

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      Question2();
    }

  }, 1000);
}

function Question2() {
  for (var i = 0; i < quests1.length; i++);
  secondsLeft = 15
  var timerInterval = setInterval(function() {
    secondsLeft--; totalTime--;
    mainE1 = secondsLeft + "<Time Remaining Question 2" + totalTime + "<time remaining on quiz";
    quest0 = quests1[9];
    answ1 = quests1[5];
    answ2 = quests1[6]; 
    answ3 = quests1[7];
    answ4 = quests1[8];
    if (logKey(a)) {
      score++;
      Question3();
    }
    else {
      TotalTime - 5;
    }

    if(TotalTime === 0) {
      clearInterval(timerInterval);
      OutOfTime();
    }

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      Questio3();
    }

  }, 1000);
}

function Question3() {
  for (var i = 0; i < quests1.length; i++);
  secondsLeft = 15
  var timerInterval = setInterval(function() {
    secondsLeft--; totalTime--;
    mainE1 = secondsLeft + "<Time Remaining Question 1" + totalTime + "<time remaining on quiz";
    quest0 = quests1[14];
    answ1 = quests1[10];
    answ2 = quests1[11]; 
    answ3 = quests1[12];
    answ4 = quests1[13];
    if (logKey(b)) {
      score++;
      Question4();
    }
    else {
      TotalTime - 5;
    }

    if(TotalTime === 0) {
      clearInterval(timerInterval);
      OutOfTime();
    }

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      Question4();
    }

  }, 1000);
}

function Question4() {
  for (var i = 0; i < quests1.length; i++);
  secondsLeft = 15
  var timerInterval = setInterval(function() {
    secondsLeft--; totalTime--;
    mainE1 = secondsLeft + "<Time Remaining Question 1" + totalTime + "<time remaining on quiz";
    quest0 = quests1[19];
    answ1 = quests1[15];
    answ2 = quests1[16]; 
    answ3 = quests1[17];
    answ4 = quests1[18];
    if (logKey(d)) {
      score++;
      QuizOver();
    }
    else {
      TotalTime - 5;
    }

    if(TotalTime === 0) {
      clearInterval(timerInterval);
      OutOfTime();
    }

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      QuizOver();
    }

  }, 1000);
}

function OutOfTime() {
  timeEl.textContent ="<You scored"+score+"of 5." + " but have ran out of time!";
  p2=window.localStorage.setItem('user', JSON.stringify(score));
}

function QuizOver() {
  timeEl.textContent ="<You scored"+score+"of 5." +"with"+ totalTime + "time remaining.";
  p2=window.localStorage.setItem('user', JSON.stringify(score));
}



setTime();


//startBtn.onclick = Question1;

startBtn.onclick = Question1;
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
  "a) None of the above",
  "b) A mathematical Function",
  "c) Another word for varible",
  "d) A log",
  "What is a string",
  "a) The first object from the array",
  "b) An error",
  "c) The last object from the array",
  "d) The color blue",
  "If I logged the [0] from an array I would get",
  "a) A type of string",
  "b) A mathematical function",
  "c) Any function with numbers",
  "d) A SciFi TV show.",
  "What is an alogorithim",
  "a) tabs forward a line of code",
  "b) neither A or C",
  "c) autofinishes a word to whatever is closest to it",
  "d) A and C",
  "What does tab do in VSC"
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

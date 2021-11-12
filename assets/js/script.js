// element variables for timer clock and start button
var minutesEl = document.querySelector(".timer__part--minutes");
var secondsEl = document.querySelector(".timer__part--seconds");
var startBtnEl = document.querySelector(".start");
var mainEl = document.querySelector("#main");
// interval and remaining secoonds variables for timer updating
var interval = null;





// function for updating minutes seconds
var timerInterfaceUpdate = function (remainingSeconds) {   
    
    // variable for generating one minute with division
    var minutes = Math.floor(remainingSeconds / 60);
    //variable for remaing seconds
    var seconds = remainingSeconds % 60;
        // give minutes element textContent of minutes variable as well as putting a zero in front
   minutesEl.textContent =  minutes.toString().padStart(2, "0");
   secondsEl.textContent = seconds.toString().padStart(2, "0");

    // if statement for checking wether or not interval var is null to display the correct text in button
    if (interval === null) {
     startBtnEl.textContent = "Start Quiz";
 }else {
   startBtnEl.textContent = "Restart Quiz";
   startBtnEl.className = "restart";
 }
 
  };

// stop function clear interval and reset button
  var stop = function(interval) {
      clearInterval(interval);
      startBtnEl.textContent = "Start Quiz";
      startBtnEl.className = "start";
      
  };

  // funtion to generate questions
  var questionGen = function (questions) {
    // create section to house questions also giv classname etc then append to main
    var questionSection = document.createElement("section");
    questionSection.className = "question-section";
    questionSection.innerHTML = "<h1 class='section-title'>Seb's JS Quiz</h1>"
    mainEl.appendChild(questionSection);

    var questionList = document.createElement("ul");
    questionList.className = "question-list";
    questionList.innerHTML = "<h2>" + questions[0].question + "</h2><li class='question'>" + questions[0].answers[1].text + "</li><li class='question'>"  + questions[0].answers[0].text + "</li><li class='question'>" + questions[0].answers[2].text + "</li>";
    questionSection.appendChild(questionList);
console.log(questions[0].answers[1].text);
  };

   

// start function
var start = function () {
// questions
var questions = [
  {question: 'a function declared with syntax var myfunction = function() {}; is known as what?',
answers: [
   {text: 'function expression', correct: true},
   {text: 'function algorithm', correct: false},
   {text: 'function' , correct:false}
  ]
 },
];
questionGen(questions);


    var remainingSeconds = 60;
    // variable for generating one minute with division
    var minutes = Math.floor(remainingSeconds / 60);
    //variable for remaing seconds
    var seconds = remainingSeconds % 60;
        // give minutes element textContent of minutes variable as well as putting a zero in front
   minutesEl.textContent =  minutes.toString().padStart(2, "0");
   secondsEl.textContent = seconds.toString().padStart(2, "0");
  

if (remainingSeconds === 0) { 
     return
  }else {
    startBtnEl.removeEventListener("click",start);
    
      interval = setInterval(() => { 
        
      remainingSeconds--;
      
      
      timerInterfaceUpdate(remainingSeconds);
     // console.log(remainingSeconds);
      if (remainingSeconds === 0) {
          stop(interval);
          
          
      }
      startBtnEl.addEventListener("click", () => {
       location.reload();
      });
      }, 1000);
  }
};


//questionGen();
 




startBtnEl.addEventListener("click",start);

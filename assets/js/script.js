// element variables for timer clock and start button
var minutesEl = document.querySelector(".timer__part--minutes");
var secondsEl = document.querySelector(".timer__part--seconds");
var startBtnEl = document.querySelector(".start");
var mainEl = document.querySelector("#main");
// interval and remaining secoonds variables for timer updating
var interval = null;
// put question section into a variable
//var questionSection = document.querySelector(".question-section");

var currentQuestionsID = 0;

// question array
var questions = [
  {question: 'a function declared with syntax var myfunction = function() {}; is known as what?',
answers: [
   {text: 'function algorithm', correct: false},
   {text: 'function' , correct:false},
   {text: 'function expression', correct: true}
  ]
 },
 {
   question: 'a variable declared outside any paraticular function is known as what type of variable?',
   answers: [
     {text: 'World variable', correct: false},
     {text: 'Run around variable ' ,correct: false},
     {text: 'A global varible', correct: true}
   ]
 },
 {
   question: 'when using `let` to declare a varible, that variable is now unchangable?',
   answers: [
     
     {text: 'b. False' ,correct: false},
     {text: 'Its complicated', correct: false},
     {text: 'a. True', correct: true}

   ]
 },
 {
   question: 'what is this known as? for(var i = 0; i < element.length; i++) {}; ',
   answers: [
     {text: 'Teranary operator', correct: false},
     {text: 'Tatch algorithm ' ,correct: false},
     {text: 'For loop', correct: true}
   ]
 },
 {
   question: 'what does a switch statement allow you to do?',
   answers: [
     {text: 'Switch from one UI to another', correct: false},
     {text: 'Alter a desktop GUI ' ,correct: false},
     {text: 'Do some action based on a `case`', correct: true}
   ]
 }
];



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
    
    questions.id = currentQuestionsID;
        console.log(currentQuestionsID);
        console.log(questions);
        //console.log(questions);
      /* if (currentQuestionsID > 0 ) {
        removeCurrentQuestion(questions);
       }*/
    
    // create section to house questions also giv classname etc then append to main
    var questionSection = document.createElement("section");
    questionSection.className = "question-section";
    questionSection.innerHTML = "<h1 class='section-title'>Seb's JS Quiz</h1>"
    mainEl.appendChild(questionSection);

    var questionList = document.createElement("ul");
    questionList.className = "question-list";
    // give question list data attribute of currentQuestionsId
    questionList.setAttribute("data-question-id", currentQuestionsID);
    questionList.innerHTML = "<h2>" + questions[0].question + "</h2><li class='question'>" + questions[0].answers[1].text + "</li><li class='question'>"  + questions[0].answers[0].text + "</li><li class='question correct'>" + questions[0].answers[2].text + "</li>";
    questionSection.appendChild(questionList);
    questionSection.addEventListener('click', (event) => {
      handleAnswer(event,questions);
    });
console.log(questionList);
currentQuestionsID++;

  };

  var handleAnswer = function(event, questions) {
  var targetAnswer = event.target;
 

  if(targetAnswer.matches('.correct')) {
    removeCurrentQuestion(questions);
   }else{
     alert("incorrect answer");
   }
  };

 

   var removeCurrentQuestion = function(questions) {
   
  // remove whole <section> element 
  var questionToBeRemoved = document.querySelector(".question-section:last-child");
  questionToBeRemoved.parentElement.removeChild(questionToBeRemoved);

questions.shift();
 console.log(questions);
 if (questions.length === 0){ 
 location.reload();
 }else {   
     questionGen(questions);
    }
  };

   

// start function
var start = function () {
  // event listener for answers
  
  // questions
questions //= questions.sort(() => Math.random() - .5);

// give objects in questions array an id
questions.forEach((questions, id) => {
  questions.id = id + 1;
});

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
        
          start();
         
          
          
      }
      startBtnEl.addEventListener("click", () => {
       location.reload();
      });
      }, 1000);
  }
};


//questionGen();
 




startBtnEl.addEventListener("click",start);

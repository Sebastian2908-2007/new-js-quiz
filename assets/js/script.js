// element variables for timer clock and start button
var minutesEl = document.querySelector(".timer__part--minutes");
var secondsEl = document.querySelector(".timer__part--seconds");
var startBtnEl = document.querySelector(".start");
// interval and remaining secoonds variables for timer updating
var interval = null;

var buttonUpdate = function () {   
    // if statement for checking wether or not interval var is null to display the correct text in button
    if (interval === null) {
     startBtnEl.textContent = "Start Quiz";
 }else {
     startBtnEl.textContent = "Restart Quiz";
   startBtnEl.className = "restart";
 }
 
  };
   

// function for updating the clock (timer)
var start = function () {
    var remainingSeconds = 90;
   // variable for generating one minute with division
   var minutes = Math.floor(remainingSeconds / 60);
   //variable for remaing seconds
   var seconds = remainingSeconds % 60;
    
   // give minutes element textContent of minutes variable as well as putting a zero in front
   minutesEl.textContent =  minutes.toString().padStart(2, "0");
   secondsEl.textContent = seconds.toString().padStart(2 , "0");

if (remainingSeconds === 0) { 
     return
  }else {
      interval = setInterval(() => {
      remainingSeconds--;
      buttonUpdate();
      console.log(remainingSeconds);
      if (remainingSeconds === 0) {
          stop();
      }
      }, 1000);
  }
};



 




startBtnEl.addEventListener("click",start);

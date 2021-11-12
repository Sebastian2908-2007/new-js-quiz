// element variables for timer clock and start button
var minutesEl = document.querySelector(".timer__part--minutes");
var secondsEl = document.querySelector(".timer__part--seconds");
var startBtnEl = document.querySelector(".start");

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


   

// start function
var start = function () {
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



 




startBtnEl.addEventListener("click",start);

const popUp = document.querySelector('.popup');
const nav = document.querySelector('.nav');
const buttonSet = document.querySelector('.button-set');
const buttonRes = document.querySelector('.button-reset');
const buttonStart = document.querySelector('.timer__start');

buttonSet.addEventListener('click', () => {
  timer.setTimer();
});

buttonRes.addEventListener('click', () => {
  timer.resetTimer();
});


popUp.addEventListener('click', function() {
  this.classList.toggle('active');
  nav.classList.toggle('open');
});





class Timer {
  constructor() {
    this.globalTime = document.querySelector('.timer__value');
    this.inputSetter = document.querySelector('.input-setter');
  }
  
  check() {
    console.log(this.globalTime);
    console.log(this.inputSetter);
  }

  checkType() {
    console.log(typeof this.numberFromStr);
  }
  
  setTimer() {
    this.globalTime.textContent = this.inputSetter.value;
  }
  
  resetTimer() {
    this.globalTime.textContent = "0";
  }
  
  pause() {
    
  }
  
  start() {
  }
}
const timer = new Timer();



let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer");

buttonRun.addEventListener('click', function() {
 let timeMinut = parseInt(timerShow.textContent) * 60;
 setInterval( () => {
  seconds = timeMinut%60
  minutes = timeMinut/60%60
  if (timeMinut <= 0) {
      alert("Время закончилось");
  } else {
      let strTimer = `${Math.trunc(minutes)}:${seconds}`;
      timerShow.innerHTML = strTimer;
      --timeMinut;
  }
} )
}
)

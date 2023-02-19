const popUp = document.querySelector('.popup');
const nav = document.querySelector('.nav');
const buttonSet = document.querySelector('.button-set');
const buttonRes = document.querySelector('.button-reset');
const buttonStart = document.querySelector('.timer__start');
const inputSetter = document.querySelector('.input-setter');
const timerValue = document.querySelector('.timer__value');
const minSetter = document.getElementById('minus');
const plusSetter = document.getElementById('plus');


document.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    popUp.classList.toggle('active');
    nav.classList.toggle('open');
  }
})


document.addEventListener('keydown', (evt) =>{
  if(evt.key === 'ArrowDown') {
    timer.min();
    timerValue.textContent = `${inputSetter.value}:00`;
  } if(evt.key === 'ArrowUp') {
    timer.plus();
    timerValue.textContent = `${inputSetter.value}:00`
    }
})


minuts = inputSetter.value;
seconds = '00';

timerValue.textContent = `${minuts}:${seconds}`;

minSetter.addEventListener('click', () => {
  timer.min();
  timerValue.textContent = `${inputSetter.value}:00`
})

plusSetter.addEventListener('click', () =>{
  timer.plus();
  timerValue.textContent = `${inputSetter.value}:00`
})

buttonStart.addEventListener('click', () => {
  timer.start({
  minuts: inputSetter.value - 1,
  seconds: 60
  })
  popUp.classList.remove('active');
  nav.classList.remove('open');
})

document.addEventListener('keydown', (evt) =>{
  if(evt.key === 'Enter') {
    timer.start({
    minuts: inputSetter.value - 1,
    seconds: 60
    })
  }
})

buttonRes.addEventListener('click', () => {
  timer.stop();
});


popUp.addEventListener('click', function() {
  popUp.classList.toggle('active');
  nav.classList.toggle('open');
  () => {
    let time = {
      minuts: inputSetter.value,
      seconds: 00
    }
    timer.setTimer(time);
  };
});

class Timer {
  constructor() {
    this.globalTime = document.querySelector('.timer__value');
    this.inputSetter = document.querySelector('.input-setter');
  }
  
  check() {
    console.log(this.minSetter);
  }

  min() {
    if (this.inputSetter.value > 1) {
      --this.inputSetter.value;
    } else return
  }

  plus() {
    if (this.inputSetter.value == 55) {
      return
    } else {
      ++this.inputSetter.value;
    }
  }

  reloadTime() {
    this.globalTime.textContent = `${inputSetter.minuts}:${seconds}`
  }

  setTimer(time) {
    this.globalTime.textContent = `${time.minuts}:${time.seconds}`;
  }
  
  resetTimer() {
    this.globalTime.textContent = "00:00";
    
  }
  
  pause() {
    console.log(star.this.setinterval())
  }
  
  start(time) {
    if(this.setinterval !== 0) {
      clearInterval(this.setinterval);
    }
   this.setinterval = setInterval ( () => {
    if(time.minuts == 0 && time.seconds == 0) {
      return
    } if (time.seconds == 0) {
        --time.minuts;
      time.seconds = 60;
    } if (time.seconds !== 0) {
        --time.seconds;
        this.setTimer(time);
    }
    }, 1000)

  }
  
  stop() {
    this.setinterval ='';
  }
}
const timer = new Timer();

const popUp = document.querySelector('.popup');
const nav = document.querySelector('.nav');
const buttonSet = document.querySelector('.button-set');
const buttonRes = document.querySelector('.button-reset');
const buttonStart = document.querySelector('.timers');
const inputSetter = document.querySelector('.input-setter');
const timerValue = document.querySelector('.timer__value');
const minSetter = document.getElementById('minus');
const plusSetter = document.getElementById('plus');

const time = {
  minuts: inputSetter.value,
  seconds: '00'
}

timerValue.textContent = `${time.minuts}:${time.seconds}`;

minSetter.addEventListener('click', () => {
  timer.min();
  timerValue.textContent = `${inputSetter.value}:${time.seconds}`
})

plusSetter.addEventListener('click', () =>{
  timer.plus();
  timerValue.textContent = `${inputSetter.value}:${time.seconds}`
})
buttonRes.addEventListener('click', () => {
  document.location.reload();
});

buttonStart.addEventListener('click', () => {
  timer.start(time) 
  popUp.classList.remove('active');
  nav.classList.remove('open');
  buttonStart.classList.toggle('pause');
})

popUp.addEventListener('click', function() {
  popUp.classList.toggle('active');
  nav.classList.toggle('open');
});

class Timer {
  constructor() {
    this.globalTime = document.querySelector('.timer__value');
    this.inputSetter = document.querySelector('.input-setter');
  }

  check() {
  }

  min() {
    if (this.inputSetter.value == 5) {
      return
    } else {
      --this.inputSetter.value;
    }
  }

  plus() {
    if (this.inputSetter.value == 55) {
      return
    } else {
      ++this.inputSetter.value;
    }
  }

  setTimer(time) {
    this.globalTime.textContent = `${time.minuts}:${time.seconds}`;
  }

  start(time) {
    if (this.intervalId != null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      return 
    }
    this.intervalId = setInterval ( () => {
      if (time.minuts == 0 && time.seconds == 0) {
        return
      } if (time.seconds == 0) {
          --time.minuts;
          time.seconds = 60;
      } if (time.seconds !== 0) {
          --time.seconds;
          this.setTimer(time);
      } 
    }, 1000);
  }
}

const timer = new Timer();

// KEYDOWN SETTINGS
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    popUp.classList.toggle('active');
    nav.classList.toggle('open');
  }
})

document.addEventListener('keydown', (evt) =>{
  if (evt.key === 'ArrowDown'){
    timer.min();
    timerValue.textContent = `${inputSetter.value}:00`;
  } if (evt.key === 'ArrowUp') {
    timer.plus();
    timerValue.textContent = `${inputSetter.value}:00`
  }
})

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Enter') {
    timer.start(time)
  }
})
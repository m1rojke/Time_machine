
const popUp = document.querySelector(".popup");
const nav = document.querySelector(".nav");
const buttonRes = document.querySelector(".button-reset");
const buttonStart = document.querySelector(".timers");
const timerValue = document.querySelector(".timer__value");
const inputSetter = document.querySelector(".input-setter");
const minSetter = document.getElementById("minus");
const plusSetter = document.getElementById("plus");
const ticTac = document.getElementById("tic");

minSetter.addEventListener("click", () => {
  buttonStart.classList.remove("pause");
  timer.stop();
  timer.min();
  time.minuts = inputSetter.value;
  time.seconds = "00";
  value();
});

plusSetter.addEventListener("click", () => {
  buttonStart.classList.remove("pause");
  timer.stop();
  timer.plus();
  time.minuts = inputSetter.value;
  time.seconds = "00";
  value();
});

let time = {
  minuts: inputSetter.value,
  seconds: "00",
};

function value() {
  timerValue.textContent = `${inputSetter.value}:${time.seconds}`;
  if (inputSetter.value < 10) {
    timerValue.textContent = `0${inputSetter.value}:${time.seconds}`;
  }
}

value();

buttonRes.addEventListener("click", () => {
  document.location.reload();
});

buttonStart.addEventListener("click", () => {
  buttonRes.classList.add("show");
  timer.start(time);
  popUp.classList.remove("active");
  nav.classList.remove("open");
  buttonStart.classList.toggle("pause");
});

popUp.addEventListener("click", function () {
  popUp.classList.toggle("active");
  nav.classList.toggle("open");
});

class Timer {
  constructor() {
    this.globalTime = document.querySelector(".timer__value");
    this.inputSetter = document.querySelector(".input-setter");
  }

  check() {}

  min() {
    if (this.inputSetter.value == 5) {
      return;
    } else {
      --this.inputSetter.value;
    }
  }

  plus() {
    if (this.inputSetter.value == 55) {
      return;
    } else {
      ++this.inputSetter.value;
    }
  }

  setTimer(time) {
    this.globalTime.textContent = `${time.minuts}:${time.seconds}`;
    if (time.seconds < 10) {
      this.globalTime.textContent = `${time.minuts}:0${time.seconds}`;
    }
    if (time.minuts < 10) {
      this.globalTime.textContent = `0${time.minuts}:${time.seconds}`;
    }
    if (time.minuts < 10 && time.seconds < 10) {
      this.globalTime.textContent = `0${time.minuts}:0${time.seconds}`;
    }
  }

  start(time) {
    if (this.intervalId != null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      return 
    }
    this.intervalId = setInterval(() => {
      if (time.minuts == 0 && time.seconds == 0) {
        return;
      }
      if (time.seconds == 0) {
        --time.minuts;
        time.seconds = 60;
      }
      if (time.seconds !== 0) {
        --time.seconds;
        this.setTimer(time);
      }
    }, 1000);
  }

  stop() {
    if (this.intervalId != null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      return;
    }
  }
}

const timer = new Timer();

// KEYDOWN SETTINGS
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    popUp.classList.toggle("active");
    nav.classList.toggle("open");
  }
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "ArrowDown") {
    buttonStart.classList.remove("pause");
    timer.stop();
    timer.min();
    time.minuts = inputSetter.value;
    time.seconds = "00";
    value();
  }
  if (evt.key === "ArrowUp") {
    buttonStart.classList.remove("pause");
    timer.stop();
    timer.plus();
    time.minuts = inputSetter.value;
    time.seconds = "00";
    value();
  }
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Enter") {
    timer.start(time);
    popUp.classList.remove("active");
    nav.classList.remove("open");
    buttonStart.classList.toggle("pause");
  }
});

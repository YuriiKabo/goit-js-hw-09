const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
const COLOR_TIMEOUT = 1000;
let intervalId = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

onStopChangeColor();
btnStart.addEventListener('click', onStartChangeColor);
btnStop.addEventListener('click', onStopChangeColor);

function onStartChangeColor() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, COLOR_TIMEOUT);
  btnStart.disabled = true;
  btnStop.disabled = false;
}

function onStopChangeColor() {
  clearInterval(intervalId);
  btnStart.disabled = false;
  btnStop.disabled = true;
}

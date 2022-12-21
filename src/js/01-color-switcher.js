const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};

refs.start.addEventListener('click', onClickStart);
refs.stop.addEventListener('click', onClickStop);

let timeId = null;

function onClickStart() {
  refs.start.setAttribute('disabled', '');
  timeId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onClickStop() {
  refs.start.removeAttribute('disabled');
  clearInterval(timeId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

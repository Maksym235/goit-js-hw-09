import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  start: document.querySelector('[data-start]'),
  timeDays: document.querySelector('[data-days]'),
  timeHours: document.querySelector('[data-hours]'),
  timeMinutes: document.querySelector('[data-minutes]'),
  timeSeconds: document.querySelector('[data-seconds]'),
};

refs.start.setAttribute('disabled', '');
let timerId = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      alert(`Please choose a date in the future`);
      return;
    }
    refs.start.removeAttribute('disabled');
    refs.start.addEventListener('click', onClickStartButton);
  },
};

function onClickStartButton() {
  if (timerId) {
    clearInterval(timerId);
  }
  timerId = setInterval(showTime, 1000);
}

function showTime() {
  const currentDate = Date.now();
  const timeMs = new Date(refs.input.value) - currentDate;
  const difference = convertMs(timeMs);
  setMarkup(difference);
  if (timeMs < 1000) {
    clearInterval(timerId);
  }
}

function setMarkup(differenceMS) {
  const { days, hours, minutes, seconds } = differenceMS;
  refs.timeDays.textContent = days;
  refs.timeHours.textContent = hours;
  refs.timeMinutes.textContent = minutes;
  refs.timeSeconds.textContent = seconds;
}

flatpickr(refs.input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

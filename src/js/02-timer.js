import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
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
    if (selectedDates[0] < new Date()) {
      alert(`Please choose a date in the future`);
      return;
    }
    refs.start.removeAttribute('disabled');

    function showTime() {
      const currentDate = Date.now();
      const timeMs = selectedDates[0] - currentDate;
      const difference = convertMs(timeMs);
      const { days, hours, minutes, seconds } = difference;
      refs.timeDays.textContent = days;
      refs.timeHours.textContent = hours;
      refs.timeMinutes.textContent = minutes;
      refs.timeSeconds.textContent = seconds;

      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timerId);
      }
    }
    function onClickStartButton() {
      if (timerId) {
        clearInterval(timerId);
      }
      timerId = setInterval(showTime, 1000);
    }

    refs.start.addEventListener('click', onClickStartButton);
  },
};

flatpickr('#datetime-picker', options);

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

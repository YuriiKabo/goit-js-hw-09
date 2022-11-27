import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  inputCalendar: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  outputDays: document.querySelector('[data-days]'),
  outputHours: document.querySelector('[data-hours]'),
  outputMinutes: document.querySelector('[data-minutes]'),
  outputSeconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const userDate = selectedDates[0];

    if (userDate < Date.now()) {
      refs.startBtn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
      Notiflix.Notify.success('Push "Start"');
    }
  },
};

flatpickr(refs.inputCalendar, options);

const counter = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const deltaTime =
        new Date(refs.inputCalendar.value).getTime() - Date.now();

      if (deltaTime <= 1000) {
        clearInterval(this.intervalId);
        Notiflix.Report.success(
          'Done!!!',
          'qweqweqwe',
          'ok',
          function reloadPage() {
            window.location.reload();
          }
        );
      }

      const { days, hours, minutes, seconds } = convertMs(deltaTime);

      updateTimeInterface({ days, hours, minutes, seconds });

      refs.startBtn.setAttribute('disabled', true);
    }, 1000);
  },
};

refs.startBtn.addEventListener('click', () => {
  counter.start(), (refs.inputCalendar.disabled = true);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}

function updateTimeInterface({ days, hours, minutes, seconds }) {
  refs.outputSeconds.textContent = `${seconds}`;
  refs.outputMinutes.textContent = `${minutes}`;
  refs.outputHours.textContent = `${hours}`;
  refs.outputDays.textContent = `${days}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

import { Notify } from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};
refs.form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  getNumbers(
    Number(refs.delay.value),
    Number(refs.step.value),
    Number(refs.amount.value)
  );
  refs.form.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function getNumbers(delay, step, amount) {
  for (let i = 1; i <= amount; i += 1) {
    delay += i === 1 ? 0 : step;
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`, {
          timeout: 2000,
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`, {
          timeout: 2000,
        });
      });
  }
}

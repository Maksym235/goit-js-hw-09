import Notiflix from 'notiflix';

const refs = {
  firstDelayIpt: document.querySelector('input[name="delay"]'),
  stepsDelayIpt: document.querySelector('input[name="step"]'),
  amountIpt: document.querySelector('input[name="amount"]'),
  form: document.querySelector('.form'),
};
// const firstInput = document.querySelector('input[name="delay"]');
// const secondInput = document.querySelector('input[name="step"]');
// const thirdInput = document.querySelector('input[name="amount"]');
// const btnSubmit = document.querySelector('button');
// const form = document.querySelector('.form');

refs.form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  let delay = Number(refs.firstDelayIpt.value);
  let step = Number(refs.stepsDelayIpt.value);
  let amount = Number(refs.amountIpt.value);
  for (let i = 1; i <= amount; i++) {
    if (i > 1) {
      delay += step;
    }
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  return promise;
}

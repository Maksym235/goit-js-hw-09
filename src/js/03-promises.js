const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onSubmit);
let firstDelay = null;
let delayStep = null;
let delayAmount = null;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}

function onSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { delay, step, amount },
  } = evt.currentTarget;

  firstDelay = Number(delay.value);
  delayStep = Number(step.value);
  delayAmount = Number(amount.value);

  for (let i = 1; i <= delayAmount; i++) {
    createPromise(i, delayAmount)
      .then(({ position, delay }) => {
        alert(`✅  Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        alert(`❌  Rejected promise ${position} in ${delay}ms`);
      });

    delayAmount += delayStep;

    evt.currentTarget.reset();
  }
}

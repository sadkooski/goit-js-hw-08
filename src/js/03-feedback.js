import throttle from 'lodash.throttle';
const emailInput = document.querySelector('input');
const messageTextarea = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');
let inputsObject = { email: '', message: '' };

function updateLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(inputsObject));
}

function currentInput(event) {
  if (event.target.type === 'email') {
    inputsObject.email = event.target.value;
    console.log(inputsObject);
  } else if (event.target.name === 'message') {
    inputsObject.message = event.target.value;
    console.log(inputsObject);
  }
  throttle(updateLocalStorage, 5000);
  updateLocalStorage();
}

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  console.log(email.value, message.value);

  localStorage.clear();
  emailInput.value = '';
  messageTextarea.value = '';
}

form.addEventListener('input', currentInput);
form.addEventListener('submit', onSubmit);

updateInputs();

function updateInputs() {
  const savedInputs = localStorage.getItem('feedback-form-state');
  console.log(savedInputs);
  const parsedInputs = JSON.parse(savedInputs);
  console.log(parsedInputs);

  emailInput.value = parsedInputs.email;
  messageTextarea.textContent = parsedInputs.message;
}

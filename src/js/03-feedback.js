import 'lodash.throttle';

const emailInput = document.querySelector('input');
const messageTextarea = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');
let inputsObject = { email: '', message: '' };

function currentInput(event) {
  if (event.target.type === 'email') {
    inputsObject.email = event.target.value;
    console.log(inputsObject);
  } else if (event.target.name === 'message') {
    inputsObject.message = event.target.value;
    console.log(inputsObject);
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(inputsObject));
}

function updateInputs() {
  const savedInputs = localStorage.getItem('feedback-form-state');
  console.log(savedInputs);
  const parsedInputs = JSON.parse(savedInputs);
  console.log(parsedInputs);

  emailInput.value = parsedInputs.email;
  messageTextarea.textContent = parsedInputs.message;
}

updateInputs();

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  console.log(email.value, message.value);

  localStorage.clear();
  emailInput.value = '';
  messageTextarea.textContent = '';
}

form.addEventListener('input', currentInput);
form.addEventListener('submit', onSubmit);

import throttle from 'lodash.throttle';
const emailInput = document.querySelector('input');
const messageTextarea = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');
let inputsObject = { email: '', message: '' };

function updateLocalStorage() {
  inputsObject.email = emailInput.value;
  inputsObject.message = messageTextarea.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(inputsObject));
}

function currentInput(event) {
  console.log(event.target);
  if (event.target.type === 'email') {
    inputsObject.email = event.target.value;
    console.log(inputsObject);
  } else if (event.target.name === 'message') {
    inputsObject.message = event.target.value;
    console.log(inputsObject);
  }

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

form.addEventListener('input', throttle(currentInput, 1000));
form.addEventListener('submit', onSubmit);

updateInputs();

function updateInputs() {
  if (localStorage.getItem('feedback-form-state')) {
    const savedInputs = localStorage.getItem('feedback-form-state');
    console.log(savedInputs);
    const parsedInputs = JSON.parse(savedInputs);
    console.log(parsedInputs);

    emailInput.value = parsedInputs.email;
    messageTextarea.textContent = parsedInputs.message;
  }
}

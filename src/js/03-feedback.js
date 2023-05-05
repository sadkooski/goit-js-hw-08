const emailInput = document.querySelector('input');
const messageTextarea = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');
let inputsObject = { email: '', message: '' };

// messageTextarea.value = 'foki';

function currentInput(event) {
  if (event.currentTarget.type === 'email') {
    inputsObject.email = event.currentTarget.value;
    console.log(inputsObject);
  } else if (event.currentTarget.name === 'message') {
    inputsObject.message = event.currentTarget.value;
    console.log(inputsObject);
  }
}

messageTextarea.addEventListener('input', currentInput);
emailInput.addEventListener('input', currentInput);

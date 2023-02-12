import throttle from 'lodash.throttle';
const feedback = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-msg';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

popularTextArea();

feedback.addEventListener('submit', onFormSubmit);
feedback.addEventListener('input', throttle(onTextInput, 500));

function onTextInput({ target }) {
  formData[target.name] = target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function popularTextArea() {
  feedback.message.value = formData.message || '';
  feedback.email.value = formData.email || '';
}

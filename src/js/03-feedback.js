import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-msg';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

popularTextArea();

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onTextInput, 500));

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
  feedbackForm.message.value = formData.message || '';
  feedbackForm.email.value = formData.email || '';
}

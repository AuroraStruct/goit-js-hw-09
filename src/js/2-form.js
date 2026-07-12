const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};
form.addEventListener('input', handleInput);

function handleInput(event) {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  form.reset();
}

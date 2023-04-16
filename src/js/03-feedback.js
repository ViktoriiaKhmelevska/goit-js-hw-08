import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const data = {
    form: document.querySelector('.js-feedback-form'),
    email: document.querySelector('.js-feedback-form input'),
    message: document.querySelector('.js-feedback-form textarea'),
}
const formData = {};

data.form.addEventListener('submit', onFormSubmit);
data.form.addEventListener('input', throttle(onInput, 500));

populateTextarea();

function onInput(e) {

    if (e.target.value) {
     formData[e.target.name] = e.target.value;
    };
    
 localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));     
};

function onFormSubmit(e) { 
    e.preventDefault();
    if ((data.email.value ==="" || data.message.value ==="")) {
        alert(`Необхідно заповнити всі поля форми`)
        return;
    };

    const res = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(res);
//   const { email, message } = e.target.elements;
//   const formData = {
//     email : email.value,
//     message: message.value
//     }
//     console.log(formData);
    formData = {};
    data.form.reset();
    localStorage.removeItem(STORAGE_KEY);
 };

function populateTextarea() {
    let savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedMessage) {
        for (const key in savedMessage) {
            data[key].value = savedMessage[key];
            formData[key]=savedMessage[key];
       }
    }
    };
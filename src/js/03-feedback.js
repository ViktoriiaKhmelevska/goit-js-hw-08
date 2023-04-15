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

function onInput(e) {
    // formData.email = "";
    // formData.message = "";
    if (e.target.value) {
        formData[e.target.name] = e.target.value;
      }
    else {
        formData[e.target.name] = "";
    }
 localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));     
};

populateTextarea();

function onFormSubmit(e) { 
    if ((data.email.value ==="" || data.message.value ==="")) {
        alert(`Необхідно заповнити всі поля форми`)
        return;
    }
    e.preventDefault();
    e.target.reset();
    const res = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(res);

    localStorage.removeItem(STORAGE_KEY);
 };

function populateTextarea() {
    let savedMessage = (JSON.parse(localStorage.getItem(STORAGE_KEY)) || "")
    if (savedMessage.email !== "") {
    data.email.value = savedMessage.email;
    }
    if (savedMessage.message !== "") {
         data.message.value = savedMessage.message;
    }
        
    // if (!(savedMessage.email === "" || savedMessage.message === "")) {
    //     data.email.value = savedMessage.email;
    //     data.message.value = savedMessage.message;
    // } else {
    //         data.email.value = "";
    // data.message.value = "";
    // }
    };
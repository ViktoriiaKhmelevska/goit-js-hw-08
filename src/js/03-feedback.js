import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const data = {
    form: document.querySelector('.js-feedback-form'),
    email: document.querySelector('.js-feedback-form input'),
    message: document.querySelector('.js-feedback-form textarea'),
}

data.form.addEventListener('submit', onFormSubmit);
// data.form.addEventListener('input', throttle(onInput, 500));
data.email.addEventListener('input', throttle(onInputEmail, 500))
data.message.addEventListener('input', throttle(onInputMessage, 500))

const formData = {};

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
    //    console.log(`email: ${res.email}, message: ${res.message}`);
    localStorage.removeItem(STORAGE_KEY);
    let props = Object.keys(formData);
        for (let i = 0; i < formData.length; i++) {
        delete formData[props[i]];
    };
 };


function onInputEmail(e) { 
        // let props = Object.keys(formData);
        // for (let i = 0; i < formData.length; i++) {
        // delete formData[props[i]];    };
    // if (e.target.email !== null) {
    //     console.log(`mail ${e.target.value}`);
    // }
    // if (e.target.message !== null) {
    //     console.log(`message ${e.target.value}`);
    // }

    if (e.target.value) {
        formData[e.target.email] = e.target.value;
    } else {
        formData[e.target.email] += e.target.value;
        }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onInputMessage(e) { 
    if (e.target.value) {
        formData[e.target.message] = e.target.value;
    } else {
        formData[e.target.message] += e.target.value;
        }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};
  console.log(formData);

function populateTextarea() {
    data.email.value = "";
    data.message.value = "";
    if (localStorage.getItem(STORAGE_KEY)===null)
    { return }
    let savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage !== {}) {
        data.email.value = savedMessage.email;
        data.message.value = savedMessage.message;
    }
    };
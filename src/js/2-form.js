const formData = {
    email: "",
    message: ""
}

const key = "feedback-form-state";
const form = document.querySelector('.feedback-form');

function start() {
    const data = localStorage.getItem(key);
    if (JSON.parse(data) == null) {
        return;
    }
    if (JSON.parse(data).email == '' && JSON.parse(data).message == '') {
        return;
    }
    form.email.value = JSON.parse(data).email;
    form.message.value = JSON.parse(data).message;
};
start();

form.addEventListener('input', handler);
function handler(event) {
    event.preventDefault();
    const { email, message } = event.currentTarget.elements;
    formData.email = email.value.trim();
    formData.message = message.value.trim();
    localStorage.setItem(key, JSON.stringify(formData));
    //console.log(formData);
};
form.addEventListener('submit', handlertwo);
function handlertwo(event) {
    event.preventDefault();
    const { email, message } = event.currentTarget.elements;
    if (email.value.trim() == '' || message.value.trim() == '') {
        window.alert('Fill please all fields')
        return;
    };
    formData.email = email.value.trim();
    formData.message = message.value.trim();
    console.log(formData);
    form.reset();
};
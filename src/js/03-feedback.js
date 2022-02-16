import throttle from 'lodash.throttle';

const refs = {
    feedbackForm: document.querySelector(".feedback-form"),
    input: document.querySelector("input[name='email']"),
    textarea: document.querySelector("textarea[name='message']"),
} 

const LOCAL_KAY = "feedback-form-state";

getLocalStorageDate();

refs.feedbackForm.addEventListener('input',throttle(onWriteLocalStorage, 500));
refs.feedbackForm.addEventListener('submit', onSubmit);


function onWriteLocalStorage() {   
    const data = {
        email: refs.input.value,
        message: refs.textarea.value
    };
    localStorage.setItem(LOCAL_KAY, JSON.stringify(data))
};

function getLocalStorageDate() {        
    if (localStorage.getItem(LOCAL_KAY)) {
        const data = JSON.parse(localStorage.getItem(LOCAL_KAY));
        refs.input.value = data.email;
        refs.textarea.value = data.message;
    };
};

function onSubmit(e) {
    if (refs.input.value && refs.textarea.value) {
        e.preventDefault();    
        console.log({ email: refs.input.value, message: refs.textarea.value });
        e.target.reset();
        localStorage.removeItem(LOCAL_KAY);
    }
    
}


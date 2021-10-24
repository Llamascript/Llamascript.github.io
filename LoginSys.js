document.addEventListener('DOMContentLoaded', () => {
    // --------- Sign in and Sign up Forms  -------------- //
    const LoginForm = document.querySelector('#Sign-in-Form');
    const SignupForm = document.querySelector('#Sign-up-Form');

    document.querySelector('#Link-Signup').addEventListener('click', () => {
        LoginForm.classList.add('form-hidden');
        SignupForm.classList.remove('form-hidden');
    });

    document.querySelector('#Link-Login').addEventListener('click', () => {
        LoginForm.classList.remove('form-hidden');
        SignupForm.classList.add('form-hidden');
    });
});
 // ------------- FORM VALIDATION ----------- //
 window.onload = start;

 const LoginForm = document.querySelector('#Sign-in-Form');
 const SignupForm = document.querySelector('#Sign-up-Form');
 const suSubmit = document.querySelector('#suSubmit') 

 var fullname = document.querySelector('#Name');
 var username = document.querySelector('#Username');
 var password = document.querySelector('#Password');
 var passConf = document.querySelector('#Confirm');
 var email = document.querySelector('#Email');

function start() {
    SignupForm.addEventListener('submit', validate, false);
}

// -------------- NAME VALIDATION --------------- //
function nameValidation() {
    if (/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/.test(fullname.value)) {
        return true;
    } else {
    alert('Your name should only have valid characters.');
    return false;
    }
 }

// ------------- USERNAME VALIDATION ------------- //
function userValidation() {
    if (/^[a-zA-Z0-9ñÑ(-._) ]+$/.test(username.value)) {
        return true;
    } else {
        alert('Choose a valid username.')
        return false;
    }
}

// ------------- PASSWORD VALIDATION ------------- //
function passValidation() {
    if (/^[a-zA-Z0-9ñÑ ]+$/.test(password.value)) {
        return true;
    } else {
        alert('Password must not contain special characters.');
        return false;
    }
}

// -------------- CONFIRM PASS VALIDATION ------------- //
function confirmPassword() {
    if (password.value === passConf.value) {
        return true;
    } else {
        alert('Your password doesn\'t match.');
        return false;
    }
}

// ------------- EMAIL VALIDATION -------------- //
function emailValidation() {
    if (!/(^[a-zA-Z(-._)0-9]+)@[a-zA-Z]+[.(com|ar|gov|net)]+.test(email.value)/.test(email.value)) {
        alert('Please, use a valid email.');
        return false;
    } else {
        return true;
    }
}

function validate(event) {
    if (!nameValidation() || !userValidation() || !passValidation() || !confirmPassword() || !emailValidation()) {
        event.preventDefault();
        return false;
    }
}

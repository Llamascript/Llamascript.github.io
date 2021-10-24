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

function start() {
    SignupForm.addEventListener('submit', validate, false);
}

// -------------- NAME VALIDATION --------------- //
function nameValidation() {
    if (/^[a-zA-Z ]+$/.test(fullname.value)) {
        return true;
    } else {
    alert('Your name should only have valid characters.');
    return false;
    }
 }

 function validate(event) {
     if (!nameValidation()) {
         event.preventDefault();
         return false;
     }
 }

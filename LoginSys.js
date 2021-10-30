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
    if (password.value == passConf.value) {
        return true;
    } else {
        alert('Your password doesn\'t match.');
        return false;
    }
}

// ------------- EMAIL VALIDATION -------------- //
function emailValidation() {
    if (!/[a-zA-Z-._0-9]+@[a-zA-Z]+.(com|ar|gov|net)+/.test(email.value)) {
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

// --------------------------------------------- //
// ------------------- MENU -------------------- //
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-item');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');
const menuIcon = document.querySelector('.menu-icon');

function toggleMenu() {
    if (menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'inline';
    } else {
        menu.classList.add('show-menu');
        closeIcon.style.display = 'inline';
        menuIcon.style.display = 'none';
    }
}

hamburger.addEventListener('click', toggleMenu);

// -------------------- EASTER EGG ----------------- //
const egg = document.querySelector('.the-egg');
const surprise = document.querySelector('.surprise')

function showSurprise() {
    if (surprise.classList.contains('hide-surprise')) {
        surprise.classList.remove('hide-surprise');
        egg.style.color = 'white';        
        alert('You found the easter egg!');
    } else {
        egg.classList.add('hide-surprise');
        egg.style.color = 'black';
    }
}

egg.addEventListener('click', showSurprise)

// ------------- CONTACT FORM VALIDATION ----------- //
window.onload = comment;

const contactForm = document.querySelector('#contact-form');
const coSubmit = document.querySelector('#coSubmit') 

var fullname = document.querySelector('#Alias');
var contactEmail = document.querySelector('#Contact-Email');

function comment() {
   contactForm.addEventListener('submit', validateContact, false);
}

   // ------------ ALIAS VALIDATION ------------ //
function aliasValidation() {
    if (/^[a-zA-Z0-9ñÑ(-._) ]+$/.test(alias.value)) {
        return true;
    } else {
        alert('Choose a valid alias.')
        return false;
    }
}
    //------------ CONTACT EMAIL VALIDATION ------ //
function contactEmailValidation() {
    if (!/[a-zA-Z-._0-9]+@[a-zA-Z]+.(com|ar|gov|net)+/.test(email.value)) {
        alert('Please, use a valid email.');
        return false;
    } else {
        return true;
    }
}

function validateContact(event) {
    if (!aliasValidation() || !contactEmailValidation()) {
        event.preventDefault();
        return false;
    }
}

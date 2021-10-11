document.addEventListener("DOMContentLoaded", () => {
    // --------- Sign in and Sign up Forms  -------------- //
    const LoginForm = document.querySelector("#Sign-in-Form")
    const SignupForm = document.querySelector("#Sign-up-Form")

    document.querySelector("#Link-Signup").addEventListener("click", () => {
        LoginForm.classList.add("form-hidden");
        SignupForm.classList.remove("form-hidden");
    });

    document.querySelector("#Link-Login").addEventListener("click", () => {
        LoginForm.classList.remove("form-hidden");
        SignupForm.classList.add("form-hidden");
    });
});
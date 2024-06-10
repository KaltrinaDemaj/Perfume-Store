const loginForm = document.querySelector("#login-form");
const loginSuccessAlert = document.querySelector(".login-submit-success");

const usernameInput = document.querySelector("#login-username");
const passwordInput = document.querySelector("#login-password");

const usernameError = document.querySelector(".username-error");
const passwordError = document.querySelector(".password-error");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    resetErrors();
    loginSuccessAlert.style.display = "none";
    loginSuccessAlert.textContent = "";

    if (validateForm()) {
        loginSuccessAlert.textContent = "Logged in successfully";
        loginSuccessAlert.style.display = "block";
    }
});

function resetErrors() {
    usernameError.textContent = "";
    passwordError.textContent = "";
}
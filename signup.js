const signupForm = document.querySelector("#signup-form");
const signupSuccessAlert = document.querySelector(".signup-submit-success");

const usernameInput = document.querySelector("#signup-username");
const emailInput = document.querySelector("#signup-email");
const passwordInput = document.querySelector("#signup-password");

const usernameError = document.querySelector(".username-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

const regexEmail =
   /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

signupForm.addEventListener("submit", function (e) {
   e.preventDefault();

   resetErrors();
   signupSuccessAlert.style.display = "none";
   signupSuccessAlert.textContent = "";

   if (validateForm()) {
      signupSuccessAlert.textContent = "Signed up successfully";
      signupSuccessAlert.style.display = "block";
   }
});
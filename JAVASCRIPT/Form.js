const signupForm = document.querySelector("#signup-form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stops default behaviour --> refresh
  console.log("Form Submitted");

  let newUser = {
    username: usernameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(newUser);

  // clearing input fields
  usernameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
});
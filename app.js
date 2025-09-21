import { getUsers, addUser } from "./db.js";

const switchFormBtn = document.getElementById("switch-forms");

switchFormBtn.addEventListener("click", switchForm);

function switchForm() {
  const login = document.querySelector(".login-container");
  const signUp = document.querySelector(".sign-up-container");

  if (login.classList.contains("hidden")) {
    // Show login, hide signup
    login.classList.remove("hidden");
    login.classList.add("block");

    signUp.classList.add("hidden");
    signUp.classList.remove("block");

    switchFormBtn.textContent = "Sign up";
  } else {
    // Show signup, hide login
    login.classList.add("hidden");
    login.classList.remove("block");

    signUp.classList.remove("hidden");
    signUp.classList.add("block");

    switchFormBtn.textContent = "Login";
  }
}

const loginForm = document.getElementById("login_form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const usernameInput = document.getElementById("login-username");
  const passwordInput = document.getElementById("login-password");

  const user = getUsers();
  if (usernameInput.value === user) {
    console.log(`welcome, ${user}!`);
  } else {
    console.log("no user");
  }
});

const signUpFrom = document.getElementById("sign_up_form");
signUpFrom.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("trying to sign up....");
  const username = document.getElementById("signup-username");
  const password = document.getElementById("signup-password");
  console.log(username);

  addUser(username.value, password.value);
});

if (localStorage.getItem("username")) {
  window.location.href = "dashboard.html";
}

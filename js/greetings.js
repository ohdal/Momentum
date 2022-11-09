const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function setGreetingText(str) {
  greeting.innerText = `Hello ${str}!`;

  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername) {
  setGreetingText(savedUsername);
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);

  function onLoginSubmit(e) {
    e.preventDefault();

    const inputValue = loginInput.value;
    localStorage.setItem(USERNAME_KEY, inputValue);
    loginInput.value = "";

    setGreetingText(inputValue);
  }

  loginForm.addEventListener("submit", onLoginSubmit);
}

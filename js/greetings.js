const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoBox = document.getElementById("todo-box");

const savedUsername = localStorage.getItem(USERNAME_KEY);

function setGreetingText(str) {
  greeting.innerText = `Hello ${str} 😎`;

  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todoBox.classList.remove(HIDDEN_CLASSNAME);
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
    
    // 그냥 새로고침 해버리기.. ^^
    location.reload();
  }

  loginForm.addEventListener("submit", onLoginSubmit);
}

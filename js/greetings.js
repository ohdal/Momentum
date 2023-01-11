const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logoutBtn = document.querySelector("#greeting button")
const greetingText = document.querySelector("#greeting div");
const todoBox = document.getElementById("todo-box");

const savedUsername = localStorage.getItem(USERNAME_KEY);

function setGreetingText(str = "") {
  if (str) {
    greetingText.innerText = `Hello ${str} 😎`;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoBox.classList.remove(HIDDEN_CLASSNAME);
  } else {
    greetingText.innerText = "";
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    todoBox.classList.add(HIDDEN_CLASSNAME);
  }
}

function logout(e) {
  const accept = window.confirm("로그아웃 하시겠습니까?")
  if (accept) {
    localStorage.removeItem(USERNAME_KEY);
    setGreetingText()
  }
}

function onLoginSubmit(e) {
  e.preventDefault();

  const inputValue = loginInput.value;
  localStorage.setItem(USERNAME_KEY, inputValue);
  loginInput.value = "";

  setGreetingText(inputValue);

  // 그냥 새로고침 해버리기.. ^^
  location.reload();
}

if (savedUsername) {
  setGreetingText(savedUsername);
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}

logoutBtn.addEventListener("click", logout);
loginForm.addEventListener("submit", onLoginSubmit);
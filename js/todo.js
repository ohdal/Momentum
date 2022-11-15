const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOLIST_KEY = "todolist"

// const userTodoList = localStorage.getItem(TODOLIST_KEY) | [];

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
}

function checkTodo(e) {
  const parent = e.target.parentElement;
  //console.log(parent.getElementByTagName("span"));
  //span.style.textDecoration = "underline";
}

function paintTodo(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const chkBtn = document.createElement("button");

  chkBtn.innerText = "✔";
  delBtn.innerText = "❌";
  span.innerText = todo;

  delBtn.addEventListener("click", deleteTodo);
  chkBtn.addEventListener("click", checkTodo);

  li.appendChild(span);
  li.appendChild(chkBtn);
  li.appendChild(delBtn);
  todoList.appendChild(li);

  userTodoList.push({text: todo, check: false});
  localStorage.setItem(TODOLIST_KEY, userTodoList)
}

function handleToDoSubmit(e) {
  e.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";
  paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit);

const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOLIST_KEY = "todolist";

let user = null;
let todos = null;

getUserInfo();
if(user) initTodos();

function getUserInfo() {
  user = localStorage.getItem(USERNAME_KEY);
  todos = JSON.parse(localStorage.getItem(user + TODOLIST_KEY)) || []
}

function initTodos() {
  getUserInfo();

  while(todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }
  
  if (todos.length > 0 && user) {
    for (let i = 0; i < todos.length; i++) {
      paintTodo(todos[i]);
    }
  }
}

function saveTodo(todo) {
  user = localStorage.getItem(USERNAME_KEY);
  localStorage.setItem(user + TODOLIST_KEY, JSON.stringify(todos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  const todoId = li.id.replace("todo-", "");

  todos = todos.filter((item) => item.id != todoId);

  li.remove();
  saveTodo();
}

function checkTodo(e) {
  const li = e.target.parentElement;
  const todoId = li.id.replace("todo-", "");

  const span = li.childNodes[0];
  const str = "checked";
  span.classList.toggle(str);

  const index = todos.findIndex((item) => item.id == todoId);
  todos[index].check = !todos[index].check

  saveTodo();
}

function paintTodo({ id, todo, check }) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const chkBtn = document.createElement("button");

  chkBtn.innerText = "✔";
  chkBtn.classList.add("btn-chk");
  delBtn.innerText = "❌";
  delBtn.classList.add("btn-del");
  span.innerText = todo;
  if (check) span.classList.add("checked")

  delBtn.addEventListener("click", deleteTodo);
  chkBtn.addEventListener("click", checkTodo);

  li.appendChild(span);
  li.appendChild(chkBtn);
  li.appendChild(delBtn);
  li.id = `todo-${id}`;
  todoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();

  const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
  const newTodo = { id, todo: todoInput.value, check: false };

  todoInput.value = "";
  todos.push(newTodo)

  paintTodo(newTodo);
  saveTodo();
}

todoForm.addEventListener("submit", handleToDoSubmit);

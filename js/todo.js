const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOLIST_KEY = "todolist";

let user = localStorage.getItem(USERNAME_KEY);
let todos = JSON.parse(localStorage.getItem(user + TODOLIST_KEY)) || [];

if (todos.length > 0 && user) {
  for (let i = 0; i < todos.length; i++) {
    paintTodo(todos[i]);
  }
}

function saveTodo(todo) {
  if (todo) todos.push(todo);
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
  const span = li.childNodes[0];
  const str = "checked";
  
  span.classList.toggle(str);
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

  paintTodo(newTodo);
  saveTodo(newTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit);

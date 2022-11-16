const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOLIST_KEY = "todolist";

let todos = JSON.parse(localStorage.getItem(TODOLIST_KEY)) || [];

if (todos.length > 0) {
  for (let i = 0; i < todos.length; i++) {
    paintTodo(todos[i]);
  }
}

function saveTodo(todo) {
  if (todo) todos.push(todo);
  console.log(todos);
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(todos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  const todoId = li.id.replace("todo-", "");

  todos = todos.filter((item) => item.id != todoId);

  li.remove();
  saveTodo();
}

function checkTodo(e) {
  const parent = e.target.parentElement;
  //console.log(parent.getElementByTagName("span"));
  //span.style.textDecoration = "underline";
}

function paintTodo({ id, todo, check }) {
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

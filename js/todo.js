const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const SQUARE_CLASSNAME = "fa-regular fa-square";
const SQUARE_CHECK_CLASSNAME = "fa-regular fa-square-check";
const DONE_CLASSNAME = "done";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}

function checkToDo(event) {
  const li = event.target.parentElement;
  const i = event.target;
  const span = li.querySelector("span");
  if (i.className === SQUARE_CLASSNAME) {
    i.className = SQUARE_CHECK_CLASSNAME;
  } else {
    i.className = SQUARE_CLASSNAME;
  }
  span.classList.toggle(DONE_CLASSNAME);

  toDos.forEach(toDo => {
    if (toDo.id === parseInt(li.id)) {
      toDo.isDone = !toDo.isDone;
    }
  });
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  const i = document.createElement("i");
  if (!newTodo.isDone) {
    i.className = SQUARE_CLASSNAME;
  } else {
    i.className = SQUARE_CHECK_CLASSNAME;
    span.className = DONE_CLASSNAME;
  }
  i.addEventListener("click", checkToDo);
  li.appendChild(i);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    isDone: false,
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
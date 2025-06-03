const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
let todos = [];
function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = todo.completed ? 'completed' : '';
    const span = document.createElement('span');
    span.textContent = todo.text;
    span.className = 'todo-text';
    span.addEventListener('click', () => toggleComplete(index));
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '&times;';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => deleteTodo(index));
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}
function addTodo(text) {
  todos.push({ text, completed: false });
  renderTodos();
}
function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text) {
    addTodo(text);
    todoInput.value = '';
    todoInput.focus();
  }
});
renderTodos();
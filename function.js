const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo();
});

function addTodo() {
    const todoText = input.value;
    if (todoText) {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = `
            <input type="checkbox">
            <span>${todoText}</span>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(todoItem);
        input.value = '';

        const checkbox = todoItem.querySelector('input[type="checkbox"]');
        const deleteButton = todoItem.querySelector('.delete-btn');

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                todoItem.classList.add('checked');
            } else {
                todoItem.classList.remove('checked');
            }
        });

        deleteButton.addEventListener('click', function () {
            todoItem.remove();
        });
    }
}
           

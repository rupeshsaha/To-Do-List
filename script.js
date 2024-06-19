
document.addEventListener('DOMContentLoaded', function() {
    const createBtn = document.getElementById('create-btn');
    const tasksContainer = document.querySelector('.task-container');

    createBtn.addEventListener('click', function() {
        // Create a new div element with class 'todos'
        const newTodoDiv = document.createElement('div');
        newTodoDiv.classList.add('todos');

        
        // Inside the new 'todos' div, add a paragraph with class 'todos-title'
        const newTodoTitle = document.createElement('p');
        newTodoTitle.classList.add('todos-title');
        newTodoTitle.textContent = 'New Task'; // Set your desired task title here

        // Append the title paragraph to the new 'todos' div
        newTodoDiv.appendChild(newTodoTitle);

        // Append the new 'todos' div to the tasks container
        tasksContainer.appendChild(newTodoDiv);
    });
});

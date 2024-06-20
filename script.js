let createBtn = document.querySelector(".create-new");
let taskContainer = document.querySelector(".task-container");
let inputTask = document.querySelector(".input-task");

createBtn.addEventListener("click", () => {
    if (inputTask.value.trim() === "") {
        alert("Task cannot be empty");
    } else {
        let newTask = document.createElement("div");
        newTask.classList.add("todos");

        let newTitle = document.createElement("p");
        newTitle.innerText = inputTask.value.trim();
        newTask.appendChild(newTitle);

        taskContainer.appendChild(newTask);
        saveData(); // Save data after adding a new task
        inputTask.value = ""; // Clear input after adding task
    }
});

// Save current state of taskContainer to localStorage
function saveData() {
    localStorage.setItem("tasks", taskContainer.innerHTML);
}

// Load tasks from localStorage and display
function loadData() {
    let savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        taskContainer.innerHTML = savedTasks;
    }
}

// Call loadData when the page loads to restore saved tasks
document.addEventListener("DOMContentLoaded", loadData);

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
        newTitle.style.fontSize = "17px";
        newTitle.style.marginLeft = "15px";
        newTitle.style.fontFamily = "monospace";

        let checkBox = document.createElement("input");
        checkBox.classList.add = "checkBox"
        checkBox.type = "checkbox";
        checkBox.style.borderRadius = "10px"
        // checkBox.style.margin = "10px"
        newTask.appendChild(checkBox);
        newTask.appendChild(newTitle);

        let delBtn = document.createElement("i");
        delBtn.classList.add("fa-solid", "fa-trash");
        delBtn.style.color = "#eb1818";
        delBtn.style.position = "absolute";
        delBtn.style.right = "10px";
        delBtn.style.margin = "2px";

        delBtn.addEventListener("click", () => {
            newTask.remove();
            saveData();
        });

        newTask.addEventListener("click", () => {
            newTitle.classList.toggle("checked");
            checkBox.checked = newTitle.classList.contains("checked");
           

            saveData();
        });

        newTask.appendChild(delBtn);
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

        // Reattach event listeners after loading tasks

        let deleteButtons = taskContainer.querySelectorAll(".fa-trash");
        deleteButtons.forEach(button => {
            button.addEventListener("click", () => {
                button.parentElement.remove();
                saveData();
            });
        });

        let taskItems = taskContainer.querySelectorAll(".todos");
        taskItems.forEach(item => {
            let checkBox = item.querySelectorAll(".checkBox");
            let taskTitle = item.querySelectorAll("p");

            checkBox.addEventListener("change", () => {
                taskTitle.classList.toggle("checked");
                saveData();
            });

            taskItems.addEventListener("click", () => {
                taskTitle.classList.toggle("checked");
                checkBox.checked = taskTitle.classList.contains("checked");
                saveData();
            });
        });
    }
}


// Call loadData when the page loads to restore saved tasks
document.addEventListener("DOMContentLoaded", loadData);

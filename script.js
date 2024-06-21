let createBtn = document.querySelector(".create-new");
let taskContainer = document.querySelector(".task-container");
let inputTask = document.querySelector(".input-task");
let delBtn

createBtn.addEventListener("click", () => {
    if (inputTask.value.trim() === "") {
        alert("Task cannot be empty");
    } 
    else
     {
        let newTask = document.createElement("div");
        newTask.classList.add("todos");

        let newTitle = document.createElement("p");
        newTitle.innerText = inputTask.value.trim();
        newTitle.style.fontSize = "17px"
        newTitle.style.fontFamily = "monospace"
        newTask.appendChild(newTitle);

        delBtn = document.createElement("i");
        delBtn.classList.add("fa-solid");   
        delBtn.classList.add("fa-trash");   
        delBtn.style.color = "#eb1818"
        delBtn.style.position = "absolute";
        delBtn.style.right = "10px";
        delBtn.style.margin = "2px"

        delBtn.addEventListener("click",()=>{
            delBtn.parentElement.remove();
            saveData()
        })

     
        
        
       
        newTask.addEventListener("click", ()=>{
            newTitle.classList.toggle("checked");
            saveData()
        })
        
       

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

// // Load tasks from localStorage and display


function loadData() {
    let savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        taskContainer.innerHTML = savedTasks;
    }

}

// // Call loadData when the page loads to restore saved tasks
document.addEventListener("DOMContentLoaded", loadData);

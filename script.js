function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskDate = document.getElementById("taskDate");

    if(taskInput.value === ""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <div>
            <strong>${taskInput.value}</strong><br>
            <small>${taskDate.value}</small>
        </div>

        <div class="actions">
            <button onclick="completeTask(this)">✓</button>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
    taskDate.value = "";
}

function completeTask(button){
    button.parentElement.parentElement.classList.toggle("completed");
}

function deleteTask(button){
    button.parentElement.parentElement.remove();
}

function editTask(button){

    let taskText =
    button.parentElement.previousElementSibling.querySelector("strong");

    let newTask = prompt("Edit Task", taskText.innerText);

    if(newTask){
        taskText.innerText = newTask;
    }
}
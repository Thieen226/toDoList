//declaring variables 
const addButton = document.getElementById("add");
const toDosContainer = document.getElementById("toDosContainer");

//add new list when clicking the button
function newTasks(){ 
    const container = document.createElement("div");
    const pElement = document.createElement("p");
    const newButton = document.createElement("button");
    const inputTask = document.getElementById("toDo").value; 
    pElement.innerText = inputTask;
    container.appendChild(pElement);
    toDosContainer.appendChild(container);
}
addButton.addEventListener("click", newTasks); 


//declaring variables 
const addButton = document.getElementById("add");
const toDosContainer = document.getElementById("toDosContainer");

function newTasks(){ 
//add new list when clicking the button
    const container = document.createElement("div");
    const pElement = document.createElement("p");
    const inputTask = document.getElementById("toDo").value; 
    const doneButton = document.createElement("button");
    const removeButton = document.createElement("button");

//adding child element in the toDosContainer and change the text inside of it based on what you put
    toDosContainer.appendChild(container);
    container.appendChild(pElement);
    pElement.innerText = inputTask;
    container.appendChild(doneButton);
    container.appendChild(removeButton);

//adding class to the elements that are created in JavaScript
    container.classList.add("container");
    pElement.classList.add("pElement");
    doneButton.classList.add("doneButton");
    removeButton.classList.add("removeButton");

//if you don't put anything in and add it, it will alert this text
if (inputTask === ""){
    alert("It is blank, you must write something!");
}
}
addButton.addEventListener("click", newTasks); 


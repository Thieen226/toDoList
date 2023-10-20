//declaring variables 
const addButton = document.getElementById("add");
const toDosContainer = document.getElementById("toDosContainer");

function newTasks(){ 
    const inputTask = document.getElementById("toDo").value; 

//if you don't put anything in and add it, it will alert this text
    if (inputTask == ""){
        alert("It is blank, you must write something!");
    }
    else{
//add new elements when clicking the button
        const container = document.createElement("div");
        const pElement = document.createElement("p");
        const doneButton = document.createElement("button");
        const removeButton = document.createElement("button");

//adding child elements in the toDosContainer and change the text inside of it based on what you put
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

//adding text to the buttons
        doneButton.textContent = "Done"
        removeButton.textContent = "Remove"
}
}

addButton.addEventListener("click", newTasks); 


export function createTask() {
    const taskDiv = document.createElement("div")


    const taskTitle = document.createElement("input")
    taskTitle.type = "text";
    taskTitle.placeholder = "Enter the title here...";
    taskDiv.appendChild(taskTitle);

    taskTitle.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            taskTitle.readOnly = true
        }
    })


    const taskDescription = document.createElement("input");
    taskDescription.type = "text";
    taskDescription.placeholder = "Enter the description here...";
    taskDiv.appendChild(taskDescription);

    taskDescription.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            taskDescription.readOnly = true
        }
    })

    const editButton = document.createElement("button")
    editButton.innerText = "edit"
    editButton.addEventListener("click", () => {
        taskDescription.readOnly = false
        taskTitle.readOnly = false
    })

    taskDiv.appendChild(editButton)

    let color_options = '#bfbebe'
    taskDiv.style.backgroundColor = color_options
    taskDiv.style.padding = "1rem"

    const taskCompleted = document.createElement("input");
    taskCompleted.type = "checkbox";
    taskDiv.appendChild(taskCompleted)
    let checkToogle = false
    taskCompleted.addEventListener("change", () => {
        if (checkToogle === false) {
            checkToogle = true
            taskTitle.style.textDecoration = "line-through"
            taskDescription.style.textDecoration = "line-through"
        }

        else {
            checkToogle = false
            taskTitle.style.textDecoration = "none"
            taskDescription.style.textDecoration = "none"
        }

    })

    


    taskDiv.style.display = "flex"


    const colors_optionsDiv = document.createElement("Div")
    const colors_optionsBtn = document.createElement("button")
    colors_optionsBtn.innerText = "Priority"
    colors_optionsDiv.appendChild(colors_optionsBtn)

    const redP = document.createElement("button")
    redP.style.backgroundColor = "red"
    const blueP = document.createElement("button")
    blueP.style.backgroundColor = "blue"
    const greenP = document.createElement("button")
    greenP.style.backgroundColor = "green"

    redP.addEventListener("click", () => {
        color_options = "#fe7b7b"
        taskDiv.style.backgroundColor = color_options
    })

    blueP.addEventListener("click", () => {
        color_options = "#a4a4e3"
        taskDiv.style.backgroundColor = color_options
    })

    greenP.addEventListener("click", () => {
        color_options = "#87cb87"
        taskDiv.style.backgroundColor = color_options
    })


    colors_optionsBtn.addEventListener("click", () => {
        colors_optionsDiv.removeChild(colors_optionsBtn)
        colors_optionsDiv.appendChild(redP)
        colors_optionsDiv.appendChild(blueP)
        colors_optionsDiv.appendChild(greenP)
    })

    taskDiv.appendChild(colors_optionsDiv)



    const removeBtn = document.createElement("button")
    removeBtn.style.backgroundColor = "red"
    removeBtn.style.color = "white"
    removeBtn.innerText = "X"
    let removed = false

    removeBtn.addEventListener("click", () => {

        taskDiv.remove();
        removed = true
    } );
    taskDiv.appendChild(removeBtn)




    document.body.appendChild(taskDiv);

    return {taskDiv,
        get removed() {
            return removed;
        }
    }
}
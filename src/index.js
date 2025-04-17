import { createTask } from "./assigment.js"

const addBtn = document.getElementById("addNewAssigment")
let flag = true
let createdTask = null;


addBtn.addEventListener("click", () => {
    if(flag){
        createdTask = createTask()
        flag = false
    } else {
        const textInputs = createdTask.taskDiv.querySelectorAll('input[type="text"]');
        let counter = 0
        textInputs.forEach(element => {
            if (element.readOnly) {
                counter++
            }
            
        });

        if(counter > 1 || createdTask.removed) {
            flag = true
        }
    }

});
    
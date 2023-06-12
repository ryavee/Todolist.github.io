const addBtn = document.querySelector("#add-btn");

const newTaskInput = document.querySelector("#wrapper input");

const tasksContainer = document.querySelector("#tasks");

const error = document.getElementById("error");

const countValue = document.querySelector(".count-value");

let taskCount = 0;

const displayCount = (taskCount) => {
    countValue.innerText = taskCount;

};

const addTask = () => {
    const taskName = newTaskInput.value.trim();
    error.style.display = "none";
    if (!taskName) {
        setTimeout(() => {
            error.style.display = "block";
        },200);
        return;
    }


const task = `<div class="task">
<input type ="checkbox" class="task-check"> 
<span class = "taskname">${taskName}</span>
 <button class="delete">
X
</button>
</div>`;

tasksContainer.insertAdjacentHTML("beforeend", task);

const deleteButtons = document.querySelectorAll(".delete");
deleteButtons.forEach((button) => {
    button.onclick = () => {
    button.parentNode.remove();
    taskCount -= 1;
    displayCount(taskCount);
    }
  });


const taskCheck = document.querySelectorAll(".task-check");
 taskCheck.forEach((checkBox) =>{
    checkBox.onchange = () => {
        checkBox.nextElementSibling.classList.toggle("completed");
       if (checkBox.checked){
        taskCount -= 1;
       }
       else {
        taskCount += 1;
       }
       displayCount(taskCount);
       }; 
    });

    taskCount +=1;
    displayCount(taskCount);
    newTaskInput.value = ""

};

addBtn.addEventListener("click", addTask);

window.onload = () => {
    taskCount = 0;
    displayCount(taskCount);
    newTaskInput.value = "";
}


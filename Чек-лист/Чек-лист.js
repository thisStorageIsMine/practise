const dialog = document.querySelector("dialog");
const textarea = document.querySelector("textarea");
const createBtn = document.querySelectorAll("button")[1];
const tasks = document.querySelector(".tasks");

const circleBefore = document.createElement("div");
const circleAfter = document.createElement("div");
circleBefore.classList.add("circle-before");
circleAfter.classList.add("circle-after");

function renderDialog() {
    if(!dialog.open) {
        dialog.style.display = "none";
        return;
    }
    dialog.style.display = "";
}

function renderTask() {
    const taskText = textarea.value;
    textarea.value = "";

    if(taskText==="") return;

    const create = document.createElement("div");
    create.classList.add("task");
    create.innerHTML = `
        <div class="circle"></div>
        <p class="task__text">${taskText}</p>
        <a href="" class="task__remove"></a>
    `;

    tasks.append(create);
}

tasks.addEventListener("click", function(event) {
    event.preventDefault();
    const circle = event.target.closest(".circle");
    const removeLink = event.target.closest(".task__remove");

    if(circle) {
        if(circle.contains(document.querySelector(".circle-before"))){
            circle.innerHTML = "";
        } else {
            circle.append(circleBefore,circleAfter);
        }
        
        return;
    }

    if(removeLink) {
        removeLink.parentNode.remove()
    }
});

renderDialog();
window.addEventListener("keydown", (event)=>{
    if(event.key==="Escape") {
        window.modal.close();
        renderDialog();
    }
});
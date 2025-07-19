"use strict";

let tasksData = JSON.parse(localStorage.getItem("tasksData")) || [];

const textInput = document.querySelector(".textInput");
const enterBtn = document.querySelector(".fa-left-long");
const taskSection = document.querySelector(".taskSection");
const deleteBtns = document.getElementsByClassName("fa-trash-can");
const tasks = document.getElementsByClassName("taskLayout");

const displayTask = function (taskArray) {
  taskSection.innerHTML = "";
  taskArray.forEach((task, i) => {
    taskSection.insertAdjacentHTML(
      `${task.completed ? "beforeend" : "afterbegin"}`,
      `<div class="taskLayout ${
        task.completed ? "taskCompleteLayout" : ""
      }" id =${i}>
        <div class="taskLayoutRight">
          <i class="fa-regular fa-square" id =${i}></i>
          <i class="fa-solid fa-square" id =${i}></i>
          <p class="taskContent" id =${i}>${task.description}</p>
        </div>
        <i class="fa-solid fa-trash-can" id =${i}></i>
      </div>`
    );
  });
};

displayTask(tasksData);

taskSection.addEventListener("click", (e) => {
  const taskID = Number(e.target.getAttribute("id"));
  if (
    !e.target.classList.contains("taskSection") &&
    !e.target.classList.contains("fa-trash-can")
  ) {
    tasksData[taskID].completed = !tasksData[taskID].completed;
    localStorage.setItem("tasksData", JSON.stringify(tasksData));
    displayTask(tasksData);
  } else if (e.target.classList.contains("fa-trash-can")) {
    tasksData.splice(taskID, 1);
    localStorage.setItem("tasksData", JSON.stringify(tasksData));
    displayTask(tasksData);
  }
});

const addTask = () => {
  // tasksData = JSON.parse(localStorage.tasksData);
  if (textInput.value) {
    tasksData.push({
      description: textInput.value,
      completed: false,
    });
    textInput.value = "";
    textInput.blur();
    localStorage.setItem("tasksData", JSON.stringify(tasksData));
    displayTask(tasksData);
  }
};

enterBtn.addEventListener("click", addTask);
textInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
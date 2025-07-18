"use strict";

const tasksData = [
  {
    description: "New Task is to be added 0 ",
    completed: false,
  },
  {
    description: "New Task is to be added 1",
    completed: false,
  },
  {
    description: "New Task is to be added 2",
    completed: false,
  },
  {
    description: "New Task is to be added 3",
    completed: false,
  },
];

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
        <i class="fa-solid fa-trash-can"></i>
      </div>`
    );
  });
};

displayTask(tasksData);

Array.from(deleteBtns).forEach((db, i) => {
  db.addEventListener("click", (e) => {
    console.log(`${i}`);
    e.stopPropagation();
  });
});

// Array.from(tasks).forEach((taskElm, i) => {
//   taskElm.addEventListener("click", () => {
//     console.log(Number(taskElm.getAttribute("id")));

//     tasksData[Number(taskElm.getAttribute("id"))].completed =
//       !tasksData[Number(taskElm.getAttribute("id"))].completed;

//     console.log(tasksData);

//     displayTask(tasksData);
//   });
// });

taskSection.addEventListener("click", (e) => {
  console.log(e.target);
  if (
    !e.target.classList.contains("taskSection") &&
    !e.target.classList.contains("fa-trash-can")
  ) {
    console.log(Number(e.target.getAttribute("id")));

    tasksData[Number(e.target.getAttribute("id"))].completed =
      !tasksData[Number(e.target.getAttribute("id"))].completed;

    console.log(tasksData);

    displayTask(tasksData);
  }
});

document.getElementById("add-task").addEventListener("click", function () {
  let taskInput = document.getElementById("task-input");
  let newTask = taskInput.value;
  if (newTask.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = newTask;
    li.className = "task";
    document.getElementById("task-list").appendChild(li);
    taskInput.value = "";
  }
});

document.getElementById("task-list").addEventListener("click", function (e) {
  if (e.target && e.target.nodeName === "LI") {
    e.target.classList.toggle("completed");
  }
});

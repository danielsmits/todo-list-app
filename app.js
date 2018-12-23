function addTask() {
  let task = document.getElementById("task").value;

  if (task.length === 0) {
    task = "empty task";
  }
  document.getElementById("task-list").insertAdjacentHTML('afterbegin', `
   <li class="collection-item">${task}
     <a href="#" class="delete-item secondary-content">
       <i class="fa fa-remove" onclick="removeTask(this)"></i>
     </a>
   </li>
  `)
}

function removeTask(task) {
  task.parentNode.parentNode.remove();
}

function clearTasks() {
  let list = document.getElementById("task-list").children;

  while (list.length > 0) {
    list[0].remove();
  }
}




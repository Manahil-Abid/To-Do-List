document.getElementById('current-date').innerText = new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

let completedCount = 0;

function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex align-items-center';
    li.innerHTML = `
      <input type="checkbox" class="me-2" onclick="completeTask(this)" />
      <span>${taskText}</span>
      <button class="btn btn-sm btn-danger ms-auto" onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function completeTask(checkbox) {
  const li = checkbox.parentElement;
  const span = checkbox.nextElementSibling;
  if (checkbox.checked) {
    span.classList.add('text-decoration-line-through', 'text-muted');
    li.classList.add('done');
    document.getElementById('completed-list').appendChild(li);
    completedCount++;
  } else {
    span.classList.remove('text-decoration-line-through', 'text-muted');
    li.classList.remove('done');
    document.getElementById('task-list').appendChild(li);
    completedCount--;
  }
  updateCompletedCount();
}

function deleteTask(button) {
  const li = button.parentElement;
  if (li.parentElement.id === 'completed-list') {
    completedCount--;
  }
  li.remove();
  updateCompletedCount();
}

function updateCompletedCount() {
  document.getElementById('completed-count').innerText = completedCount;
}

function toggleCompletedTasks() {
  const completedTasks = document.getElementById('completed-tasks');
  completedTasks.classList.toggle('show');
}

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById('tasklist');

/* ---------------- LOAD TASKS ---------------- */
document.addEventListener("DOMContentLoaded", () => loadTasks());

/* ---------------- BUTTON CLICK ---------------- */
addBtn.addEventListener('click', () => addTask());

/* ---------------- ENTER KEY SUPPORT (1️⃣) ---------------- */
taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
});


/* ---------------- ADD TASK ---------------- */
const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskObj = {
        text: taskText,
        completed: false
    };

    createTask(taskObj);
    saveTask(taskObj);

    taskInput.value = '';
}

/* ---------------- CREATE TASK ---------------- */
const createTask = (task) => {
    const li = document.createElement('li');
    li.textContent = task.text;

    if (task.completed) li.classList.add('completed');


    /* TOGGLE COMPLETE + SAVE (2️⃣) */
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
        task.completed = li.classList.contains('completed');
        updateTasks();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';

    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        li.remove();
        deleteTask(task.text);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

/* ---------------- SAVE TASK ---------------- */
const saveTask = (task) => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

/* ---------------- LOAD TASKS ---------------- */
const loadTasks = () => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => createTask(task));
}

/* ---------------- UPDATE COMPLETED STATUS ---------------- */
const updateTasks = () => {
    let tasks = [...document.querySelectorAll("#tasklist li")].map((li) => ({
        text: li.firstChild.textContent,
        completed: li.classList.contains("completed")
    }));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

/* ---------------- DELETE TASK ---------------- */
const deleteTask = (text) => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.text !== text);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


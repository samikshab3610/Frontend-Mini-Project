const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById('tasklist');

    // Load Saved task
    document.addEventListener("DOMContentLoaded", loadTasks);

    addBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        createTask(taskText);
        saveTask(taskText);

        taskInput.value = '';
    }

    function createTask(text) {
        const li = document.createElement('li');
        li.textContent = text;

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';


        deleteBtn.onclick = () => {
            li.remove();
            removeTask(text);
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    function saveTask(task) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function removeTask(task) {
        let tasks = JSON.parse(localStorage.getItem('taks')) || [];
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }
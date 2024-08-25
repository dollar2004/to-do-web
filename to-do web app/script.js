// JavaScript for To-Do List App

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const pendingTasks = document.getElementById('pendingTasks');
    const completedTasks = document.getElementById('completedTasks');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.classList.add('complete-btn');
        completeBtn.addEventListener('click', completeTask);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', editTask);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', deleteTask);

        li.appendChild(completeBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        pendingTasks.appendChild(li);

        taskInput.value = '';
    }

    // Function to complete a task
    function completeTask(event) {
        const taskItem = event.target.parentElement;
        taskItem.classList.add('completed');
        completedTasks.appendChild(taskItem);
        taskItem.removeChild(taskItem.querySelector('.complete-btn'));
    }

    // Function to edit a task
    function editTask(event) {
        const taskItem = event.target.parentElement;
        const newTaskText = prompt('Edit your task:', taskItem.firstChild.textContent);

        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskItem.firstChild.textContent = newTaskText.trim();
        }
    }

    // Function to delete a task
    function deleteTask(event) {
        const taskItem = event.target.parentElement;
        taskItem.remove();
    }

    // Event listener for the Add Task button
    addTaskBtn.addEventListener('click', addTask);

    // Optionally, you can add an event listener to allow adding tasks by pressing Enter
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

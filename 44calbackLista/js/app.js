document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    const addTask = (task) => {
        const listItem = document.createElement('li');
        listItem.textContent = task;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeTask(listItem);

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    };

    const removeTask = (taskItem) => {
        taskList.removeChild(taskItem);
    };

    addTaskButton.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task) {
            addTask(task);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const task = taskInput.value.trim();
            if (task) {
                addTask(task);
                taskInput.value = '';
                taskInput.focus();
            }
        }
    });
});

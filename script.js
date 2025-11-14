document.addEventListener('DOMContentLoaded', () => {

    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim(); 

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const removeBtn = document.createElement('button');
        
        
        removeBtn.innerHTML = '&times;'; 
        

        removeBtn.className = 'remove-btn'; 

        li.appendChild(taskSpan);
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }

    taskList.addEventListener('click', (e) => {
        const clickedElement = e.target; 

        if (clickedElement.tagName === 'SPAN') {
            clickedElement.parentElement.classList.toggle('completed');
        }

        if (clickedElement.classList.contains('remove-btn')) {
            const li = clickedElement.parentElement;
            li.remove();
        }
    });

});
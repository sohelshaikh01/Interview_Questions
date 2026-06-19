// Variables

const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
const addTask = document.getElementById('add-task');

addTask.addEventListener('click', function() {
    
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i>--</i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i> !@ </i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === "") {
        alert("Please Enter a Task");
    }
    else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";
    
    let strike = false;

    checkButton.addEventListener('click', function() {

        if(!strike) {
            checkButton.parentElement.style.textDecoration = 'line-through';
            strike = true;
        }
        else {
            checkButton.parentElement.style.textDecoration = 'none';
            console.log('This is executing');
            strike = false;
        }

    });

    deleteButton.addEventListener('click', function(e) {
        let target = e.target;
        target.parentElement.parentElement.remove();
    })

});
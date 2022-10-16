const form = document.querySelector('#newTaskForm');
const input = document.querySelector('#newTaskInput');
const listElement = document.querySelector('#tasks');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;
    if(!task) {
        return alert('Строка не может быть пустой')
    }

    const taskElement = document.createElement('div');
    taskElement.classList.add('task')

    const taskContentElement = document.createElement('div');
    taskContentElement.classList.add('content')

    taskElement.append(taskContentElement)

    const taskInputElement = document.createElement('input');
    taskInputElement.classList.add('text');
    taskInputElement.type = 'text';
    taskInputElement.value = task;
    taskInputElement.setAttribute('readonly' , 'readonly');

    taskContentElement.append(taskInputElement)

    const taskActionsElement = document.createElement('div');
    taskActionsElement.classList.add('actions');

    const taskEditElement = document.createElement('button');
    taskEditElement.classList.add('edit')
    taskEditElement.innerHTML = 'Изменить'

    const taskDeleteElement = document.createElement('button');
    taskDeleteElement.classList.add('delete')
    taskDeleteElement.innerHTML = 'Удалить';

    taskActionsElement.append(taskEditElement);
    taskActionsElement.append(taskDeleteElement);

    taskElement.append(taskActionsElement)

    listElement.append(taskElement)

    input.value = '';

    taskEditElement.addEventListener('click' , () => {
        if(taskEditElement.innerText.toLowerCase() == 'изменить'){
            taskInputElement.removeAttribute('readonly');
            taskInputElement.focus();
            taskEditElement.innerText = 'Сохранить'
        } else {
            taskInputElement.setAttribute('readonly' , 'readonly');
            taskEditElement.innerText = 'Изменить'
        }
    });
    taskDeleteElement.addEventListener('click' , () => {
        listElement.removeChild(taskElement)
    })
})
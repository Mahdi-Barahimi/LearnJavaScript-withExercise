const $ = document;
const itemInput = $.getElementById('itemInput');
const addButton = $.getElementById('addButton');
const clearButton = $.getElementById('clearButton');
const todoList = $.getElementById('todoList');
let todoArray = [];
function addNewTodo () {
    if (itemInput.value) {
        let newTodoObject = {
            id: todoArray.length + 1,
            value: itemInput.value,
            status: 'UnComplete'
        }
        itemInput.value = '';
        todoArray.push(newTodoObject);
        localStorage.setItem('todosArray', JSON.stringify(todoArray));
        createTodoElements(todoArray);
        itemInput.focus();
    }
}
function createTodoElements (arrayOfTodos) {
    todoList.innerHTML = '';
    arrayOfTodos.forEach(function (todo) {
        let newLiTodo = $.createElement('li');
        newLiTodo.className = "completed well";
        let newLabelTodo = $.createElement('label');
        newLabelTodo.innerHTML = todo.value;
        let newCompleteBtn = $.createElement('button');
        newCompleteBtn.className = "btn btn-success";
        if (todo.status === 'Complete') {
            newCompleteBtn.innerHTML = 'UnComplete';
            newLiTodo.classList.add('uncompleted');
        } else {
            newCompleteBtn.innerHTML = 'Complete';
            newLiTodo.classList.remove('uncompleted');
        }    
        newCompleteBtn.setAttribute('onclick', 'statusBtnFunction(' + todo.id + ')');
        let newDeleteBtn = $.createElement('button');
        newDeleteBtn.className = "btn btn-danger";
        newDeleteBtn.innerHTML = 'Delete';
        newDeleteBtn.setAttribute('onclick', 'removeBtnFunction(' + todo.id + ')');
        newLiTodo.append(newLabelTodo, newCompleteBtn, newDeleteBtn);
        todoList.appendChild(newLiTodo);
    })
}
window.addEventListener('load', function () {
    let todosOnLocalStorage = JSON.parse(localStorage.getItem('todosArray'));
    if (todosOnLocalStorage) {
        todoArray = todosOnLocalStorage;
        createTodoElements(todosOnLocalStorage);
    }
})
addButton.addEventListener('click', addNewTodo);
$.addEventListener('keyup', function (event) {
    if (event.key === 'Enter')
        addNewTodo()
})
clearButton.addEventListener('click', function () {
    todoArray = []
    createTodoElements(todoArray);
    localStorage.removeItem('todosArray');
})
function removeBtnFunction (todoID) {
    let todosOnLocalStorage = JSON.parse(localStorage.getItem('todosArray'));
    todoArray = todosOnLocalStorage;
    let targetTodo = todoArray.findIndex(function (todo) {
        return todo.id === todoID;
    })
    todoArray.splice(targetTodo, 1);
    localStorage.setItem('todosArray', JSON.stringify(todoArray));
    createTodoElements(todoArray);
}
function statusBtnFunction (todoID) {
    let todosOnLocalStorage = JSON.parse(localStorage.getItem('todosArray'));
    todoArray = todosOnLocalStorage;
    let targetTodo = todoArray.findIndex(function (todo) {
        return todo.id === todoID;
    })
    if (todoArray[targetTodo].status === 'Complete') {
        todoArray[targetTodo].status = 'UnComplete';
    } else {
        todoArray[targetTodo].status = 'Complete';
    }
    localStorage.setItem('todosArray', JSON.stringify(todoArray));
    createTodoElements(todoArray);
}
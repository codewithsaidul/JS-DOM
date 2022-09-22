/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Saidul Islam Rana ( Code With Saidul )
 * Date: 23/09/2022
 *
 */

 // select elements & assign them to variables

let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl  = document.querySelector('.complete-list ul');


// Function Declare
let createTask = function(task){
    let listItem = document.createElement('li');
   // let  checkBox =document.createElement('input');
    let  label = document.createElement('label');
    let button = document.createElement('button');
    
    label.innerText = 'Task';
    //checkBox.type = 'checkbox';
    button.innerText = 'Update';
    button.className = 'update';


    listItem.appendChild(button);
    listItem.appendChild(label);

 return listItem;
}

let addTask = function(event){
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";
     // bind the new list item to the incomplete list
     bindInCompleteItems(listItem, completeTask);
}
let completeTask = function(){
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);
    //let checkBox = listItem.querySelector('input[type="checkbox"]');
    //checkBox.remove();
    let button = listItem.querySelector('button');
    button.remove();
    completeUl.appendChild(listItem);
     //binding Delete Item
     bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

//Bind Checkbox

let bindInCompleteItems = function(taskItem, buttonClick){
   /* let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;*/
    let button = taskItem.querySelector('button');
    button.onclick = buttonClick;
}

let bindCompleteItems = function(taskItem, deleteBtnClick){
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteBtnClick;
}


for(let i = 0; i< todoUl.children.length; i++){
    bindInCompleteItems(todoUl.children[i], completeTask);
}
for(let i = 0; i< completeUl.children.length; i++){
    bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);
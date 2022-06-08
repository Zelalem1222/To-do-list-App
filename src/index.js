import './style.css';
const listContainer = document.getElementById('container');
const todoInput = document.querySelector('input');
const todolists = document.querySelector('.todo-container');
const clearButton = document.querySelector('button');

class listObject  {
    constructor(description , completed , index){
        this.description = description;
        this.completed = completed;
        this.index = index;
    }
}

const listArray = [
   {
       index : 1,
       description : 'wash dishes',
       completed : false
   },
   {
       index: 2,
       description: 'completed all projects',
       completed: true
   }
];

const lists = new listObject();
const displayLists = () => {
    listArray.forEach(list => {
        const todoContainer = document.createElement('div');
          todoContainer.className = 'list border-bottom';
          todoContainer.innerHTML += `
          <div>
          <input type="checkbox" class="check">
          <span>${list.description}</span>
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
          `
          todolists.append(todoContainer);
    })
}

displayLists();



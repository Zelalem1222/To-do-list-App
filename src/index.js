import './style.css';

const todolists = document.querySelector('.todo-container');
const textInput = document.querySelector('input')
class Object{
  constructor(index , description , completed){
      this.index = index;
      this.description = description;
      this.completed = completed;
  }
}

const arr = [];

const addTodo = (todoValue)=> {
    const todoContainer = document.createElement('div');
    todoContainer.className = 'list border-bottom';
    todoContainer.innerHTML += `
          <div>
          <input type="checkbox" class="check">
          <span>${todoValue}</span>
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
          `;
    todolists.append(todoContainer);
    const checkbox = document.querySelectorAll('.check');
    for (let i=0; i < checkbox.length; i++){
        checkbox[i].addEventListener('click' , ()=> {
        checkbox[i].parentElement.classList.toggle('check-box')
        })
    }
}



textInput.addEventListener('keypress' , (e)=> {
  if(e.key === 'Enter' && textInput.value) {
    e.preventDefault();  
    addTodo(textInput.value);
      textInput.value = '';
  }
})



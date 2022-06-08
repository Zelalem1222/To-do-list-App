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
          <i class="fa-solid fa-trash-can"></i>
          `;
    todolists.append(todoContainer);
    const checkbox = document.querySelectorAll('.check');
    checkbox.forEach(check => {
        check.addEventListener('click' , ()=> {
            check.parentElement.classList.toggle('check-box');
            check.nextElementSibling.classList.toggle('checked-class');
            check.parentElement.nextElementSibling.nextElementSibling.classList.toggle('delete-icon');
            check.parentElement.nextElementSibling.classList.toggle('fa-trash-can')
    })
        
     })

     const item = new Object(checkbox.length - 1 , todoValue , false  );
     arr.push(item);
     localStorage.setItem('list' , JSON.stringify(arr));
}



textInput.addEventListener('keypress' , (e)=> {
  if(e.key === 'Enter' && textInput.value) {
    e.preventDefault();  
    addTodo(textInput.value);
      textInput.value = '';
  }
})



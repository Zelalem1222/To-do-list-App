import './style.css';

const todolists = document.querySelector('.todo-container');

const listArray = [
  {
    index: 1,
    description: 'wash dishes',
    completed: false,
  },
  {
    index: 2,
    description: 'completed all projects',
    completed: true,
  },
];

const displayLists = () => {
  listArray.forEach((list) => {
    const todoContainer = document.createElement('div');
    todoContainer.className = 'list border-bottom';
    todoContainer.innerHTML += `
          <div>
          <input type="checkbox" class="check">
          <span>${list.description}</span>
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
          `;
    todolists.append(todoContainer);
  });
};

displayLists();

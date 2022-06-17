import './style.css';
import { createList } from './modules/creatList.js';
import { addTodo } from './modules/functions';



// Create list

const add = document.querySelector('.list-input');
const addList = () => {
  add.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && add.value) {
      console.log(tasks);
      tasks = addTodo(add.value, tasks);
      localStorage.setItem('list', tasks);
      e.preventDefault();
      createList();
      const listText = document.querySelectorAll('.listContent');
      for (let i = 0; i < tasks.length; i += 1) {
        if (listText[i]) {
          listText[i].textContent = tasks[i].description;
        }
      }
      add.value = null;
      localStorage.setItem('list', JSON.stringify(tasks));
    }
  });
};

addList();

// Window Load event
window.addEventListener('load', () => {
  const getLocal = JSON.parse(localStorage.getItem('list')) || [];
  for (let i = 0; i < getLocal.length; i += 1) {
    createList();
    const listText = document.querySelectorAll('.listContent');
    listText[i].textContent = getLocal[i].description;
    localStorage.setItem('list', JSON.stringify(getLocal));
  }
});

import './style.css';
import { createList } from './modules/creatList';
import { addList } from './modules/addList';

let array = [];

// Create list

addList();
// Window Load event
window.addEventListener('load', () => {
  const getLocal = JSON.parse(localStorage.getItem('list'));
  for (let i = 0; i < getLocal.length; i += 1) {
    createList();
    const listText = document.querySelectorAll('.listContent');
    listText[i].textContent = getLocal[i].description;
    localStorage.setItem('list', JSON.stringify(getLocal));

    array = getLocal;
  }
});

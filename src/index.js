import './style.css';
import { createList } from './modules/creatList.js';
import Object from "./constructor.js";




// Create list
let array = [];



const add = document.querySelector('.list-input')
export const addList = () => {
    add.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && add.value) {
          const object = new Object(add.value, false, array.length);
          array.push(object);
          e.preventDefault();
          createList();
          const listText = document.querySelectorAll('.listContent');
          for (let i = 0; i < array.length; i += 1) {
            if(listText[i]){
              listText[i].textContent = array[i].description;
            }
            
          }
          add.value = null;
          localStorage.setItem('list', JSON.stringify(array));
        }
      });
}
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

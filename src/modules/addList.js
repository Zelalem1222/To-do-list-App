import { createList } from "./creatList";
import Object from "../constructor";

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
            listText[i].textContent = array[i].description;
          }
          add.value = null;
          localStorage.setItem('list', JSON.stringify(array));
        }
      });
}

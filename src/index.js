import './style.css';
import Object from './constructor.js';


let array = [];



// Create list
const createList = () => {
  const form = document.querySelector('.form');
  const list = document.createElement('div');
  const checkboxes = document.createElement('input');
  const listText = document.createElement('span');
  const editIcon = document.createElement('i');
  const trashIcon = document.createElement('i');
 
  list.className = 'list border-bottom';
  form.appendChild(list);
  checkboxes.className = 'check';
  checkboxes.type = 'checkbox';
  listText.className = 'listContent';

  editIcon.className = 'fa-solid fa-ellipsis-vertical';
 
  trashIcon.className = 'fa-solid fa-trash-can remove';
  list.append(checkboxes, listText, editIcon, trashIcon);

  checkboxes.addEventListener('click', () => {
    editIcon.classList.toggle('display-none');
    trashIcon.classList.toggle('remove');
    listText.classList.toggle('decoration');
    list.classList.toggle('changeBg');
    const checkedBox = document.querySelectorAll('.list');

    const getLocal = JSON.parse(localStorage.getItem('list'));
    const empty = [];

    for (let i = 0; i < getLocal.length; i += 1) {
      if (checkedBox[i].classList.contains('changeBg')) {
        getLocal[i].completed = true;
      } else {
        getLocal[i].completed = false;
      }
      empty.push(getLocal[i]);
      localStorage.setItem('list', JSON.stringify(empty));
    }
  });

  const clearAll = document.querySelector('#clear');
  clearAll.addEventListener('click', () => {
    const getLocal = JSON.parse(localStorage.getItem('list'));
    const selected = document.querySelectorAll('.changeBg');
    for (let i = 0; i < selected.length; i += 1) {
      form.removeChild(selected[i]);
    }
    /* eslint-disable */
    
    const empty = [];
    for (let i = 0; i < getLocal.length; i += 1) {
      if (getLocal[i].completed === true) {
        continue;
      }
      empty.push(getLocal[i]);

    }
    localStorage.setItem('list', JSON.stringify(empty));
  });

  

  editIcon.addEventListener('click', () => {
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'listContent';
    editInput.value = listText.textContent;
    list.replaceChild(editInput, listText);
    editInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && editInput.value) {
        const getLocal = JSON.parse(localStorage.getItem('list'));
        const data = getLocal.filter((i) => i.description === listText.textContent);
        const empty = [];
        for (let i = 0; i < getLocal.length; i += 1) {
          if (getLocal[i].index === data[0].index) {
            getLocal[i].description = editInput.value;
          }
          empty.push(getLocal[i]);
          localStorage.setItem('list', JSON.stringify(empty));
        }
        list.replaceChild(listText, editInput);
        listText.textContent = editInput.value;
      }
    });
  });

   const remove = trashIcon.addEventListener('click', () => {
    let count = 0;
    form.removeChild(list);
    const getLocal = JSON.parse(localStorage.getItem('list'));
    const data = Array.from(getLocal).filter((i) => i.completed === false);
    data.map((i) => i.index = count += 1);
    count +=1;
    localStorage.setItem('list', JSON.stringify(data));
  });
};

 export const add = document.querySelector('.list-input');
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

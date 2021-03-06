import { deleteTodo } from './functions';

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

    const getLocal = JSON.parse(localStorage.getItem('list')) ?? [];
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
  
    
  
    const edit = editIcon.addEventListener('click', () => {
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
  
     const remove = () => {trashIcon.addEventListener('click', () => {
      let count = 0;
      form.removeChild(list);
      const tasks = JSON.parse(localStorage.getItem('list')) ?? [];
      const index = tasks.find((i) => i.completed !== false).index;
      const data = deleteTodo(index, tasks);
      data.map((i) => i.index = count += 1);
      count +=1;
      localStorage.setItem('list', JSON.stringify(data));
    }) };

remove();
  };

  export { createList };


  
  
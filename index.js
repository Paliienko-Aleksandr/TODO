const tasks = [
   { text: 'Buy milk', done: false , id: 1},
   { text: 'Pick up Tom from airport', done: false, id: 2},
   { text: 'Visit party', done: false, id: 3 },
   { text: 'Visit doctor', done: true, id: 4 },
   { text: 'Buy meat', done: true, id: 5 },
 ];
 
 const listElem = document.querySelector('.list');
 const checkboxElem = document.querySelector('.list__item-checkbox')
 
 const renderTasks = tasksList => {
  listElem.innerHTML = ''
   const tasksElems = tasksList
     .sort((a, b) => a.done - b.done)
     .map(({ text, done}) => {
       const listItemElem = document.createElement('li');
       listItemElem.classList.add('list__item');
       const checkbox = document.createElement('input');
       checkbox.setAttribute('type', 'checkbox');
       checkbox.setAttribute('data', 'id = 1');
       checkbox.checked = done;
       checkbox.classList.add('list__item-checkbox');
       if (done) {
         listItemElem.classList.add('list__item_done');
       }
       listItemElem.append(checkbox, text);
 
       return listItemElem;

     });
 
   listElem.append(...tasksElems);

   
   const buttonElem = document.querySelector('.create-task-btn');
   const inputElem = document.querySelector('.task-input')

   const createNewData = () =>{
     if (inputElem.value === ''){
       return
     }
    let obj = {
      text: `${inputElem.value}`,
      done: false,
    }
    tasksList.push(obj)
    renderTasks(tasks)
    }
    buttonElem.addEventListener('click', createNewData);

};
 renderTasks(tasks);
const tasks = [
   { text: 'Buy milk', done: false , id: Math.random(1)*10000/10},
   { text: 'Pick up Tom from airport', done: false, id: Math.random(1)*10000/10},
   { text: 'Visit party', done: true, id: Math.random(1)*10000/10},
   { text: 'Visit doctor', done: false, id: Math.random(1)*10000/10},
   { text: 'Buy meat', done: true, id: Math.random(1)*10000/10},
 ];
 
 const listElem = document.querySelector('.list');
 const checkboxElem = document.querySelector('.list__item-checkbox')
 
 const renderTasks = tasksList => {
  listElem.innerHTML = ''
   const tasksElems = tasksList
     .sort((a, b) => a.done - b.done)
     .map(({ text, done, id}) => {
       const listItemElem = document.createElement('li');
       listItemElem.classList.add('list__item');
       const checkbox = document.createElement('input');
       checkbox.setAttribute('type', 'checkbox');
       checkbox.setAttribute('data-id', id);
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
      id: Math.random(1)*10000/10,
    }
    tasksList.push(obj)
    renderTasks(tasks)
    }
    buttonElem.addEventListener('click', createNewData);

  const checkboxChangeStatus = (event) =>{
    tasksList.map((item) =>{
     if( item.id === +(event.target.dataset.id)){
      item.done = true
     }
     
    })
  }
  
    const checkboxElem = Array.from(document.querySelectorAll('.list__item-checkbox'))
    checkboxElem.map((item) => {
      item.addEventListener('click', checkboxChangeStatus)
    })
};
 renderTasks(tasks);

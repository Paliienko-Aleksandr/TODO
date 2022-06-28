const divElem = document.querySelector('.rect_div')
const pElem = document.querySelector('.rect_p')
const spanElem = document.querySelector('.rect_span')
const clearBtn = document.querySelector('.clear-btn')
const removeHandleds = document.querySelector('.remove-handlers-btn')
const attachHandlers = document.querySelector('.attach-handlers-btn')


const logTarget = (text, color) => {
  const eventsListItem = document.querySelector('.events-list');
  eventsListItem.innerHTML += `<span style = "color: ${color}; margin-left: 8px">${text}</span>`;
}


const logGreenDiv = logTarget.bind(null, 'DIV', 'green')
const logGreenP = logTarget.bind(null, 'P', 'green')
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green')

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey')
const logGreyP = logTarget.bind(null, 'P', 'grey')
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey')

divElem.addEventListener('click', logGreyDiv, true)
divElem.addEventListener('click', logGreenDiv)

pElem.addEventListener('click', logGreyP, true)
pElem.addEventListener('click', logGreenP)

spanElem.addEventListener('click', logGreySpan, true)
spanElem.addEventListener('click', logGreenSpan)



const clear = () =>{
  document.querySelector('.events-list').innerHTML = '';
}
clearBtn.addEventListener('click', clear)


const attach = () =>{
  divElem.addEventListener('click', logGreyDiv, true)
  divElem.addEventListener('click', logGreenDiv)
  
  pElem.addEventListener('click', logGreyP, true)
  pElem.addEventListener('click', logGreenP)
  
  spanElem.addEventListener('click', logGreySpan, true)
  spanElem.addEventListener('click', logGreenSpan)
}

attachHandlers.addEventListener('click', attach)

const remove = () =>{
  divElem.removeEventListener('click', logGreyDiv, true)
  divElem.removeEventListener('click', logGreenDiv)
  
  pElem.removeEventListener('click', logGreyP, true)
  pElem.removeEventListener('click', logGreenP)
  
  spanElem.removeEventListener('click', logGreySpan, true)
  spanElem.removeEventListener('click', logGreenSpan)
}
removeHandleds.addEventListener('click', remove)
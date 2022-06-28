const divElem = document.querySelector('.rect_div')
const pElem = document.querySelector('.rect_p')
const spanElem = document.querySelector('.rect_span')
const clearBtn = document.querySelector('.clear-btn')
const removeHandleds = document.querySelector('.remove-handlers-btn')


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
  document.querySelector('.events-list').innerText = '';
}
clearBtn.addEventListener('click', clear)



const remove = () =>{
  removeHandleds.removeEventListener('click', logTarget)
}
removeHandleds.addEventListener('click', remove)
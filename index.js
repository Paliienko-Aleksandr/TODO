// function setTitle(text){
//    let a = document.querySelector('.title')
//  a.textContent = text
//   console.log(a)
//   return text
// }
// setTitle('text')


export function getTitle(){
  let text = document.querySelector('.title').textContent

console.log(text)
return text
}
getTitle()

export function getDescription(){
  let text = document.querySelector('.about');
  text = text.innerText;
  console.log(text)
  return  text
}
getDescription()

export function getPlans(){
  let text = document.querySelector('.plans');
  text = text.innerHTML;
  console.log(text)
  return  text
}
getPlans()

export function getGoal(){
  let text = document.querySelector('.goal');
  text = text.outerHTML;
  console.log(text)
  return  text
}
getGoal()
export function getTitle(){
  const titleText = document.querySelector('.title').textContent;
  console.log(titleText)
  return titleText
}
getTitle()

export function getDescription() {
  const innerText = document.querySelector('.about').innerText
  console.log(innerText)
  return innerText
}
 getDescription()

 export function getPlans(){
   const plansText = document.querySelector('.plans').innerHTML;
   console.log(plansText)
   return plansText
 }
 getPlans()

 export function getGoal(){
   const goalText = document.querySelector('.goal').outerHTML
   console.log(goalText)
   return goalText
 }
 getGoal()


export  function getTitle(){
  const titleText = document.querySelector('p.title');
  console.log(titleText.textContent);
  return titleText.textContent;
}
getTitle()

export function getDescription() {
  const innerText = document.querySelector('p.about');
  console.log(innerText.innerText);
  return innerText.innerText;
}
 getDescription()

 export function getPlans(){
   const plansText = document.querySelector('p.plans');
   console.log(plansText.innerHTML);
   return plansText.innerHTML;
 }
 getPlans()

 export function getGoal(){
   const goalText = document.querySelector('p.goal');
   console.log(goalText.outerHTML);
   return goalText.outerHTML;
 }
 getGoal()

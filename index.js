
  function getTitle(){
  const titleText = document.querySelector('.title');
  console.log(titleText.textContent);
  return titleText.textContent;
}
getTitle()

 function getDescription() {
  const innerText = document.querySelector('.about');
  // console.log(innerText.innerText);
  return innerText.innerText;
}
 getDescription()

  function getPlans(){
   const plansText = document.querySelector('.plans');
  //  console.log(plansText.innerHTML);
   return plansText.innerHTML;
 }
 getPlans()

  function getGoal(){
   const goalText = document.querySelector('.goal');
  //  console.log(goalText.outerHTML);
   return goalText.outerHTML;
 }
 getGoal()

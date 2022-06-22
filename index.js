
 export function getItemsList(){
  const elementsList = document.querySelectorAll('.technology')
  console.dir(elementsList)
  
}
getItemsList()

 export function getItemsArray(){
  const elementsArray = document.querySelectorAll('.tool');
  console.dir(Array.from(elementsArray))
}
getItemsArray()
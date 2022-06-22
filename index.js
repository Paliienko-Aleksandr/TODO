
   function getItemsList(){
  const elementsList = document.querySelectorAll('.technology')
  console.dir(elementsList)
  return elementsList
}
getItemsList()

   function getItemsArray(){
  const elementsArray = document.querySelectorAll('.tool');
  console.dir(Array.from(elementsArray))
  return elementsArray
}
getItemsArray()
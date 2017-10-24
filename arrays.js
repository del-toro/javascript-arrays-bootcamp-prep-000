chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

/*--
addElementToBeginningOfArray
destructivelyAddElementToBeginningOfArray
addElementToEndOfArray
destructivelyAddElementToEndOfArray
accessElementInArray
destructivelyRemoveElementFromBeginningOfArray
removeElementFromBeginningOfArray
destructivelyRemoveElementFromEndOfArray
removeElementFromEndOfArray
*/

function addElementToBeginningOfArray(array,element){
   const newarray = [element, ...array];
   return newarray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);

}

function addElementToEndOfArray(array,element){
   const newarray = [...array, element];
   return newarray;
}

function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element);
}

function accessElementInArray(array,index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  const newarray = array.slice(1);
  return newarray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}
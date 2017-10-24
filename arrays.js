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
  var newarray = array;
  newarray.unshift(element);
  return newarray;
}

function addElementToEndOfArray(array,element){
   const newarray = [...array, element];
   return newarray;
}

function destructivelyAddElementToEndOfArray(array, element){
  var newarray = array;
  newarray.push(element);
  return newarray;
}

function accessElementInArray(array,index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var newarray = array;
  newarray.shift();
  return newarray;
}
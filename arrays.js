chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element){
   const newarray = [element, ...array];
   return newarray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var newarray = array;
  newarray.unshift(element);
  return newarray;
}

chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

const thing = ['dude'];
console.log(thing);


function addElementToBeginningOfArray(array,element){
   const newarray = [element, ...array];
   return newarray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}

addElementToBeginningOfArray(thing, 'yo');
//console.log(thing);

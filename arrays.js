chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

const thing = ['dude'];
console.log('0',thing);


function addElementToBeginningOfArray(array,element){
   const newarray = [element, ...array];
   return newarray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}

addElementToBeginningOfArray(thing, 'yo');
console.log('1',thing);

chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

const thing = ['dude'];
console.log(thing);
function addElementToBeginningOfArray(array,element){
   var newarray = array;
   newarray.unshift(element);
   return newarray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}


//const array = [1];
//var check1 = addElementToBeginningOfArray(array,'foo');
//var check2 = destructivelyAddElementToBeginningOfArray(array,'foo');
//console.log(check1);
//console.log(check2);


addElementToBeginningOfArray(thing, 'yo');
console.log(thing);

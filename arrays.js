var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array, n){
  var newarray = array;
  newarray.unshift(n);
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, n){
  array.unshift(n);
  return array
}

function addElementToEndOfArray(array, n){
  var newarray = array;
  return newarray.push(n);
}

function destructivelyAddElementToEndOfArray(array, n){
  return array.push(n);
}

function accessElementInArray(array, idx){
  return array[idx];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array,length - 1);
}

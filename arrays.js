var chocolateBars = ['snicker', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, newElement) {
  array = [newElement, ...array];
  return array;
}

//*function destructivelyAddElementToBeginningOfArray(array, newElement) {
//*  var newArray = [newElement, ...array];
//*  reutrn newArray;
//*}
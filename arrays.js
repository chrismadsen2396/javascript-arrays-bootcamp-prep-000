var chocolateBars = ['snicker', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var newArray = [newElement, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array];
  return array;
}
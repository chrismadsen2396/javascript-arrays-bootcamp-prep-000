var chocolateBars = ['snicker', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, newElement) {
  var newArray = [newElement, ...array]
  return newArray
}

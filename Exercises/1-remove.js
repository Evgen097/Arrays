'use strict';
// Remove item from array, modifying original array
// Don't return a value
const removeElement = (array, item) => {
  const itemIndex = array.indexOf(item);
  if (itemIndex !== -1) array.splice(itemIndex, 1);
};

// const arr = [1, 2, 3];
// removeElement(arr, 2)
// console.log(arr)

module.exports = { removeElement };

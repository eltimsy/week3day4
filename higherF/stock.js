'use strict';
function maxProfit(array) {
  let wholeArray = array;
  let differences = 0;
  let other = 0;

  wholeArray.forEach(function(element, index, array) {
    array.forEach(function(elem2, index2) {
      if(element < elem2 && index2 > index) {
        other = elem2 - element;
        if(differences <= other) {
          differences = other;
        }
      }
    });
  });
  return differences;
}

console.log(maxProfit([50, 10, 30, 14, 25, 15, 1]));

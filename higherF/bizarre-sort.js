'use strict'

function bizarreSort(array) {
  for(let number of array) {
    setTimeout(() => { console.log(number)}, number * 5);
  }
}
bizarreSort([77, 1, 60, 33, 76, 600, 0, 5]);

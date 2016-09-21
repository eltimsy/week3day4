'use strict';

function multiply(number) {
  let num1 = number;
  return (num2) =>{
    return num1 * num2;
  }
}

console.log((multiply(4))(6)); // 24

function map(array, callback) {
  let newarray = [];
  array.forEach(function(ele) {
    newarray.push(callback(ele));
  });
  return newarray;
};

console.log(map(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length }));

var array = ["ground", "control", "to", "major", "tom"];
var returnlength = array.map(function(elm) {
  return elm.length;
});

console.log(returnlength)

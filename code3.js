//the sum of all elements/numbers of a given array
function AddArrayElement(){

var sum = arr.reduce((a, i) => {
  return a + i;
});

console.log(sum)
}
var arr = [1, 2, 5, 2, 20];

AddArrayElement(arr)
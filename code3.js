//the sum of all elements/numbers of a given array


//using array reduce() method
function AddArrayElement(){

var sum = arr.reduce((a, i) => {
  return a + i;
});

console.log(sum)
}
var arr = [1, 2, 5, 2, 20];

AddArrayElement(arr)


//using loops
var arr = [1, 2, 5, 10, 20];
var sum = 0;
for (let i in arr) {
  sum += arr[i];
}
console.log(sum)
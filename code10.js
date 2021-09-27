// function digit(n){
 
//   const newdigit=s.split('')
//   console.log(newdigit.length)
// }
// digit(234)

function count(num) {
    // write your recursion code here
 if (num == 0)
        return 0;
    return 1 + count(Math.floor(num / 10));
}

console.log(count(50))
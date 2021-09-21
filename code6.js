// set method to remove duplicate 
const array=[1,2,3,4,5,4,3,6,5,2]

const unique= [...new Set(array)]

console.log(unique)


//using for loop

const ans = []
for (let i=0; i<array.length;i++){
  if(ans.indexOf(array[i])===-1){
    ans.push(array[i])
  }
}

console.log(ans)

//using filter method
console.log(array.filter((val,index)=>array.indexOf(val)==index))


//return only duplicate element
console.log(array.filter((val,index)=>array.indexOf(val)!==index))
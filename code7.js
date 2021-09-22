const array = [1,-1,3,2,-7,-5,11,6]
console.log([...array.filter(x=>x>0),...array.filter(x=>x<0)
])
//output [1,3,2,11,6,-1,-7,-5]


console.log(...arr.filter(x=>x>0),...arr.filter(x=>x<0)
)
//1 3 2 11 6 -1 -7 -5


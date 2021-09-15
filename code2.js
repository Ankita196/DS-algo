//Reverse a given string 

function ReverseString(str){
var output = str
  .split("")
  .reverse()
  .join("");

  console.log(output)
}

ReverseString('I am Ankita')
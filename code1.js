///Fibbonacci series upto n turns

function Fibbonacci(number) {
  let n1 = 0;
  let n2 = 1;
  let nextterm;

  for (let i = 0; i <= number; i++) {
    console.log(n1);
    nextterm = n1 + n2;
    n2 = n1;
    n1 = nextterm;
  }
}
//Fibbonacci(10)

// 0 1 1 2 3 5 8 13 21 34 55

//with recursion
function fib(n) {
  //if value of n is 0 or 1 
    if (n <= 1)
    //then it return accordingle 0 or 1
        return n;
        //if not 
        
    return fib(n-1) + fib(n-2);
}
 console.log(fib(10))

//recursive method

 function  fib(n)
    {
        /* Declare an array to store Fibonacci numbers. */
        //it will store n+2 itens in array
        let f = new Array(n+2); // 1 extra to handle case, n = 0
        /* 0th and 1st number of the series are 0 and 1*/
        f[0] = 0;
        f[1] = 1;
        for (let i = 2; i <= n; i++)
        {
        /* Add the previous 2 numbers in the series
            and store it */
            f[i] = f[i-1] + f[i-2];
        }
        return f[n];
    }
   //console.log(fib(0))
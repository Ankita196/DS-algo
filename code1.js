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
Fibbonacci(10)

// 0 1 1 2 3 5 8 13 21 34 55
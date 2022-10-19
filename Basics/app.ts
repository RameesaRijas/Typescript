const add1 = (n1: number, n2: number) => {
  return n1 + n2
}

//void return void
const printResult1 = (num: number): void => {
  console.log("result :" + num)
}

printResult1(add1(5, 6))
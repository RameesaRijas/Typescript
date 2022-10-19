const add1 = (n1: number, n2: number) => {
  return n1 + n2
}

//void return void
const printResult1 = (num: number): void => {
  console.log("result :" + num)
}

const addAndHandle = (num1: number, num2: number, cb: (num: number) => void) => {
  const result = num1 + num2;
  cb(result)
}

printResult1(add1(5, 6))

//let combineValues: Function;
//making function type getiing 2 number variable expecting to return number
let combineValues:(a: number, b:number) => number;
combineValues = add1;

console.log(combineValues(6, 7))

//callback function
addAndHandle(10, 20, (result) => { console.log(result)})
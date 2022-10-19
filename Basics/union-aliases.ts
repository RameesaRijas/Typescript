type combinable = number | string;
type conversionDescriptor =  "as-number" | "as-text";
const addFunction = (num1: combinable , num2: combinable, outputMode: conversionDescriptor) => {
  if(typeof num1 === "number" && typeof num2 === "number" || outputMode === 'as-number') {
    return +num1 + +num2
  } else {
    return num1.toString() + num2.toString()
  }

}




const combinedAge = addFunction(2, 6, 'as-number')
console.log(combinedAge);

const combined = addFunction('2', '16', 'as-number')
console.log(combined);

const combineName = addFunction("max", "age", 'as-text');
console.log(combineName);
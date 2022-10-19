var addFunction = function (num1, num2, outputMode) {
    if (typeof num1 === "number" && typeof num2 === "number" || outputMode === 'as-number') {
        return +num1 + +num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
};
var combinedAge = addFunction(2, 6, 'as-number');
console.log(combinedAge);
var combined = addFunction('2', '16', 'as-number');
console.log(combined);
var combineName = addFunction("max", "age", 'as-text');
console.log(combineName);

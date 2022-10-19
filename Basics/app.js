var add1 = function (n1, n2) {
    return n1 + n2;
};
//void return void
var printResult1 = function (num) {
    console.log("result :" + num);
};
var addAndHandle = function (num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
};
printResult1(add1(5, 6));
//let combineValues: Function;
var combineValues;
combineValues = add1;
console.log(combineValues(6, 7));
addAndHandle(10, 20, function (result) { console.log(result); });

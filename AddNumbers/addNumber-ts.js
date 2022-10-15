var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var button = document.querySelector("button");
var add = function (num1, num2) {
    return num1 + num2;
};
button.addEventListener('click', function () { return console.log(add(+number1.value, +number2.value)); });

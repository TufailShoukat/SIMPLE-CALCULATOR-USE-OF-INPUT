var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var answerCalculator = document.getElementById("answerCalculator");
function Calculator(sign) {
    var num1 = input1.value
    var num2 = input2.value
    if (sign == "+")  answerCalculator.innerText = +num1 + +num2;
    if (sign == "-") answerCalculator.innerText = num1 - num2
    if (sign == "/") answerCalculator.innerText = num1 / num2;
    if (sign == "*") answerCalculator.innerText = num1 * num2;
    
    
}

































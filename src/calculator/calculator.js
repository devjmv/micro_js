function isNumber(d) {
    return d === Number(d)
}

function calculator(num1, num2, operator) {
    if (!isNumber(num1) || !isNumber(num2))
        return "unknown value"
    if (!(operator == "/" || operator == "*" || operator == "-" || operator == "+"))
        return "unknown value"
    if (operator == "/")
        return num1 / num2
    if (operator == "*")
        return num1 * num2
    if (operator == "-")
        return num1 - num2
    if (operator == "+")
        return num1 + num2
}

console.log(calculator(1, 2, "+"));//=> result will be 3
console.log(calculator(1, 2, "&"));//=> result will be "unknown value"
console.log(calculator(1, "k", "*")); //=> result will be "unknown value"
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

function suma() {
    if ((num1.value.length == 0) || (num2.value.length == 0))
        result.innerHTML = `Debe introducir los dos numeros.`
    else {
        let suma = parseInt(num1.value) + parseInt(num2.value)
        result.innerHTML = `La suma de ${num1.value} + ${num2.value} = ${suma}`
    }
};
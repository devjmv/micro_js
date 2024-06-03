const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

function comparar() {
    if ((num1.value.length == 0) || (num2.value.length == 0))
        result.innerHTML = `Debe introducir los dos numeros.`
    else if (parseInt(num1.value) > parseInt(num2.value))
        result.innerHTML = `El mayor es el ${num1.value}`
    else
        result.innerHTML = `El mayor es el ${num2.value}`
};
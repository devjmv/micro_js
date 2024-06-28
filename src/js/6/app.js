const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const result = document.getElementById('result');

//compara tres numeros y devuelve el mayor
function comparar() {
    if ((num1.value.length == 0) || (num2.value.length == 0) || (num3.value.length == 0))
        result.innerHTML = `Debe introducir todos los numeros.`
    else {
        let mayor = parseInt(num1.value)
        if (parseInt(num2.value) > mayor)
            mayor = parseInt(num2.value)
        if (parseInt(num3.value) > mayor)
            mayor = parseInt(num3.value)
        result.innerHTML = `El mayor es el ${mayor}`
    }

};
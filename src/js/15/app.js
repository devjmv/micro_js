const num1 = document.getElementById('num1');
const result = document.getElementById('result');


function esPrimo(numero) {
    if (numero <= 1) return false; // 0 y 1 no son primos
    for (var i = 2; i <= Math.sqrt(numero); i++) {// el for tiene como limite la mitad del numero introducido
        if (numero % i === 0) return false; // si es divisible, no es primo
    }
    return true; // si no es divisible por ninguno, es primo
}

//verifica si un numero es primo
function divisible() {
    if ((num1.value.length == 0))
        result.innerHTML = `Debe introducir el numero.`
    else {
        if (esPrimo(num1.value))
            result.innerHTML = `El numero es primo`
        else
            result.innerHTML = `El numero no es primo`
    }
};
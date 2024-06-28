const num1 = document.getElementById('num1');
const result = document.getElementById('result');

//ve si a es divisible por b utilizando % que devuelve 0 en caso de serlo
function esDivisible(a, b) {
    if (a % b === 0) {
        return true;
    } else {
        return false;
    }
}

//verifico que el numero introducido sea divisible por 2, 3, 5, 7
function divisible() {
    if ((num1.value.length == 0))
        result.innerHTML = `Debe introducir los dos numeros.`
    else {
        const numero = parseInt(num1.value)
        if (esDivisible(numero, 2) == true || esDivisible(numero, 3) == true || esDivisible(numero, 5) == true || esDivisible(numero, 7) == true)
            result.innerHTML = `Es divisible`
        else
            result.innerHTML = `No es divisible`
    }
};
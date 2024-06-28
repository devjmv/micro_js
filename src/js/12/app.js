const num1 = document.getElementById('num1');
const result = document.getElementById('result');

function esDivisible(a, b) {
    if (a % b === 0) {
        return true;
    } else {
        return false;
    }
}

function divisible() {
    if ((num1.value.length == 0))
        result.innerHTML = `Debe introducir los dos numeros.`
    else {
        const numero = parseInt(num1.value)
        let divisor = 0
        if (esDivisible(numero, 2) == true || esDivisible(numero, 3) == true || esDivisible(numero, 5) == true || esDivisible(numero, 7) == true) {
            if (esDivisible(numero, 2) == true)
                divisor = 2
            if (esDivisible(numero, 3) == true)
                divisor = 3
            if (esDivisible(numero, 5) == true)
                divisor = 5
            if (esDivisible(numero, 7) == true)
                divisor = 7
            result.innerHTML = `Es divisible por ${divisor}`
        }
        else
            result.innerHTML = `No es divisible`
    }
};
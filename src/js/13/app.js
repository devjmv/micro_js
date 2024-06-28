const num1 = document.getElementById('num1');
const result = document.getElementById('result');

//ve si los numeros iguales o menores que el numero entrado son divisibles por el y los guarda en un array que es retornado
function getDivisors(num) {
    let divisors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  }

  //optengo los divisores de un numero y los muestro recoriendo el array optenido de getDivisors
function divisible() {
    if ((num1.value.length == 0))
        result.innerHTML = `Debe introducir el numero.`
    else {
        const divisors = getDivisors(num1.value);
        let divisibles = ""
        divisors.forEach(element => {
            divisibles += `${element}, `
        });
        result.innerHTML = `Los divisibles son: ${divisibles}`
    }
};
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

function encontrarDivisoresComunes(a, b) {
  let divisores = [];
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      divisores.push(i);
    }
  }
  return divisores;
}

function divisible() {
    if ((num1.value.length == 0) || (num2.value.length == 0))
        result.innerHTML = `Debe introducir ambos numeros.`
    else {
        const divisors = encontrarDivisoresComunes(num1.value, num2.value);
        let divisibles = ""
        divisors.forEach(element => {
            divisibles += `${element}, `
        });
        result.innerHTML = `Los divisores comunes son: ${divisibles}`
    }
};
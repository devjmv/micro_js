const num1 = document.getElementById('num1');
const result = document.getElementById('result');

function getDivisors(num) {
    let divisors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  }

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
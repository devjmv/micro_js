const frase = document.getElementById('frase');
const result = document.getElementById('result');

function revisa() {
    frase.value
    if (frase.value.length == 0)
        result.innerHTML = `Debe introducir una frase.`
    else {
        let contador = 0;
        let palabras = frase.value.split(" ");
        for (let palabra of palabras) {
            for (let letra of palabra) {
                if (letra === "a" || letra === "A" || letra === "e" || letra === "E" || letra === "i" || letra === "I" || letra === "o" || letra === "O" || letra === "u" || letra === "U") {
                    contador++;
                }
            }
        }
        result.innerHTML = `La frase tiene ${contador} "Vocales".`
    }
};
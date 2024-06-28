const frase = document.getElementById('frase');
const result = document.getElementById('result');

function revisa() {
    frase.value
    if (frase.value.length == 0)
        result.innerHTML = `Debe introducir una frase.`
    else {
        let contador = "";
        //separo el string en palabras luego recoro cada letra de esa palabra y busco si es a, e, i, o, u
        let palabras = frase.value.split(" ");
        for (let palabra of palabras) {
            for (let letra of palabra) {
                if (letra === "a" || letra === "A") {
                    contador += "a, "
                }
                if (letra === "e" || letra === "E") {
                    contador += "e, "
                }
                if (letra === "i" || letra === "I") {
                    contador += "i, "
                }
                if (letra === "o" || letra === "O") {
                    contador += "o, "
                }
                if (letra === "u" || letra === "U") {
                    contador += "u, "
                }
            }
        }
        if (contador != "")
            result.innerHTML = `La frase tiene las vocales: ${contador}`
        else
            result.innerHTML = `No hay vocales.`
    }
};
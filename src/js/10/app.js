const frase = document.getElementById('frase');
const result = document.getElementById('result');

function revisa() {
    frase.value
    if (frase.value.length == 0)
        result.innerHTML = `Debe introducir una frase.`
    else {
        let a = 0;
        let e = 0;
        let i = 0;
        let o = 0;
        let u = 0;
        //separo el string en palabras luego recoro cada letra de esa palabra y busco si es a, e, i, o, u y cuanto cuantas son de cada tipo
        let palabras = frase.value.split(" ");
        for (let palabra of palabras) {
            for (let letra of palabra) {
                if (letra === "a" || letra === "A") {
                    a++
                }
                if (letra === "e" || letra === "E") {
                    e++
                }
                if (letra === "i" || letra === "I") {
                    i++
                }
                if (letra === "o" || letra === "O") {
                    o++
                }
                if (letra === "u" || letra === "U") {
                    u++
                }
            }
        }
        result.innerHTML = `Cantidad de vocales y numero en que aparecen: a: ${a}, e: ${e}, i: ${i}, o: ${o}, u: ${u},`
    }
};
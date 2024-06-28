const frase = document.getElementById('frase');
const result = document.getElementById('result');

function revisa() {
    frase.value
    if (frase.value.length == 0)
        result.innerHTML = `Debe introducir una frase.`
    else {
        let contador = 0;
        //separo el string en palabras luego recoro cada letra de esa palabra y busco si es a
        let palabras = frase.value.split(" ");
        for (let palabra of palabras) {
            for (let letra of palabra) {
                if (letra === "a" || letra === "A" ) {
                    contador++;
                }
            }
        }
        result.innerHTML = `La frase tiene ${contador} "a".`
    }
};
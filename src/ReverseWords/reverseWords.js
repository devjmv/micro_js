let cadenaADividir = prompt('Introdusca la cadena a invertir','')
const textoAMostrar = cadenaADividir.split(' ').reverse().join(' ')
document.getElementById('reversewords').innerHTML=textoAMostrar;
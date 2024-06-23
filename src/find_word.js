process.stdout.write("Entra el texto: ");

export function analizaTexto(text) {
    text = text.toUpperCase();
    if (text.includes('ENGLISH')) {
        return true;
    }
    else {
        return false;
    }
};

//var text = "el texto";
//text = text.toUpperCase();
//
//if (text.includes('ENGLISH')) {
//    console.log(true);
//}
//else {
//    console.log(false);
//}
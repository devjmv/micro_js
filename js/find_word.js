process.stdout.write("Entra el texto: ");

export function analizaTexto(text) {
    process.stdin.on('data', function (data) {
        text = data.toString();
        text = text.toUpperCase();
        if (text.includes('ENGLISH')) {
            console.log(true);
        }
        else {
            console.log(false);
        }
        process.exit();
    });
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
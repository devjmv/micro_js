var text;

process.stdout.write("Entra el texto: ");

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

//text = text.toUpperCase();
//
//if (text.includes('ENGLISH')) {
//    console.log(true);
//}
//else {
//    console.log(false);
//}
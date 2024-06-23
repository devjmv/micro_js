import { analizaTexto } from "find_word.js";
import { printTerminal } from "printData.js";

process.stdin.on('data', function (data) {
    printTerminal(analizaTexto(data.toString()));
    process.exit();
});
import { analizaTexto } from "./js/find_word.js";
import { printTerminal } from "./js/printData.js";

process.stdin.on('data', function (data) {
    printTerminal(analizaTexto(data.toString()));
    process.exit();
});
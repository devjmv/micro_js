const nombre = document.getElementById('name');
const result = document.getElementById('result');

nombre.addEventListener("keyup", ()=>{
    result.innerHTML = `Hola ${nombre.value}`
}, false);
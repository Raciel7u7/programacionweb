const formulario = document.getElementById("calculadora");
const inputPesos = document.getElementById("pesos");
const inputResultado = document.getElementById("resultado");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const pesos = parseFloat(inputPesos.value);
    const dolares = pesos * 0.055;
    
    if (Number.isInteger(dolares)) {
        inputResultado.value = `${dolares} USD`;
    } else {
        inputResultado.value = `${dolares.toFixed(2)} USD`;
    }
});

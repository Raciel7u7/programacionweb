const formulario = document.getElementById("calculadora");
const inputKilometros = document.getElementById("kilometros");
const inputResultado = document.getElementById("resultado");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const kilometros = parseFloat(inputKilometros.value);
    const millas = kilometros * 0.621371;
    
    if (Number.isInteger(millas)) {
        inputResultado.value = `${millas} millas`;
    } else {
        inputResultado.value = `${millas.toFixed(5)} millas`;
    }
});

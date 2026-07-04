const formulario = document.getElementById("calculadora");
const inputEdad = document.getElementById("edad");
const inputResultado = document.getElementById("resultado");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const edad = parseFloat(inputEdad.value);
    let resultado = "";

    if (edad >= 18) {
        resultado = "Puedes votar ;)";
    } else {
        resultado = "No puedes votar :(";
    }
    inputResultado.value = resultado;
});


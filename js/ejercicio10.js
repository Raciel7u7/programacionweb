const formulario = document.getElementById("calculadora");
const inputCelsius = document.getElementById("celsius");
const inputResultado = document.getElementById("resultado");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const celsius = parseFloat(inputCelsius.value);
    if(isNaN(celsius)) {
        inputResultado.value = "Ingrese un número válido";
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    if (Number.isInteger(fahrenheit)) {
        inputResultado.value = `${fahrenheit}°F`;
    } else {
        inputResultado.value = `${fahrenheit.toFixed(2)}°F`;
    }
});

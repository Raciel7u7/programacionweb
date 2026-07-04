const formulario = document.getElementById("calculadora");
const inputResultado1 = document.getElementById("resultado1");
const inputResultado2 = document.getElementById("resultado2");
const inputResultado3 = document.getElementById("resultado3");


formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    let numeros = document.getElementById("numeros").value.split(",").map(Number);
    let maximo = Math.max(...numeros);
    let minimo = Math.min(...numeros);
    let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    let promedio = suma / numeros.length;

    inputResultado1.value = `Máximo: ${maximo}`;
    inputResultado2.value = `Mínimo: ${minimo}`;
    inputResultado3.value = `Promedio: ${promedio.toFixed(2)}`;

});

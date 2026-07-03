const ejercicios = [
    {
        id: "01",
        titulo: "Ejercicio 1",
        descripcion: "Hola Mundo desde HTML",
        enlace: "ejercicio1.html"
    },
    {
        id: "02",
        titulo: "Ejercicio 2",
        descripcion: "Etiquetas de texto: párrafos y encabezados/titulos",
        enlace: "ejercicio2.html"
    },
    {
        id: "03",
        titulo: "Ejercicio 3",
        descripcion: "Etiqueta de enlaces",
        enlace: "ejercicio3.html"
    },
    {
        id: "04",
        titulo: "Ejercicio 4",
        descripcion: "Etiqueta de imagenes",
        enlace: "ejercicio4.html"
    },
    {
        id: "05",
        titulo: "Ejercicio 5",
        descripcion: "Integración de etiquetas de texto, enlaces e imagenes",
        enlace: "ejercicio5.html"
    },
    {
        id: "06",
        titulo: "Ejercicio 6",
        descripcion: "Etiquetas de secciones",
        enlace: "ejercicio6.html"
    },
    {
        id: "07",
        titulo: "Ejercicio 7",
        descripcion: "Etiquetas de listas",
        enlace: "ejercicio7.html"
    },
    {
        id: "08",
        titulo: "Ejercicio 8",
        descripcion: "Tablas",
        enlace: "ejercicio8.html"
    },
    {
        id: "09",
        titulo: "Ejercicio 9",
        descripcion: "Formularios",
        enlace: "ejercicio9.html"
    },
    {
        id: "10",
        titulo: "Ejercicio 10",
        descripcion: "Calculadora de Grados Celsius a Fahrenheit",
        enlace: "ejercicio10.html"
    }
];

const contenedor = document.getElementById("contenedor-cards");
ejercicios.forEach(ejercicio => {
    const tarjetaHTML = `
        <article class="card-ejercicio">
            <div class="card-wrapper">
                <h2>${ejercicio.titulo}</h2>
                <p class="card-desc">${ejercicio.descripcion}</p>
                <a href="${ejercicio.enlace}" class="card-btn">Explorar Módulo</a>
            </div>
        </article>
    `;
    
    contenedor.innerHTML += tarjetaHTML;
});
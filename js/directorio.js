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
    },
    {
        id: "11",
        titulo: "Ejercicio 11",
        descripcion: "Calculadora: Kilometros a Millas",
        enlace: "ejercicio11.html"
    },
    {
        id: "12",
        titulo: "Ejercicio 12",
        descripcion: "Calculadora: Pesos Mexicanos (MXN) a Dólares (USD)",
        enlace: "ejercicio12.html"
    },
    {
        id: "13",
        titulo: "Ejercicio 13",
        descripcion: "Verificación de edad para votar",
        enlace: "ejercicio13.html"
    },
    {
        id: "14",
        titulo: "Ejercicio 14",
        descripcion: "Operaciones sobre números",
        enlace: "ejercicio14.html"
    },
    {
        id: "15",
        titulo: "Ejercicio 15",
        descripcion: "Objetos en JavaScript",
        enlace: "ejercicio15.html"
    },
    {
        id: "16",
        titulo: "Ejercicio 16",
        descripcion: "Funciones flecha",
        enlace: "ejercicio16.html"
    },
    {
        id: "17",
        titulo: "Ejercicio 17",
        descripcion: "Gestion de tareas con JSON y LOCALSTORE",
        enlace: "ejercicio17.html"
    },
    {
        id: "18",
        titulo: "Ejercicio 18",
        descripcion: "Manipulacion del DOM",
        enlace: "ejercicio18.html"
    },
    {
        id: "19",
        titulo: "Ejercicio 19",
        descripcion: "Manipulacion del DOM",
        enlace: "ejercicio19.html"
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
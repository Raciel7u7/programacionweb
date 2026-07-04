const formulario = document.getElementById("calculadora");
const cuerpoTabla = document.getElementById("cuerpo-tabla");

const inputNombre = document.getElementById("nombre");
const inputCalificacion = document.getElementById("calificacion");
const inputPromedio = document.getElementById("promedio");
const inputCalAlta = document.getElementById("calAlta");
const inputCalBaja = document.getElementById("calBaja");

let estudiantes = [];

function agregarEstudiante() {
    let estudiante = {
        nombre: inputNombre.value,
        calificacion: parseFloat(inputCalificacion.value)
    }
    estudiantes.push(estudiante);
}

function crearFilasTabla() {
    const filas = estudiantes.map(estudiante => `
        <tr>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.calificacion}</td>
        </tr>
    `);
    cuerpoTabla.innerHTML = filas.join("");
}

function limpiarCampos() {
    inputNombre.value = "";
    inputCalificacion.value = "";
    inputNombre.focus();
}

function calcularPromedio() {
    let promedio = estudiantes.reduce((total, estudiante) => total +
        estudiante.calificacion, 0) / estudiantes.length;
    inputPromedio.value = promedio.toFixed(2);
}

function calcularCalificaciones() {
    let calificacionAlta = Math.max(...estudiantes.map(e =>
        e.calificacion));
    let estudianteAlta = estudiantes.find(e => e.calificacion === calificacionAlta);
    
    let calificacionBaja = Math.min(...estudiantes.map(e =>
        e.calificacion));
    let estudianteBaja = estudiantes.find(e => e.calificacion === calificacionBaja);

    inputCalAlta.value = `Nombre: ${estudianteAlta.nombre}, Calificación: ${estudianteAlta.calificacion}`;
    inputCalBaja.value = `Nombre: ${estudianteBaja.nombre}, Calificación: ${estudianteBaja.calificacion}`;
}  

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const accion = event.submitter.value;

    switch(accion) {
        case "agregar":
            agregarEstudiante();
            crearFilasTabla();
            limpiarCampos();
            break;
        case "calcular":
            if(estudiantes.length > 0) {
                calcularPromedio();
                calcularCalificaciones();
            } else {
                inputPromedio.value = "";
                inputCalAlta.value = "";
                inputCalBaja.value = "";
                alert("Debes agregar al menos un estudiante antes de calcular");
            }
            break;
        default:
            break;  
    }
});
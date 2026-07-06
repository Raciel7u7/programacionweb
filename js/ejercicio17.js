const inputTarea = document.getElementById("nueva-tarea");
const btnAgregar = document.getElementById("btn-agregar");
const contenedorLista = document.getElementById("lista-tareas");

const manejarTareas = (() => {
    
    const obtenerTareas = () => {
        const tareasJSON = localStorage.getItem("tareas");
        return tareasJSON ? JSON.parse(tareasJSON) : [];
    };

    const guardarTareas = (tareas) => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    };

    const agregarTarea = (descripcion) => {
        const tareas = obtenerTareas();
        tareas.push({ id: Date.now(), descripcion });
        guardarTareas(tareas);
    };

    const eliminarTarea = (id) => {
        let tareas = obtenerTareas();
        tareas = tareas.filter(tarea => tarea.id !== id);
        guardarTareas(tareas);
    };

    return {
        obtener: obtenerTareas,
        agregar: agregarTarea,
        eliminar: eliminarTarea
    };
})();

const renderizarTareas = () => {
    contenedorLista.innerHTML = "";
    
    const tareas = manejarTareas.obtener();

    if (tareas.length === 0) {
        contenedorLista.innerHTML = "<p style='text-align:center; color: #8c8c8c;'>No hay tareas pendientes.</p>";
        return;
    }

    tareas.forEach(({ id, descripcion }) => {
        const item = document.createElement("div");
        item.style.display = "flex";
        item.style.justifyContent = "space-between";
        item.style.alignItems = "center";
        item.style.marginBottom = "8px";
        
        item.innerHTML = `
            <span>${descripcion}</span>
            <button type="button" onclick="confirmarEliminacion(${id})" style="margin: 0; padding: 4px 8px; font-size: 0.85em;">Eliminar</button>
        `;
        contenedorLista.appendChild(item);
    });
};

btnAgregar.addEventListener("click", () => {
    const descripcion = inputTarea.value.trim();

    if (descripcion === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campo obligatorio',
            text: 'Debes ingresar una descripción válida para la tarea.',
            confirmButtonColor: '#3085d6'
        });
        return;
    }

    manejarTareas.agregar(descripcion);
    inputTarea.value = "";
    renderizarTareas();    
});


const confirmarEliminacion = (id) => {
    Swal.fire({
        title: '¿Eliminar tarea?',
        text: "Esta acción no se puede deshacer.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            manejarTareas.eliminar(id);
            renderizarTareas();
            Swal.fire({
                title: 'Eliminado',
                text: 'La tarea ha sido borrada.',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            });
        }
    });
};

document.addEventListener("DOMContentLoaded", renderizarTareas);
const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

const agregarElemento = () => {
    const texto = input.value.trim();

    if (texto !== '') {
        const li = document.createElement('li');
        
        li.classList.add('list-group-item', 'elemento', 'd-flex', 'justify-content-between', 'align-items-center');
        
        const textoNodo = document.createTextNode(texto);
        li.appendChild(textoNodo);

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm');

        botonEliminar.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(botonEliminar);
        lista.appendChild(li);

        input.value = '';
        input.focus();
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Escribe algo válido para poder agregarlo a la lista.',
            confirmButtonColor: '#0d6efd'
        });
    }
};

botonAgregar.addEventListener('click', agregarElemento);

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        agregarElemento();
    }
});
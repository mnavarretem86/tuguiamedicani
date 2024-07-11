document.getElementById('comentarioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;

    fetch('https://tuguiamedicani.com/comentarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, comentario })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById('nombre').value = ''; // Limpiar el campo nombre
        document.getElementById('comentario').value = ''; // Limpiar el campo comentario
        cargarComentarios();
    });
});

function cargarComentarios() {
    fetch('https://tuguiamedicani.com/comentarios')
    .then(response => response.json())
    .then(data => {
        const comentariosDiv = document.getElementById('comentarios');
        comentariosDiv.innerHTML = '';
        data.forEach(comentario => {
            const comentarioElem = document.createElement('div');
            comentarioElem.innerHTML = `
                <div class="comment-text">${comentario.nombre}: ${comentario.comentario}</div>
                <div class="comment-date">${formatFecha(comentario.fecha)}</div>
            `;
            comentariosDiv.appendChild(comentarioElem);
        });
    });
}

function formatFecha(fechaString) {
    const fecha = new Date(fechaString);
    return fecha.toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' });
}

cargarComentarios();

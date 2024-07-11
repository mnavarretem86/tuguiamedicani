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
            comentarioElem.innerText = `${comentario.nombre}: ${comentario.comentario} (${comentario.fecha})`;
            comentariosDiv.appendChild(comentarioElem);
        });
    });
}

cargarComentarios();
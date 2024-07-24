document.addEventListener('DOMContentLoaded', function () {
    let hospitalLocation = [12.12509248146829, -86.23649794601968];
    let map = L.map('map').setView(hospitalLocation, 13);

      // Definir capas base
    let osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });


    // Añadir capa base por defecto
    osmLayer.addTo(map);


    // Añadir marcador del hospital
    let marker = L.marker(hospitalLocation).addTo(map)
        .bindPopup('Hospital "La Mascota" <br><a href="https://www.google.com/maps/dir/?api=1&destination=12.12509248146829,-86.23649794601968" target="_blank">Ir con Google Maps</a><br><a href="https://waze.com/ul?ll=12.147682835239348,-86.29887787617419&navigate=yes" target="_blank">Ir con Waze</a>')
        .openPopup();

    // Función para reubicar el marcador del hospital
    function resetMarker() {
        map.setView(hospitalLocation, 13);
        marker.setLatLng(hospitalLocation);
        marker.openPopup();
    }

    // Añadir evento al botón para reubicar el marcador
    document.getElementById('reset-marker').addEventListener('click', resetMarker);

   
    // Mostrar ubicación del usuario sin centrar el mapa
    map.locate({setView: false, maxZoom: 4});

    function onLocationFound(e) {
        let radius = e.accuracy / 2;

        L.marker(e.latlng).addTo(map)
            .bindPopup("Estás dentro de " + radius + " metros desde este punto").openPopup();

        L.circle(e.latlng, radius).addTo(map);
    }

   

   //Funcion de error
   function onLocationError(e) {
    showMessage('No pudimos obtener tu ubicación. Por favor, habilita la geolocalización y recarga la página.', 'error');
}

    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);
});

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;

    // Añadir el mensaje al cuerpo del documento
    document.body.appendChild(messageDiv);

    // Quitar el mensaje después de 5 segundos
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}
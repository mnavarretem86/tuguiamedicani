document.addEventListener('DOMContentLoaded', function () {
    var hospitalLocation = [12.148108301879251, -86.2768067];
    var map = L.map('map').setView(hospitalLocation, 13);

    // Definir capas base
    var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

/*     var satelliteLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.opentopomap.org/copyright">OpenTopoMap</a> contributors'
    });
 */
    // Añadir capa base por defecto
    osmLayer.addTo(map);

    // Añadir control de capas
 /*    var baseMaps = {
        "OpenStreetMap": osmLayer,
        "Satellite": satelliteLayer
    }; */

/*     L.control.layers(baseMaps).addTo(map); */

    // Añadir marcador del hospital
    var marker = L.marker(hospitalLocation).addTo(map)
        .bindPopup('Centro Nacional de Oftalmología<br><a href="https://www.google.com/maps/dir/?api=1&destination=12.121162322854948,-86.30601807402405" target="_blank">Ir con Google Maps</a><br><a href="https://waze.com/ul?ll=12.121162322854948,-86.30601807402405&navigate=yes" target="_blank">Ir con Waze</a>')
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
        var radius = e.accuracy / 2;

        L.marker(e.latlng).addTo(map)
            .bindPopup("Estás dentro de " + radius + " metros desde este punto").openPopup();

        L.circle(e.latlng, radius).addTo(map);
    }

    function onLocationError(e) {
        alert(e.message);
    }

    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);
});

document.addEventListener('DOMContentLoaded', function () {
    let hospitalLocation = [12.121162322854948, -86.30601807402405];
    let map = L.map('map').setView(hospitalLocation, 13);

    let osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    osmLayer.addTo(map);

    let marker = L.marker(hospitalLocation).addTo(map)
        .bindPopup('Hospital Fernando Vélez Paiz<br><a href="https://www.google.com/maps/dir/?api=1&destination=12.121162322854948,-86.30601807402405" target="_blank">Ir con Google Maps</a><br><a href="https://waze.com/ul?ll=12.121162322854948,-86.30601807402405&navigate=yes" target="_blank">Ir con Waze</a>')
        .openPopup();

    function resetMarker() {
        map.setView(hospitalLocation, 13);
        marker.setLatLng(hospitalLocation);
        marker.openPopup();
    }

    document.getElementById('reset-marker').addEventListener('click', resetMarker);

    map.locate({setView: false, maxZoom: 4});

    function onLocationFound(e) {
        let radius = e.accuracy / 2;

        L.marker(e.latlng).addTo(map)
            .bindPopup("Estás dentro de " + radius + " metros desde este punto").openPopup();

        L.circle(e.latlng, radius).addTo(map);
    }

    function onLocationError(e) {
        alert("No pudimos obtener tu ubicación. Por favor, habilita la geolocalización y recarga la página.");
    }

    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);
});

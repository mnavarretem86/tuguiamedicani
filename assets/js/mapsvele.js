document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([12.121162322854948, -86.30601807402405], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([12.121162322854948, -86.30601807402405]).addTo(map)
        .bindPopup('Hospital Fernando Vélez Paiz')
        .openPopup();
});

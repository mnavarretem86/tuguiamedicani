//Dermatologico.js
function initMap() {
    const UbicacionDermatologico = { lat: 12.12162825761401, lng:  -86.30619547670814 }; // coordenadas del dermatologico

   const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 23,
      center: UbicacionDermatologico,
    });
      const marker = new google.maps.Marker({
      position: UbicacionDermatologico,
      map: map,
      title: 'Centro Nacional de Dermatológia Nicaragua' //Titulo al puntero del mapa

    });
  }
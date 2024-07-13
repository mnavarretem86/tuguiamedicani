// Obtén la versión actual desde la meta tag
const currentVersion = document.querySelector('meta[name="version"]').getAttribute('content');

// Verifica si la versión almacenada en localStorage coincide con la versión actual
const storedVersion = localStorage.getItem('siteVersion');

if (storedVersion !== currentVersion) {
    // Si las versiones no coinciden, actualiza la versión en localStorage y limpia el caché
    localStorage.setItem('siteVersion', currentVersion);
    clearSiteCache();
}

function clearSiteCache() {
    if ('caches' in window) {
        // Borra todas las caches disponibles
        caches.keys().then(function(names) {
            for (let name of names) {
                caches.delete(name);
            }
        }).then(() => {
            // Recarga la página después de limpiar el caché
            window.location.reload(true);
        });
    } else {
        // Si Cache API no está disponible, fuerza la recarga de la página
        window.location.reload(true);
    }
}

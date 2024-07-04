// Load the header and initialize menu buttons
document.addEventListener("DOMContentLoaded", function() {
    fetch('./assets/views/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            const nav = document.querySelector("#nav");
            const abrir = document.querySelector("#abrir");
            const cerrar = document.querySelector("#cerrar");

            abrir.addEventListener("click", () => {
                nav.classList.add("visible");
            });

            cerrar.addEventListener("click", () => {
                nav.classList.remove("visible");
            });
        });
});

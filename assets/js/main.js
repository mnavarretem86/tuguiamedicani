//document.addEventListener("DOMContentLoaded", function() 
    
    // Fetch and insert header
    fetch('/assets/views/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            // Fetch and insert footer
            return fetch('/assets/views/footer.html');
        })
        .then(response => response.text())
        .then(foot => {
            document.getElementById('footer-placeholder').innerHTML = foot;

            // Navigation menu event listeners
            const nav = document.querySelector("#nav");
            const abrir = document.querySelector("#abrir");
            const cerrar = document.querySelector("#cerrar");

            abrir.addEventListener("click", () => {
                nav.classList.add("visible");
            });

            cerrar.addEventListener("click", () => {
                nav.classList.remove("visible");
            });
        })
        .catch(error => {
            console.error('Error fetching header or footer:', error);
        });
//});

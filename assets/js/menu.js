document.addEventListener("DOMContentLoaded", function() {
    fetch("/assets/views/menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-placeholder").innerHTML = data;
        });
});
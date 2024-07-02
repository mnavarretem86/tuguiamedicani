document.addEventListener("DOMContentLoaded", function() {
    fetch("/assets/views/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });
});
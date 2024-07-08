document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const mailtoLink = `mailto:milton.navarrete@hotmail.com?subject=Contacto de ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AEmail: ${email}`;
        
        window.location.href = mailtoLink;
    });
});

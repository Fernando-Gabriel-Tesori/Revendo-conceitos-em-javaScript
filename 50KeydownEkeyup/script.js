document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById('inputField');

    inputField.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            alert('Você pressionou a tecla Enter!');
            document.body.classList.add('foggy');
        }
    });

    inputField.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            document.body.classList.remove('foggy');
        }
    });
});

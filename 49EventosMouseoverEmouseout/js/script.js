document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('alertButton');

    button.addEventListener('mouseover', function() {
        alert('Você passou o mouse sobre o botão!');
        document.body.classList.add('foggy');
    });

    button.addEventListener('mouseout', function() {
        document.body.classList.remove('foggy');
    });
});

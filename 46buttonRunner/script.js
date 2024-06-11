document.addEventListener('DOMContentLoaded', function() {
    const redButton = document.getElementById('redButton');
    const greenButton = document.getElementById('greenButton');
    const messageDiv = document.getElementById('message');

    redButton.addEventListener('click', function() {
        const container = document.querySelector('.container');
        container.insertBefore(redButton, greenButton.nextSibling);
    });

    greenButton.addEventListener('click', function() {
        messageDiv.textContent = 'Parabéns!';
    });
});

/* Eventos de click 
O click é ativado quando o usuario clica em um elemento em que atrelamos o eventos;
após a ação podemos fazer as modificações de alterações no Html/css
*/
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('alertButton');

    button.addEventListener('click', function() {
        alert('Você clicou no botão!');
        document.body.classList.toggle('foggy');
    });
});

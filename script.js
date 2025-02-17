document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de interação
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
    });
});
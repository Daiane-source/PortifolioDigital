// Adiciona um evento de clique a todos os links de navegação
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        // Se o link for para uma âncora na mesma página (não é um link externo)
        if (this.getAttribute('href').startsWith('#')) {
            event.preventDefault(); // Impede o comportamento padrão do link
            
            // Obtém o ID da âncora
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Rola suavemente para o elemento
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Para links externos, mostra um alerta
            alert('Você clicou em um link externo!');
        }
    });
});

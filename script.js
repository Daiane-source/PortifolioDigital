
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        
        if (this.getAttribute('href').startsWith('#')) {
            event.preventDefault(); 
            
            // Obtém o ID da âncora
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            
            alert('Você clicou em um link externo!');
        }
    });
});

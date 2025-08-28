// Função para rolar suavemente até uma seção quando um link de navegação é clicado
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Pegando o ID do link clicado (por exemplo, #bio)
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Rolando suavemente até a seção correspondente
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Função para mostrar/esconder uma seção ao clicar em um botão
document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-section');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.closest('section');
            section.classList.toggle('hidden');
            const isHidden = section.classList.contains('hidden');
            button.textContent = isHidden ? 'Mostrar' : 'Esconder';
        });
    });
});

// Função para tocar música (exemplo de player simples)
const musicPlayer = document.createElement('audio');
musicPlayer.src = 'music/sabrina-song.mp3'; // Coloque o caminho do arquivo de música aqui
musicPlayer.controls = true;

document.getElementById('music').appendChild(musicPlayer);

// Mostrar/Esconder seções com a classe 'hidden' (CSS necessário)
const style = document.createElement('style');
style.innerHTML = `
    .hidden {
        display: none;
    }
`;
document.head.appendChild(style);

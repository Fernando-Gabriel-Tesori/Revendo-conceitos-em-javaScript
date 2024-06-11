function mudarEstilo() {
    // Seleciona o parágrafo pelo ID
    var texto = document.getElementById('texto');
    
    // Altera o estilo do parágrafo
    texto.style.color = '#ff0000'; // muda a cor do texto para vermelho
    texto.style.fontSize = '24px'; // aumenta o tamanho da fonte
    texto.style.fontWeight = 'bold'; // deixa o texto em negrito
    texto.style.backgroundColor = '#ffff00'; // muda o fundo do texto para amarelo
    texto.style.padding = '10px'; // adiciona padding ao texto
    texto.style.borderRadius = '5px'; // adiciona bordas arredondadas ao texto
}

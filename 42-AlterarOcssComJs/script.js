const btnAlternarTema = document.getElementById('btnAlternarTema');
const btnAlterarCorTexto = document.getElementById('btnAlterarCorTexto');
const textoConteudo = document.getElementById('textoConteudo');

btnAlternarTema.addEventListener('click', function() {
    const body = document.body;
    const h1 = document.querySelector('h1');

    body.classList.toggle('dark');
    h1.classList.toggle('dark');
});

btnAlterarCorTexto.addEventListener('click', function() {
    const cores = ['red', 'green', 'blue', 'purple'];
    const indiceCorAtual = Math.floor(Math.random() * cores.length);

    textoConteudo.style.color = cores[indiceCorAtual];
});

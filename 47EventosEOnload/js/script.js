/* o que são eventos ?
por meio de javaScript podemos mapear algumas ações 
dos usuarios, que chamamos de eventos;
como: movimento do mouse, click, mouse entrando
ou saindo de um elemento, carregando da pagina;
E então crair comportamento nteressante como: animação de
menu abrindo e fechando; */
//comprimento da dom input do usuario;
/* Evento onload
O onload é ativado ao carregar a página;
podemos depois desse evento realizar alguma ação no
nosso projeto;
 */
window.onload = function(){

    console.log("carregou o Dom");

    const title2 = document.querySelector("#title");

    console.log(title2);
    
}

console.log("carregou o js");

const title = document.querySelector("#title");

console.log(title);

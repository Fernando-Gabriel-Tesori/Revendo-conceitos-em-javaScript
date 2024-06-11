/* Criando Elemento
Outro possibilidade do js e o Dom é criar elemento:
O texto de um elemento é considerado um nó na ,arvore do Dom;
ou seja, temos que criar o texto do elemento tambem;
*/
var novoParagrafo = document.createElement("p");
//Esta linha cria um novo elemento HTML do tipo <p> (parágrafo) e o armazena na variável novoParagrafo.

console.log(novoParagrafo);
//Esta linha imprime o novo elemento <p> no console do navegador, permitindo ver que ele foi criado, mas ainda não tem nenhum conteúdo.
var texto = document.createTextNode("está é o conteudo do paragrafo")
//Esta linha cria um nó de texto com o conteúdo "está é o conteudo do paragrafo" e o armazena na variável texto.
console.log(novoParagrafo);
//Esta linha repete a impressão do novo parágrafo no console, mas como ainda não houve mudanças, o elemento continua sem conteúdo.
var body = document.querySelector("body");
//Esta linha seleciona o elemento <body> do documento HTML e o armazena na variável body.
console.log(body);
//Esta linha imprime o elemento <body> no console do navegador, permitindo ver a estrutura do corpo do documento HTML.
body.appendChild(novoParagrafo);
//Esta linha adiciona o novo elemento <p> ao final do <body> do documento HTML, mas note que o parágrafo ainda não possui conteúdo.

//inserir um container

var container = document.getElementById("container");

console.log(container);

var el = document.createElement("span");

el.appendChild(document.createTextNode("texto do span"));

console.log(el);

container.appendChild(el);
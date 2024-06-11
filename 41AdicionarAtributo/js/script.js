/* Alterando atributos
Podemos alterar os atri via Js e Dom;
Por exemplo: alterar o atributo alt de uma imagem:
ou ate imagem;
todos os atributos podem ser alterados */

var title = document.querySelector("#title");

title.setAttribute("class", "testando-atributo");

console.log(title);

var btn = document.querySelector("#btn");

btn.setAttribute("disabled", "disable");

var subtitle = document.querySelector(".subtitle");

subtitle.setAttribute("id", "titulo-2");

//remove

var list = documen.querySelector("#lista");

lista.removeAttribute("id");
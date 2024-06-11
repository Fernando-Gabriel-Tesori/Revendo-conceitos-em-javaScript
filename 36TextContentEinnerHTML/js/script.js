/* Alterando o conteúdo
Podemos alterar o texto de qualquer elemento 
de forma fácil com javaScript;
posteriormente poderemos atrelar este ação com
algum evento;
 */
var title = document.querySelector("#title");

//innerHTML
title.innerHTML = "testando o texto alterado!";

//textContent -> mais utilizado, recomendo
var subtitle = document.querySelector(".subtitle");

console.log(subtitle);

subtitle.textContent = "testando o textContent";
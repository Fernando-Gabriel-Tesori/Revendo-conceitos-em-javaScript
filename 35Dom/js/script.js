/* Outras formas de acessar
Com a evolução da linguagem foram criados dois seletores
querySelector e querySelectorAll;
Com estes podemos acessarcos elementos baseados em regras CSS;
*/

var intensClasse = document.getElementsByClassName('item');

console.log(intensClasse);

var intensQuery = document.querySelectorAll('#lista2 li');

console.log(intensQuery);

var intensQuery2 = document.querySelectorAll('#lista .item');

console.log(intensQuery2);

//querySelector

var intensQuery3 = document.querySelectorAll('#lista .item');

console.log(lista);

var span = document.querySelectorAll('#paragrafo span');

console.log(span);
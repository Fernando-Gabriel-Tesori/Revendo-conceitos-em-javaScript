/* o que é Dom
Document Object Model;
Uma insterface de programação para HTML;
Por meio dele temos métodos para acessar a árvore de elementos;
O dom fornece uma cópia html;
Podemos manipular pelo Dom para afetar o HTML;*/
//acessando elementos Dom
var titulo = document.getElementsByTagName('h1')[0];

console.log(titulo);

var lis = document.getElementsByTagName('li');
console.log(lis[3]);

//id
var paragrafo = document.getElementById('paragrafo');

console.log(paragrafo);

//class varios elemento com uma regra de css

var itensDaLista = document.getElementsByClassName('item');

console.log(itensDaLista)

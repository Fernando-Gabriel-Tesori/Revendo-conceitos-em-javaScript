//adiciona elemento
//crair element

var el = document.createElement("h3");

el.classList = "testando-classe";

var texto = document.createTextNode("este é o texto");

el.appendChild(texto);

console.log(el);

//seleciona o elemento para trocar
var title = document.querySelector("#title");

console.log(title);

//selecionar o pai do el
//var body = document.querySelector("body");
//ou o pai do elemento
var pai = title.parentNode;
//trocar os elementos de fato
pai.replaceChild(el, title);

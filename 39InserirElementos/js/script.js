//adiciona elemento
//crair element
var el = document.createElement("div");

el.classList = "div-criada";

console.log(el);

var container = document.querySelector("#container")

//inserir elemento filho
container.appendChild(el);

//insere antes 

var el2 = document.createElement("div");

el2.classList = "div-before";

var el3 = document.querySelector("#container .div-before");

console.log(el3);

container.insertBefore(el2, el3);
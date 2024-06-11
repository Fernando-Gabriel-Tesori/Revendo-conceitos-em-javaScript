/* Removendo elementos
Removerelementos também é muito fácil com JS;
temos como remover o elemento diratamente e também um elemento filho; */
//remove elemento filho
var container = document.querySelector("#container")

var p = document.querySelector("container p");

container.removeChild(p);

//remover o elemento

var subtitle = document.querySelector(".subtitle")

subtitle.remove();
/* Propriedades de document
O objeto document não  tem soment métodos;
Podemos retirar várias informações importantes da suas propriedades tambem;
 */
//propriedades documents
console.log(document.body);
//head cabeça
console.log(document.head);
//cabeçalho
console.log(document.links[0]);
//links
document.links[0].textContent = "Twitter";
//url
console.log(document.URL);
//title
console.log(document.title);

document.title = "Aula 42";

console.log(document.title);
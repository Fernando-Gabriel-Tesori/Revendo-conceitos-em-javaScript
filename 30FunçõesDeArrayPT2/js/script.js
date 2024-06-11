/* Metodos de array pt 2
Podemos tambem resgatar umm conjunto de elementos com os métodos;
indentificar o indice de um elemento especifico e muito mais;
 */
//splice

const arr = [1,2,3,4,5];

arr.splice(2,0,999);

//adiciona, deleta, adiciona

console.log(arr);

//remove o item 4

arr.splice(4,1);

console.log(arr)

//indexOf

console.log(arr.indexOf(5));
// elemento 5

//join 

const arr2 = ["o", "rato", "roeu", "a", "roupa"];

console.log(arr2.join(" ,"));
//reverse
console.log(arr2.reverse());
/* Escopo em js
No js podemos ter varios escopos;
O global, que é iniciadoem toda a aplicação;
E os locais, que podem existir em varias instruções como as funções;
 */

const x = 1;

const y =3;

console.log(x,y);
console.log(x * y);
console.log(x + y);
console.log(x / y);
function teste(){

  const z = 5;

  console.log(z);

}
testando();
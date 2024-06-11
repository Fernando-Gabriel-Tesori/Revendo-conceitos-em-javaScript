/* let e const + escopo
Utilizando let e const podemos criar escopo atéem instruções como if;
Deixando o código mais confiável;
separando cada bloco em um escopo;
 podemos criar bloco de codigo menor 
 escopo ou bloco*/

 let x = 5;

const y = 10;

x = 12;

console.log(x);

console.log('const' +  y);

if(true){
  
  let = 20; // ERRO: Você não pode usar 'let' sem um identificador.

  console.log(x);

  const y = 50;

  console.log('const if'  +  y);
}

console.log(x);

if(20 > 10){
  const y = 100;
  console.log('const if 3' + y);
}
//const matem uma segurança sobre o valor 
//let muda o valor

for(let x = 0; x < 10; x++){
  console.log(x);
}


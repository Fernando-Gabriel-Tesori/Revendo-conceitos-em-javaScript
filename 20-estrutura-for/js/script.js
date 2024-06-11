/*
Estrutura for
O for tem uma sintaxe mais complexa, mas é optado pela maioria dos programadores;
A pesar de parecer mais dificil como instrução
fica toda em uma linha proporciona maior controle;*/ 
//opção principal
for(let i = 0; i < 10; i++){ 
    console.log("repetição for:"+ i);

}

let array = [1,2,3,4];

for(let j= 0; j< array.length; j++){
    console.log(array[j]);
}

console.log(array.length);

for(const x = 5; x < 100; x *= 3){
    console.log(x)
}
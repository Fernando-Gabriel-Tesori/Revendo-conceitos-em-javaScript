//Operadores de comparação
//São comumente utilizados para verificação nas estruturas de condições;
//A partir de uma expressão de comparação podemos obter um true ou false;
//vamos pratica!
//Temos os seguintes operadores: ==, !=, >,<,>=,<=
//a partir de um expressão de comparação podemos obter um true ou false;
const idade = 18;
const possuiCarro =1;

if(idade >= 18){
    console.log("o usuario pode fazer a carteira");
}

if(idade <= 17){
    console.log("não, tem que esperar 1 ano");
}

if(possuiCarro){
    console.log("pode já andar de carro");
}

const nome = "fernando";

if(nome == "fernando"){
    console.log("o seu nome é fernando");
}
if(20>10){
    console.log("passou");
}
if(10<20){
    console.log("Passou 2");
}
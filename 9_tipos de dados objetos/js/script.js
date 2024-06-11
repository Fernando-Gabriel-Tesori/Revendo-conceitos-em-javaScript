//objetos
//conceito avançado/array conjunto/ultilizar posteriormente
//os itens e objetos são propriedades
//como criar
const obj = {
    nome: "fernando",
    idade: 29,
    profissao: "programador"
};

console.log(obj);
//objeto
console.log(typeof obj);
//informações e tipo
console.log(obj.nome);
//acessar propriedade anotação de ponto exemplo objeto.nome
console.log(obj.idade);
//conteudo de propriedade
console.log(obj.profissao);
//funciona qualquer tipo de dado
console.log("o seu nome é "+ obj.profissao);
//concatenar junta o texto entre aspas duplas e os dados

obj.nome = "gabriel";
//mudar valor de propriedade atribuição
console.log(obj.nome);
//mudou a propriedade 
//posso criar objetos
obj.graducao = true;

console.log(obj);
/* tudo e um objeto
Como você pode perceber muitos tipos de dados tem metodos e propriedades;
Podemos criar tambem os nossos objetos com propriedades e metodos para auxiliar nos nossos programas; */
let pessoa = {
    nome: "fernando",
    idade: 29,
    falar: function(){
    console.log("olá tudo bem?");
    },
    soma: function(){
    return a + b;
    }
};

console.log(pessoa.nome);

pessoa.falar();

const soma = pessoa.soma(2,2);

console,log(soma);
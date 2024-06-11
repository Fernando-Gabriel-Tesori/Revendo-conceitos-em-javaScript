/* A instrução this
Fora de escopos locais o this sempre se refere ao objeto
global window;
Em objetos o this vai se referir a instancia e pode acessar suas propriedades;
 */
// Fora de escopos locais o this sempre se refere ao objeto global window
// Em objetos, o this vai se referir à instância e pode acessar suas propriedades

console.log(this.teste); // Isso tentará acessar a propriedade 'teste' do objeto global 'window'
console.log(teste); // Isso causará um erro, pois 'teste' não está definido no escopo global

alert('olá'); // Exibe um alerta com a mensagem 'olá'
this.alert('olá 2'); // Também exibe um alerta com a mensagem 'olá 2', pois 'this' aqui se refere ao objeto global 'window'

let pessoa = {
    nome: "Matheus",
    idade: 29,
    falar: function() {
        console.log("olá, tudo bem?");
    },
    // pode usar o this para acessar suas próprias propriedades
    dizerNome: function() {
        console.log("o meu nome é " + this.nome);
    },
    aniversario: function() {
        this.idade += 1;
    },
    saudacao: function() {
        return 'Sr. ' + this.nome;
    }
};

// Chamadas de métodos do objeto pessoa
pessoa.dizerNome(); // Imprime "o meu nome é Matheus"
console.log(pessoa.idade); // Imprime 29
pessoa.aniversario();
console.log(pessoa.idade); // Imprime 30 (após o aniversário)
console.log(pessoa.saudacao()); // Imprime "Sr. Matheus"

// A linha abaixo está incorreta, pois 'saudacao' não está definido no escopo global
// console.log("olá" + saudacao);

// Corrigindo para chamar o método saudacao do objeto pessoa
console.log("olá " + pessoa.saudacao()); // Imprime "olá Sr. Matheus"

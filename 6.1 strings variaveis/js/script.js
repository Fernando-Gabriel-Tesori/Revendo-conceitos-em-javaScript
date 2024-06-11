//Exemplo 1: concatenação de strings
let saudacao = "Olá";
let nome = "Mundo";
let mensagem = saudacao + ", " + nome + "!";
console.log(mensagem); // Saída: "Olá, Mundo!"
//metodos de strings
let texto = "JavaScript";
console.log(texto.length); // Saída: 10
//convertendo para maiusculo e minusculas
let exemplo = "Hello World";
console.log(exemplo.toUpperCase()); // Saída: "HELLO WORLD"
console.log(exemplo.toLowerCase()); // Saída: "hello world"
//encontrar substrings
let frase = "Aprender JavaScript é divertido!";
console.log(frase.indexOf("JavaScript")); // Saída: 9
//extraindo uma substring
let linguagem = "JavaScript";
let parte = linguagem.substring(4, 10);
console.log(parte); // Saída: "Script"
//substituindo uma substring
let saudacaoOriginal = "Bom dia, João!";
let saudacaoNova = saudacaoOriginal.replace("João", "Maria");
console.log(saudacaoNova); // Saída: "Bom dia, Maria!"
//dividindo uma string
let listaDeCompras = "maçã,banana,laranja";
let itens = listaDeCompras.split(",");
console.log(itens); // Saída: ["maçã", "banana", "laranja"]
//template literals (template strings)
let nomeA = "Carlos";
let idade = 30;
let mensagemA = `Olá, meu nome é ${nomeA} e eu tenho ${idade} anos.`;
console.log(mensagemA); // Saída: "Olá, meu nome é Carlos e eu tenho 30 anos."

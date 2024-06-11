// Funções simples
function saudacao() {
    console.log("Olá, mundo!");
  }
  
  // Chamando a função
  saudacao();
  
  // Função com parâmetros
  function saudacao(nome) {
    console.log("Olá, " + nome + "!");
  }
  
  // Chamando a função com um argumento
  saudacao("Maria");
  
  // Funções de retorno de valor
  function soma(a, b) {
    return a + b;
  }
  
  // Chamando a função e armazenando o resultado
  var resultado = soma(5, 3);
  console.log(resultado); // 8
  
  // Função anônima
  var saudacaoAnonima = function(nome) {
    console.log("Olá, " + nome + "!");
  };
  
  // Chamando a função
  saudacaoAnonima("João");
  
  // Função de Flecha (Arrow Function)
  const somaFlecha = (a, b) => {
    return a + b;
  };
  
  // Chamando a função
  console.log(somaFlecha(4, 6)); // 10
  
  // Função Auto-invocada (IIFE - Immediately Invoked Function Expression)
  (function() {
    console.log("Esta função se auto-invoca!");
  })();
  
  // Manipulação de strings
  const frase = "esta é a frase que vamos manipular";
  
  const fraseCaixaAlta = frase.toUpperCase();
  
  console.log(fraseCaixaAlta);
  
  console.log(fraseCaixaAlta.toLowerCase());
  
  // Método trim
  const nome = "     Fernando     ";
  
  const nomeTrim = nome.trim();
  
  console.log(nome);
  console.log(nomeTrim);
  
  // Método split
  console.log(frase.split(" "));
  
  const tags = "PHP, JAVASCRIPT, HTML, CSS";
  
  console.log(tags.split(", "));
  
  // Métodos indexOf e lastIndexOf
  const fraseDois = "eu quero a ultima palavra";
  
  console.log(fraseDois.indexOf("palavra"));
  
  console.log(fraseDois.lastIndexOf("palavra"));
  
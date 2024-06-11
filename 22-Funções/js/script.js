/* Funções
 Funções são blocos de codigo reutilizáveis;
 Ou seja, evitando a repetição da lógica de um programa em diversas partes do codigo;
 Funções pode ser qualquer coisa mas é reutilizavél
 Reutilizáveis: Uma vez definidas, as funções podem ser chamadas quantas vezes forem necessárias, evitando a repetição de código.
Modulares: Permitem dividir o código em unidades menores e coesas, facilitando a compreensão e a manutenção.
Encapsuladas: Protegem o código interno da função, impedindo que variáveis ​​externas interfiram em seu funcionamento.
Parametrizáveis: Recebem entradas (parâmetros) que podem ser utilizadas para personalizar seu comportamento.
Podem retornar valores: As funções podem retornar um valor como resultado de sua execução.*/
 //executar as funções tem que chamar

 /* function calcularMedia(numeros) {
  // Validação de entrada
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error("Entrada inválida: Deve ser um array com pelo menos um elemento.");
  }

  // Soma dos elementos do array
  let soma = 0;
  for (const numero of numeros) {
    if (typeof numero !== "number") {
      throw new Error("Elemento inválido: Deve ser um número.");
    }
    soma += numero;
  }

  // Cálculo da média
  const media = soma / numeros.length;

  // Retorno da média
  return media;
}
 */
 
  
  // ... (Exemplo de uso da função, conforme exemplo anterior)
  function primeiraFuncao(){
    console.log("hello world das funções");
  }

  primeiraFuncao();

  function dizerNome(nome){
    console.log("O nome é:"+ nome);
  }

  dizerNome("fernando");
  dizerNome("gabriel");
  dizerNome(ftesorie);

  const nomeBancoDeDados = "fernando"

  dizerNome(nomeBancoDeDados);

  function soma(a, b){
    const soma = a + b;
    return soma;
  }

  const somaUm = soma(2, 5);

  console.log(somaUm);

  const somaDois = soma(5, 5);

  console.log(somaDois);

  console.log(soma(4,5));

 
/*Metodos de array
Os arrays também possuem metodos;
facilitando a nossa vida para: adicionar e remover elementos,
resgatar apenas uma parte do array e etc;
 */
// Função que manipula arrays e exibe no console
function manipularArray() {
  // Criando um array inicial
  let meuArray = ["Maçã", "Banana", "Laranja"];
  
  // Exibindo o array inicial
  console.log("Array inicial:", meuArray);
  
  // Adicionando um elemento ao final do array
  meuArray.push("Uva");
  console.log("Após adicionar 'Uva':", meuArray);
  
  // Removendo o último elemento do array
  meuArray.pop();
  console.log("Após remover o último elemento:", meuArray);
  
  // Adicionando um elemento ao início do array
  meuArray.unshift("Morango");
  console.log("Após adicionar 'Morango' ao início:", meuArray);
  
  // Removendo o primeiro elemento do array
  meuArray.shift();
  console.log("Após remover o primeiro elemento:", meuArray);
  
  // Encontrando o índice de um elemento
  let indice = meuArray.indexOf("Banana");
  console.log("Índice de 'Banana':", indice);
  
  // Removendo um elemento pelo índice
  if (indice !== -1) {
    meuArray.splice(indice, 1);
    console.log("Após remover 'Banana':", meuArray);
  } else {
    console.log("'Banana' não encontrada no array.");
  }
  
  // Verificando se um elemento existe no array
  let existeLaranja = meuArray.includes("Laranja");
  console.log("Laranja está no array?", existeLaranja);
}

// Chamar a função para ver o resultado no console
manipularArray();

/* Criação do array inicial: Um array simples com algumas frutas.
Exibição do array inicial: Mostra o array original no console.
Adição de elemento ao final: Usa push para adicionar "Uva" ao final do array.
Remoção do último elemento: Usa pop para remover o último elemento.
Adição de elemento ao início: Usa unshift para adicionar "Morango" ao início do array.
Remoção do primeiro elemento: Usa shift para remover o primeiro elemento.
Busca de índice: Usa indexOf para encontrar o índice de "Banana".
Remoção pelo índice: Usa splice para remover "Banana" pelo índice encontrado.
Verificação de existência: Usa includes para verificar se "Laranja" está no array. */

//length numero de propriedada de array

const arr = [1,2,3,4,5];

console.log(arr.length);

//push 
arr.push(6);
arr.push('qualquer coisa');

console.log(arr);

//pop 
arr.pop();

console.log(arr);

//unshift
arr.unshift(0);

console.log(arr);

console.log(Array.isArray(5));
console.log(Array.isArray(arr));
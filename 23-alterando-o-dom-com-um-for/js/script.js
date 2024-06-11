const frutas = ['laranja', 'maçã', 'pera', 'jaca']; // Nome de variável descritivo

const listaUL = document.createElement('ul'); // Criar elemento 'ul'

// Obter o primeiro elemento 'body' (abordagem mais segura)
const body = document.querySelector('body');

console.log(body); // Opcional: Verificar o elemento 'body'

// Anexar a lista não ordenada ao corpo
body.appendChild(listaUL);

for (const fruta of frutas) { // Usar 'of' para arrays
  const itemLista = document.createElement('li'); // Criar elemento 'li'
  const textoLi = document.createTextNode(fruta); // Criar nó de texto

  itemLista.appendChild(textoLi); // Anexar texto ao item da lista
  listaUL.appendChild(itemLista); // Anexar item da lista à lista não ordenada
}
//mudanças da dom
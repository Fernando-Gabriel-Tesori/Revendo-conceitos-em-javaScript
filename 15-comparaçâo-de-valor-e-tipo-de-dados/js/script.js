//Operadorers lógicos 
/* Nas linguagens de programação existem os operadores lógicos;
Estes operadores realizam comparação para que seja retornado um true ou false;
Decidindo então o fluxo da aplicação;
Utilizamos principalmente nas instruções de condições e repetição, em conjunto dos operadores de comparação; */
/* Os operadores lógicos em JavaScript são usados para combinar expressões booleanas e determinar a lógica de execução de determinado código. Aqui estão os principais operadores lógicos em JavaScript:

AND lógico (&&)

Retorna true se ambos os operandos forem true.
javascript
Copiar código
let a = true;
let b = false;
console.log(a && b); // false
OR lógico (||)

Retorna true se pelo menos um dos operandos for true.
javascript
Copiar código
let a = true;
let b = false;
console.log(a || b); // true
NOT lógico (!)

Retorna true se o operando for false e vice-versa.
javascript
Copiar código
let a = true;
console.log(!a); // false
Operador de coalescência nula (??)

Retorna o operando da direita quando o da esquerda é null ou undefined.
javascript
Copiar código
let a = null;
let b = "default";
console.log(a ?? b); // "default"
Operador lógico AND atribuição (&&=)

Atribui um valor à variável se ela for true.
javascript
Copiar código
let a = true;
let b = 10;
a &&= b; // a se torna 10
console.log(a); // 10
Operador lógico OR atribuição (||=)

Atribui um valor à variável se ela for false.
javascript
Copiar código
let a = false;
let b = 10;
a ||= b; // a se torna 10
console.log(a); // 10
Operador de coalescência nula atribuição (??=)

Atribui um valor à variável se ela for null ou undefined.
javascript
Copiar código
let a = null;
let b = 10;
a ??= b; // a se torna 10
console.log(a); // 10
Exemplos Práticos
Usando && para Condições Compostas
javascript
Copiar código
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
}
Usando || para Valores Padrão
javascript
Copiar código
let username = null;
let defaultName = "Visitante";

let nameToDisplay = username || defaultName;
console.log(nameToDisplay); // "Visitante"
Usando ! para Negar uma Condição
javascript
Copiar código
let isAvailable = false;

if (!isAvailable) {
    console.log("Não está disponível.");
}
Usando ?? para Valores Fallback
javascript
Copiar código
let user = null;
let userName = user ?? "Anônimo";
console.log(userName); // "Anônimo"
Esses operadores são fundamentais para a lógica de controle em JavaScript e são amplamente utilizados em condições, loops, e manipulação de valores. */
const idade = 15;
const nome = "joão";

if(nome == "joão" && idade ==15){
    console.log("o joão pode ir na aula de esgrima");
}
//se não for os dados é falso

if(1 == 1 && 3 > 2 && true){
    console.log("passou");
}

if((1 == 1 && 3 > 2)&& true) {
    console.log("Passou");
}else if(nome === "joão" && idade >= 14
) {
    console.log("aqui passa!");
}



//comparação de valores do js
//dois tipos são === (igual)
/* Em JavaScript, os comparadores === e !== são operadores de igualdade estrita e desigualdade estrita, respectivamente.

Igualdade Estrita (===)
O operador === verifica se dois valores são estritamente iguais. Isso significa que ele não só compara os valores em si, mas também os seus tipos. Se os tipos dos valores comparados forem diferentes, o operador === retornará false, mesmo que os valores sejam equivalentes.

Exemplos:

javascript
Copiar código
1 === 1        // true, ambos são números e têm o mesmo valor
'1' === 1      // false, um é string e o outro é número
true === 1     // false, um é booleano e o outro é número
null === undefined // false, são tipos diferentes
Desigualdade Estrita (!==)
O operador !== verifica se dois valores são estritamente diferentes. Assim como ===, ele compara tanto o valor quanto o tipo dos operandos. Ele retorna true se os valores comparados forem diferentes ou se os tipos forem diferentes.

Exemplos:

javascript
Copiar código
1 !== 2        // true, os valores são diferentes
'1' !== 1      // true, os tipos são diferentes
true !== false // true, os valores são diferentes
null !== undefined // true, são tipos diferentes
Diferença entre ===/!== e ==/!=
Os operadores == e != são os equivalentes "não estritos" (ou "abstratos"). Eles tentam converter os operandos para um tipo comum antes de compará-los, o que pode levar a resultados inesperados devido à coerção de tipos.

Exemplos:

javascript
Copiar código
1 == '1'        // true, os valores são convertidos para o mesmo tipo antes da comparação
true == 1       // true, true é convertido para 1 antes da comparação
null == undefined // true, são considerados iguais em coerção de tipos

1 != '1'        // false, os valores são convertidos para o mesmo tipo antes da comparação
true != 1       // false, true é convertido para 1 antes da comparação
null != undefined // false, são considerados iguais em coerção de tipos
Resumo
=== (igualdade estrita) compara valor e tipo, retornando true apenas se ambos são iguais em valor e tipo.
!== (desigualdade estrita) compara valor e tipo, retornando true se os valores ou os tipos forem diferentes.
== (igualdade não estrita) e != (desigualdade não estrita) fazem conversão de tipos antes da comparação, o que pode resultar em comportamentos inesperados.
Usar === e !== é geralmente uma prática recomendada em JavaScript para evitar problemas causados pela coerção de tipos implícita. */
//Comparação de tipo e valor
//Dois outros operadores de comparação existem no js: === e !==;
const numero = 5;

if(numero === 5){
    console.log("o numero é 5");
}

//não é executado o de baixo

if(numero !== 5){
    console.log("não é numero 5 do tipo number");
}
// não tem nada mais a ver não é tipo number nem numero 5
//ser igual ou diferente
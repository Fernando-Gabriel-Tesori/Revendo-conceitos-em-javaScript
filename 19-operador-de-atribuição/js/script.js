/* operadore de atribuição
Temos algumas maneiras de atribuir um valor a uma variavel;
As mais utilizadas são +=, -= , *= /=;
basicamente é uma forma resumida da operação: x = x + y;
Em loops  tambem é comum utilizar os operadores ++ ou --;
*/
let x =1;
let y = 2;

console.log(x = x + y);
//soma
console.log(x += y);
//soma
console.log(x -= y);
//subtração
console.log(x *= y);
//expoente
console.log(x /= y);
//divisão
console.log(x++);
console.log(x--);

while(x <= 100){
    console.log(x);
 
    x *= 2;
}

console.log(x);
while(x > 0){

 console.log(x);
 
x -= 5;
}



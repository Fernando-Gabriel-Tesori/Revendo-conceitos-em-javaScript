/*Operador logico || é conhecido tambem como Or;
 Ele retorna true caso uma das operações retorne verdadeiro;
 O OR retorna false apenas se as duas expressões são falsas;
 */
 const idade = 12;
 const nome = "Gabriel";
 
 if (nome == "Gabriel" || idade > 14) {
     console.log("pode entrar");
 } else {
     console.log("não pode entrar");
 }
 
 if (nome == "Fernando" || 15 > 20 || 10 == 10) {
     console.log("testando");
 } else {
     console.log("Não entrou");
 }
 
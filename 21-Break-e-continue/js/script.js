/* Break e continue
 Com break podemos encerrar uma instrução;
 Com o continue podemos pular uma instrução;
 Utilizados na maioria das vezes e loops;
  */
 for(let i = 10;i > 0; i--){
    if(i ===5){
        break;
    }
 }

 console.log("DEU A QUEBRA");

let x = 10;

while(x < 100){
    x += 10;

    if(x === 60){
        console.log("CONTINUE");
        continue;
    }
    console.log("testando continue" + x);
}
//utiliza o loop pos pula só uma execução
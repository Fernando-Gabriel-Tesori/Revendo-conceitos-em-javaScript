/* SetTimeOut e sentInterval
Podemos com estas funções criar ações no software que
executam depois de um tempo ou de tempos 
em tempos;
um dos argumentos destas funções é uma callback function; */
//setTimeout
console.log("Antes do setTimeout");


setTimeout(function(){

    console.log("testando o setTimeout");

}, 2000);
//vai executar tudo em sincrono
console.log("Depois do set");

//setInterval
setInterval(function(){
    console.log("testando setInterval");
}, 1000);
//use com sabedoria
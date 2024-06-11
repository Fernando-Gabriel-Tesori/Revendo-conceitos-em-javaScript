/* clearTimeout e clearInterval
podemos por um fim em stTimeout e setInterval por meio destes dois métodos;
então após determinada condições os timers não serão mais
executados; */
//encerar essas funções
let x = 0;

let myTime = setTimeout(function(){
    console.log("0 x é 0");
}, 1500);

x = 5;

if(x > 0){
    clearTimeout(myTimer);
    console.log("o x passou de 0");
}
//clearSetInverval na pratica
let myInterval = setInterval(function(){
    console.log("imprimido interval");
}, 500);

setTimeout(function(){
    console.log("não precisamos mais repetir");
    clearInterval(myInterval)
}, 1500);
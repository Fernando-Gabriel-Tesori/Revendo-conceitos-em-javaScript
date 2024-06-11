/* Callback functions
A função de callback é um recurso muito interessante e também amplamente utilizada em js
pertime ações e executar uma função depois de uma determinada ação;
conceito fundamental para entender a parte assincrona do js;
*/
//a muito callback nas empresas e sites
function exibir(num){
    console.log("A op resultou em um em: "+ num);
}

function soma(a,b, Callback){
    const op = a + b;
    callback(op);
}

function multiplicacao (a,b, cb){
    const op = a * b;
    cb(op);
}
//callback pega um função e passa para outra função
soma(2,2);
multiplicacao(2,4);
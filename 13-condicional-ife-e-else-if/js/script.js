// condicioniais: else e else if
//casoa instrução de if seja negativa, podemos adicionar else;
//que será a outra condicional a ser executada;
//podemos então criar uma bifurcação no codigo;
//ja o else if tem a possibilidade de fazer outra verificação e adicionar mais um bloco de codigo;
const nome = "Fernando";

if(nome == "GAbriel"){
    console.log("o nome é Fernando");
}else if (nome == "Fernando"){
    console.log("o nome é GAbriel");
}else{
    console.log("ele possui outro nome!");
}
//ele ignora quando não preenche os requisitos
//se tiver os requisitos do else if ele executa
const idade = 19;

if(idade > 20 ){
    console.log("Ele pode entrar na festa");
} else if(idade >= 18){
    console.log(" so com autorização")
}

//pode ter varios if no code 

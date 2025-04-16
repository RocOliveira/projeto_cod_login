//Implementa acesso para tela de login
function acessar(){
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

//Implementa estrutura que testa se todos os campos foram preenchidos
if(!loginEmail || !loginSenha){
    alert("Favor preencher todos os campos");
} else {
    window.location.href = "cadastro.html";
}


}

//Cria variavel do tipo array
 var dadosLista=[];

 function salvarUser(){
    let nomeUser=document.getElementById("nomeUser").value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista);
        document.getElementById("nomeUser").value=""; 
    } else {
        alert ("FAvor informar um nome para cadastro!");
    }

    //Função para preencher a lista de cadastro
 }
var palavra = "";
var letrasErradas =[];
function pegaImput(){ 
    palavra = document.getElementById('palavraId').value;
    if(palavra == "" || palavra == " "){
        alert("Palavra Vazia");
    }else{
        alert(palavra);
        alert(palavra.length);
    }
}
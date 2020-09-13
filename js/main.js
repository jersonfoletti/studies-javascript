
function clicou (){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clickar!</b>";
    //console.log(document.getElementById("agradecimento"));
    
    
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clickar");
}

function redirecionar(){
    window.open("https://google.com.br/");
    //window.location.href = "https://google.com.br/" ;
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*
function soma(n1,n2){
    return n1 + n2;
}
*/


/*
var pinAmarelos = ["11", "-11", "11", "10"];
var pinVermelhos = ["7", "6", "-2", "7"];
var total = [];
var i = 0;


while (i <= 3){
    total[i] = pinAmarelos[i] + pinVermelhos[i];
    i++;
}

console.log(total[0]);
console.log(total[1]);
console.log(total[2]);
console.log(total[3]);

*/

/*
function validarIdade(idade) {
    var validar;
    if (idade >= 18){
        validar = true;
    }
    else{
        validar = false;
    }
    return validar
}

var idade = prompt("Qual sua idade?");
console.log(validarIdade(idade))
*/




//alert(soma(5,10));

/*
var d = new Date()/;
alert(d.getHours());
alert(d.getMinutes());
*/


/*
var count = 0;
for (count = 0; count <= 7; count++){
    console.log(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade?");
if  (idade >= 18){
    alert("maior de idade");
}
else {
    alert("menor de idade");
};
*/



//var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
//console.log(frutas);
//alert(frutas[1].nome);

//var lista = ["maça","pera","laranja"];
//lista.push("uva");
//lista.pop("maça");

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));

//var nome = "Jerson Foletti";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(n1 * n2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));
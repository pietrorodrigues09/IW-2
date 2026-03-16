var numero = prompt("digite um numero");
if (numero %2 == 0) {
    alert("Seu número é par")
} else {
    alert("Seu número é impar")
}

var idade = prompt("Digite sua idade!")
if (idade <18) {
    alert("Você é menor de idade")
} else {
    alert("Você é maior de idade!")
}

for (var i = 1;  i < 11; i++) {
    console.log(i);
}

console.log("numero aleatorio")
var x = prompt("Digite um número aleatório!")
while (x>0) {
    console.log(x);
    x--;
}

console.log("tabuada")
var tabuada = prompt("DIgite um número para a tabuada")
var multi = 0 
for (var m = 1; m <11; m++){
    multi = tabuada * m;
    console.log(multi);
}

console.log("somatoria")
var somar = prompt("Digite um número para a soma")
var result = 0
for(var s = 0; s < somar; s++){
    result = result + s;
    console.log(result)
}

console.log("Numeros primos")
var nprimo = prompt("Digite um número para saber se ele e primo")
if (nprimo %2 == 1) {
    alert("Seu número e primo")
} else {
    ("seu número nao é primo")
}

console.log("Login Simples")
var senha = 12345
var login = "pietrorodrigues09"
var vsenha = prompt("Digite sua senha")
var vslogin = prompt("Digite seu login")
if (vslogin == login) {
    
}
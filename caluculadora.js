function calcularIMC(){
//entrada
let valorPeso = document.getElementById("peso").value;
let valorAltura = document.getElementById("altura").value;
//processamento
let IMC = valorPeso / (valorAltura * valorAltura);
//saida
document.getElementById("resultado").textContent = "Seu IMC:" + IMC;
}
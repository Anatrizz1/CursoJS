console.log("Calculadora de operações básicas");

function somar(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero não é permitida.";
    }   
    return a / b;
}

let num1 = 10;
let num2 = 5;
console.log(`Números: ${num1} e ${num2}`);
console.log(`Soma: ${somar(num1, num2)}`);
console.log(`Subtração: ${subtrair(num1, num2)}`);
console.log(`Multiplicação: ${multiplicar(num1, num2)}`);
console.log(`Divisão: ${dividir(num1, num2)}`);
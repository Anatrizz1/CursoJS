const display = document.getElementById('display');

let primeiroNumero = '';
let segundoNumero = '';
let operador = '';

// Variável para controlar se o próximo número deve limpar o display
let limparDisplay = false;

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
        return "Erro";
    }
    return a / b;
}

// Função para adicionar números no display
function adicionarNumero(numero) {
    // Se o display precisar ser limpo (após um cálculo ou um operador)
    if (limparDisplay) {
        display.textContent = ''; // Limpa o display
        limparDisplay = false; // Desativa a flag
    }

    // Adiciona o número clicado ao conteúdo do display
    display.textContent += numero;
}

// Função para adicionar operadores
function adicionarOperador(op) {
    // Se já houver um primeiro número e um operador, faz o cálculo anterior
    if (primeiroNumero !== '' && operador !== '') {
        calcular();
    }
    
    // Armazena o número atual do display como o primeiroNumero
    primeiroNumero = display.textContent;
    
    // Armazena o operador clicado
    operador = op;

    // Ativa a flag para limpar o display para o próximo número
    limparDisplay = true;
}

// Função para realizar o cálculo quando o botão "=" é clicado
function calcular() {
    // Armazena o número atual do display como o segundoNumero
    segundoNumero = display.textContent;
    
    let resultado;

    // Converte os números de string para float (para permitir decimais)
    let n1 = parseFloat(primeiroNumero);
    let n2 = parseFloat(segundoNumero);

    // Usa um 'switch' para escolher a operação correta
    switch (operador) {
        case '+':
            resultado = somar(n1, n2);
            break;
        case '-':
            resultado = subtrair(n1, n2);
            break;
        case '*':
            resultado = multiplicar(n1, n2);
            break;
        case '/':
            resultado = dividir(n1, n2);
            break;
    }

    display.textContent = resultado;

    // Reseta as variáveis para o próximo cálculo, usando o resultado como o novo primeiroNumero
    primeiroNumero = resultado;
    segundoNumero = '';
    operador = '';
}

// 5. Função para limpar a calculadora
function limpar() {
    // Reseta todas as variáveis para o estado inicial
    primeiroNumero = '';
    segundoNumero = '';
    operador = '';
    
    // Limpa o display
    display.textContent = '0';
}
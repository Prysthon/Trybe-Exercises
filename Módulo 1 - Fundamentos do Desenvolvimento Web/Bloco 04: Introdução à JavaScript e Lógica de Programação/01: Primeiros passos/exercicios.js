// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
// *Dica: Neste link você encontra mais detalhes sobre operadores matemáticos
const a = 10;
const b = 2;
console.log (a+b)
console.log (a-b)
console.log (a*b)
console.log (a/b)
console.log (a%b)

// 2 Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const a = 10;
const b = 2;
if (a>b) {
    console.log (a)
} else {
    console.log (b)
}

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const a = 10;
const b = 2;
const c = 20;
if (a>b && a>c) {
    console.log (a)
} 
else if (b>a && b>c) {
    console.log (b)
} else {
    console.log (c)
}

// 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const a = -10;
if (a>0) {
    console.log ("positive")
}
else if (a<0) {
    console.log ("negative")
} else {
    console.log ("zero")
}

// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const a = 90;
const b = 45;
const c = 5;
let soma = a+b+c
if (a<0 || b<0 || c<0) {
    console.log ("algum dos angulos é invalido")
} else {
    if (soma===180) {
        console.log (true)
    } else {
        console.log (false)
    }
}

// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
const peca = "Bishops"
const piece = peca.toLowerCase()
if (piece === "kings") {
    console.log ("one square in any direction.")
}
else if (piece === "queens") {
    console.log ("diagonally, horizontally, or vertically any number of squares.")
}
else if (piece === "rooks") {
    console.log ("horizontally or vertically any number of squares.")
}
else if (piece === "knights") {
    console.log ("in an 'L shape.'")
}
else if (piece === "bishops") {
    console.log ("diagonally any number of squares.")
}
else if (piece === "knights") {
    console.log ("vertically forward one square")
} else {
    console.log ("piece not found")
}

// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const grade = 85
if (grade < 0 || grade > 100) {
    console.log ("Nota incorreta")
} else {
    if (grade >=90) {
        console.log ("Nota: A")
    }
    else if (grade >= 80) {
        console.log ("Nota: B")
    }
    else if (grade >= 70) {
        console.log ("Nota: C")
    }
    else if (grade >= 60) {
        console.log ("Nota: D")
    }
    else if (grade >= 50) {
        console.log ("Nota: E")
    } else (
        console.log ("Nota: F")
    )
}

// 8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
const a = 90;
const b = 45;
const c = 5;

let even = false

if (a%2===0 || b%2===0 ||c%2===0) {
    even = true;
}
console.log (even);

// 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
const a = 90;
const b = 90;
const c = 50;

let odd = true

if (a%2===0 || b%2===0 ||c%2===0) {
    odd = false;
}
console.log (odd);


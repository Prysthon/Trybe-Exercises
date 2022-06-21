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
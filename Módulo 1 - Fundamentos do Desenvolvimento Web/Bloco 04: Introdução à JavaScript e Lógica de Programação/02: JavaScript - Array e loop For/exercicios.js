let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let index = 0; numbers.length > index; index+=1) {
    console.log(numbers[index]);
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let sum = 0;
for (let index = 0; numbers.length > index; index+=1) {
    sum =sum+ numbers[index];
}

console.log(sum);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let sum = 0;
for (let index = 0; numbers.length > index; index+=1) {
    sum =sum+ numbers[index];
}

console.log(sum/numbers.length);

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let sum = 0;
for (let index = 0; numbers.length > index; index+=1) {
    sum =sum+ numbers[index];
}
if (sum/numbers.length >= 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

// 5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let biggest = 0;
for (index = 0; numbers.length > index; index+=1) {
    if (numbers[index] >= biggest) {
        biggest = numbers[index]
    }
}
console.log(biggest);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
odds = 0
for (index = 0; numbers.length > index; index+=1) {
    if (numbers[index]%2 !== 0) {
        odds += 1
    }
}
if (odds === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log("Tem", odds, "números ímpares");
}

// 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let smaller = 100000;
for (index = 0; numbers.length > index; index+=1) {
    if (numbers[index] <= smaller) {
        smaller = numbers[index]
    }
}
console.log(smaller);

// 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
array = []
for (i=0; i<26; i+=1) {
    array.push(i);
}
console.log(array);

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
let newArray = [];
for (num in array) {
    newArray.push (num/2);
}
console.log(newArray);

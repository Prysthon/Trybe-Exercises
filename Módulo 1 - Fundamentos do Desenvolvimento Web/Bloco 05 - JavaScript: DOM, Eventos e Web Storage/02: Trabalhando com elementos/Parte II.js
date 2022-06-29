// 1. Crie um irmão para elementoOndeVoceEsta.
let here = document.getElementById('pai');
let paragraph = document.createElement('p');
paragraph.innerText = 'hello world';
here.append(paragraph)

// 2. Crie um filho para elementoOndeVoceEsta.
let sonHere = document.getElementById('elementoOndeVoceEsta');
let paragraph2 = document.createElement('p');
paragraph2.innerText = 'test';
sonHere.append(paragraph2);

// 3. Crie um filho para primeiroFilhoDoFilho.
let sonSon = document.getElementById('primeiroFilhoDoFilho');
let paragraph3 = document.createElement('p')
paragraph3.innerText = 'ok'
paragraph3.id = 'filhoPrimeiro'
sonSon.append(paragraph3)

// 4. A partir desse filho criado, acesse terceiroFilho.
let filhoPrimeiro = document.getElementById('filhoPrimeiro');
terceiroFilho = filhoPrimeiro.parentElement.parentElement.nextElementSibling;
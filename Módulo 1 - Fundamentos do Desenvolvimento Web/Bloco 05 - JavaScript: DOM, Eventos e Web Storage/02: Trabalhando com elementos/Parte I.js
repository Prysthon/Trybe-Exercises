// 1. Acesse o elemento elementoOndeVoceEsta.
let here = document.getElementById('elementoOndeVoceEsta');

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let father = here.parentElement;
father.style.color = 'red';

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let firstSon = here.firstElementChild;
firstSon.innerText = 'primeiroFilhoDoFilho';

// 4. Acesse o primeiroFilho a partir de pai.
let firstSonFather = father.firstElementChild;

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
let firstSonHere = here.previousElementSibling;

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let atention = here.nextSibling;

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
thirdSon = here.nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai.
thirdSonFather = father.lastElementChild.previousElementSibling;
console.log (thirdSonFather)
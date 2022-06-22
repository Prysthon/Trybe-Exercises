// 1. Obtenha o valor "Serviços" do array menu:
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);

// 2. Procure o índice do valor "Portfólio" do array menu:
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf("Portfólio");
console.log(indexOfPortfolio);

// 3. Adicione o valor "Contato" no final do array menu:
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push ("Contato");
console.log(menu);

// 4. Utilize o for para imprimir os elementos da lista groceryList com o console.log():
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let i = 0; groceryList.length > i; i+=1) {
    console.log (groceryList[i])
}

// 5. Utilize o for/of para imprimir os elementos da lista names com o console.log():
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (nome of names) {
    console.log (nome)
}
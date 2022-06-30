function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  /* Exercício 1:
  Crie um calendário dinamicamente.
  O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
  Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
   - A tag <ul> deve conter o id 'days';
   - Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
   - Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
   - Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li> */

   let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

   function addDays () {
    let ulTag = document.getElementById('days');
    for (let day of decemberDaysList) {
        let liTag = document.createElement('li');
        liTag.className = 'day';
        liTag.innerText = day;
        if (day === 24 || day === 25 || day === 31) {
            liTag.classList.add ('holiday');
        } if (day === 4 || day === 11 || day === 18 || day === 25) {
            liTag.classList.add ('friday');
        }
        ulTag.appendChild(liTag);
    } 
   }
   addDays();

   /* Exercício 2:
Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
    - Sua função deve receber um parâmetro com a string 'Feriados'
    - Adicione a este botão a ID "btn-holiday"
    - Adicione este botão como filho/filha da tag <div> com classe "buttons-container" */
    function holidays(name) {
        let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
        let button = document.createElement('button');
        button.innerText = name;
        button.id = 'btn-holiday';
        buttonsContainer.appendChild(button);
    }
    holidays('Feriados')
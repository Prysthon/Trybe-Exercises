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
    holidays('Feriados');

    /* Exercício 3:
    Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
    Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
    É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)". */
    function ChangeHolidaysColor () {
        let getHoliddayButton = document.querySelector('#btn-holiday');
        let HolidayDays = document.querySelectorAll('.holiday');
        let oldColor = 'white';
        let newColor = 'green';
        getHoliddayButton.addEventListener('click', function() {
            for (let i = 0; i < HolidayDays.length; i+=1) {
                if (HolidayDays[i].style.backgroundColor === newColor) {
                    HolidayDays[i].style.backgroundColor = 'unset';
                    HolidayDays[i].style.color = '#777';
                } else {
                    HolidayDays[i].style.backgroundColor = 'green';
                    HolidayDays[i].style.color = 'white';
                }
            }
        })
    }
    ChangeHolidaysColor();
    
    /* Exercício 4:
    Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
    - Adicione a esse botão o ID "btn-friday";
    - Adicione esse botão como filho/filha da tag <div> com classe "buttons-container". */
    function ButtonFriday(name) {
        let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
        let button = document.createElement('button');
        button.innerText = name;
        button.className = 'btn-friday';
        buttonsContainer.appendChild(button)
    }
    ButtonFriday('Sexta-Feira');

    /* Exercício 5:
    Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
    É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias. */
    function modifyFriday(array) {
        let ButtonModifyFriday = document.getElementsByClassName('btn-friday')[0];
        let fridayDays = document.getElementsByClassName('friday');
        ButtonModifyFriday.addEventListener('click', function() {
            for (let index = 0; index < fridayDays.length; index += 1) {
                if (fridayDays[index].innerText !== '#SEXTOU') {
                    fridayDays[index].innerText = '#SEXTOU';
                } else {
                    fridayDays[index].innerText = fridayDaysArray[index];
                }
            }
        })
    }
    let fridayDaysArray = [4,11,18,25];
    modifyFriday(fridayDaysArray);

    /* Exercício 6:
    Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
    Dica - Propriedade: event.target. */

    function mouseOverZoom (event) {
        if (event.target.classList.contains ('day')) {
            event.target.style.fontSize = '30px';
            event.target.style.fontWeight = '600';
        }
    }
    function mouseOutZoom (event) {
        if (event.target.classList.contains ('day')) {
            event.target.style.fontSize = '20px';
            event.target.style.fontWeight = '200';
        }
    }
    addEventListener ('mouseover', mouseOverZoom);
    addEventListener ('mouseout', mouseOutZoom);

    /* Exercício 7:
    Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
    O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks". */
    function addTask (task) {
        let myTaskDiv = document.getElementsByClassName('my-tasks')[0];
        let spanContain = document.createElement('span');
        spanContain.innerText = task;
        myTaskDiv.appendChild(spanContain);
    }
    addTask('cozinhar');

    /* Exercício 8:
    Implemente uma função que adicione uma legenda com cor para a tarefa.
    * Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.
    O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
    O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks". */
    function colorTask (color) {
        let divFather = document.querySelector ('.my-tasks');
        let divTag = document.createElement('div');
        divTag.className = 'task';
        divTag.style.backgroundColor = color;
        divFather.appendChild(divTag);
    }

    colorTask('green');

    /* Exercício 9:
    Implemente uma função que selecione uma tarefa.
    Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
    Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada. */
    function selectTask () {
        let taskSelected = document.getElementsByClassName('task selected');
        let task = document.getElementsByClassName('task')[0];
        task.addEventListener('click', function(event){
            if (taskSelected.length === 0) {
                event.target.classList.add ('selected');
            } else {
                event.target.classList.remove ('selected');
            }
        });
    }
    selectTask();

    /* Exercício 10:
    Implemente uma função que atribua a cor da tarefa ao dia do calendário.
    Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
    Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) */
    function addColorDays () {
        let days = document.getElementById('days');
        let task = document.querySelector('.task');
        let taskSelected = document.getElementsByClassName('task selected');
        let color = task.style.backgroundColor;
        days.addEventListener('click', function(event) {
            if (event.target.style.color !== color && taskSelected.length > 0) {
                event.target.style.color = color;
                taskSelected[0].classList.remove ('selected');
            } else if (event.target.style.color === color) {
                console.log ('oi')
                event.target.style.color = 'rgb(119,119,119)';
            }
        })
    }
    addColorDays();
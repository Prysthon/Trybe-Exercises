head = document.getElementById('header-container')
head.style.background = 'green'

document.getElementsByClassName('emergency-tasks')[0].style.background = 'orange'
document.getElementsByClassName('no-emergency-tasks')[0].style.background = 'yellow'

document.querySelector('.emergency-tasks h3').style.background = 'purple'
document.querySelectorAll('.emergency-tasks h3')[1].style.background = 'purple'

document.querySelector('.no-emergency-tasks h3').style.background = 'black'
document.querySelectorAll('.no-emergency-tasks h3')[1].style.background = 'black'

footer = document.getElementById('footer-container')
footer.style.background = 'green'
const ball = document.querySelector('.ball');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');

ball.addEventListener('click', function(){
    body.classList.toggle('active')
    h1.classList.toggle('active')
})
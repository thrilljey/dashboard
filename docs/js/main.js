$(document).ready(function(){
    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu__navigation');
    menuBtn.addEventListener('click', function(){
        menuBtn.classList.toggle('active')
        menu.classList.toggle('active');
    })
});
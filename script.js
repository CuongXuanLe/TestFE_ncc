const navBar = document.querySelector('.aside') 
const btnMenu = document.querySelector('.btn__menu') 
const overlay = document.querySelector('.main')

function openNavbar(){
    btnMenu.classList.add('hidden')
    navBar.classList.add('toggle__menu')
    navBar.classList.remove('navbar__active')
    overlay.classList.add('overlay')
}

function closeNavbar() {
    btnMenu.classList.remove('hidden')
    overlay.classList.remove('overlay')
    navBar.classList.remove('toggle__menu')
    navBar.classList.add('navbar__active')
}

btnMenu.addEventListener('click', openNavbar)
overlay.addEventListener('click', closeNavbar)
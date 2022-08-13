const btnHamburger = document.querySelector('#btnHamburger')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')
const phoneMenu = document.querySelectorAll('.phoneMenu')

btnHamburger.addEventListener('click', function() {
    if (header.classList.contains('open')) {
        //close hamburger menu
        body.classList.remove('noscroll')
        header.classList.remove('open')
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
    } else {
        //open hamburger menu
        body.classList.add('noscroll')
        header.classList.add('open')
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })
    }
})

// remove overlay when the menu links are cliked
phoneMenu.addEventListener('onclick', function() {
    overlay.forEach(function(over) {
        over.classList.remove('overlay')
    })
})

function reveal() {
    var reveals = document.querySelectorAll('.reveal')

    for (var i = 0; 1 < reveals.length; i++) {
        var windowHeight = window.innerHeight
        var elementTop = reveals[i].getBoundingClientRect().top
        var elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active')
        }
    }
}

window.addEventListener('scroll', reveal)
const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-nav')

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('visible')
})
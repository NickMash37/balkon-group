const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-nav')
const menuLinks = document.querySelectorAll('#menu li')

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('visible')
})

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('visible')
    });
  });
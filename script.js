const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-nav')
const menuLinks = document.querySelectorAll('#menu li')

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('visible')
})

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Works!');
        mobileMenu.classList.remove('visible')
    });
  });
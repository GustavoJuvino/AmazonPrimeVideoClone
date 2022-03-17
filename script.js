// Scroll Suave

function smoothScroll() {
const internLinks = document.querySelectorAll('.js-scroll a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    const href= event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });



// Alternative Form
    // const top = section.offsetTop;
    // window.scrollTo({
    //     top: top,
    //     behavior: 'smooth',
    // })
}


internLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
})
}
smoothScroll();



// Effect Hoover - Top Categories

const aEffect = document.querySelector('.a-effect');
const navMenu = document.querySelector('.categories-section');

aEffect.addEventListener('click', () => {
    navMenu.classList.toggle('hover-effect');
})



// Effect Hoover - Languages Section
const liEffect = document.querySelector('.l-acronyms');
const languageMenu = document.querySelector('.languages-section');

liEffect.addEventListener('click', () => {
    languageMenu.classList.toggle('hover-effect-language');
})


const accEffect = document.querySelector('.acc-effect');
const accMenu = document.querySelector('.menu-acc');

accEffect.addEventListener('click', () => {
    accMenu.classList.toggle('menu-click-effect');
})
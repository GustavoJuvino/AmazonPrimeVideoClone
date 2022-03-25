// Smooth Scroll

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
}
internLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
})
    
}
smoothScroll();



// Effect Hoover - Top Categories
const aEffect = document.querySelector('.a-effect');
const navMenu = document.querySelector('.categories-section');


aEffect.addEventListener('mouseenter', () => {
    navMenu.classList.toggle('hover-effect');
})

navMenu.addEventListener('mouseleave', () => {
    navMenu.classList.toggle('hover-effect');
})



// Effect Clcik - Languages Section
const liEffect = document.querySelector('.l-acronyms');
const languageMenu = document.querySelector('.languages-section');
const selectMain = document.querySelector('#all');
const shadowModal = document.querySelector('.modal-container');


function clickLanguage(){
    liEffect.addEventListener('click', () => {
        languageMenu.classList.toggle('hover-effect-language');
        shadowModal.classList.toggle('modal-active');
    })
}
clickLanguage();



// Effect Hoover - Acc Section
const accEffect = document.querySelector('.acc-effect');
const accMenu = document.querySelector('.menu-acc');


accEffect.addEventListener('click', () => {
    accMenu.classList.toggle('menu-click-effect');
    shadowModal.classList.toggle('modal-active');
})




// Change Language
const multLanguages = document.querySelectorAll("#mult-languages");


function checkLink(){
    if(window.location.href === "http://127.0.0.1:5501/indexEN.html") {
        multLanguages[1].addEventListener('click', ()=>{
            window.location.href="http://127.0.0.1:5501/indexPT.html";
        })
    }else if(window.location.href === "http://127.0.0.1:5501/indexPT.html"){
        multLanguages[0].addEventListener('click', ()=>{
            window.location.href="http://127.0.0.1:5501/indexEN.html";
        })
    }
}


// PRIME VIDEO LOGO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


function closeLanguage(){
    selectMain.addEventListener('click', ()=>{
        selectMain.classList.toggle('close')
        languageMenu.classList.add('hover-effect-language');
        accMenu.classList.add('menu-click-effect');
        shadowModal.classList.add('modal-active');
    })
}
checkLink();
closeLanguage();

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

aEffect.addEventListener('mouseenter', () => {
    navMenu.classList.toggle('hover-effect');
})

navMenu.addEventListener('mouseleave', () => {
    navMenu.classList.toggle('hover-effect');
})



// Effect Hoover - Languages Section
const liEffect = document.querySelector('.l-acronyms');
const languageMenu = document.querySelector('.languages-section');

liEffect.addEventListener('click', () => {
    languageMenu.classList.toggle('hover-effect-language');
})


// Effect Hoover - Acc Section
const accEffect = document.querySelector('.acc-effect');
const accMenu = document.querySelector('.menu-acc');

accEffect.addEventListener('click', () => {
    accMenu.classList.toggle('menu-click-effect');
})





// Change Language

const multLanguages = document.querySelectorAll("#mult-languages");
console.log(multLanguages[1])


function checkLink(){
    if(window.location.href === "http://127.0.0.1:5500/indexEN.html") {
        multLanguages[1].addEventListener('click', ()=>{
            window.location.href="http://127.0.0.1:5500/indexPT.html";
        })
    }else if(window.location.href === "http://127.0.0.1:5500/indexPT.html"){
        multLanguages[0].addEventListener('click', ()=>{
            window.location.href="http://127.0.0.1:5500/indexEN.html";
        })
    }
}

checkLink()



// let languageHeader = {
//     en: {
//         home: "home",
//         channels: "channels",
//         store: "store", 
//         categories: "Categories",
//         button1: "Try for free",
//         language: "EN",
//     },
//     pt: {
//         home: "Início",
//         channels: "Canais",
//         store: "Loja",
//         categories: "Categorias",
//         button1: "Experimente de graça",
//         language: "PT",
//     }
// }

// // function setLanguage() {
// //     dataReload[0].addEventListener('click', () =>{
// //         document.location.reload(true);
// //     })
// // }

// function setLanguage() {
//     multLanguages[1].addEventListener('click', () =>{
//         divSelector[0].textContent = languageHeader.pt.home;
//         divSelector[1].textContent = languageHeader.pt.channels;
//         divSelector[2].textContent = languageHeader.pt.store;
//         divSelector[3].textContent = languageHeader.pt.categories;
//         divSelector[4].textContent = languageHeader.pt.button1;
//         divSelector[5].textContent = languageHeader.pt.language;
        
        
//     });
//     multLanguages[0].addEventListener('click', () =>{
//         divSelector[0].textContent = languageHeader.en.home;
//         divSelector[1].textContent = languageHeader.en.channels;
//         divSelector[2].textContent = languageHeader.en.store;
//         divSelector[3].textContent = languageHeader.en.categories;
//         divSelector[4].textContent = languageHeader.en.button1;
//         divSelector[5].textContent = languageHeader.en.language;

//         document.location.reload(true);
//     })
// }

// setLanguage();
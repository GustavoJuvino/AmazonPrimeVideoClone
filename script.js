// Smooth Scroll

function smoothScroll() {
const internLinks = document.querySelectorAll('.js-scroll a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

internLinks.forEach(link => link.addEventListener("click", scrollToSection));
    
}
smoothScroll();



// Effect Hoover - Top Categories
const aEffect = document.querySelector(".a-effect");
const navMenu = document.querySelector(".categories-section");

function hooverCategories() {
    aEffect.addEventListener("mouseenter", () => navMenu.classList.toggle("hover-effect"));
    navMenu.addEventListener("mouseleave", () => navMenu.classList.toggle("hover-effect"));
}

hooverCategories();



// Effect Clcik - Languages Section
const liEffect = document.querySelector(".l-acronyms");
const languageMenu = document.querySelector(".languages-section");
const shadowModal = document.querySelector(".modal-container");

function clickLanguage(){
    liEffect.addEventListener("click", () => {
        languageMenu.classList.toggle("hover-effect-language");
        shadowModal.classList.toggle("modal-active");
    })
    liEffect.addEventListener("touchstart", () => {
        languageMenu.classList.toggle("hover-effect-language");
        shadowModal.classList.toggle("modal-active");
    })
}
clickLanguage();



// Effect Click - Acc Section
const accEffect = document.querySelector(".acc-effect");
const accMenu = document.querySelector(".menu-acc")

function accClick()  {
    accEffect.addEventListener("click", () => {
        accMenu.classList.toggle("menu-click-effect");
        shadowModal.classList.toggle("modal-active");
    })

    accEffect.addEventListener("touchstart", () => {
        accMenu.classList.toggle("menu-click-effect");
        shadowModal.classList.toggle("modal-active");
    })
}

accClick();

// Changing Languages
const multLanguages = document.querySelectorAll("#mult-languages");

// Portuguese Page
let currentPage = window.location.pathname;
console.log(currentPage)

multLanguages[1].addEventListener("click", () =>{
    if (currentPage === '/index.html'){
        window.location.href="/PT/index.html";
    }
})

// // English Page
multLanguages[0].addEventListener("click", () =>{
    if (currentPage == '/PT/index.html'){
        window.location.href="/index.html";
    }
    
})


// Close Menus
const selectMain = document.querySelector("#all");

function closeMenus(){
    selectMain.addEventListener("click", ()=>{
        console.log("click")
        selectMain.classList.toggle("close")
        languageMenu.classList.add("hover-effect-language");
        accMenu.classList.add("menu-click-effect");
        shadowModal.classList.add("modal-active");
    })
}
closeMenus();




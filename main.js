// Hamburger Menu  Mobile
const menuBtn = document.querySelector('#Menu-Btn');
const hamburgerWrapper = document.querySelector('#hamburger-wrapper');
const hiddenMenu = document.querySelector('.hidden-menu');
let click = false;
// Hidden Menu - Mobile
menuBtn.addEventListener('touchstart',()=>{
    if(!click){
        hiddenMenu.classList.add('show');
        click = true;
    }
})
menuBtn.addEventListener('click',()=>{
    if(!click){
        hiddenMenu.classList.add('show');
        click = true;
    }
})
hamburgerWrapper.addEventListener('touchstart',()=>{
    if(click){
        hiddenMenu.classList.remove('show');
        click = false;
    }
})
hamburgerWrapper.addEventListener('click',()=>{
    if(click){
        hiddenMenu.classList.remove('show');
        click = false;
    }
})
// Hamburger Menu Desktop
const MenuButton = document.querySelector('#menu-btn');
const HamburgerWrapper =  document.querySelectorAll('#Hamburger-Wrapper');
const HiddenMenu = document.querySelector('.Hidden-Menu');
const Display = document.querySelectorAll('.target');
// Hidden Menu for the Responsive site
const hiddenMenuRes = document.querySelector('.hidden-menu-res');
MenuButton.addEventListener('click',(e)=>{
    hiddenMenuRes.classList.add('show')
    HiddenMenu.classList.add('show')
    // For changing the opacity of the screen
    for(let i = 0 ; i<= Display.length ; i++){
        Display[i].style.opacity = "0.9" ;
    }
    click = true ;
})
// Make the hamburger disappear
for(let i = 0; i<= HamburgerWrapper.length ; i++){
HamburgerWrapper[i].addEventListener('click',(e)=>{
    hiddenMenuRes.classList.remove('show')
    HiddenMenu.classList.remove('show')
    for(let i = 0 ; i<= Display.length ; i++){
        Display[i].style.opacity = "1" ;
    }
    click = false ;
})
}
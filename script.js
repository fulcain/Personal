// variables
let hamburgerMenu = document.querySelector('#hamburder-menu-icon')
let hamburgerMenuBox = document.querySelector('.header-responsive-nav')
hamburgerMenuBox.style.display = 'none'
hamburgerMenu.addEventListener("click", () =>{
    hamburgerMenuBox = document.querySelector('.header-responsive-nav')
    if(hamburgerMenuBox.style.display == 'none'){
        hamburgerMenuBox.style.display = 'flex'
    } else {
        hamburgerMenuBox.style.display = 'none'
    }
})


// Toggle burger button in navbar

const toggleButton = document.querySelector('.burger-btn')
const navbarLinks = document.querySelector('.navbar-links')
const buttonLine = document.querySelectorAll('.burger-btn-line')

const mainCourse = document.querySelector('.menu-links')

toggleButton.addEventListener('click', () => {
    
    if(navbarLinks.className === 'navbar-links'){
        navbarLinks.classList.toggle('active')
        buttonLine[0].style.transformOrigin = '0 0'
        buttonLine[0].style.transform = 'rotate(45deg) translate(-1px, 0px)'
        buttonLine[1].style.display = 'none'
        buttonLine[2].style.transformOrigin = '0 100%'
        buttonLine[2].style.transform = 'rotate(-45deg) translate(-1px, 0px)'
    }
    else {
        navbarLinks.classList.toggle('active')
        buttonLine[0].style.transformOrigin = '0 100%'
        buttonLine[0].style.transform = 'rotate(0deg)'
        buttonLine[1].style.display = 'flex'
        buttonLine[2].style.transformOrigin = '0 0'
        buttonLine[2].style.transform = 'rotate(0deg)'
        
    }    
})

// End of toggle burger button

mainCourse.addEventListener('click', () => {
    console.log('OK')
})
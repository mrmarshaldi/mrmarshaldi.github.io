const toggleButton = document.querySelector('.burger-btn')
const navbarLinks = document.querySelector('.navbar-links')
const buttonLine = document.querySelectorAll('.burger-btn-line')


const menuAppetizer = document.querySelector('.menu-links-appetizer')
const menuMainCourse = document.querySelector('.menu-links-maincourse')
const menuDrinks = document.querySelector('.menu-links-drinks')


const appetizer = document.querySelectorAll('.appetizer')
const maincourse = document.querySelectorAll('.maincourse')
const drinks = document.querySelectorAll('.drinks')

// Navbar burger button toggle

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


// Menu Categories link functionality

menuAppetizer.addEventListener('click', () => {
    
    menuAppetizer.className += ' active'
    menuMainCourse.classList.remove('active')
    menuDrinks.classList.remove('active')
    
    
    for (i = 0; i < appetizer.length; i++) {
        appetizer[i].style.display = 'inherit'
        appetizer[i].style.position = 'relative'
    }
    
    for (i = 0; i < maincourse.length; i++) {
        maincourse[i].style.display = 'none'
        maincourse[i].style.position = 'absolute'
    }
    
    for (i = 0; i < drinks.length; i++) {
        drinks[i].style.display = 'none'
        drinks[i].style.position = 'absolute'
    }
})

menuMainCourse.addEventListener('click', () => {
    
    menuMainCourse.className += ' active'
    menuAppetizer.classList.remove('active')
    menuDrinks.classList.remove('active')

    for (i = 0; i < appetizer.length; i++) {
        appetizer[i].style.display = 'none'
        appetizer[i].style.position = 'absolute'
    }
    
    for (i = 0; i < maincourse.length; i++) {
        maincourse[i].style.display = 'inherit'
        maincourse[i].style.position = 'relative'
    }
    
    for (i = 0; i < drinks.length; i++) {
        drinks[i].style.display = 'none'
        drinks[i].style.position = 'absolute'
    }
})

menuDrinks.addEventListener('click', () => {
    
    menuDrinks.className += ' active'
    menuMainCourse.classList.remove('active')
    menuAppetizer.classList.remove('active')
    
    for (i = 0; i < appetizer.length; i++) {
        appetizer[i].style.display = 'none'
        appetizer[i].style.position = 'absolute'
    }
    
    for (i = 0; i < maincourse.length; i++) {
        maincourse[i].style.display = 'none'
        maincourse[i].style.position = 'absolute'
    }
    
    for (i = 0; i < drinks.length; i++) {
        drinks[i].style.display = 'inherit'
        drinks[i].style.position = 'relative'
    }
})

// End of menu category links function


// Image Carousel (banner scrolling image)
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("banner-slides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// End of Image Carousel
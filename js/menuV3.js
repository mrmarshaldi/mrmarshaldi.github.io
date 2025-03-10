const toggleButton = document.querySelector(".burger-btn");
const navbarLinks = document.querySelector(".navbar-links");
const buttonLine = document.querySelectorAll(".burger-btn-line");

const menuAppetizer = document.querySelector(".menu-links-appetizer");
const menuMainCourse = document.querySelector(".menu-links-maincourse");
const menuPastry = document.querySelector(".menu-links-pastry");
const menuDrinks = document.querySelector(".menu-links-drinks");
const foodBanner = document.querySelector(".food-banner");

const appetizer = document.querySelectorAll(".appetizer");
const maincourse = document.querySelectorAll(".maincourse");
const pastry = document.querySelectorAll(".pastry");
const drinks = document.querySelectorAll(".drinks");

// Navbar burger button toggle

toggleButton.addEventListener("click", () => {
  if (navbarLinks.className === "navbar-links") {
    navbarLinks.classList.toggle("active");
    buttonLine[0].style.transformOrigin = "0 0";
    buttonLine[0].style.transform = "rotate(45deg) translate(-1px, 0px)";
    buttonLine[1].style.display = "none";
    buttonLine[2].style.transformOrigin = "0 100%";
    buttonLine[2].style.transform = "rotate(-45deg) translate(-1px, 0px)";
  } else {
    navbarLinks.classList.toggle("active");
    buttonLine[0].style.transformOrigin = "0 100%";
    buttonLine[0].style.transform = "rotate(0deg)";
    buttonLine[1].style.display = "flex";
    buttonLine[2].style.transformOrigin = "0 0";
    buttonLine[2].style.transform = "rotate(0deg)";
  }
});

// End of toggle burger button

// Menu Categories link functionality

menuAppetizer.addEventListener("click", () => {
  menuAppetizer.className += " active";
  menuMainCourse.classList.remove("active");
  menuPastry.classList.remove("active");
  menuDrinks.classList.remove("active");
  foodBanner.classList.remove("inactive");

  for (i = 0; i < appetizer.length; i++) {
    appetizer[i].style.display = "inherit";
    appetizer[i].style.position = "relative";
  }

  for (i = 0; i < maincourse.length; i++) {
    maincourse[i].style.display = "none";
    maincourse[i].style.position = "absolute";
  }

  for (i = 0; i < pastry.length; i++) {
    pastry[i].style.display = "none";
    pastry[i].style.position = "absolute";
  }

  for (i = 0; i < drinks.length; i++) {
    drinks[i].style.display = "none";
    drinks[i].style.position = "absolute";
  }
});

menuMainCourse.addEventListener("click", () => {
  menuMainCourse.className += " active";
  menuAppetizer.classList.remove("active");
  menuPastry.classList.remove("active");
  menuDrinks.classList.remove("active");
  foodBanner.className += " inactive";

  for (i = 0; i < appetizer.length; i++) {
    appetizer[i].style.display = "none";
    appetizer[i].style.position = "absolute";
  }

  for (i = 0; i < maincourse.length; i++) {
    maincourse[i].style.display = "inherit";
    maincourse[i].style.position = "relative";
  }

  for (i = 0; i < pastry.length; i++) {
    pastry[i].style.display = "none";
    pastry[i].style.position = "absolute";
  }

  for (i = 0; i < drinks.length; i++) {
    drinks[i].style.display = "none";
    drinks[i].style.position = "absolute";
  }
});

menuPastry.addEventListener("click", () => {
  menuPastry.className += " active";
  menuAppetizer.classList.remove("active");
  menuMainCourse.classList.remove("active");
  menuDrinks.classList.remove("active");
  foodBanner.className += " inactive";

  for (i = 0; i < appetizer.length; i++) {
    appetizer[i].style.display = "none";
    appetizer[i].style.position = "absolute";
  }

  for (i = 0; i < maincourse.length; i++) {
    maincourse[i].style.display = "none";
    maincourse[i].style.position = "absolute";
  }

  for (i = 0; i < pastry.length; i++) {
    pastry[i].style.display = "inherit";
    pastry[i].style.position = "relative";
  }

  for (i = 0; i < drinks.length; i++) {
    drinks[i].style.display = "none";
    drinks[i].style.position = "absolute";
  }
});

menuDrinks.addEventListener("click", () => {
  menuDrinks.className += " active";
  menuMainCourse.classList.remove("active");
  menuPastry.classList.remove("active");
  menuAppetizer.classList.remove("active");
  foodBanner.className += " inactive";

  for (i = 0; i < appetizer.length; i++) {
    appetizer[i].style.display = "none";
    appetizer[i].style.position = "absolute";
  }

  for (i = 0; i < maincourse.length; i++) {
    maincourse[i].style.display = "none";
    maincourse[i].style.position = "absolute";
  }

  for (i = 0; i < pastry.length; i++) {
    pastry[i].style.display = "none";
    pastry[i].style.position = "absolute";
  }

  for (i = 0; i < drinks.length; i++) {
    drinks[i].style.display = "inherit";
    drinks[i].style.position = "relative";
  }
});

// End of menu category links function

// function myFunction() {
//     var element = document.gete;
//     element.classList.add("mystyle");
//   }

// Toggle menu editor
// hash();

// function hash() {
//     var hash = location.hash

//     switch(hash) {
//         case '#test' : toggleMenuEditor();
//             break;
//         default : break;
//     }
// }

// function toggleMenuEditor() {
//     appetizer[4].className += " sold-out";
// }
//End of toggle menu editor

function start() {
  menuAppetizer.className += " active";
}

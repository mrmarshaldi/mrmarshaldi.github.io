var slideIndex = 0;
// const closeButton = document.querySelector("#lightbox p");
// const bannerClick = document.querySelector(".banner");

// window.onload = () => {
//     showLightbox();
// }

// bannerClick.addEventListener("click", () => {
//   showLightbox();
// });

// lightbox.addEventListener("click", (e) => {
//   if (e.target !== e.currentTarget) return;
//   lightbox.classList.remove("active");
// });

// closeButton.addEventListener("click", () => {
//   lightbox.classList.remove("active");
// });

function showLightbox() {
  const bannerImages = document.querySelectorAll(".banner-slides img");
  var child = document.getElementById("lightbox").getElementsByTagName("img");
  lightbox.classList.add("active");

  const img = document.createElement("img");
  img.src = bannerImages[slideIndex - 1].src;

  // while (lightbox.firstChild){
  //     lightbox.removeChild(parent)
  // }

  if (child.length >= 1) {
    child[0].remove();
  }

  lightbox.appendChild(img);
}

// Image Carousel (banner scrolling image)

showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("banner-slides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 6000); // Change image every 2 seconds
}

// End of Image Carousel

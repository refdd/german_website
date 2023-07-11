// slectors
const buttonGallery = document.querySelector(".btnGallerySlider");
const galleryConteiner = document.querySelector(".galleryConteiner");
const buttonCloseGallery = document.querySelector(".buttonCloseGallery");
const itineraryPackage = document.querySelectorAll(".itineraryPackage");
const listItinerary = document.querySelectorAll(".itineraryList");
const galleryImage = document.querySelectorAll(".galleryImage");
// handle click on any img open gallery
galleryImage.forEach((item, index) => {
  item.addEventListener("click", () => {
    galleryConteiner.classList.add("active");
  });
});
// handle open gallery from buton see more
buttonGallery &&
  buttonGallery.addEventListener("click", () => {
    galleryConteiner.classList.add("active");
  });
// handle close gallery from x button
buttonCloseGallery &&
  buttonCloseGallery.addEventListener("click", () => {
    galleryConteiner.classList.remove("active");
  });
// handle close gallery from anywhere on screen
window.addEventListener("click", (e) => {
  const element = e.target;
  if (element == galleryConteiner) {
    galleryConteiner.classList.remove("active");
  }
});
// add and remove active class from taps
itineraryPackage &&
  itineraryPackage.forEach((item, index) => {
    item.addEventListener("click", () => {
      for (let i = 0; i < itineraryPackage.length; i++) {
        const element = itineraryPackage[i];
        element.classList.remove("active");
        listItinerary[i].classList.add("d-none");
      }
      item.classList.add("active");
      listItinerary[index].classList.remove("d-none");
    });
  });
// slider single
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

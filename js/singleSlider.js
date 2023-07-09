// slectors
const buttonGallery = document.querySelector(".btnGallerySlider");
const galleryConteiner = document.querySelector(".galleryConteiner");
const buttonCloseGallery = document.querySelector(".buttonCloseGallery");
const itineraryPackage = document.querySelectorAll(".itineraryPackage");
const listItinerary = document.querySelectorAll(".itineraryList");
buttonGallery &&
  buttonGallery.addEventListener("click", () => {
    galleryConteiner.classList.add("active");
  });
buttonCloseGallery &&
  buttonCloseGallery.addEventListener("click", () => {
    galleryConteiner.classList.remove("active");
  });
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

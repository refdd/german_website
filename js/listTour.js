// variables
const buttonState = document.querySelector(".yourState .btnYourState");
const boxSort = document.querySelector(".sortbox");
const itemSort = document.querySelectorAll(".sortbox li");
const gridButton = document.querySelector(".gridMode");
const listButton = document.querySelector(".listMode");
const cardListTour = document.querySelectorAll(".cardListTour");
const imageListCard = document.querySelectorAll(".imageListCard");
const contentListCard = document.querySelectorAll(".contentListCard");
const packageContainer = document.querySelector(".packageContainer");
// event
buttonState &&
  buttonState.addEventListener("click", () => {
    boxSort.classList.toggle("active");
  });
//  onclidk close box sort
itemSort.forEach((item) => {
  item.addEventListener("click", (event) => {
    boxSort.classList.remove("active");
    const labelElement = event.target.closest("label");
    const placeholderValue = buttonState.querySelector("button");

    if (labelElement) {
      const labelValue = labelElement.innerHTML;
      placeholderValue.innerHTML = labelValue;
    }
  });
});

// handle gird mode and list mode
// onclick gird mode
gridButton &&
  gridButton.addEventListener("click", () => {
    gridButton.classList.add("active");
    listButton.classList.remove("active");
    cardListTour.forEach((card) => {
      card.classList.add("col-md-4");
    });
    imageListCard.forEach((image) => {
      image.classList.remove("col-md-5");
    });
    contentListCard.forEach((content) => {
      content.classList.remove("col-md-7");
    });
    packageContainer.classList.remove("show");
  });
listButton &&
  listButton.addEventListener("click", () => {
    gridButton.classList.remove("active");
    listButton.classList.add("active");
    cardListTour.forEach((card) => {
      card.classList.remove("col-md-4");
    });
    imageListCard.forEach((image) => {
      image.classList.add("col-md-5");
    });
    contentListCard.forEach((content) => {
      content.classList.add("col-md-7");
    });
    packageContainer.classList.add("show");
  });

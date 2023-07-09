// variables
const checkFlight = document.querySelector("#checkFlight");
const inputFlight = document.querySelector("#inputFlight");
const formButton = document.querySelector(".fromStepHeader");
const fromStepbody = document.querySelector(".fromStepbody");
const fromStepTowHeader = document.querySelector(".fromStepTowHeader");
const fromStepTowbody = document.querySelector(".fromStepTowbody");
const fromStepHeaderImg = document.querySelector(".fromStepHeader");
const fromStepTowHeaderImg = document.querySelector(".fromStepTowHeader");

formButton &&
  formButton.addEventListener("click", () => {
    fromStepbody.classList.toggle("active");
    fromStepHeaderImg.classList.toggle("active");
  });
fromStepTowHeader &&
  fromStepTowHeader.addEventListener("click", () => {
    fromStepTowbody.classList.toggle("active");
    fromStepTowHeaderImg.classList.toggle("active");
  });
function checkCheckbox() {
  if (checkFlight.checked) {
    inputFlight.classList.add("show");
  } else {
    inputFlight.classList.remove("show");
  }
}

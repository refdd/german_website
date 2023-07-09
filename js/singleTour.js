// variables
const taps = document.querySelectorAll(".tapsContainer li");
const Infants = document.getElementById("Infants");
const Children = document.getElementById("Children");
const adults = document.getElementById("adults");
// event
taps.forEach((tap) => {
  tap.addEventListener("click", () => {
    taps.forEach((item) => {
      item.classList.remove("active");
    });
    tap.classList.add("active");
  });
});
// counter traveler
// add
function addCounter(type) {
  if (type == "adults") {
    adults.value++;
  }
  if (type == "Children") {
    Children.value++;
  }
  if (type == "Infants") {
    Infants.value++;
  }
}

// reomve
function removeCounter(type) {
  if (type == "adults") {
    if (adults.value == 0) {
      adults.value = 0;
      aduitsValue = adults.value;
    } else {
      adults.value--;
    }
  }
  if (type == "Children") {
    if (Children.value == 0) {
      Children.value = 0;
    } else {
      Children.value--;
    }
  }
  if (type == "Infants") {
    if (Infants.value == 0) {
      Infants.value = 0;
    } else {
      Infants.value--;
    }
  }
}

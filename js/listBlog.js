const categories = document.querySelectorAll(".categorie");
const buttonFilter = document.querySelector(".buttonFilter");
const modileSearch = document.querySelector(".modileSearch");
document.addEventListener("DOMContentLoaded", () => {
  categories.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  });
});

// opinand close search
buttonFilter.addEventListener("click", () => {
  modileSearch.classList.toggle("show");
});

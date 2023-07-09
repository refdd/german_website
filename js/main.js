const openIcon = document.querySelector(".openIcon");
const iconClose = document.querySelector(".closeIcon");
const menu_Bar = document.querySelector(".menu_Bar");
//open and close manu bar
openIcon &&
  openIcon.addEventListener("click", () => {
    openIcon.classList.add("active");
    iconClose.classList.add("active");
    menu_Bar.classList.add("active");
  });
iconClose &&
  iconClose.addEventListener("click", () => {
    openIcon.classList.remove("active");
    iconClose.classList.remove("active");
    menu_Bar.classList.remove("active");
  });

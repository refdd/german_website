const iconVideo = document.querySelector(".iconVideo");
const placeholderVideo = document.querySelector(".placeholderVideo");
const video = document.querySelector(".videoContainer");

iconVideo &&
  iconVideo.addEventListener("click", () => {
    placeholderVideo.classList.add("active");
    video.classList.add("active");
  });

// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("[data-scroll-container]"),
//     smooth: true,
//   });
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

let slidermenuBtn = document.querySelector(".topMenu button");

let topMenu_slider = document.querySelector(".topMenu_slider");
slidermenuBtn.addEventListener("click", () => {
  topMenu_slider.classList.toggle('showSlider')
});

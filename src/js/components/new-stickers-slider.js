import Swiper from "swiper/bundle";

const newStickersSlider = new Swiper(".new-stickers__slider", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  allowTouchMove: false,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    modifierClass: "swiper-pagination-new-stickers-",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

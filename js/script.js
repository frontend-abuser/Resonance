
const swiper = new Swiper(".products__slider", {
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 0,
  loop: false,
  grabCursor: true,
  initialSlide: 1,
  pagination: {
    el: ".products__pagination",
    clickable: true,
  },
});

new Swiper('.about-product', {
  slidesPerView: "auto",
  spaceBetween: 16,
  speed: 400,
  centeredSlides: true,

});

new Swiper('.details__swiper', {
  slidesPerView: "auto",
  spaceBetween: 16,
  speed: 400,

});

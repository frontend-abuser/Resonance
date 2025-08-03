// for burger menu
const burgerBtn = document.querySelector('.burger-menu')
const bodyElem = document.querySelector('body')

// for products carousel



document.addEventListener('click', (event) => {
  const target = event.target
  if (target === burgerBtn || target.parentElement === burgerBtn) {
    burgerBtn.classList.toggle('burger-menu--opened')

    bodyElem.classList.toggle('body-menu--opened')
  }




});

const swiper = new Swiper(".products__slider", {
  centeredSlides: true,
  slidesPerView: 3,
  // slidesPerView: 'auto',
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

});

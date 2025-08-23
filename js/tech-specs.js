const specsImgYellow = document.querySelector('.specs__img--yellow')
const specsImgGreen = document.querySelector('.specs__img--green')
const specsImgRed = document.querySelector('.specs__img--red')

const specsControlsYellow = document.querySelector('.specs__controls--yellow')
const specsControlsGreen = document.querySelector('.specs__controls--green')
const specsControlsRed = document.querySelector('.specs__controls--red')

document.addEventListener('click', (event) => {
  const target = event.target;


  if (target === specsControlsYellow) {
    specsImgGreen.classList.remove('specs__img--active');
    specsImgRed.classList.remove('specs__img--active');
    specsImgYellow.classList.add('specs__img--active');

    specsControlsGreen.classList.remove('specs__controls--active')
    specsControlsRed.classList.remove('specs__controls--active')
    specsControlsYellow.classList.add('specs__controls--active')
  } else if (target === specsControlsGreen) {
    specsImgRed.classList.remove('specs__img--active');
    specsImgYellow.classList.remove('specs__img--active');
    specsImgGreen.classList.add('specs__img--active');

    specsControlsRed.classList.remove('specs__controls--active')
    specsControlsYellow.classList.remove('specs__controls--active')
    specsControlsGreen.classList.add('specs__controls--active')
  } else if (target === specsControlsRed) {
    specsImgYellow.classList.remove('specs__img--active');
    specsImgGreen.classList.remove('specs__img--active');
    specsImgRed.classList.add('specs__img--active');

    specsControlsYellow.classList.remove('specs__controls--active')
    specsControlsGreen.classList.remove('specs__controls--active')
    specsControlsRed.classList.add('specs__controls--active')
  }
})

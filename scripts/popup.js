const popUp = document.querySelector('.popup');
const nav = document.querySelector('.nav');

popUp.addEventListener('click', function() {
  this.classList.toggle('active');
  nav.classList.toggle('open');
})
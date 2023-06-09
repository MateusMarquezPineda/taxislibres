function imgSlider(anything){
    document.querySelector('.Taxi').src = anything;
}
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

setInterval(nextSlide, 2000); // Cambia la imagen cada 3 segundos (3000 ms)
const btnSwitch = document.querySelector('#switch');
 btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
 btnSwitch.classList.toggle('active'); 
  
 })
const dropDownMenu = document

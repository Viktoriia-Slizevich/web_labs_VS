const curtain = document.querySelector('.curtain');
const lamp = document.querySelector('.lamp');
const hang = document.querySelector('.hang');
const content = document.querySelector('.content');
const rabbit = document.querySelector('.rabbit');
const bird = document.querySelector('.Bird');
const hat = document.querySelector('.hat');

curtain.addEventListener('click', () => {
  curtain.classList.toggle('active');
});

lamp.addEventListener('mousedown', () => {
  hang.style.transform = `translateY(5px)`;
});

lamp.addEventListener('mouseup', () => {
  hang.style.transform = `translateY(0px)`;
});

lamp.addEventListener('click', () => {
  content.classList.toggle('hidden');
});

function changeAnimals()
{
  rabbit.classList.toggle('InHat');
  rabbit.classList.toggle('OutOfHat');
  bird.classList.toggle('InHat');
  bird.classList.toggle('OutOfHat');
}

hat.addEventListener('click', changeAnimals);


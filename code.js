gsap.registerPlugin(ScrollTrigger);

gsap.from('#lineOne', {
  scrollTrigger: {
    trigger: '#lineOne',
    start: 'top bottom',
    toggleActions: 'restart pause reverse pause'
  },
  x: -1920,
  y: -150,
  duration: 1,
})

gsap.from('#lineTwo', {
  scrollTrigger: {
    trigger: '#lineOne',
    start: 'top bottom',
    toggleActions: 'restart pause reverse pause'
  },
  x: 1920,
  duration: 1,
})

gsap.from('#lineThree', {
  scrollTrigger: {
    trigger: '#lineThree',
    start: 'top bottom',
    toggleActions: 'restart pause reverse pause'
  },
  x: -1920,
  duration: 1,
})

gsap.to('#lineFour', {
  scrollTrigger: {
    trigger: '#lineThree',
    start: 'top bottom',
    toggleActions: 'restart pause reverse pause'
  },
  x: 0,
  y: -90,
  duration: 1,
})

const prodOne = document.getElementById("producerOne");
const prodTwo = document.getElementById("producerTwo");
const prodThree = document.getElementById("producerThree");
const prodFour = document.getElementById("producerFour");

const rowOne = document.getElementById("rowOne");
const rowTwo = document.getElementById("rowTwo");

prodOne.addEventListener('mouseover', function() {
  rowOne.style.flex=2;
  rowTwo.style.flex=1;

  prodOne.style.flex=2;
  prodTwo.style.flex=1;
  prodThree.style.flex=2;
  prodFour.style.flex=1;
});

prodTwo.addEventListener('mouseover', function() {
  rowOne.style.flex=2;
  rowTwo.style.flex=1;

  prodOne.style.flex=1;
  prodTwo.style.flex=2;
  prodThree.style.flex=1;
  prodFour.style.flex=2;
});

prodThree.addEventListener('mouseover', function() {
  rowOne.style.flex=1;
  rowTwo.style.flex=2;

  prodOne.style.flex=2;
  prodTwo.style.flex=1;
  prodThree.style.flex=2;
  prodFour.style.flex=1;
});

prodFour.addEventListener('mouseover', function() {
  rowOne.style.flex=1;
  rowTwo.style.flex=2;

  prodOne.style.flex=1;
  prodTwo.style.flex=2;
  prodThree.style.flex=1;
  prodFour.style.flex=2;
});
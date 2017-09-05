import { TweenMax } from 'gsap';

const animateBox = () => {
  const box = document.querySelector('#box');

  TweenMax.to(box, 1, {
    yPercent: 100,
    repeat: -1,
    yoyo: true,
  });

  box.classList.toggle('active');
};

export default animateBox;
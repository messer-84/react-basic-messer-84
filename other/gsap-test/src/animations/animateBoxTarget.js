import { TweenMax } from 'gsap';

const animateBoxTarget = e => {
  const box = e.target;

  TweenMax.to(box, 1, {
    yPercent: 100,
    repeat: -1,
    yoyo: true,
  });

  box.classList.toggle('active');
};

export default animateBoxTarget;
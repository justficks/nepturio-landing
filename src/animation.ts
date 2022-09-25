import anime from 'animejs';

export const rocketAnimation = (selector: string, rocketClass: string) => {
  const path = anime.path(selector);

  anime({
    targets: rocketClass,
    translateX: path('x'),
    translateY: path('y'),
    rotate: '360deg',
    easing: 'linear',
    duration: 10000,
    loop: true,
  });
};

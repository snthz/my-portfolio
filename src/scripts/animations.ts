import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();
mm.add('(prefers-reduced-motion: no-preference)', () => {
  // Titular del hero: cada línea sube desde su máscara
  gsap.to('[data-reveal] > span', {
    y: 0,
    duration: 1.2,
    ease: 'expo.out',
    stagger: 0.1,
    delay: 0.1,
  });

  ScrollTrigger.batch('[data-animate]', {
    start: 'top 88%',
    once: true,
    onEnter: (elements) => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
        overwrite: true,
      });
    },
  });
});

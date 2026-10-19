import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();
mm.add('(prefers-reduced-motion: no-preference)', () => {
  ScrollTrigger.batch('[data-animate]', {
    start: 'top 88%',
    once: true,
    onEnter: (elements) => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.06,
        overwrite: true,
      });
    },
  });
});

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
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.09,
        overwrite: true,
      });
    },
  });

  const line = document.querySelector('[data-timeline-line]');
  const timeline = document.querySelector('[data-timeline]');
  if (line && timeline) {
    gsap.to(line, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: timeline,
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: 0.5,
      },
    });
  }
});

import './style.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'

gsap.from(".test", {
  yPercent: 130,
  stagger: 0.05,
  duration: 3,
  opacity: 0,
});
gsap.from(".test2", {
  yPercent: 130,
  stagger: 0.05,
  duration: 3,
  opacity: 0,
});



import './style.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'

const test = document.querySelector(".test")
let mySplit = test.textContent
test.textContent = ""
let split = mySplit.split("")
for (let i = 0; i < split.length; ++i) {
  const mySpan = document.createElement("span")
  mySpan.textContent = split[i]
  test.appendChild(mySpan)

}
gsap.from(".test span", {
  yPercent: 130,
  stagger: 0.5,
  duration: 2,
  opacity: 0,
})

/*gsap.from(".h", {
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
});*/



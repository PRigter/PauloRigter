gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline()

const btn = document.querySelector(".fa-bars")
const sidebar = document.querySelector(".sidebar")

btn.addEventListener("click", function() {
  sidebar.classList.toggle("slide")
})

sidebar.addEventListener("click", function(e) {
  this.classList.toggle("slide")
})


tl.from(".slide-down", {
  y: "-30%",
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut
})



tl.from(".stagger1", {
  opacity: 0,
  y: -50,
  stagger: .3,
  ease: Power4.easeOut,
  duration: 2
}, "-=1")

gsap.from(".skill-anim", {
  scrollTrigger: {
    trigger: ".skill-anim",
    start: "center bottom"
  },
  stagger: .2,
  scale: 0.1,
  duration: 1.5,
  ease: Back.easeOut.config(1.7)
}, "-=2")


gsap.from(".transition2", {
  scrollTrigger: {
      trigger: ".transition2",
      start: "center bottom"
  },
  y: 50,
  opacity: 0,
  duration: 1.4,
  stagger: .3
}, "-=2")


gsap.from(".transition3", {
  scrollTrigger: {
      trigger: ".transition3",
      start: "center bottom"
  },
  y: 50,
  opacity: 0,
  duration: 1.4,
  stagger: .6
},"-=2")
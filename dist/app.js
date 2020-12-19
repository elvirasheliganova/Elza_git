


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

gsap.set(".logo", {transformOrigin: "50% 300%"});
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top top",
    
    scrub: 1
  }
});

tl.to(".logo", { y: 150, duration: 0.25})
.to(".logo", { y: 150, x: 200, duration: 0.25})
  .to(".logo", { rotation: 180, duration: 8});


/*gsap.to(".slide1", {
  yPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".slide1",
     //start: "top center", / the default values
    // end: "bottom top",
    scrub: true
  }, 
});

gsap.to(".slide2", {
  yPercent: -150,
  ease: "none",
  scrollTrigger: {
    trigger: "slide1", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});*/






    
    
  


/*
/*gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing:false
     
  });
});

const tl = gsap.timeline({defaults: { ease: "slow"}})

tl.to('.text', {y: "0%",  opacity: 1, duration:2, stagger: 2})
 .to('.fir', {y: -90,  scale:1.5,  opacity: 0.1,  duration: 1},"+=2")
 .to('.sec', {y: -81,   scale:1.5,  opacity: 0.1,  duration: 1},"-=1")
 .to('.thir', {y: -72,  scale:1.5,  opacity: 0.2,  duration: 1},"-=1")
 
  

  .to('.intro_subtitle_text', {y: -160, x: 350, opacity: 1, scale: 1.5, marginTop: 60, stagger: 2, duration:1},"-=0.5")
  .to('.cta', { opacity: 1, duration: 1, ease: "bounce"}, "+=1")*/


// GSAP Animation
const shape = document.querySelector("#shape");
const innerShape = shape.querySelector(".inner-shape");

gsap.to(shape, {
  duration: 10,
  rotation: 360,
  repeat: -1,
  ease: "linear"
});

gsap.to(innerShape, {
  duration: 10,
  y: -100,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Glitch Effect on click
shape.addEventListener("click", function() {
  gsap.to(innerShape, {
    duration: 0.2,
    x: "-=20",
    repeat: 5,
    yoyo: true,
    ease: "sine.inOut"
  });
  gsap.to(shape, {
    duration: 0.5,
    opacity: 0,
    onComplete: function() {
      shape.style.display = "none";
    }
  });
});
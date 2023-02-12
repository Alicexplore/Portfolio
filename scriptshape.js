// GSAP Animation 1
const shape = document.querySelector("#shape");

gsap.to(shape, {
  duration: 10,
  rotation: 360,
  repeat: -1,
  ease: "linear"
});

shape.addEventListener("click", function() {
    gsap.to(shape, {
      duration: 2,
      opacity: 0,
      ease: "linear",
      onComplete: function() {
        shape.style.display = "none";
      }
    });
  });

//   GSAP Animation 2
const shape_2 = document.querySelector("#shape_2");

gsap.to(shape_2, {
  duration: 10,
  rotation: 360,
  repeat: -1,
  ease: "linear"
});

shape.addEventListener("click", function() {
    gsap.to(shape_2, {
      duration: 2,
      opacity: 0,
      ease: "linear",
      onComplete: function() {
        shape_2.style.display = "none";
      }
    });
  });


    // GSAP Animation 3
const shape_3 = document.querySelector("#shape_3");

gsap.to(shape_3, {
  duration: 10,
  rotation: 360,
  repeat: -1,
  ease: "linear"
});

shape.addEventListener("click", function() {
    gsap.to(shape_3, {
      duration: 2,
      opacity: 0,
      ease: "linear",
      onComplete: function() {
        shape_3.style.display = "none";
      }
    });
  });



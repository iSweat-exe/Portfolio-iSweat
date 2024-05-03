document.addEventListener("DOMContentLoaded", function () {
  gsap.to(".intro-overlay", {
    duration: 0.5,
    delay: 2.5,
    opacity: 0,
    scale: 0.5,
    ease: "power2.inOut",
    onComplete: function () {
      document.querySelector(".intro-overlay").remove();
    },
  });
});

document.addEventListener("DOMContentLoaded", function() {
    // Animation de l'intro avec GSAP
    gsap.to(".intro-overlay", {duration: 0.5, delay: 2.5, opacity: 0, scale: 0.5, ease: "power2.inOut", onComplete: function() {
        // Supprimez l'élément de l'intro une fois l'animation terminée
        document.querySelector(".intro-overlay").remove();
    }});
});

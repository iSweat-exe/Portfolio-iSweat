console.log("Hero Animation JS Loaded");

document.addEventListener("DOMContentLoaded", (event) => {

    const elementsToAnimate = [
        { selector: '.GSAP-Menu', startY: -100, endY: 0, delay: 0 + 2.5 },
        { selector: '.GSAP-Brand', startY: -100, endY: 0, delay: 0 + 2.5 },
        { selector: '.text', startY: 400, endY: 0, delay: 1 + 2.5 },
        { selector: '.GSAP-Date-time-year', startY: 200, endY: 75, delay: 2 + 2.5 },
        { selector: '.GSAP-Date-time', startY: 200, endY: 0, delay: 2.6 + 2.5 },
        { selector: '.GSAP-Description-1', startY: 200, endY: 0, delay: 3.5 + 2.5 },
        { selector: '.GSAP-Description-2', startY: 200, endY: 0, delay: 3.9 + 2.5 },
        { selector: '.GSAP-Description-3', startY: 200, endY: 0, delay: 4.3 + 2.5 },
        { selector: '.GSAP-Description-4', startY: 200, endY: 0, delay: 4.8 + 2.5 },
        { selector: '.GSAP-Scroll-notification', startY: 200, endY: 0, delay: 5.2 + 2.5 }
    ];

    elementsToAnimate.forEach(({ selector, startY, endY, delay }) => {
        gsap.fromTo(selector, {
            y: startY,
            opacity: 0
        }, {
            duration: 1.5,
            y: endY,
            opacity: 0.85,
            ease: 'power1.out',
            delay
        });
    });
});

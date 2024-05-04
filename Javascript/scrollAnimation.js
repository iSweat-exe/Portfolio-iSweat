console.log("Hello Scroll Animation");

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const animateElement = ({ selector, startY, endY, delay, duration }) => {
        gsap.fromTo(selector, {
            opacity: 0,
            y: startY
        }, {
            opacity: 1,
            y: endY,
            duration: duration / 1000,
            ease: 'power5.out',
            delay,
            scrollTrigger: {
                trigger: selector,
                once: true,
                markers: false,
                start: "top 80%",
            }
        });
    };

    const elementsToAnimate = [
        { selector: '.works', startY: 300, endY: 0, delay: 0, duration: 1500 },
        { selector: '.title-1', startY: 100, endY: 0, delay: 0, duration: 1500 },
        { selector: '.title-2', startY: 100, endY: 0, delay: 0, duration: 1500 },
        { selector: '.btn-works', startY: -50, endY: 0, delay: 0.2, duration: 1500 },


        { selector: '.services-content', startY: 150, endY: 0, delay: 0.2, duration: 1500 },

            // { selector: '.service-1', startY: 100, endY: 0, delay: 0.2, duration: 1500 },
            // { selector: '.service-2', startY: 100, endY: 0, delay: 0.3, duration: 1500 },
            // { selector: '.service-3', startY: 100, endY: 0, delay: 0.4, duration: 1500 }
    ];

    elementsToAnimate.forEach(animateElement);
});

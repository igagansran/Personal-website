// Initial animations
gsap.from('.hero-text h1', {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power4.out'
});

gsap.from('.hero-image', {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: 'power4.out'
});

gsap.from('.specialization', {
    duration: 1,
    opacity: 0,
    delay: 0.5,
    ease: 'power4.out'
});
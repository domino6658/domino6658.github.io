document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('.box, .box-preview');

    // Add the hidden and backdrop-blur classes to all elements to animate
    elementsToAnimate.forEach(element => {
        element.classList.add('hidden', 'backdrop-blur');
    });

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            delay = index * 200;

            if (index === 2) {
                delay -= 200; // Delay the third element by 200ms less to make it appear more naturally
            }
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.remove('hidden');
                    entry.target.classList.add('fly-in-from-beneath');
                    observer.unobserve(entry.target); // Stop observing once the animation is triggered
                }, delay); // Delay each element by 200ms multiplied by its index
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

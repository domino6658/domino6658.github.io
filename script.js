document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('.fly-in, .fade-in');

    // Add the hidden and backdrop-blur classes to all elements to animate
    elementsToAnimate.forEach(element => {
        element.classList.add('hidden', 'backdrop-blur');
    });

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        offset = 0;
        entries.forEach((entry, index) => {
            delay = index * 200;
            // console.log(index)
            if (entry.target.classList.contains('go-with-previous')) {
                offset += 1;
            }
            
            delay -= 200*offset; 
            
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.remove('hidden');
                    if (entry.target.classList.contains('fade-in')) {
                        entry.target.classList.add('fade-in');
                    } else {
                        entry.target.classList.add('fly-in-from-beneath');
                    }
                    observer.unobserve(entry.target); // Stop observing once the animation is triggered
                }, delay); // Delay each element by 200ms multiplied by its index
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

function dropClick() {
    document.getElementById("myDropdown").classList.toggle("show");
    console.log('Dropdown clicked');
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        console.log('Window clicked');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


document.addEventListener("DOMContentLoaded", function() {
    // Get the menu and navbar elements
    const menu = document.getElementById('menu');
    const navbar = document.getElementById('navbar');

    // Toggle the navbar when the menu icon is clicked
    menu.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Hide the navbar when a navigation link is clicked (for smaller screens)
    const navLinks = navbar.querySelectorAll('a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

    // Typing Animation
    const positions = ["UI/UX Designer", "Web Designer", "Front End Developer"];
    let currentIndex = 0;
    let currentChar = 0;
    const typedText = document.getElementById("typed-text");
    const typingSpeed = 150; // milliseconds
    const erasingSpeed = 100; // milliseconds
    const delayBetweenPositions = 2000; // milliseconds

    function type() {
        if (currentChar < positions[currentIndex].length) {
            typedText.textContent += positions[currentIndex].charAt(currentChar);
            currentChar++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenPositions);
        }
    }

    function erase() {
        if (currentChar > 0) {
            typedText.textContent = positions[currentIndex].substring(0, currentChar - 1);
            currentChar--;
            setTimeout(erase, erasingSpeed);
        } else {
            currentIndex = (currentIndex + 1) % positions.length;
            setTimeout(type, typingSpeed);
        }
    }

    setTimeout(type, delayBetweenPositions);

    // Intersection Observer for animations
    let observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let percentElements = entry.target.querySelectorAll('.percent svg circle:nth-child(2)');
                let dotElements = entry.target.querySelectorAll('.dot');
                percentElements.forEach(el => {
                    el.style.opacity = 1;
                    el.style.animation = 'none'; // Reset animation
                    void el.offsetWidth; // Trigger reflow
                    el.style.animation = 'fadeIn 1s linear forwards';
                });
                dotElements.forEach(el => {
                    el.style.animation = 'none'; // Reset animation
                    void el.offsetWidth; // Trigger reflow
                    el.style.animation = 'animateDot 2s linear forwards';
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skills .box').forEach(box => {
        observer.observe(box);
    });

    // Form validation
    document.querySelector('form').addEventListener('submit', function(event) {
        const name = document.querySelector('input[name="name"]');
        const email = document.querySelector('input[name="email"]');
        const project = document.querySelector('input[name="project"]');
        const message = document.querySelector('textarea[name="message"]');
        
        if (!name.value || !email.value || !project.value || !message.value) {
            event.preventDefault();
            alert('Please fill out all fields.');
        }
    });
});

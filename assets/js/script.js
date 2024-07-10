<script>
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

    // Intersection Observer for animations
    document.addEventListener('DOMContentLoaded', function () {
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
    });
</script>

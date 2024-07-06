<script>
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
</script>

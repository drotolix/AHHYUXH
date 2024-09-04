// JavaScript to handle interactive features

document.addEventListener('DOMContentLoaded', () => {
    // Greeting Button
    const greetingButton = document.getElementById('greetingButton');
    const greetingMessage = document.getElementById('greetingMessage');
    
    greetingButton.addEventListener('click', () => {
        const hours = new Date().getHours();
        let greeting = '';
        
        if (hours < 12) {
            greeting = 'Good Morning!';
        } else if (hours < 18) {
            greeting = 'Good Afternoon!';
        } else {
            greeting = 'Good Evening!';
        }
        
        greetingMessage.textContent = greeting;
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent actual form submission for demo purposes
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            formMessage.textContent = 'Thank you for your message!';
            formMessage.style.color = 'green';
        } else {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.style.color = 'red';
        }
    });
});

export default function processNewsletterSignup () {
    const newsletterForm = document.querySelector('#newsletter-form');
    const emailAddress = document.querySelector('#newsletter-email-address');
    const subscribeBtn = document.querySelector('#newsletter-subscribe-btn');
    const messageDiv = document.querySelector('#newsletter-msg');

    newsletterForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = emailAddress.value;

        if (!isValidEmail(email)) {
            showMessage('Error: Please enter a valid email address!', 'error');
            return;
        }

        subscribeBtn.disabled = true;
        showMessage('Subscribing...', 'info');

        // Insert your own endpoint for the POST request
        try {
            const response = await fetch('http://localhost:5173', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                showMessage('Subscription successful! Check your inbox to confirm your email address.', 'success');
                emailAddress.value = '';
            } else {
                const errorData = await response.json();
                showMessage('Error: Unable to subscribe!', 'error');
            }
        } catch (error) {
            showMessage('An unknown error occurred, please try again.', 'error');
        } finally {
            subscribeBtn.disabled = false;
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email);
    }

    function showMessage(msg, type) {
        messageDiv.textContent = msg;

        switch (type) {
            case 'success':
                messageDiv.style.color = '#36FF61';
                break;
            case 'info': 
                messageDiv.style.color = '#85BFFF';
                break;
            case 'error':
                messageDiv.style.color = '#FF1F1F';
                break;
            default:
                messageDiv.style.color = '85BFFF';
        }

        messageDiv.style.display = 'block';
    }
}
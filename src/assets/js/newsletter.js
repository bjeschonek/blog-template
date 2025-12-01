export default function handleNewsletterSubmit() {
    const newsletterSignupSection = document.querySelector('#newsletter-signup');
    const newsletterForm = document.querySelector('#newsletter-form');
    const newsletterEmail = document.querySelector('#newsletter-email');
    const newsletterSubscribeBtn = document.querySelector('#newsletter-subscribe-btn');
    const newsletterMessage = document.querySelector('#newsletter-msg');
    const newsletterSuccess = document.querySelector('#newsletter-success');
    const newsletterDismissBtn = document.querySelector('#newsletter-dismiss');

    newsletterForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = newsletterEmail.value;

        if (!isValidEmail(email)) {
            showMessage('Error: Please enter a valid email address!', 'error');
            return;
        }

        newsletterSubscribeBtn.disabled = true;
        showMessage('Attempting to subscribe...', 'info');

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
                newsletterSignupSection.style.display = 'hidden';
                newsletterSuccess.style.display = 'block';
                emailAddress.value = '';
            } else {
                const errorData = await response.json();
                showMessage('Error: Unable to subscribe!', 'error');
            }
        } catch (error) {
            showMessage('An unexpected error occurred, please try again later.', 'error');
        } finally {
            newsletterSubscribeBtn.disabled = false;
        }
    });

    newsletterDismissBtn.addEventListener('click', () => {
        newsletterSuccess.style.display = 'hidden';
        newsletterSignupSection.style.display = 'block';
    });

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email);
    }

    function showMessage(msg, type) {
        newsletterMessage.textContent = msg;

        switch (type) {
            case 'info': 
                newsletterMessage.style.color = '#85BFFF';
                break;
            case 'error':
                newsletterMessage.style.color = '#FF1F1F';
                break;
            default:
                newsletterMessage.style.color = '85BFFF';
        }

        newsletterMessage.style.display = 'block';
    }
}
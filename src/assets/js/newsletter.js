export default function newsletterSubscribe() {
    const newsletterForm = document.querySelector('#newsletter-form');
    const emailAddress = document.querySelector('#newsletter-email-address');
    const subscribeBtn = document.querySelector('#email-subscribe-btn');
    const messageDiv = document.querySelector('#newsletter-message');

    newsletterForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = emailAddress.value;

        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }

        subscribeBtn.disabled = true;
        showMessage('Subscribing...', 'info');

        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email });
            });

            if (response.ok) {
                showMessage('Subscription successful!', 'success');
                emailAddress.value = '';
            } else {
                const errorData = await response.json();
                showMessage('Subscription Failed', 'error');
            }
        } catch (error) {
            showMessage('An error occurred, pleaes try again.', 'error');
        } finally {
            subscribeBtn.disabled = false;
        }
    });

    function isValidEmail(email) {
        const emailRegex = ''
        return emailRegex.text(email);
    }

    function showMessage(msg, type) {
        messageDiv.textContent = msg;
        messageDiv.className = type;
        messageDiv.style.display = 'block';
    }
}
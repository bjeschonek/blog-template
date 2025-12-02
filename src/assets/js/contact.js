export default function handleContactFormSubmission() {
    const contactForm = document.querySelector('#contact-form');
    const contactHeading = document.querySelector('#contact-heading');
    const firstNameInput = document.querySelector('#first-name');
    const lastNameInput = document.querySelector('#last-name');
    const emailInput = document.querySelector('#email');
    const phoneNumberInput = document.querySelector('#phone-number');
    const messageTextInput = document.querySelector('#message');
    const contactSubmitBtn = document.querySelector('#contact-submit');
    const contactSuccessMsg = document.querySelector('#contact-success');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const email = emailInput.value;
        const phoneNumber = phoneNumberInput.value;
        const messageText = messageTextInput.value;

        if (!isValidName(firstName)) {
            showInfo('Please enter a valid first name.', 'error');
            return;
        }

        if (!isValidName(lastName)) {
            showInfo('Please enter a valid last name', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showInfo('Please enter a valid email address', 'error');
            return;
        }

        if (!isValidPhone(phoneNumber)) {
            showInfo('Please enter a valid phone number.', 'error');
            return;
        }

        if (!isValidMessage(messageText)) {
            showInfo('Please enter a message', 'error');
            return;
        }

        contactSubmitBtn.disabled = true;
        showInfo('Attempting to send message...', 'info');

        try {
            const response = await fetch('http://localhost:5173', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstName, lastName, email, phoneNumber, message })
            });
            if (response.ok) {
                contactForm.style.display = 'hidden';
                contactHeading.style.display = 'hidden';
                contactSuccessMsg.style.display = 'block';
            } else {
                const errorData = await response.json();
                showInfo('Error sending message.', 'error');
            }
        } catch (error) {
            showInfo('An unknown error occurred, please try again later.', 'error');
        } finally {
            contactSubmitBtn.disabled = false;
        }
    });

    function isValidName(name) {
        const nameRegex = /^[a-zA-z\s'-]+$/;
        if (!nameRegex.test(name)) {
            return false;
        }

        if (name.length < 2 || name.length > 25) {
            return false;
        }
        return true;
    }

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email);
    }

    function isValidPhone(number) {
        const phoneRegex = ''
        return phoneRegex.test(number);
    }

    function isValidMessage(text) {
        if (text.length < 1 || text.length > 500) {
            return false;
        }
        return true;
    }

    function showInfo() {

    }
}
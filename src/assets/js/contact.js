export default function handleContactFormSubmission () {
    const contactForm = document.querySelector('#contact-form');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
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
        const phoneRegex = /^[\+]?[0-9]{0,3}\W?+[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        return phoneRegex.test(number);
    }

    function isValidMessage(text) {
        if (text.length < 1 || text.length > 500) {
            return false;
        }
        return true;
    }
}
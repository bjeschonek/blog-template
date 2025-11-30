export default function handleContactFormSubmission () {
    const contactForm = document.querySelector('#contact-form');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
    });
}
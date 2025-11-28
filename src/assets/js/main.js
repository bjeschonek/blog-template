import processNewsletterSignup from "./newsletter.js";
import processContactFormSubmission from "./contact.js";

window.addEventListener('DOMContentLoaded', (event) => {
    new PagefindUI({ element: '#search', showSubResults: true });

    processNewsletterSignup();
    processContactFormSubmission();
});
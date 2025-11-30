import handleNewsletterSubmit from "./newsletter.js";
import handleContactFormSubmission from "./contact.js";

window.addEventListener('DOMContentLoaded', (event) => {
    new PagefindUI({ element: '#search', showSubResults: true });

    handleNewsletterSubmit();
    handleContactFormSubmission();
});
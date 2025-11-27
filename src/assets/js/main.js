import processNewsletterSignup from "./newsletter.js";

window.addEventListener('DOMContentLoaded', (event) => {
    new PagefindUI({ element: '#search', showSubResults: true });

    processNewsletterSignup();
});
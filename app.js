document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation active link highlight
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // 2. Call button modal simulation
    const callButton = document.querySelector('button');
    callButton.addEventListener('click', () => {
        const confirmed = confirm("📞 Call us at 08 200 4000?\nWe're available 24/7.");
        if (confirmed) {
            window.location.href = "tel:082004000"; // initiate call (mobile only)
        }
    });

    // 3. Scroll to services on header click
    const header = document.querySelector('header');
    const serviceSection = document.querySelector('.row'); // First .row contains services

    header.addEventListener('click', () => {
        serviceSection.scrollIntoView({ behavior: 'smooth' });
    });
});

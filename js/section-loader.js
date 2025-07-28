// Section Loader - Dynamically loads HTML sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = [
        { id: 'header-section', file: './sections/header/header.html' },
        { id: 'home-section', file: './sections/home/home.html' },
        { id: 'about-section', file: './sections/about/about.html' },
        { id: 'skills-section', file: './sections/skills/skills.html' },
        { id: 'qualification-section', file: './sections/qualification/qualification.html' },
        { id: 'achievements-section', file: './sections/achievements/achievements.html' },
        { id: 'certificates-section', file: './sections/certificates/certificates.html' },
        { id: 'portfolio-section', file: './sections/portfolio/portfolio.html' },
        { id: 'contact-section', file: './sections/contact/contact.html' },
        { id: 'footer-section', file: './sections/footer/footer.html' }
    ];

    // Function to load a section
    async function loadSection(section) {
        try {
            const response = await fetch(section.file);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const html = await response.text();
            const element = document.getElementById(section.id);
            if (element) {
                element.innerHTML = html;
            }
        } catch (error) {
            console.error(`Error loading section ${section.id}:`, error);
        }
    }

    // Load all sections
    sections.forEach(section => {
        loadSection(section);
    });
});

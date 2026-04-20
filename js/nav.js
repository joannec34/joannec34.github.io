document.addEventListener('DOMContentLoaded', () => {
    const path = location.pathname;
    const isHome = path.endsWith('index.html') || path.endsWith('/');
    const isAbout = path.endsWith('about.html');
    const isHardware = path.endsWith('hardware.html');
    const isArt = path.endsWith('art.html');
    const isResume = path.endsWith('resume.html');

    const navHTML = `
        <nav class="site-nav">
            <a href="index.html" class="${isHome ? 'active' : ''}">home</a>
            <a href="about.html" class="${isAbout ? 'active' : ''}">about</a>
            <a href="hardware.html" class="${isHardware ? 'active' : ''}">hardware</a>
            <a href="art.html" class="${isArt ? 'active' : ''}">art</a>
            <a href="resume.html" class="${isResume ? 'active' : ''}">resume</a>
        </nav>
    `;

    const container = document.querySelector('.container');
    if (container) {
        container.insertAdjacentHTML('afterbegin', navHTML);
    }
});

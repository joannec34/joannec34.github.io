document.addEventListener('DOMContentLoaded', () => {
    const path = location.pathname;
    const isHome = path.endsWith('index.html') || path.endsWith('/');
    const isAbout = path.endsWith('about.html');
    const isHardware = path.endsWith('hardware.html');
    const isArt = path.endsWith('art.html');
    const isResume = path.endsWith('resume.html');

    const navHTML = `
        <nav class="site-nav">
            <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">ᯓ★</button>
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

    // ── dark mode toggle ──
    const toggle = document.getElementById('themeToggle');
    const root = document.documentElement;

    // restore saved preference
    const saved = localStorage.getItem('theme');
    if (saved) {
        root.setAttribute('data-theme', saved);
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = root.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }
});

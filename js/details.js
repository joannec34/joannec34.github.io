function opendetails(projectId) {
    const data = PROJECTS[projectId];
    const details = document.getElementById('details');
    const titleEl = document.getElementById('detailsTitle');
    const bodyEl = document.getElementById('detailsBody');
    if (!data || !details || !titleEl || !bodyEl) return;

    titleEl.textContent = data.title;
    bodyEl.innerHTML = data.sections.map(renderSection).join('') + renderImageBlock(data);

    details.hidden = false;
    document.body.style.overflow = 'hidden'; // prevent bg scrolling
    details.querySelector('.details-close')?.focus();
}

function closedetails() {
    const details = document.getElementById('details');
    if (details) details.hidden = true;
    document.body.style.overflow = '';
    const bodyEl = document.getElementById('detailsBody');
    if (bodyEl) bodyEl.innerHTML = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !document.getElementById('details')?.hidden) {
        closedetails();
    }
});

document.addEventListener('click', (e) => {
    if (e.target.closest('[data-details-dismiss]')) {
        closedetails();
    }
});

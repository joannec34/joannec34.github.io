function renderSection(s) {
    let html = '';
    if (s.heading && String(s.heading).trim()) {
        html += `<h3>${escapeHtml(s.heading)}</h3>`;
    }
    if (s.body && String(s.body).trim()) {
        html += s.body.split(/\n+/).filter((p) => p.trim()).map((p) => `<p>${escapeHtml(p)}</p>`).join('');
    }
    if (s.bullets && s.bullets.length > 0) {
        html += '<ul class="details__bullet-list">' + s.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('') + '</ul>';
    }
    return html;
}

function renderImageBlock(data) {
    const figures = [];
    if (data.images && data.images.length > 0) {
        data.images.forEach((img, i) => {
            const alt = img.alt || `Project image ${i + 1}`;
            figures.push(`<figure class="details__figure"><img class="details__image" src="${escapeAttr(img.src)}" alt="${escapeHtml(alt)}" loading="lazy"></figure>`);
        });
    }

    if (figures.length > 0) {
        return `<div class="details__media">${figures.join('')}</div>`;
    }
    return '';
}

function createCard(id, data, category) {
    const imgSrc = data.images && data.images[0] ? data.images[0].src : '';
    const imgHtml = imgSrc 
        ? `<img class="card__image" src="${escapeAttr(imgSrc)}" alt="${escapeAttr(data.title)}" loading="lazy">` 
        : `<div class="card__image" style="display:flex;align-items:center;justify-content:center;color:#888;font-family:var(--font-pixel);">No Image</div>`;
    
    const card = document.createElement('div');
    card.className = `card ${category}`;
    card.setAttribute('data-project-id', id);
    card.setAttribute('tabindex', '0');
    
    card.innerHTML = `
        ${imgHtml}
        <div class="card__title">${escapeHtml(data.sections[0]?.heading || data.title)}</div>
    `;
    
    card.addEventListener('click', () => opendetails(id));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            opendetails(id);
        }
    });
    
    return card;
}

document.addEventListener('DOMContentLoaded', () => {
    const hardwareGrid = document.getElementById('hardware-grid');
    const artGrid = document.getElementById('art-grid');
    
    if (typeof PROJECTS !== 'undefined') {
        for (const [id, data] of Object.entries(PROJECTS)) {
            if (id.startsWith('hw_') && hardwareGrid) {
                hardwareGrid.appendChild(createCard(id, data, 'hardware'));
            } else if (id.startsWith('art_') && artGrid) {
                artGrid.appendChild(createCard(id, data, 'art'));
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const pageViews = document.querySelectorAll('.page-view');
    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');

    // Bottom Navigation switching logic
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPageId = button.getAttribute('data-target');

            // 1. Remove active state from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            // 2. Add active state to clicked button
            button.classList.add('active');

            // 3. Cycle and cross-fade panels
            pageViews.forEach(view => {
                if (view.id === targetPageId) {
                    view.classList.add('active');
                } else {
                    view.classList.remove('active');
                }
            });
        });
    });

    // Open item dynamic functionality inside center page layout
    window.openProject = function(title, description) {
        modalBody.innerHTML = `
            <h2 class="modal-project-title">${title}</h2>
            <p class="modal-project-desc">${description}</p>
        `;
        modal.classList.add('open');
    };

    // Close view popup window overlay
    window.closeProject = function() {
        modal.classList.remove('open');
    };
});



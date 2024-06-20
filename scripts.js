document.addEventListener('DOMContentLoaded', () => {
    const languageIcon = document.getElementById('language-icon');
    const languageDialog = document.getElementById('language-dialog');
    const closeBtn = document.getElementById('close-btn');

    languageIcon.addEventListener('click', () => {
        languageDialog.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        languageDialog.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == languageDialog) {
            languageDialog.style.display = 'none';
        }
    });
});

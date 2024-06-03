document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab');
    const indicator = document.querySelector('.indicator');

    function updateIndicator(tab) {
        const rect = tab.getBoundingClientRect();
        const tabbarRect = tab.parentElement.getBoundingClientRect();
        indicator.style.top = `${rect.top - tabbarRect.top}px`;
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            updateIndicator(tab);
        });
    });

    updateIndicator(document.querySelector('.tab.active'));
});
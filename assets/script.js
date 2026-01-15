document.addEventListener('DOMContentLoaded', () => {
    // Progressão da Rolagem no Botão Voltar
    const scrollProgressBtn = document.getElementById('scrollProgressBtn');
    if (scrollProgressBtn) {
        const updateScrollProgress = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            scrollProgressBtn.style.background = `conic-gradient(#1B3D33 ${scrollPercent}%, #ffffff ${scrollPercent}%)`;
        };
        window.addEventListener('scroll', updateScrollProgress);
        updateScrollProgress();
    }
});

(() => {
    const buttons = document.querySelectorAll('header .links button.link');
    
    createWindows('About');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if(button.innerText.length === 0)
                return;
            
            createWindows(button.innerText || '');
        });
    });
})();
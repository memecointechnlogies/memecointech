
            const menuBtn = document.querySelector('.menu-btn');
        const topMenu = document.getElementById('topMenu');
        const overlay = document.getElementById('overlay');

        // Toggle Menu and Overlay
        menuBtn.addEventListener('click', () => {
            topMenu.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        // Close Menu when clicking outside
        overlay.addEventListener('click', () => {
            topMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    
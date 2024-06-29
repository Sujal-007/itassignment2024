document.addEventListener('DOMContentLoaded', () => {
    const showBtn = document.querySelector('.navBtn');
    const topNav = document.querySelector('.top-nav');

    // Toggle navigation menu
    showBtn.addEventListener('click', function() {
        if (topNav.classList.contains('showNav')) {
            topNav.classList.remove('showNav');
            showBtn.innerHTML = '<i class="fas fa-bars"></i>';
        } else {
            topNav.classList.add('showNav');
            showBtn.innerHTML = '<i class="fas fa-times"></i>';
        }
    });

    // Initialize Lightbox
    const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
        overlayOpacity: 0.8,
        animationSpeed: 300
    });
});

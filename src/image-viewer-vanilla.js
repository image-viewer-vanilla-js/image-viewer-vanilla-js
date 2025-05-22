export function loadZoomOverlay() {


    const productImages = document.querySelectorAll('.product-image');
    const overlay = document.getElementById('imageOverlay');
    const overlayImage = document.getElementById('overlayImage');

    productImages.forEach(image => {
        image.addEventListener('click', function (e) {
            e.stopPropagation();

            const largeSrc = this.getAttribute('data-large') || this.src;
            
            overlay.classList.add('active');
            overlayImage.src = largeSrc;
            overlayImage.alt = this.alt;
        });
    });

    window.addEventListener('scroll', function () {
        if (overlay.classList.contains('active')) {
            closeOverlay();
        }
    });

    document.addEventListener('click', function (e) {
        if (overlay.classList.contains('active') && !overlayImage.contains(e.target)) {
            closeOverlay();
        }
    });

    document.addEventListener('keyup', function (e) {
        if (overlay.classList.contains('active')) {
            closeOverlay();
        }
    });

    document.addEventListener('touchstart', function () {
        if (overlay.classList.contains('active')) {
            closeOverlay();
        }
    });

    document.addEventListener('touchend', function () {
        if (overlay.classList.contains('active')) {
            closeOverlay();
        }
    });

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            closeOverlay();
        }
    });

    function closeOverlay() {
        overlay.classList.remove('active');
    }

    overlayImage.addEventListener('click', function (e) {
        e.stopPropagation();
    });

}
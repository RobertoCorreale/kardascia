import Barba from 'barba.js';

const singlePortfolio = Barba.BaseView.extend({
    namespace: 'singlePortfolio',
    onEnter: function() {
    },
    onEnterCompleted: function() {

        const lightbox = document.querySelector('.lightbox');

        // Click on gallery images
        const galleryImage = document.querySelectorAll('.gallery__item');
        galleryImage.forEach(el => {
            el.addEventListener('click', (e) => {
                lightbox.classList.toggle('open');
                document.querySelector('.lightbox__image').src = e.target.src;
                document.body.style.overflow = 'hidden';
            });
        });


        function closeLightbox () {
            lightbox.classList.toggle('open');
            document.body.style.overflow = '';
            document.querySelectorAll('.dot.white').forEach(el => el.remove())
        }

        // Esc keypress
        document.addEventListener('keyup', function (event) {
            if (!lightbox.classList.contains('open')) return;
            const key = event.key || event.keyCode;
            if (key === 'Escape' || key === 'Esc' || key === 27) closeLightbox();
        });

        // Click X icon
        const lightboxClose = document.querySelector('.lightbox svg');
        if (lightboxClose) {
            lightboxClose.addEventListener('click', (e) => {
                e.preventDefault();
                closeLightbox();
            });
        }

    },
    onLeave: function() {
        // A new Transition toward a new page has just started.
        //console.log('%conLeave', 'color:red');
    },
    onLeaveCompleted: function() {
        // The Container has just been removed from the DOM.
        //console.log('%ccnLeaveCompleted', 'color:red');
    }
});

export default singlePortfolio;
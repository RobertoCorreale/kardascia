import Barba from 'barba.js';
import Homepage from './views/homepage';
import About from './views/about';
import singlePortfolio from './views/singlePortfolio';

document.addEventListener("DOMContentLoaded", function() {
    //Barba.Pjax.Dom.wrapperId = 'pattinaggio-wrapper';
    //Barba.Pjax.Dom.containerClass = 'pattinaggio-container';


    //Views
    Homepage.init();
    About.init();
    singlePortfolio.init();
    Barba.Pjax.start();

    function allJs() {
        /* BG */
        document.querySelector('body').addEventListener('click', (e) => {
            if (e.target.localName !== 'a' && e.target.localName !== 'img' && e.target.localName !== 'header') {
                e.preventDefault();
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (document.querySelector('.lightbox') && document.querySelector('.lightbox').classList.contains('open')) {
                    dot.style.left = `${e.clientX}px`;
                    dot.style.top = `${e.clientY}px`;
                    dot.classList.add('white');
                } else {
                    dot.style.left = `${e.layerX}px`;
                    dot.style.top = `${e.layerY}px`;
                }

                document.body.appendChild(dot);

                const TL = new TimelineLite();
                const dotSize = Math.floor(Math.random() * (80 - 30 + 1)) + 30;
                TL
                    .to(dot, 1, { width: `${dotSize}px`, height: `${dotSize}px` })
                    .to(dot, .7, { opacity: 0, ease: Circ.easeIn }, '-=0.3')
            }
        });
    }

    allJs();
    Barba.Dispatcher.on('newPageReady', function() {
        document.querySelectorAll('.dot').forEach(el => el.remove());
        allJs();
    });


});
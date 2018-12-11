import Barba from 'barba.js';

const Homepage = Barba.BaseView.extend({
    namespace: 'homepage',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
    },
    onEnterCompleted: function() {
        document.querySelectorAll('.projectList li a').forEach(el => {
            el.addEventListener('mouseenter', function () {
                this.previousElementSibling.style.opacity = 1;
            });
            el.addEventListener('mouseleave', function () {
                this.previousElementSibling.style.opacity = 0;
            });
        })
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

export default Homepage;
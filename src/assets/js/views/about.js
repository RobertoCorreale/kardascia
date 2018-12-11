import Barba from 'barba.js';

const About = Barba.BaseView.extend({
    namespace: 'about',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
    },
    onEnterCompleted: function() {
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

export default About;
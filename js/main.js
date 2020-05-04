// Main JS
$(document).ready(function() {
    
    $('span').hover(wiggleAnimation);

    //animateCSS('.wiggle', 'bounce')

});

// TODO work on wiggles for the letters 

// add css class on hover of certain class items ?
function wiggleAnimation() {

    console.log('wiggle');
    const element =  document.querySelector('span');
    void element.offsetWidth;
    element.classList.add('animated', 'infinite', 'wobble');
    void element.offsetWidth;
    
}

function animateCSS(element, animationName, callback) {
    console.log('animateCSS');
    const node = document.querySelector(element);
    node.classList.add('animated', animationName);

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName);
        node.removeEventListener('animationend', handleAnimationEnd);

        if (typeof callback === 'function') callback();
    }

    node.addEventListener('animationend', handleAnimationEnd);
}
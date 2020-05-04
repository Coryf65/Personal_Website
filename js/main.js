// Main JS

// add css class on hover of certain class items ?
$('.wiggle').mouseover(() => wiggleAnimation(this) );

function wiggleAnimation(element) {
    
    if ($('.wiggle').hasClass('shake').toString() = "shake") {
        console.log($('.wiggle').hasClass('shake').toString())
        console.log("adding class", $('.wiggle'))
        $('.wiggle').removeClass("wiggle").addClass('shake');
        console.log($('.wiggle').class().toString())
    } else {
        console.log('done')
    }
}
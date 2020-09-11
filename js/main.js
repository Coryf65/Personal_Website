// Main JS
$(document).ready(function() {
    
    // wave the hand!    
    $("#wave").hover(
        //wave on enter
        function() { $( this ).addClass("animate__animated animate__wobble")},        
        // reset animation, would like a delay on removing
        function() { $( this ).removeClass("animate__animated animate__wobble");}
    );
});

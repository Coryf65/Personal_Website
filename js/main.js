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

let passions = "Coding, Liftime Learner, and Helping Others";
const speed = 50;
let count = 0;

// types on screen like a type writer
function typeWriter() {    
    
    if (count < passions.length) {
        document.getElementById("Passions").innerHTML += passions.charAt(count);
        count++;
        setTimeout(typeWriter , speed);
    }
}

typeWriter();
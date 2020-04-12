// This JS will handle the fun landing page animations using JQuery

function onLoad() {
  AnimateCloud1();
  AnimateCloud2();
}

function AnimateCloud1() {

  const elem = document.getElementById("Cloud1");   
  let pos = 0;  
  let id = setInterval(frame, 10);  

  function frame() {
    let endOfWindow = window.innerWidth;
    if (pos == endOfWindow) {
      // condition to stop the animation
      clearInterval(id);
    } else {
      pos++; 
      elem.style.left = pos + "px"; 
    }
  }
  
}

function AnimateCloud2() {

  const elem = document.getElementById("Cloud2");   
  let pos = 0;  
  let id = setInterval(frame, 80);  

  function frame() {
    let endOfWindow = window.innerWidth;
    if (pos == endOfWindow) {
      // condition to stop the animation
      clearInterval(id);
    } else {
      pos++; 
      elem.style.left = pos + "px"; 
    }
  }
  
}
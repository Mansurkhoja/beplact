'use strict';
// JUST SLIDER SWIPER FOR CATALO SECTION
var catalogSwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 50,
    iOSEdgeSwipeDetection: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3
        }
    },
});
// JUST PARALLAX FOR SOME IMAGES 
var image = document.getElementsByClassName('parallax-img');
new simpleParallax(image);
var imageRight = document.getElementsByClassName('parallax-img-right');
new simpleParallax(imageRight, { 
    orientation: 'right',
    // orientation: 'right - down',
    scale: 1.2,
    });
// moving for mix block
const mixItems = document.getElementById('mix-move');
const mixItem = mixItems.querySelectorAll('.mix__move');

mixItems.addEventListener('mousemove', function(e) {
    let x = e.pageX - this.offsetLeft;
    let y = e.pageY - this.offsetTop;
    var s = this.clientWidth / 2;
    var ss = this.clientHeight / 2;
    mixItem.forEach(element => {
        element.style.transform = `translate(${x-s}px, ${y-ss}px)`
    });
});
mixItems.addEventListener('mouseleave', function() {
    mixItem.forEach(element => {
        element.style.transform = `translate(${0}px, ${0}px)`
    });
});
mixItems.addEventListener('touchend', event => {
    event.preventDefault();
});
// for (let i = 0; i < mixItem.length; i++) {
//     let width = mixItem[i].clientWidth;
//     let height = mixItem[i].clientHeight;
//     mixItem[i].addEventListener('touchend', event => {
//         event.preventDefault();
//     });
//     mixItem[i].addEventListener('mousemove', (e) => {
//         let x = e.offsetX;
//         let y = e.cl;
//         mixItem[i].style.transform = `translate(${x}px, ${y}px)`;
//         mixItem[i].style.zIndex = 9;
//     });
//     mixItem[i].addEventListener('mouseleave', () => {
//         mixItem[i].style.transform = `translate(${0}px, ${0}px)`;
//         mixItem[i].style.zIndex = 1;
//     });
// };

// <div id="drag">this is draggable</div>
// <style>#drag {
//     width:100px;
//     height:50px;
//     background-color:red;
//     transform:translateX(0);
//     }</style>
// var el               = drag,
//     startPosition    = 0, // start position mousedown event
//     currentPosition  = 0, // count current translateX value
//     distancePosition = 0, // count distance between "down" & "move" event
//     isMouseDown      = false, // check if mouse is down or not
//     needForRAF       = true;  // to prevent redundant rAF calls

// function mouseDown(e) {
//   e.preventDefault(); // reset default behavior
//   isMouseDown     = true;
//   currentPosition = getTranslateX(); // get current translateX value
//   startPosition   = e.clientX; // get position X
// }    

// function mouseMove(e) {
//     e.preventDefault();
//   distancePosition = (e.clientX - startPosition) + currentPosition; // count it!  
//   if (needForRAF && isMouseDown) {
//     needForRAF = false;            // no need to call rAF up until next frame
//     requestAnimationFrame(update); // request 60fps animation
//   }; 
// }

// function mouseUp(e) {
//   e.preventDefault();
//   isMouseDown = false; // reset mouse is down boolean
// }

// function getTranslateX() {
//   var translateX = parseInt(getComputedStyle(el, null).getPropertyValue("transform").split(",")[4]);
//   return translateX; // get translateX value
// }

// function update() {
//   needForRAF = true; // rAF now consumes the movement instruction so a new one can come
//   el.style.transform = "translateX(" + distancePosition + "px)";// move it!
// }

// el.addEventListener("mousedown", mouseDown);
// document.addEventListener("mousemove", mouseMove);
// document.addEventListener("mouseup", mouseUp);
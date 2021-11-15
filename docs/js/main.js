// M.AutoInit(); 

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

const options_sidenav = {
  edge: 'right', // <--- Despliega el Menu de Deracha a Izquierda
};
const options_materialbox = {};
const options_slider = {};
const options_carousel = {
  fullWidth: true,
  indicators: true,  
};

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options_sidenav);

  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, options_materialbox);

  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, options_slider);

  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options_carousel);
});



// // Manually initialize the carousel with any values that you want including a custom option for autoScroll
// // You would create your own window.onload function and change the options for your own instance
// window.onload = function() {
//   initCarousel('.carousel', {
//     fullWidth: false,
//     indicators: true,
//     autoScroll: 3000 // time in ms - custom
//   });
// }
// 
// // This is a wrapper function for setting up carousels with autoplay
// // elms - string or array<string> for the elements to initialize. Use #carousel_id for an element. Use .carousel-class for class
// // opts - object with the options to initialize all instances with
// // returns a carousel instance or Array<carousel> instances
// function initCarousel(elms, opts) {
//   if (!window || !document) return null;
// 
//   const instances = M.Carousel.init(getElements(elms), opts);
// 
//   if (Array.isArray(instances)) {
//     for (let i = 0; i < instances.length; ++i) {
//       addAutoScroll(instances[i]);
//     }
//   } else {
//     addAutoScroll(instances);
//   }
// 
//   return instances;
// }
// 
// // wrapper function for removing the custom event listeners and destroy method
// function destroyCarousel(instances) {
//   if (!window || !document) return null;
// 
//   if (Array.isArray(instances)) {
//     for (let i = 0; i < instances.length; ++i) {
//       removeAutoScroll(instances[i]);
//       instances[i].destroy();
//     }
//   } else {
//     removeAutoScroll(instances);
//     instances.destroy();
//   }
// }
// 
// // Adds the autoscroll ability
// function addAutoScroll(instance) {
//   if (!instance.options.autoScroll) return;
// 
//   instance.autoScrollIntervalId = window.setInterval(() => {
//     instance.next();
//   }, instance.options.autoScroll);
// 
//   instance.el.addEventListener("mouseover", carouselMouseOverTouchStart, {
//     passive: true
//   });
//   instance.el.addEventListener("mouseleave", carouselMouseOutTouchEnd, {
//     passive: true
//   });
//   instance.el.addEventListener("touchstart", carouselMouseOverTouchStart, {
//     passive: true
//   });
//   instance.el.addEventListener("touchend", carouselMouseOutTouchEnd, {
//     passive: true
//   });
// }
// 
// // removes the autoscroll ability
// function removeAutoScroll(instance) {
//   if (instance.autoScrollIntervalId) {
//     window.clearInterval(instance.autoScrollIntervalId);
//     instance.autoScrollIntervalId = undefined;
//   }
// 
//   instance.el.removeEventListener("mouseover", carouselMouseOverTouchStart);
//   instance.el.removeEventListener("mouseleave", carouselMouseOutTouchEnd);
//   instance.el.removeEventListener("touchstart", carouselMouseOverTouchStart);
//   instance.el.removeEventListener("touchend", carouselMouseOutTouchEnd);
// }
// 
// // function handler for mouse hover or touch start for mobile
// function carouselMouseOverTouchStart() {
//   const instance = M.Carousel.getInstance(this);
//   if (!instance) return;
// 
//   if (instance.autoScrollIntervalId) {
//     window.clearInterval(instance.autoScrollIntervalId);
//     instance.autoScrollIntervalId = undefined;
//   }
// }
// 
// // function handler for mouse hover exit or touch ends for mobile
// function carouselMouseOutTouchEnd() {
//   const instance = M.Carousel.getInstance(this);
//   if (!instance) return;
// 
//   if (!instance.autoScrollIntervalId) {
//     instance.autoScrollIntervalId = window.setInterval(() => {
//       instance.next();
//     }, instance.options.autoScroll);
//   }
// }
// 
// // if searching for an element by id, insert a # in front of the passed in id
// function getElements(elms) {
//   if (elms.charAt(0) === "#") {
//     elms = elms.replace("#", "");
//     return document.getElementById(elms);
//   }
// 
//   return document.querySelectorAll(elms);
// }
// 
// 
// 
// 
// 
// // document.addEventListener('DOMContentLoaded', function() {
// //     // M.AutoInit();
// 
// //     var elems = document.querySelectorAll('.carousel');
// //     // var instance = M.Carousel.init(elems, {
// //     //   duration: 400,
// //     // });    
// 
// //     var instance = M.Carousel.getInstance('.carousel');
// 
// // console.log( {instance});
// 
// //     // // let mielemento = M.Carousel.getInstance('.carousel');
// //     // setInterval(function(){
// //     //   instance.next();
// //     // }, 2000)
// 
// //   });
// 
// //   // const SIGUIENTE = document.querySelector('siguiente');
// 
// //   // SIGUIENTE.addEventListener('click', ()=>{
// //   //   console.log('Click');
// //   // })
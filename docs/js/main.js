document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();

    var elems = document.querySelectorAll('.carousel');
    // var instance = M.Carousel.init(elems, {
    //   duration: 400,
    // });    

    var instance = M.Carousel.getInstance('.carousel');

console.log( {instance});

    // // let mielemento = M.Carousel.getInstance('.carousel');
    // setInterval(function(){
    //   instance.next();
    // }, 2000)

  });

  // const SIGUIENTE = document.querySelector('siguiente');

  // SIGUIENTE.addEventListener('click', ()=>{
  //   console.log('Click');
  // })
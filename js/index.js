$('.nav-link').on('click',function() {
  $('.navbar-collapse').collapse('hide');
});


var count = 0;
$('.contact').hide(0);

$("*").on('wheel', function(e){
  console.log(count);
  count = count + (e.originalEvent.deltaY)/3;
  $('.second').toggleClass('second first');
  $('.hidden').removeClass('hidden');
  if(count >= 150 ){
    $('.about').fadeOut(250,'linear');
    $('.about').hide(0);
    $('.contact').show();
    $('.about-nav').removeClass('active');
    $('.contact-nav').addClass('active');
  }
  else{
    $('.contact').fadeOut(250,'linear');
    $('.contact').hide(0);
    $('.about').show();
    $('.contact-nav').removeClass('active');
    $('.about-nav').addClass('active');
    
  }
  if(count > 170){
    count = 165;
  }
  if(count <= 0){
    count = 50;
  }
 });

// $("*").on('touchstart', function(e){
//   ts = e.originalEvent.touches[0].clientY
//   $("*").on('touchmove', function(e){
//     te = e.originalEvent.changedTouches[0].clientX;
//     // console.log(e.originalEvent.touches[0].screenY);
//     console.log(e.originalEvent.touches[0].clientX)
//   // console.log(count);
//   if(ts>te)
//     count = count + (e.originalEvent.touches[0].clientX)/3;
//   else
//     count = count - (e.originalEvent.touches[0].clientX)/3;
   
//   $('.second').toggleClass('second first');
//   $('.hidden').removeClass('hidden');
//   if(count >= 150 ){
//   	$('.about').fadeOut(500,'linear');
//   	$('.about').hide(0);
//   	$('.contact').show();
//   }
//   else{
//   	$('.contact').fadeOut(500,'linear');
//   	$('.contact').hide(0);
//   	$('.about').show();
  	
//   }
//   if(count > 170){
//   	count = 165;
//   }
//   if(count <= 0){
//   	count = 50;
//   }
//  });
// });

// $(".test").trigger(event);

      $(function() {

        // Vars.
          var $pad = $('*');
            

        // Bind events.
          $pad
            .touch({

              // Turn on document tracking so stuff works even if the cursor leaves the trackpad.
                

              // Prevent default events for drag/swipe (so the page doesn't scroll when you do those gestures).
              

            })
            // Swipe event.
              .on('tap',function(e,o){
                console.log("hey there");
                $('.second').toggleClass('second first');
                $('.hidden').removeClass('hidden');
              })
            // Swipe events.
              .on('swipeUp',      function(e, o) { 
                  $('.second').toggleClass('second first');
                  $('.hidden').removeClass('hidden');
                  $('.about').fadeOut(250,'linear');
                  $('.about').hide(0);
                  $('.contact').show();
                  $('.about-nav').removeClass('active');
                  $('.contact-nav').addClass('active');
                  console.log("swipe up",o.distance)
                 })
              .on('swipeDown',    function(e, o) { 
                   $('.second').toggleClass('second first');
                   $('.hidden').removeClass('hidden');
                   $('.contact').fadeOut(250,'linear');
                   $('.contact').hide(0);
                   $('.about').show();
                   $('.contact-nav').removeClass('active');
                   $('.about-nav').addClass('active');
                  console.log("swipe down",o.distance)
                  })
              .on('swipeLeft',    function(e, o) {
                  $('.second').toggleClass('second first');
                  $('.hidden').removeClass('hidden');
                  $('.about').fadeOut(500,'linear');
                  $('.about').hide(0);
                  $('.contact').show();
                  $('.about-nav').removeClass('active');
                  $('.contact-nav').addClass('active');
                  console.log("swipe left",o.distance)
              })
              .on('swipeRight',   function(e, o) { 
                  $('.second').toggleClass('second first');
                  $('.hidden').removeClass('hidden');
                  $('.contact').fadeOut(500,'linear');
                  $('.contact').hide(0);
                  $('.about').show();
                  $('.contact-nav').removeClass('active');
                  $('.about-nav').addClass('active');
                  console.log("swipe right",o.distance)
              });

      });










$('.aboutLink').click(function(){
	$('.contact').fadeOut(500,'linear');
  	$('.contact').hide(0);
    $('.about').show();
  $('.contact-nav').removeClass('active');
  $('.about-nav').addClass('active');
});

$('.contactLink').click(function(){
	$('.about').fadeOut(500,'linear');
  	$('.about').hide(0);
    $('.contact').show();
  $('.about-nav').removeClass('active');
  $('.contact-nav').addClass('active');
});

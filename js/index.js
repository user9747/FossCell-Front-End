var count = 0;
$('.contact').hide(0);
$("*").on('wheel', function(e){
  console.log(count);
  count = count + (e.originalEvent.deltaY)/3;
  $('.second').toggleClass('second first');
  $('.hidden').removeClass('hidden');
  if(count >= 150 ){
  	$('.about').fadeOut(500,'linear');
  	$('.about').hide(0);
  	$('.contact').show();
  }
  else{
  	$('.contact').fadeOut(500,'linear');
  	$('.contact').hide(0);
  	$('.about').show();
  	
  }
  if(count > 170){
  	count = 165;
  }
  if(count <= 0){
  	count = 50;
  }
 
});

// $(".test").trigger(event);

$('.aboutLink').click(function(){
	$('.contact').fadeOut(500,'linear');
  	$('.contact').hide(0);
  	$('.about').show();
});

$('.contactLink').click(function(){
	$('.about').fadeOut(500,'linear');
  	$('.about').hide(0);
  	$('.contact').show();
});
 //touch screen
 $("*").on('touchmove', function(e){
  console.log(count);
  count = count + (e.originalEvent.deltaY)/3;
  $('.second').toggleClass('second first');
  $('.hidden').removeClass('hidden');
  if(count >= 150 ){
    $('.about').fadeOut(500,'linear');
    $('.about').hide(0);
    $('.contact').show();
  }
  else{
    $('.contact').fadeOut(500,'linear');
    $('.contact').hide(0);
    $('.about').show();
    
  }
  if(count > 170){
    count = 165;
  }
  if(count <= 0){
    count = 50;
  }
 
});

// if("ontouchstart" in window){
//    el.addEventListener('touchmove', touchMoveHandler);
// }


$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$(".header").sticky({
    getWidthFrom: '.container',
    responsiveWidth: true
});

$('.Wantus').sticky({
    topSpacing: 63,
    getWidthFrom: '.container',
    responsiveWidth: true
});

$('.header').on('sticky-start', function(){
    $('.description').html("We build <strong>great</strong> apps");
});

$('.header').on('sticky-end', function(){
    $('.description').html("We build apps");
    
});

$('.Wantus').on('sticky-start', function(){
  $('.Wantus').html("Want us to work on your project? <a href='mailto:swaffleman@hotmail.com'>Email us</a>");
});

$('.Wantus').on('sticky-end', function(){
    $('.Wantus').html("Want us to work on your project?");    
});
$( function() {

  $(".fade").fadeTo(0,0.50); // 初期状態 20%

  $(".fade").hover(
    function(){
      $(this).fadeTo("slow", 1.0); // マウスが載ったら100%までフェードする
    },
    function(){
      $(this).fadeTo("slow", 0.2); // マウスが離れたら20%に戻す
    }
  );

});

// Animate Sample //////////
$( function(){
  $("#left").click( function(){
    $('#move').animate( { 'left': '-=30px' } , { 'duration': 1000 } );
  });
  $("#right").click( function(){
    $('#move').animate( { 'left': '+=30px' } , { 'duration': 1000 } );
  });
  
$(".upper").click(function(){
$('html,body').animate({'scrollTop':0},500);
});


$(window).on('load scroll', function() {
      var winScroll = $(window).scrollTop();
      var winHeight = $(window).height();
      var scrollPos = winScroll + (winHeight * 0.8);

      $(".show").each(function() {
         if($(this).offset().top < scrollPos) {
            $(this).css({opacity: 1, transform: 'translate(0, 0)'});
         }
      });
   });
});

$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.typewriter').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("type");
      }
    });
  });
});

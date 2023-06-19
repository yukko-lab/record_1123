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





const doObserve = (element) => {
  const targets = document.querySelectorAll('.typeWriter'); /* ターゲットの指定 */
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  };
  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {

const typeWriter = selector => {
  const el = document.querySelector(selector);
  const text = el.innerHTML;

  (function _type(i = 0) {
    if (i === text.length) return;
    el.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
    setTimeout(() => _type(i + 1), 55);
  })();
};

typeWriter(".typeWriter");
      } else {
        item.target.classList.remove(); /* 表示域から外れた時にターゲットから削除するclassの指定 */
      }
    });
  }, options);
  Array.from(targets).forEach((target) => {
    observer.observe(target);
  });
};
doObserve('.observe_target');







// ⑦ 左右の画像グループを取得
const leftimg = document.getElementById("leftimg");
const rightimg = document.getElementById("rightimg");

// ⑧ 子要素を複製して格納
for(i = leftimg.children.length; i>0; i--) {
      let clone = leftimg.children[(i-1)].cloneNode(true);
      rightimg.appendChild(clone);
}

// ⑨ 左の最背面以外の画像を立ち上げ
for(i=1; i<leftimg.children.length; i++) {

leftimg.children[i].style.transform = "rotateY(-90deg)";
}

let flag = 1;

// ⑫ タイミングオブジェクト
let timing = {
      duration:1000,
      fill:"forwards",
      direction:"normal"
};

// ⑬ キーフレーム
let keyframeL = [
      {transform:"rotateY(-90deg) skewY(20deg)"},
      {transform:"rotateY(-90deg) skewY(20deg)"},
      {transform:"rotateY(0deg) skewY(0deg)"}
];

let keyframeR = [
      {transform:"rotateY(0deg) skewY(0deg)"},
      {transform:"rotateY(90deg) skewY(-20deg)"},
      {transform:"rotateY(90deg) skewY(-20deg)"}
];
// ⑭ 「進む」関数
function susumu() {

      if (flag < rightimg.children.length) {
            timing.direction = "normal";
            rightimg.children[(rightimg.children.length)-(flag)].animate(keyframeR,timing);
            leftimg.children[flag].animate(keyframeL,timing);
            flag++;
      } else {
            return;
      }
};

// ⑮ 「戻る」関数
function modoru() {

      if(flag > 1) {
            timing.direction = "reverse";
            leftimg.children[flag-1].animate(keyframeL,timing);
            rightimg.children[(rightimg.children.length)-(flag-1)].animate(keyframeR,timing);
            flag--;
      } else {
            return;
      }
};




 
 


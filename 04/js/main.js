$(function () {

  // swiper

  var visual_swiper = new Swiper(".visual_swiper", {
    loop: true,
    slidesPerView: 1.1,
    // autoplay: true,
    simulateTouch: false,
    // loopAdditionalSlides: 1,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
               '' +
               '<span class="' + totalClass + '"></span>';
      },

      formatFractionCurrent: function (number) {
        return '0' + number;
      },
      formatFractionTotal: function (number) {
        return '0' + number;
      },

    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
      1500: {
        slidesPerView: 1.1,
      },
    },
    on: {
      slideChange: function () {
        guage();
        }
      }
  });


  function guage(){
    $('.guage .bar').css({width:10+'%'}).stop().animate({width:100+'%'},3000,'linear',
      function(){
        $('.sc_visual').addClass('on');
        setTimeout(function(){
        visual_swiper.slideNext();
      },1000)
      }
    );
  }  // 게이지 커스텀

  visual_swiper.on('slideChangeTransitionStart',function(){
      guage();
      $('.sc_visual').addClass('on');
      setTimeout(function(){
        $('.sc_visual').removeClass('on');
      },500);
  }) // 슬라이드 체인지되고 시작될때마다 실행될것들

  $('.sc_visual .next').click(function(){
    $('.guage .bar').css({width:0}).stop().animate({width:10+'%'},800,'linear');
    $('.sc_visual').addClass('on');
    setTimeout(function(){
      visual_swiper.slideNext();
    },800);
  }) // Next 버튼

  $('.sc_visual .prev').click(function(){
    $('.guage .bar').css({width:0}).stop().animate({width:10+'%'},800,'linear');
    $('.sc_visual').addClass('on');
      setTimeout(function(){
        visual_swiper.slidePrev();
      },800);
  }) // Prev 버튼



  //window scroll 내릴때 헤더변경
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $('header').addClass('on')
    } else {
      $('header').removeClass('on')
    }
  })


  //gsap cursor 변경
  $(window).mousemove(function(e){
    let width = $('.cursor').width()/2
    let height = $('.cursor').height()/2

    gsap.to('.cursor',{
      x:e.clientX-width,
      y:e.clientY-height,
      duration:0.5
    })
  })


  //gsap scroll event
  $('.motion').each(function (index, item) {

    target = $(this).find('.motion_y');

    gsap.to(target, {
      scrollTrigger: {
        duration: 1,
        trigger: item,
        start: "20% 70%",
        end: "60% 100%",
        // markers:true,
      },
      y: 0,
      opacity: 1,
    })

  })



  // 이미지 반복
  let index = 0;

  setInterval(function () {
    $('.random img').attr('src', 'images/imgbox_1' + index + '.jpg');

    if (index < 3) {
      index++
    } else {
      index = 0;
    };

  }, 1000);


  //m_menu

  $('.m_btn').click(function(e){
    e.preventDefault();
    $('.m_menu_wrap').addClass('on');
  })
  $('.m_menu_wrap .close').click(function(e){
    e.preventDefault();
    $('.m_menu_wrap').removeClass('on');
  })

})
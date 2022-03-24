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
    // navigation: {
    //   nextEl: ".sc_visual .next",
    //   prevEl: ".sc_visual .prev",
    // },
    on: {
      init: function () {
        guage();
      },
    },

  });


  function guage() {

    $('.guage .bar').css({width: 10 + '%'}).stop().animate({width: 100 + '%'}, 3000, 'linear', function () {
      $('.sc_visual').addClass('on');
      
      setTimeout(function () {
        visual_swiper.slideNext();
      }, 1000)

    })
  } // 게이지 커스텀

 

  visual_swiper.on('slideChangeTransitionEnd', function () {
    $('.sc_visual').removeClass('on');
  }) // 슬라이드 시작됐을 때 

  visual_swiper.on('slideChangeTransitionStart', function () {
    guage();
  }) // 슬라이드 끝났을 때


  $('.sc_visual .next').click(function () {
    $('.guage .bar').css({width: 0}).stop().animate({width: 10 + '%'}, 800, 'linear');
    $('.sc_visual').addClass('on');
    
    setTimeout(function () {
      visual_swiper.slideNext();
    }, 800)
  }) // Next 버튼


  $('.sc_visual .prev').click(function () {
    $('.guage .bar').css({width: 0}).stop().animate({width: 10 + '%'}, 1000, 'linear');
    $('.sc_visual').addClass('on');

    setTimeout(function () {
      visual_swiper.slidePrev();
    }, 1000)
  }) // Prev 버튼








  //window scroll

  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $('header').addClass('on')
    } else {
      $('header').removeClass('on')
    }
  })


  // gsap sc_images

  $('.sc_request, .sc_images').mousemove(function (e) {

    //좌표값 중앙으로 설정
    let xVal = $(window).width() / 2 - e.pageX;
    let yVal = $(window).height() / 2 - e.pageY;

    gsap.to('.sc_images .img_box figure', {
      x: xVal / 20,
      y: yVal / 20
    })
  })

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
    //console.log(index);
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

  /* cursor event */
  $('body').mousemove(function(e){
      xx = e.clientX - 125;
      yy = e.clientY - 125;

      gsap.to('.cursor', {
        x:xx,
        y:yy
      })
  })

})
$(function () {

    var swiper1 = new Swiper(".slide_content1 .swiper", {
        slidesPerView: 1,
        loop: true,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".slide_content1 .hi_pagers",
            type: "fraction",
        },
        navigation: {
            nextEl: ".slide_content1 .next",
            prevEl: ".slide_content1 .prev",
        },
    });


    $('.slide_content1 .hi_play .play').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('pause')) {
            $(this).removeClass('pause');
            swiper1.autoplay.start();
        } else {
            $(this).addClass('pause');
            swiper1.autoplay.stop();
        }
    })


    var swiper2 = new Swiper(".slide_content2 .swiper", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".slide_content2 .hi_pagers",
            type: "fraction",
        },
        navigation: {
            nextEl: ".slide_content2 .next",
            prevEl: ".slide_content2 .prev",
        },
    });
    swiper2.autoplay.stop();



    $('.slide_content2 .hi_play .play').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('pause')) {
            $(this).removeClass('pause');
            swiper2.autoplay.start();
        } else {
            $(this).addClass('pause');
            swiper2.autoplay.stop();
        }
    })

    /* sc_visual 탭메뉴 활성화 */
    $('.slide_content h3').click(function (e) {
        e.preventDefault();
        $(this).parent('.slide_content').addClass('on').siblings('.slide_content').removeClass('on')
    })




    //sc_01 탭메뉴 만들기
    $('.slide_content h3').click(function (e) {
        e.preventDefault();

        if ($(this).parent('.slide_content').hasClass('issue_bnr')) {
            swiper2.autoplay.stop();

            if ($(this).parent('.slide_content').find('.play').hasClass('pause')) {
                swiper1.autoplay.stop();
            } else {
                swiper1.autoplay.start();
            }

        } else {
            swiper1.autoplay.stop();

            if ($(this).parent('.slide_content').find('.play').hasClass('pause')) {
                swiper2.autoplay.stop();
            } else {
                swiper2.autoplay.start();
            }

        }
    });




    var swiper3 = new Swiper(".slide_content3", {
        slidesPerView: 3,
        spaceBetween: 43,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".slide_content3 .hi_pagers",
            type: "fraction",
        },
        navigation: {
            nextEl: ".slide_content3 .btn.next",
            prevEl: ".slide_content3 .btn.prev",
        },
    });

    $('.slide_content3 .hi_play .play').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('pause')) {
            $(this).removeClass('pause');
            swiper3.autoplay.start();
        } else {
            $(this).addClass('pause');
            swiper3.autoplay.stop();
        }
    })


    //sc_site 서브메뉴 활성화
    $('.sc_site button').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('on')) {

            $(this).removeClass('on');
            $(this).siblings().stop().slideUp();

        } else {

            $('.sc_site button').removeClass('on');
            $(this).addClass('on');
            $('.sub_wrap').stop().slideUp();
            $(this).siblings().stop().slideDown();

        }
    })

    //li:last-child
    $(".sub_wrap .sub li:last-child a").keydown(function (event) {
        var v_keyCode = event.keyCode || event.which;
        if (v_keyCode == 9) {

            if (!event.shiftKey) {
                $('.sub_wrap').stop().slideUp();

            }
        }
    });
    //li:first-child
    $(".sub_wrap .sub li:first-child a").keydown(function (event) {
        var v_keyCode = event.keyCode || event.which;
        if (v_keyCode == 9) {

            if (event.shiftKey) {
                $('.sub_wrap').stop().slideUp();

            }
        }
    });


    // select 옵션 사이트 이동
    $('#langBtn').click(function () {
        let go = $('select option:selected').val();

        if (go != '') {
            window.open('about:blank').location.href = go;
        }
    })


    //top 나타나기
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('#topBtn').css({
                'bottom': '98px'
            })
        } else {
            $('#topBtn').css({
                'bottom': '-100px'
            })
        }
    })
    //top 이동
    $('#topBtn').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

})
$(function () {

    gsap.registerPlugin(ScrollTrigger);

    let bodyScrollBar = Scrollbar.init(document.body, {
        damping: 0.07,
        delegateTo: document
    });

    ScrollTrigger.scrollerProxy(".container", {
        scrollTop(value) {
            if (arguments.length) {
                bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
        }
    });
    bodyScrollBar.addListener(ScrollTrigger.update);

    bodyScrollBar.addListener(function (status) {
        var offset = status.offset;
        $('header').css({
            top: offset.y + 'px',
            left: offset.x + 'px'
        });
    });

    // 스무스 플러그인 사용 시 헤더 addclass 추가
    bodyScrollBar.addListener(() => {
        if (bodyScrollBar.scrollTop > 50) {
            $('header').addClass('on');
        } else {
            $('header').removeClass('on');
        }
    })

    var visual_swiper = new Swiper(".visual_swiper", {
        speed: 1000,
        autoplay: true,
        loop: true,
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
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
        },

    });




    function text01() {

        const tl = gsap.timeline({
            defaults: {
                delay: 0.3
            },
        });

        tl.fromTo(".visual_swiper .swiper-slide-active h2 span", {
                    y: 125,
                },

                {
                    y: 0,
                    stagger: 0.2,
                })
            .fromTo('.visual_swiper .swiper-slide-active .pc_text', {
                opacity: 0,
            }, {
                opacity: 1
            }, 1)

        tl.restart();
    }
    text01();


    visual_swiper.on('slideChangeTransitionStart', function () {
        text01()
    })

    //---- img gsap effect
    $('.motion_y').each(function (index, item) {

        target = $(this).find('.img_wrap .img01');

        gsap.to(target, {
            scrollTrigger: {
                trigger: item,
                scroller: ".container",
                start: "top 100%",
                end: "10% top",
                scrub: 1,
                // markers:true,
            },
            yPercent: -30,
        })

    })


    $('.motion_y').each(function (index, item) {

        target = $(this).find('.img_wrap .img02');

        gsap.to(target, {
            scrollTrigger: {
                trigger: item,
                scroller: ".container",
                start: "top 100%",
                end: "10% top",
                scrub: 1,
                // markers:true,
            },
            yPercent: -30,
        })

    })


    $('.motion_ty').each(function (index, item) {

        target = $(this).find('.desc_wrap');

        gsap.to(target, {
            scrollTrigger: {
                duration: 0.55,
                scroller: ".container",
                trigger: item,
                start: "30% 70%",
                end: "100% 100%",
                // markers:true,
            },
            y: 0,
            'opacity': '1',
        })

    })

    $('.motion_ty').each(function (index, item) {

        target = $(this).find('.img_wrap img');

        gsap.to(target, {
            scrollTrigger: {
                duration: 2,
                scroller: ".container",
                trigger: item,
                start: "15% 70%",
                end: "100% 100%",
                // markers:true,
            },
            'width': '100%',
        })


    })
    $('.motion_x').each(function (index, item) {

        target = $(this).find('.arrow .bar');

        gsap.to(target, {
            scrollTrigger: {
                duration: 2,
                scroller: ".container",
                trigger: item,
                start: "0% 100%",
                end: "0% 100%",
                // markers:true,
            },
            'width': '100%',
        })

    })

    $('.m_btn').click(function () {
        $('.left_wrap').toggleClass('on');
        $(this).toggleClass('on');
    })

    const txt = gsap.timeline({
        scrollTrigger: {
            duration: 2,
            scroller: ".container",
            trigger: ".sc_banner",
            start: "0% top",
            end: "0% 100%",
        }


    });

    txt.from('.sc_banner .img1', {
            yPercent: 100
        }, 0.2)
        .from('.sc_banner .img2', {
            yPercent: 100
        }, 0.5)
        .from('.sc_banner .img3', {
            yPercent: 100
        }, 0.1)
        .from('.sc_banner .img4', {
            yPercent: 100
        }, 0.2)
        .from('.sc_banner .img5', {
            yPercent: 100
        }, 0.3)
        .from('.sc_banner .img6', {
            yPercent: 100
        }, 0.1)
        .from('.sc_banner .img7', {
            yPercent: 100
        }, 0.3)
        .from('.sc_banner .img8', {
            yPercent: 100
        }, 0.4)
        .from('.sc_banner .img9', {
            yPercent: 100
        }, 0.5)


})
$(function(){
    
  var swiper = new Swiper(".select_swiper01" , {
    loop:false,
    slidesPerView: 3,
    spaceBetween : 30,
    navigation: {
        nextEl: '.sc_select.select01 .btn.next',   //버튼 설정
        prevEl: '.sc_select.select01 .btn.prev',   //버튼 설정
    },
    pagination: {
        el: ".sc_select.select01 .swiper-pagination", 
        clickable : true,
        type: "progressbar",
    },   
});

  var swiper = new Swiper(".select_swiper02" , {
    loop:false,
    slidesPerView: 3,
    navigation: {
        nextEl: '.sc_select.select02 .btn.next',   //버튼 설정
        prevEl: '.sc_select.select02 .btn.prev',   //버튼 설정
    },
    pagination: {
        el: ".sc_select.select02 .swiper-pagination", 
        clickable : true,
        type: "progressbar",
    },   
});

    /* gnb_area */

    $('.menu_btn').click(function(e){
        e.preventDefault();
        $('.gnb_area').addClass('on');
    })
    $('.gnb_area .close').click(function(){
        $('.gnb_area, .menu_sub, .menu_sub ul').removeClass('on');
    })
    $('.shadow').click(function(){
        $('.gnb_area, .menu_sub, .menu_sub ul').removeClass('on');
    })

    /* sub_menu */

    $('.gnb_area .gnb > li').mouseover(function(){
        $(this).children('.menu_sub').addClass('on');
        $(this).children('.menu_sub').children('ul').addClass('on');
      })
      $('.gnb_area .gnb > li').mouseout(function(){
        $(this).children('.menu_sub').removeClass('on');
        $(this).children('.menu_sub').children('ul').removeClass('on');
      })


    /* window scroll */

    $(window).scroll(function(){
        if($(window).scrollTop() > 50){
            $('header').addClass('on');
        }
        else{
            $('header').removeClass('on');
        }
    })

    /* scroll event : txt_motion */

    $('.txt_motion').each(function(index,item){

        target = $(this).find('.desc');
    
        gsap.to(target,{
            scrollTrigger:{
                trigger:item,
                start:"top 100%",
                end:"70% top",
                scrub:1,
            },
            y:-150,
        });

    })




    /* scroll event : img_y_motion */

    $('.img_y_motion').each(function(index,item){

        target03 = $(this).find('.img_box');

        gsap.to(target03,{
            scrollTrigger:{
            trigger:item,
            start:"top 100%",
            end:"bottom top",
            scrub:1,
            },
            yPercent:5,
        })
    })

    /* scroll event : body */

    gsap.to('body',{
        scrollTrigger:{
        trigger:'.sc_view.view01',
        start:"top 50%",
        end:"bottom 80%",
        scrub:0.5,
        },
        'background':'#EFEFF1'
    })
    gsap.to('body',{
        scrollTrigger:{
        trigger:'.sc_read',
        start:"top 80%",
        end:"bottom 80%",
        scrub:0.5,
        },
        'background-color' : '#F2EEE5'
    })

    let text = gsap.timeline();

    text.from(".visual_title, .sc_visual p", 1.8 ,{
        x:200,
        ease: "power4.out",
        delay: 0.5,
        opacity: 0,
        stagger: {
            amount: 0.4
        }
    })

})
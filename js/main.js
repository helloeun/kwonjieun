$(function(){

    //header, top_btn scroll event
    $(window).scroll(function(){

        let bgTop = $('.wrapper').offset().top;

        if($(window).scrollTop() > bgTop){
            $('header, .top_btn').addClass('on');
        }else{
            $('header, .top_btn').removeClass('on');
        }
    })

    //top 이동
    $( '.top_btn' ).click( function(e) {
        e.preventDefault();
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
        return false;
    } );

    
    //cursor
    $('body').mousemove(function(e){
        xx = e.clientX - 50;
        yy = e.clientY - 50;

        gsap.to('.cursor', {
        x:xx,
        y:yy
        })
    })

    //cursor hover
    $('.sc_port1 .left_wrap a').mouseover(function(){
        gsap.to('.cursor',{
        scale:1.3,
        backgroundColor:'rgb(21 121 40)',
        duration:0.2
        });
    })
    $('.sc_port2 .left_wrap a').mouseover(function(){
        gsap.to('.cursor',{
        scale:1.3,
        backgroundColor:'#1c7193',
        duration:0.2
        });
    })
    $('.sc_port3 .left_wrap a').mouseover(function(){
        gsap.to('.cursor',{
        scale:1.3,
        backgroundColor:'#F0F8FF',
        duration:0.2
        });
    })
    $('.sc_port4 .left_wrap a').mouseover(function(){
        gsap.to('.cursor',{
        scale:1.3,
        backgroundColor:'#DCDCDC',
        duration:0.2
        });
    })
    $('.sc_port5 .left_wrap a').mouseover(function(){
        gsap.to('.cursor',{
        scale:1.3,
        backgroundColor:'#40181c',
        duration:0.2
        });
    })


    //cursor 초기화
    $('.left_wrap a').mouseleave(function(){
        gsap.to('.cursor',{
        scale:1,
        backgroundColor:'transparent',
        duration:0.2
        });
    })


    //sc_home 대표타이틀 event
    function txtEvent(){
        gsap.to('.sc_home .txt01',{
            scrollTrigger:{
                trigger:".sc_home",
                start:"top top",
                end:"+=2000",
                scrub:1,
                // markers:true,
                pin:true, 
            },
            // opacity:0,
            height:'100%',
    
        }) 
    } txtEvent();
    
 


    // sc_port1 background 색깔
    gsap.to('.wrapper',{
        scrollTrigger:{
            trigger:".sc_port1",
            start:"20% 20%",
            end:"50% 80%",
            scrub:1,
            // markers:true,
        },
        'background': '#63b45b',
    })


    // sc_port2 background 색깔
    gsap.to('.wrapper',{
        scrollTrigger:{
            trigger:".sc_port2",
            start:"top 20%",
            end:"50% 80%",
            scrub:1,
            // markers:true,
        },
        'background':'#0158a8',
    })


    // sc_port3 background 색깔
    gsap.to('.wrapper',{
        scrollTrigger:{
            trigger:".sc_port3",
            start:"top 20%",
            end:"50% 80%",
            scrub:1,
            // markers:true,
        },
        'background':'#335c64',
    })


    // sc_port4 background 색깔
    gsap.to('.wrapper',{
        scrollTrigger:{
            trigger:".sc_port4",
            start:"top 20%",
            end:"50% 80%",
            scrub:1,
            // markers:true,
        },
        'background':'#111',
    })


    // sc_port5 background 색깔
    gsap.to('.wrapper',{
        scrollTrigger:{
            trigger:".sc_port5",
            start:"top 20%",
            end:"50% 80%",
            scrub:1,
            // markers:true,
        },
        'background':'#450003',
    })


    //right_wrap의 text들 모션효과
    $('.motion').each(function(index,item){
        target = $(this).find('.right_wrap');
    
        gsap.to(target,{
            scrollTrigger:{
            trigger:item,
            start:"50% 100%",
            end:"bottom top",
            scrub:1,
            // markers:true,
            },
            'bottom':'-5%',
        })

    })

    //left_wrap의 img들 모션효과
    $('.motion').each(function(index,item){
        target = $(this).find('.left_wrap');
    
        gsap.to(target,{
            scrollTrigger:{
            trigger:item,
            start:"50% 100%",
            end:"bottom top",
            scrub:1,
            // markers:true,
            },
            yPercent:-5,
        })
        
    })

    //h2들의 모션효과
    $('.motion').each(function(index,item){
        target = $(this).find('.title');
    
        gsap.from(target,{
            scrollTrigger:{
            // duration:5,
            trigger:item,
            start:"20% 50%",
            end:"bottom bottom",
            scrub:1,
            // markers:true,
            },
            opacity:0,
            'bottom':'-8%'
        })
    })

    //pc버전에서 gnb.on 추가
    $('ul.gnb > li').mouseover(function(){
        $(this).children('.sub_gnb').addClass('on');
    })
    $('ul.gnb > li').mouseout(function(){
        $(this).children('.sub_gnb').removeClass('on');
    })



    //반응형 시작

    //close 버튼 눌렀을 때 m_gnb 나오게 하기
    $('.close').click(function(e){
        e.preventDefault();
        
        if($('.close i').hasClass('on')){
            $(this).children('i').removeClass('on');
            $(this).siblings('nav').removeClass('on');
            
        } else {
            $(this).children('i').addClass('on');
            $(this).siblings('nav').addClass('on');
        }

    })
    
    //a 눌렀을때 m_gnb 제자리로 보내기
    $('.header_area .gnb_area nav ul li a').click(function(){
        $('.close i').removeClass('on');
        $('nav').removeClass('on');
    })




})

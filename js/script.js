$(document).ready(function(){

    // header height
    $(function(){
        $(".header").height($(window).height());
        $(window).resize(function(){
            $(".header").height($(window).height());
        })
    })
    // loading page
    $(window).on('load' ,function(){
        $('.loading').fadeOut(1000);
    })
  
    
    // navbar coloe
    $(window).scroll(function(){

       if($(window).scrollTop() > 140){
        $("nav").css({
            "backgroundColor":"#051024",
            "padding":"10px 0"
        })

       }else{
        $("nav").css({
            "backgroundColor":"transparent",
            "padding":"25px 0"
        })   
       }
    //    button up
        if($(window).scrollTop() >= 1000){
            $('.up').fadeIn(500);
        }else{
            $('.up').fadeOut(500);
        }
    })

    //    button up scroll top

    $('.up').on('click',function(){
        $('html , body').animate({
            scrollTop:0
        },1000)
    })

//    smoth scroll
    $("nav li a").on('click',function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop:$("#" + $(this).data("scroll")).offset().top -90
        },1000)
    })


        // add class active
        $("nav li a").on('click',function(){
            $(this).addClass("active").parent().siblings().find('a').removeClass('active');
        })
        
        $(window).scroll(function(){
            $("section").each(function(){

                if($(window).scrollTop() +150 > $(this).offset().top){
                    var scrId =$(this).attr("id");
                    $('nav li a').removeClass('active');
                    $("nav li a[data-scroll='"+scrId+"']").addClass('active')

                }
            })
})
                    
        // nice scroll
        $(function() {  
            $("body").niceScroll({
                cursorcolor:'#ff275e',
                cursorwidth:'8px',
                cursorborder:'none',
                zindex:'99999'
            });
        });

        // slider
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 6,
            spaceBetween: 0,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
        
});
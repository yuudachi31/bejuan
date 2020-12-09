$('.shade').hide();
$(document).ready(function() {
    //   $("html, body").animate({
    //     scrollTop: 0
    // });
    //回到頂端
     loadTop= getScrollTop();
     console.log(loadTop)
    if(loadTop<500){
      document.documentElement.style.overflowY = 'hidden';
      $('#welcome').css("visibility","visible") 
    }else{
      $('#welcome').hide();
      document.documentElement.style.overflowY = 'scroll'; 
   //   document.documentElement.style.overflowX = 'hidden'; 
    }
    $(".first_button").hover(function(){
        $('.shade').show();
    },function(){
        $('.shade').hide();
    })

    $(".first_button").click(function(){
     // document.documentElement.style.overflowY = 'scroll'; 
    //  document.documentElement.style.overflowX = 'hidden'; 
      $('#welcome').fadeOut(350);
      proAnime.play()
    })
     
  

    });
    $(window).on('load', function() {
        $("body").addClass('loaded');
         let lib_h=document.getElementById("lib_moveY").offsetHeight;
      //  let lib_h;
      //  $("#lib_c").load(function(){
      //   lib_h=this.height
      //  })

      // document.body.scrollWidth 取得文本的寬度
      let windowWidth=$(window).width();
      let windowheight=$(window).height();
      console.log(windowWidth+"is w")
      console.log(windowheight+"is h")
        console.log(document.getElementById("lib_moveY").offsetHeight+"aa");
        gsap.to(".lib",{
          scrollTrigger:{
            trigger:".lib_trigger",
            start:"top bottom",
          // pin:true,
            scrub:true,
        markers:true
          } ,
          y:　lib_h
      
        });

    });

function getScrollTop(){
    var bodyTop = 0;
    if (typeof window.pageYOffset != "undefined") {
      bodyTop = window.pageYOffset;
  
    } else if (typeof document.compatMode != "undefined"
               && document.compatMode != "BackCompat") {
      bodyTop = document.documentElement.scrollTop;
  
    } else if (typeof document.body != "undefined") {
      bodyTop = document.body.scrollTop;
    }
    /*顯示出捲動後的高度值*/
    // document.getElementById("jsScrollTop").innerHTML = bodyTop;
  console.log(Math.floor(bodyTop)+"  TTT")
  return bodyTop
  }
  let proAnime=gsap.timeline({paused:true}) 
  proAnime.from(".light_2",{opacity:0,duration:2,delay:1})
  proAnime.from(".light_3",{opacity:0,duration:2},"-=1")
  proAnime.from(".light_1",{opacity:0,duration:1.5},"-=1.5")
  proAnime.from(".big_virus",{y:20,opacity:0,duration:3,onComplete:function(){ document.documentElement.style.overflowY = 'scroll';
  document.documentElement.style.overflowX = 'hidden'; 
}},"-=1.5")
  
  // proAnime.to(".bbb",{opacity:0.5,duration:1},"+=1")
  // proAnime.to(".bbb",{y:-200,duration:2},"+=1")
  // proAnime.to(".bbb",{x:-200,duration:2},">")
  
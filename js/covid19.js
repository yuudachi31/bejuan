$('.shade').hide();

async function Loadtop(){
 let loadTop= await getScrollTop();
 if(loadTop<1){
  document.documentElement.style.overflowY = 'hidden';
  $('#welcome').css("visibility","visible") 
}else{
  $('#welcome').hide();
  document.documentElement.style.overflowY = 'scroll'; 
//   document.documentElement.style.overflowX = 'hidden'; 
let v_ani=gsap.timeline() 


v_ani.to(".light_3",{opacity:1,duration:0},"<")
v_ani.to(".light_1",{opacity:1,duration:0},"<")
v_ani.to(".big_virus",{opacity:1,duration:0},"<")
}
}

$(document).ready(function() {
  
  async function Loadtop(){
    let loadTop= await getScrollTop();
    if(loadTop<1){
     document.documentElement.style.overflowY = 'hidden';
     $('#welcome').css("visibility","visible") 
   }else{
     $('#welcome').hide();
     document.documentElement.style.overflowY = 'scroll'; 
   //   document.documentElement.style.overflowX = 'hidden'; 
   let v_ani=gsap.timeline() 
   
 

   v_ani.to(".light_3",{opacity:1,duration:0},"<")
   v_ani.to(".light_1",{opacity:1,duration:0},"<")
   v_ani.to(".big_virus",{opacity:1,duration:0},"<")
   }
   }
  Loadtop();
    //   $("html, body").animate({
    //     scrollTop: 0
    // });
    //回到頂端
  //    loadTop= getScrollTop();
  //    console.log(loadTop+"top");
  //   if(loadTop<1){
  //     document.documentElement.style.overflowY = 'hidden';
  //     $('#welcome').css("visibility","visible") 
  //   }else{
  //     $('#welcome').hide();
  //     document.documentElement.style.overflowY = 'scroll'; 
  //  //   document.documentElement.style.overflowX = 'hidden'; 
  //  let v_ani=gsap.timeline() 
   
   
  //  v_ani.to(".light_3",{opacity:1,duration:0},"<")
  //  v_ani.to(".light_1",{opacity:1,duration:0},"<")
  //  v_ani.to(".big_virus",{opacity:1,duration:0},"<")
  //   }
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
    let virus_scroll = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger:{
        trigger:".virus_trigger",
        start:"top bottom",
       //pin:true,
        scrub:true,
    //markers:true,
    id:"abc"
      } 
     
      // scrollTrigger: {
      //   trigger: ".container",
      //   pin: true,   // pin the trigger element while active
      //   start: "top top", // when the top of the trigger hits the top of the viewport
      //   end: "+=500", // end after scrolling 500px beyond the start
      //   scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      //   snap: {
      //     snapTo: "labels", // snap to the closest label in the timeline
      //     duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      //     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      //     ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
      //   }
     // }
    });
    
    
    virus_scroll.to(".big_virus",{y:　-15,scale:1.2,ease:"none"})
    //下面那行不加的話，big_virus一開始會從-300出現
    virus_scroll.from(".big_virus",{x:0});
    virus_scroll.to(".big_virus",{x:　"-23vw",rotateZ:"10deg",ease:"none"},)

  
    // gsap.to(".market_bg",{opacity:0})

    });


    $(window).on('load', function() {
        $("body").addClass('loaded');
         let lib_h=document.getElementById("lib_moveY").offsetHeight;
         let map_h=document.getElementById("maplottie_moveY").offsetHeight;
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
      //  markers:true
          } ,
          y:　lib_h
      
        });

        let world_scroll1 = gsap.timeline({
          scrollTrigger:{
            trigger:".world_trigger1",
            start:"top center",
            end:"bottom top",
           //pin:true,
            scrub:true,
      //  markers:true,
        
          } 
        });
        world_scroll1.to(".maplottie",{y:-map_h});
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
  

let know_scroll = gsap.timeline({
  
  scrollTrigger:{
    trigger:".know_trigger",
    start:"top bottom",
    end:"bottom center",
   //pin:true,
   // scrub:true,
//markers:true,
onLeave:()=>{

},
toggleActions:"restart none none reverse "
  } 
});
know_scroll.from(".knowborder2",{opacity:0,duration:0.5});
know_scroll.from(".know_text",{opacity:0,duration:0.5})

let virus_scroll2 = gsap.timeline({
  
  scrollTrigger:{
    trigger:".virus_trigger2",
    start:"top center",
    end:"bottom center",
   //pin:true,
    scrub:true,
//markers:true,
//id:"aaa",
onLeave:()=>{

}

  } 
});
virus_scroll2.from(".big_virus",{rotateZ:"10deg"});

let know_scroll2 = gsap.timeline({
  scrollTrigger:{
    trigger:".know_trigger2",
    start:"top center",
    end:"bottom top",
   //pin:true,
    scrub:true,
//markers:true,

  } 
});
know_scroll2.to(".knowborder2",{y:"-900px"});
// gsap.to(".body",{
//   scrollTrigger:{
//     trigger:".aaa",
//     start:"top center",
//     end:"bottom ",
//     scrub:true,
// markers:true
//   } ,
//   opacity:0,
// });

let virus_scroll3 = gsap.timeline({
  scrollTrigger:{
    trigger:".virus_trigger3",
    start:"top center",
    end:"bottom top",
   //pin:true,
    scrub:true,
//markers:true,
// onLeave:()=>{
//   virusFlash.play()
// }
  } 
});

virus_scroll3.from(".big_virus",{x:-300});
let flashBool = true;
let virusFlash = anime({
  targets: '.big_virus',
  opacity:[{value: 0.5, duration: 200},{value: 1, duration: 200}],
  
  
autoplay:false,
 loop:true
//  complete: function() {
//    if(flashBool===true){
//     virusFlash.play();
//    }
//  }
}); 
ScrollTrigger.create({
  trigger: ".virus_trigger4",
  start: "top center",  
 // markers:true,
  onEnter:()=>{virusFlash.play()},
  onLeave:()=>{virusFlash.pause();virusFlash.seek(800);},
  onEnterBack:()=>{virusFlash.play()},
  onLeaveBack:()=>{virusFlash.pause();virusFlash.seek(800);}
  });
// 病毒模糊
  var blurElement = {a:0};//start the blur at 0 pixels

// gsap.to(blurElement, {
//   // scrolltrigger:{
//   //   trigger:".virus_trigger5",
//   //   start:"top bottom",
//   // },
//   a:20, 
//   onUpdate:applyBlur});

//here you pass the filter to the DOM element
function applyBlur()
{
    TweenMax.set(['.big_virus'], {
      webkitFilter:"blur(" + blurElement.a + "px)",
      filter:"blur(" + blurElement.a + "px)"});  
};

// gsap.to(blurElement,{
//   scrollTrigger:{
//   trigger:".virus_trigger5",
//     scrub: true,
//     start:"top center",
// },
//     onUpdate: self => {
//       applyBlur()
//     },
//         // scrolltrigger:{
//         //   trigger:".virus_trigger5",
//         //   start:"top bottom",
//         // },
//         a:20, 
//   })


  let virus_boom = gsap.timeline({
  
    scrollTrigger:{
      trigger:".virus_trigger5",
      start:"top center",
      end:"bottom center",
     //pin:true,
     // scrub:true,
  //markers:true,
  toggleActions:"restart none none reverse ",
  onLeave:()=>{

  },
    } 
  });
  virus_boom.to(".big_virus",{scale:4,opacity:0,duration:1});
 virus_boom.to(blurElement,0.5,{ onUpdate: self => {
  applyBlur()
},a:20},"<")


let maplottie_cont = document.querySelector('#maplottie');
let map_lottie_data = {
  container: maplottie_cont,
  animType: 'svg',
  loop: false,
  prerender: true,
  autoplay: false,
  path: 'json/map3.json'
  //path: 'https://assets.lottiefiles.com/datafiles/jORpumH9Yn0XoXQ/data.json'
};
let map_Anim = bodymovin.loadAnimation(map_lottie_data);
let timeObj = {currentFrame: 0}
//  let endString = (obj.speed === "slow") ? "+=2000" : (obj.speed === "medium") ? "+=1000" : (obj.speed === undefined) ? "+=1250" : "+=500";
 ScrollTrigger.create({
   trigger:".world_trigger2",
     scrub: true,
    start:"-120 center",
     
    // markers:true,
    //  end: endString, 
     onUpdate: self => {
     // console.log($(window).height()+"QQ")
      //  console.log(self.progress) 
      //self.progress可以看到scroll動畫的進度0~1
      // if(obj.duration) {
        getScrollTop()
       gsap.to(timeObj,0, {
        
        currentFrame:(Math.floor(self.progress *  (map_Anim.totalFrames - 1))),
        onUpdate: () => {
          map_Anim.goToAndStop(timeObj.currentFrame, true)
        },
        ease: 'expo'
       })
    
     }
 });  
 
//  let world_scroll1 = gsap.timeline({
//   scrollTrigger:{
//     trigger:".world_trigger1",
//     start:"top center",
//     end:"bottom top",
//    //pin:true,
//     scrub:true,
// markers:true,

//   } 
// });
// world_scroll1.to(".maplottie",{y:-$(window).height()});
gsap.to(".market_bg",{
  scrollTrigger:{
trigger:".market_trigger1",
scrub:true,
start:"top center",
end:"bottom center",
  },
  opacity:1,scale:1})

  gsap.to(".bat_cont",{
    scrollTrigger:{
  trigger:".bat_trigger1",
  scrub:true,
  start:"top center",
  end:"bottom center",
  // markers:true,
  // id:"bat_trigger1",
    },
    y:-3.3*$(window).height(),
    ease:"none"
  })
  gsap.to(".white_shade",{
    scrollTrigger:{
  trigger:".market_trigger2",
  scrub:true,
  start:"top center",
  end:"bottom center",
  // markers:true,
  // id:"bat_trigger1",
    },
    opacity:0.8,
    ease:"none"
  })
  let wing_flap = anime({
    targets: '.bat_wing',
    width:[{value:'60%',duration:100},{value:'100%',duration:100}],
    direction: 'alternate',
    loop: true,
    easing: 'linear',
  autoplay:false,
   
  //  complete: function() {
  //    if(flashBool===true){
  //     virusFlash.play();
  //    }
  //  }
  }); 
  let bat_move = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger:{
      trigger:".bat_trigger2",
      start:"top center",
      end:"bottom center",
     //pin:true,
    onEnter:()=>{wing_flap.play()},
   onLeave:()=>{wing_flap.pause();wing_flap.seek(200);},
   onEnterBack:()=>{wing_flap.play()},
   onLeaveBack:()=>{wing_flap.pause();wing_flap.seek(200);},
      scrub:true,
 
    } 
   
  });
  bat_move.from(".bat",{x:"20vw",ease:"none"})
 
  let bat_texts = gsap.timeline({
  
    scrollTrigger:{
      trigger:".bat_trigger3",
      start:"top center",
      end:"bottom center",
     //pin:true,
     // scrub:true,
  //markers:true,
  onLeave:()=>{
  
  },
  toggleActions:"restart none none reverse "
    } 
  });
  bat_texts.from(".bat_name",{opacity:0,duration:0.3});
  bat_texts.from(".bat_text",{opacity:0,duration:0.3})

  let wall_move = gsap.timeline({
  
    scrollTrigger:{
      trigger:".bat_trigger4",
      start:"top center",
      end:"bottom center",
     //pin:true,
      //scrub:true,
  //markers:true,
  onLeave:()=>{
  
  },
  toggleActions:"restart none none reverse "
    } 
  });
  wall_move.from(".wall_left",{x:"-59.5vw",duration:0.8});
  wall_move.from(".wall_right",{x:"59.5vw",duration:0.8},"<");
  wall_move.to(".world_cont",{y:"-150vh",duration:0.6})

  
let animals_anime_cont = document.querySelector('#animals_anime');
let animals_anime_data = {
  container: animals_anime_cont,
  animType: 'svg',
  loop: false,
  prerender: true,
  autoplay: false,
  path: 'json/animals.json'
  //path: 'https://assets.lottiefiles.com/datafiles/jORpumH9Yn0XoXQ/data.json'
};
let animals_anime_Anim = bodymovin.loadAnimation(animals_anime_data);
let animals_anime_TimeObj = {currentFrame: 0}
//  let endString = (obj.speed === "slow") ? "+=2000" : (obj.speed === "medium") ? "+=1000" : (obj.speed === undefined) ? "+=1250" : "+=500";
 ScrollTrigger.create({
   trigger:".animals_trigger2",
     scrub: true,
    start:"top center",
    
  //  markers:true,
    //  end: endString, 
     onUpdate: self => {
     // console.log($(window).height()+"QQ")
      //  console.log(self.progress) 
      //self.progress可以看到scroll動畫的進度0~1
      // if(obj.duration) {
        getScrollTop()
       gsap.to(animals_anime_TimeObj,0, {
        
        currentFrame:(Math.floor(self.progress *  (animals_anime_Anim.totalFrames - 1))),
        onUpdate: () => {
          animals_anime_Anim.goToAndStop(animals_anime_TimeObj.currentFrame, true)
        },
        ease: 'expo'
       })
    
     }
 });
 let animal_moveY = gsap.timeline({
  
  scrollTrigger:{
    trigger:".animals_trigger2",
    start:"top center",
    
   //pin:true,
    scrub:true,
//markers:true,

  } 
});
animal_moveY.to(".animals_anime",{y:"-50px"});
// animal_moveY.to(".virus_small",500,{x:"-250px"});

let path1 = anime.path(".virus_small_svg .path1")
let path3 = anime.path(".virus_small_svg .path3")
 anime({
   targets:'.v1',
   translateX:path1('x'),
   translateY:path1('y'),
  //  easing:'easeInOutQuad',
  easing:'linear',
   duration:3000,
   loop:true
 });
 anime({
   targets:'.v2',
   translateX:path3('x'),
   translateY:path3('y'),
  //  easing:'easeInOutQuad',
  easing:'linear',
   duration:2000,
   loop:true
 });
//  let path2 = anime.path(".virus_small_svg .path2")
//  anime({
//    targets:'.virus_small',
//    translateX:path2('x'),
//    translateY:path2('y'),
//    easing:'linear',
//    duration:5000,
//    loop:true
//  });
 
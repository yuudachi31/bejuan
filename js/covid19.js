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
let v_ani1=gsap.timeline() 


v_ani1.to(".light_3",{opacity:1,duration:0},"<")
v_ani1.to(".light_1",{opacity:1,duration:0},"<")
v_ani1.to(".big_virus",{opacity:1,duration:0},"<")

}
}

$(document).ready(function() {
  $(".man_fever").hide();
  $(".sym_t").css("visibility","hidden");
  // $('.sym_t').hide();
  $('.man_other').hide();
 
  $('.sym_light').hide();
 
  async function Loadtop(){
    let loadTop= await getScrollTop();
    if(loadTop<1){
     document.documentElement.style.overflowY = 'hidden';
     $('#welcome').css("visibility","visible") 
   }else{
     $('#welcome').hide();
     document.documentElement.style.overflowY = 'scroll'; 
   //   document.documentElement.style.overflowX = 'hidden'; 
   let v_ani2=gsap.timeline() 
   
 

   v_ani2.to(".light_3",{opacity:1,duration:0},"<")
   v_ani2.to(".light_1",{opacity:1,duration:0},"<")
   v_ani2.to(".big_virus",{opacity:1,duration:0},"<")
   v_ani2.to(".big_virus",{x:0,duration:0},"<")
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
    virus_scroll.to(".big_virus",{x:0,duration:0},"<")
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
  proAnime.to(".big_virus",{x:0,duration:0},"<")
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

virus_scroll3.from(".big_virus",{x:"-23vw"});
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
  bat_move.to(".animals_cont0",{opacity:1},"<");
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
animal_moveY.to(".beehome",{opacity:1})
animal_moveY.to(".animals_anime",{y:"90px"});
// animal_moveY.to(".virus_small",500,{x:"-250px"});

let path1 = anime.path(".virus_small_svg .path1")
let path3 = anime.path(".virus_small_svg .path3")
let path4 = anime.path(".virus_small_svg .path4")
let path5 = anime.path(".virus_small_svg .path5")
let path6 = anime.path(".virus_small_svg .path6")
let path7 = anime.path(".virus_small_svg .path7")

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
   targets:'.v3',
   translateX:path3('x'),
   translateY:path3('y'),
  //  easing:'easeInOutQuad',
  easing:'linear',
   duration:2000,
   loop:true
 });
 anime({
  targets:'.v4',
  translateX:path4('x'),
  translateY:path4('y'),
 //  easing:'easeInOutQuad',
 easing:'linear',
  duration:2600,
  loop:true
});
anime({
  targets:'.v5',
  translateX:path5('x'),
  translateY:path5('y'),
 //  easing:'easeInOutQuad',
 easing:'linear',
  duration:1800,
  loop:true
});
anime({
  targets:'.v6',
  translateX:path6('x'),
  translateY:path6('y'),
 //  easing:'easeInOutQuad',
 easing:'linear',
  duration:2600,
  loop:true
});
anime({
  targets:'.v7',
  translateX:path7('x'),
  translateY:path7('y'),
 //  easing:'easeInOutQuad',
 easing:'linear',
  duration:1800,
  loop:true
});
anime({
  targets:'.v8',
  translateX:path3('x'),
  translateY:path3('y'),
 //  easing:'easeInOutQuad',
 easing:'linear',
  duration:2900,
  loop:true
});
anime({
  targets:'.v9',
  translateX:path7('x'),
  translateY:path7('y'),
 //  easing:'easeInOutQuad',
 easing:'linear',
  duration:2050,
  loop:true
});
anime({
  targets:'.v10',
  translateX:path5('x'),
  translateY:path5('y'),
 //  easing:'easeInOutQuad',
 easing:'linear',
  duration:3200,
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
let smallvirus_move1 = gsap.timeline({
  scrollTrigger:{
    trigger:".animals_trigger3",
    start:"top center",
    end:"bottom top",
   //pin:true,
    scrub:true,
//  markers:true,

  } 
});
smallvirus_move1.to(".virus_small1",{x:"40vw",duration:8});
smallvirus_move1.to(".virus_small1",{x:"30vw",y:"7vw",duration:4});
smallvirus_move1.to(".virus_small1",{x:"28vw",y:"7vw",duration:2});
// smallvirus_move1.to(".virus_small1",{x:"20vw",y:"-9vw",duration:5});
// smallvirus_move1.to(".virus_small1",{x:"18vw",y:"-9vw",duration:2});
// smallvirus_move1.to(".virus_small1",{x:"10vw",y:"5vw",duration:5});
// smallvirus_move1.to(".virus_small1",{x:"8vw",y:"5vw",duration:2});
smallvirus_move1.to(".virus_small1",{x:"10vw",y:"-7vw",duration:5});
smallvirus_move1.to(".virus_small1",{x:"8vw",y:"-7vw",duration:2});
smallvirus_move1.to(".virus_small1",{x:"-10vw",y:"5vw",duration:5});
smallvirus_move1.to(".virus_small1",{x:"-12vw",y:"5vw",duration:2});
smallvirus_move1.to(".virus_small1",{x:"-20vw",y:"-7vw",duration:5});
smallvirus_move1.to(".virus_small1",{x:"-22vw",y:"-5vw",duration:2});
smallvirus_move1.to(".virus_small1",{x:"-22vw",y:"0vw",duration:2});
smallvirus_move1.to(".virus_small1",{x:"-17vw",y:"5vw",duration:2});
smallvirus_move1.to(".virus_small1",{x:"-10vw",y:"8vw",duration:2});
smallvirus_move1.to(".virus_small1",{x:"0vw",y:"10vw",duration:2});
let smallvirus_move2 = gsap.timeline({
  scrollTrigger:{
    trigger:".animals_trigger3",
    start:"top center",
    end:"bottom top",
   //pin:true,
    scrub:0.5,
//  markers:true,

  } 
});
smallvirus_move2.to(".virus_small2",{x:"40vw",duration:12});
smallvirus_move2.to(".virus_small2",{x:"30vw",y:"7vw",duration:4});
smallvirus_move2.to(".virus_small2",{x:"28vw",y:"7vw",duration:2});
// smallvirus_move2.to(".virus_small2",{x:"20vw",y:"-9vw",duration:5});
// smallvirus_move2.to(".virus_small2",{x:"18vw",y:"-9vw",duration:2});
// smallvirus_move2.to(".virus_small2",{x:"10vw",y:"5vw",duration:5});
// smallvirus_move2.to(".virus_small2",{x:"8vw",y:"5vw",duration:2});
smallvirus_move2.to(".virus_small2",{x:"10vw",y:"-7vw",duration:5});
smallvirus_move2.to(".virus_small2",{x:"8vw",y:"-7vw",duration:2});
smallvirus_move2.to(".virus_small2",{x:"-10vw",y:"5vw",duration:5});
smallvirus_move2.to(".virus_small2",{x:"-12vw",y:"5vw",duration:2});
smallvirus_move2.to(".virus_small2",{x:"-20vw",y:"-7vw",duration:5});
smallvirus_move2.to(".virus_small2",{x:"-22vw",y:"-5vw",duration:2});
smallvirus_move2.to(".virus_small2",{x:"-22vw",y:"0vw",duration:2});
smallvirus_move2.to(".virus_small2",{x:"-17vw",y:"5vw",duration:2});
smallvirus_move2.to(".virus_small2",{x:"-10vw",y:"8vw",duration:2});
smallvirus_move2.to(".virus_small2",{x:"0vw",y:"10vw",duration:2});

let smallvirus_move3 = gsap.timeline({
  scrollTrigger:{
    trigger:".animals_trigger3",
    start:"top center",
    end:"bottom top",
   //pin:true,
    scrub:1,
//  markers:true,

  } 
});
smallvirus_move3.to(".virus_small3",{x:"40vw",duration:8});
smallvirus_move3.to(".virus_small3",{x:"30vw",y:"7vw",duration:4});
smallvirus_move3.to(".virus_small3",{x:"28vw",y:"7vw",duration:2});
// smallvirus_move3.to(".virus_small3",{x:"20vw",y:"-9vw",duration:5});
// smallvirus_move3.to(".virus_small3",{x:"18vw",y:"-9vw",duration:2});
// smallvirus_move3.to(".virus_small3",{x:"10vw",y:"5vw",duration:5});
// smallvirus_move3.to(".virus_small3",{x:"8vw",y:"5vw",duration:2});
smallvirus_move3.to(".virus_small3",{x:"10vw",y:"-7vw",duration:5});
smallvirus_move3.to(".virus_small3",{x:"8vw",y:"-7vw",duration:2});
smallvirus_move3.to(".virus_small3",{x:"-10vw",y:"5vw",duration:5});
smallvirus_move3.to(".virus_small3",{x:"-12vw",y:"5vw",duration:2});
smallvirus_move3.to(".virus_small3",{x:"-20vw",y:"-7vw",duration:5});
smallvirus_move3.to(".virus_small3",{x:"-22vw",y:"-5vw",duration:2});
smallvirus_move3.to(".virus_small3",{x:"-22vw",y:"0vw",duration:2});
smallvirus_move3.to(".virus_small3",{x:"-17vw",y:"5vw",duration:2});
smallvirus_move3.to(".virus_small3",{x:"-10vw",y:"8vw",duration:2});
smallvirus_move3.to(".virus_small3",{x:"0vw",y:"10vw",duration:2});

// ScrollTrigger.create({
//   trigger: ".animals_trigger4",
//   start: "top center",  
//  // markers:true,
//   onEnter:()=>{$('.animal_text1').show(500)},
//   // onEnter:()=>{$('.animal_text1').css("opacity","1")},
//   onLeave:()=>{},
//   onEnterBack:()=>{},
//   onLeaveBack:()=>{}
//   });


  let animal_text1 = gsap.timeline({
    scrollTrigger:{
      trigger:".animals_trigger4",
      start:"top center",
      end:"bottom center",
      toggleActions:"restart reverse restart reverse",
     //pin:true,
     // scrub:true,
//  markers:true,
  
    } 
  });
  animal_text1.to(".animal_text1",{opacity:1});

  let animal_text2 = gsap.timeline({
    scrollTrigger:{
      trigger:".animals_trigger5",
      start:"top center",
      end:"bottom center",
      toggleActions:"restart reverse restart reverse",
     //pin:true,
     // scrub:true,
//  markers:true,
  
    } 
  });
  animal_text2.to(".animal_text2",{opacity:1});


 
  let virus_change = gsap.timeline({
    scrollTrigger:{
      trigger:".animals_trigger2",
      start:"top center",
      end:"bottom top",
     //pin:true,
      scrub:true,
   // markers:true,
  
    } 
  });
  virus_change.to(".each_virus",{backgroundColor:"#cc0caf"});
  virus_change.to(".each_virus",{backgroundColor:"#dbb623"});
  virus_change.to(".each_virus",{backgroundColor:"#51f0cb"});
  virus_change.to(".each_virus",{backgroundColor:"#1ee33b"});
  virus_change.to(".each_virus",{backgroundColor:"red",duration:2});

  let animal_out = gsap.timeline({
    scrollTrigger:{
      trigger:".animals_trigger6",
      start:"top center",
     
       toggleActions:"restart none none reverse",
     //pin:true,
      scrub:true,
//  markers:true,
  
    } 
  });
  animal_out.to(".closeup",{y:"-170vh"});
  animal_out.to(".animals_cont0",{opacity:0},"<");
  // animal_out.to(".smallv",{x:"0vw",y:"0vw"});
  let animal_out2 = gsap.timeline({
    scrollTrigger:{
      trigger:".symp_trigger1",
      start:"top center",
     end:"bottom center",
       toggleActions:"restart none none reverse",
     //pin:true,
      scrub:true,
      
//  markers:true,
onEnter:()=>{},
onLeave:()=>{$('.smallv').fadeOut(300)},
onEnterBack:()=>{$('.smallv').fadeIn(500)},
onLeaveBack:()=>{}
    } 
  });
  animal_out2.to(".sympt_all",{y:"-100vh",});
  animal_out2.to(".smallv",{x:"0vw",y:"0vh"},"<");
  


  $(".sym_1").hover(function(){
    $('.man_fever').show();
    $('.sym_1_l').show();

    $(".sym_1_text").css("visibility","visible");
    $('.man_normal').hide();
  },function(){
   $('.man_normal').show()
   $(".man_fever").hide();
   $('.sym_1_l').hide();
   $(".sym_1_text").css("visibility","hidden");
  })
  
  $(".sym_2").hover(function(){
    $('.man_cough').show();
    $(".sym_2_text").css("visibility","visible");
    // $('.sym_2_text').show();
    $('.sym_2_l').show();

    $('.man_normal').hide();
  },function(){
   $('.man_normal').show()
   $(".man_cough").hide();
   $('.sym_2_l').hide();
   $(".sym_2_text").css("visibility","hidden");
  })
  
  $(".sym_3").hover(function(){
    $('.man_tired').show();
    $('.sym_3_l').show();
    $(".sym_3_text").css("visibility","visible");
    // $('.sym_2_text').show();
    $('.man_normal').hide();
  },function(){
   $('.man_normal').show()
   $(".man_tired").hide();
   $('.sym_3_l').hide();
   $(".sym_3_text").css("visibility","hidden");
  })
  $(".sym_4").hover(function(){
    $('.man_phlegm').show();
    $('.sym_4_l').show();
    $(".sym_4_text").css("visibility","visible");
    // $('.sym_2_text').show();
    $('.man_normal').hide();
  },function(){
   $('.man_normal').show()
   $(".man_phlegm").hide();
   $('.sym_4_l').hide();
   $(".sym_4_text").css("visibility","hidden");
  })
  $(".sym_5").hover(function(){
    $('.man_breathe').show();
    $('.sym_5_l').show();
    $(".sym_5_text").css("visibility","visible");
    // $('.sym_2_text').show();
    $('.man_normal').hide();
  },function(){
   $('.man_normal').show()
   $(".man_breathe").hide();
   $('.sym_5_l').hide();
   $(".sym_5_text").css("visibility","hidden");
  })
  $(".sym_6").hover(function(){
    $('.man_bodyh').show();
    $('.sym_6_l').show();
    $(".sym_6_text").css("visibility","visible");
    // $('.sym_2_text').show();
    $('.man_normal').hide();
  },function(){
   $('.man_normal').show()
   $(".man_bodyh").hide();
   $('.sym_6_l').hide();
   $(".sym_6_text").css("visibility","hidden");
  })
  $(".sym_7").hover(function(){
    $('.man_headh').show();
    $('.sym_7_l').show();
    $(".sym_7_text").css("visibility","visible");
    // $('.sym_2_text').show();
    $('.man_normal').hide();
  },function(){
   $('.man_normal').show()
   $(".man_headh").hide();
   $('.sym_7_l').hide();
   $(".sym_7_text").css("visibility","hidden");
  })
  let symptom_y = gsap.timeline({
    scrollTrigger:{
      trigger:".symp_trigger2",
      start:"top center",
    //  end:"bottom center",
      //  toggleActions:"restart none none reverse",
     //pin:true,
      scrub: 1.5,
      id:"symout",
//  markers:true,
onEnter:()=>{},
onLeave:()=>{$('.sym_text_contents').show();
// $('.symout').fadeIn(500);
console.log(123)},
onEnterBack:()=>{
  // $('.symout').fadeOut(300);
$('.sym_text_contents').hide()},
onLeaveBack:()=>{}
}
    
  });

  symptom_y.to(".symptoms_virus_all",{y:"-440vh",ease:"none"});


  let symptomfinal = gsap.timeline({
    scrollTrigger:{
      trigger:".symp_trigger3",
      start:"top center",
    //  end:"bottom center",
      //  toggleActions:"restart none none reverse",
     //pin:true,
      scrub: true,
      
 //markers:true,
onEnter:()=>{},
onLeave:()=>{},
onEnterBack:()=>{},
onLeaveBack:()=>{}
    } 
  });
  symptomfinal.to(".symout",{opacity:0.5,duration:0.5})
  symptomfinal.to(".sym_text_2",{y:"-90vh",ease:"none"});
  symptomfinal.to(".symtTextAndManMove",{y:"-=230vh",ease:"none",duration:2});
 
  let TV_cont = document.querySelector('#tvlottie_cont');
let TVData = {
  container: TV_cont,
  animType: 'svg',
  loop:true,
  prerender: true,
  autoplay: true,
  path: 'json/test3.json'
  //path: 'https://assets.lottiefiles.com/datafiles/jORpumH9Yn0XoXQ/data.json'
};
let TV_lottie = bodymovin.loadAnimation(TVData);
TV_lottie.setSpeed(1.5)
let syopacity0= gsap.timeline({
  scrollTrigger:{
    trigger:".symp_trigger4",
    start:"top center",
  //  end:"bottom center",
    //  toggleActions:"restart none none reverse",
   //pin:true,
    scrub: true,
    
//markers:true,
onEnter:()=>{},
onLeave:()=>{},
onEnterBack:()=>{},
onLeaveBack:()=>{}
  } 
});
syopacity0.to(".symout",{opacity:0})
syopacity0.to(".symptom_cont",{opacity:0},"<")
syopacity0.to(".puzzle_cont",{y:"-100vh"},"<")
syopacity0.to(".puzzle",{y:"-100vh"},"<")
// syopacity0.to(".tvlottie_cont",{y:"-100vh"},"<")
let TVopacity= gsap.timeline({
  scrollTrigger:{
    trigger:".puzzle_trigger1",
    start:"top center",
  //  end:"bottom center",
    //  toggleActions:"restart none none reverse",
   //pin:true,
    scrub: true,
    
//markers:true,
onEnter:()=>{},
onLeave:()=>{},
onEnterBack:()=>{},
onLeaveBack:()=>{}
  } 
});
TVopacity.to(".tvlottie_cont",{opacity:1,duration:5})
TVopacity.to(".puzzle",{opacity:1,duration:3})
TVopacity.to(".tvlottie_cont",{opacity:0})

let TVopacity2= gsap.timeline({
  scrollTrigger:{
    trigger:".puzzle_trigger2",
    start:"top center",
  //  end:"bottom center",
    //  toggleActions:"restart none none reverse",
   //pin:true,
    scrub: true,
    
//markers:true,
onEnter:()=>{},
onLeave:()=>{},
onEnterBack:()=>{},
onLeaveBack:()=>{}
  } 
});
TVopacity2.to(".tvlottie_cont",{opacity:1,duration:2})
TVopacity2.to(".puzzle",{opacity:0,duration:3})
TVopacity2.to(".tvlottie_cont",{opacity:0,duration:3})
TVopacity2.to(".puzzle",{y:"100vh"},"<")
TVopacity2.to(".prevent_cont",{y:"-100vh"},"<")
// ////////////////////////////拖曳
let p1ok=false
let p2ok=false
let p3ok=false
let p4ok=false
let p1f = document.querySelector('#p1_f');
let p2f = document.querySelector('#p2_f');
let p3f = document.querySelector('#p3_f');
let p4f = document.querySelector('#p4_f');
p1f.addEventListener('dragstart',dragStart);
p2f.addEventListener('dragstart',dragStart);
p3f.addEventListener('dragstart',dragStart);
p4f.addEventListener('dragstart',dragStart);
function dragStart(e){
  e.dataTransfer.setData('text/plain',e.target.id)
}

let p1e_c = document.querySelector('#p1_ept_c');
let p2e_c = document.querySelector('#p2_ept_c');
let p3e_c = document.querySelector('#p3_ept_c');
let p4e_c = document.querySelector('#p4_ept_c');
p1e_c.addEventListener('drop',dropped1);
p2e_c.addEventListener('drop',dropped2);
p3e_c.addEventListener('drop',dropped3);
p4e_c.addEventListener('drop',dropped4);
p1e_c.addEventListener('dragenter',cancelDefault,);
p1e_c.addEventListener('dragover',cancelDefault);
p2e_c.addEventListener('dragenter',cancelDefault);
p2e_c.addEventListener('dragover',cancelDefault);
p3e_c.addEventListener('dragenter',cancelDefault);
p3e_c.addEventListener('dragover',cancelDefault);
p4e_c.addEventListener('dragenter',cancelDefault);
p4e_c.addEventListener('dragover',cancelDefault);
function dropped1(e){
  cancelDefault(e)
  let id = e.dataTransfer.getData('text/plain');
  if(id==="p1_f"){
  e.target.appendChild(document.querySelector(`#${id}`))
  $('.p1_ff').fadeOut(2000);
    p1ok=true;
    $(".p1_light").css("opacity","0")
  $(".p1_shade").css("opacity","0")
  puzzleRotate()
  }
}
function dropped2(e){
  cancelDefault(e)
  let id = e.dataTransfer.getData('text/plain');
  if(id==="p2_f"){
  e.target.appendChild(document.querySelector(`#${id}`))
  $('.p2_ff').fadeOut(2000);
  p2ok=true;
  $(".p2_light").css("opacity","0")
  $(".p2_shade").css("opacity","0")
  puzzleRotate()
  }
}
function dropped3(e){
  cancelDefault(e)
  let id = e.dataTransfer.getData('text/plain');
  if(id==="p3_f"){
  e.target.appendChild(document.querySelector(`#${id}`))
  $('.p3_ff').fadeOut(2000);
  p3ok=true;
  $(".p3_light").css("opacity","0")
  $(".p3_shade").css("opacity","0")
  puzzleRotate()
  }
}
function dropped4(e){
  cancelDefault(e)
  let id = e.dataTransfer.getData('text/plain');
  if(id==="p4_f"){
  e.target.appendChild(document.querySelector(`#${id}`))
  $('.p4_ff').fadeOut(2000);
  p4ok=true;
  $(".p4_light").css("opacity","0")
  $(".p4_shade").css("opacity","0")
  puzzleRotate()
  }
}

function cancelDefault(e){
  e.preventDefault();
  e.stopPropagation();
  return false
}
$(".p1_ept").hover(function(){
  if(p1ok===false){
  $(".p1_ept").css("opacity","0.5")
  
}

},function(){
  $(".p1_ept").css("opacity","1")
 
});
$("#p1_f").hover(function(){
  if(p1ok===false){
  $(".p1_light").css("opacity","1")
  $(".p1_shade").css("opacity","1")
  $(".p1_text").css("opacity","1")
}

},function(){
  $(".p1_light").css("opacity","0")
  $(".p1_shade").css("opacity","0")
  $(".p1_text").css("opacity","0")
 
});

$("#p2_f").hover(function(){
  if(p2ok===false){
  $(".p2_light").css("opacity","1")
  $(".p2_shade").css("opacity","1")
  $(".p2_text").css("opacity","1")
}
},function(){
  $(".p2_light").css("opacity","0")
  $(".p2_shade").css("opacity","0")
  $(".p2_text").css("opacity","0")
});

$("#p3_f").hover(function(){
  if(p3ok===false){
  $(".p3_light").css("opacity","1")
  $(".p3_shade").css("opacity","1")
  $(".p3_text").css("opacity","1")
}
},function(){
  $(".p3_light").css("opacity","0")
  $(".p3_shade").css("opacity","0")
  $(".p3_text").css("opacity","0")
});

$("#p4_f").hover(function(){
  if(p4ok===false){
  $(".p4_light").css("opacity","1")
  $(".p4_shade").css("opacity","1")
  $(".p4_text").css("opacity","1")
}
},function(){
  $(".p4_light").css("opacity","0")
  $(".p4_shade").css("opacity","0")
  $(".p4_text").css("opacity","0")
});

function puzzleRotate(){
  if(p1ok===true&&p2ok===true&&p3ok===true&&p4ok===true)
  
  $(".empcard").css('transform','rotateY(180deg)');
}




/////////////////////////拖曳
let showprev1= gsap.timeline({
  scrollTrigger:{
    trigger:".puzzle_trigger3",
    start:"top center",
  //  end:"bottom center",
    //  toggleActions:"restart none none reverse",
   //pin:true,
    scrub: true,
    
//markers:true,
onEnter:()=>{},
onLeave:()=>{},
onEnterBack:()=>{},
onLeaveBack:()=>{}
  } 
});
showprev1.to(".bgcenter",{opacity:0,duration:3})
showprev1.to(".prev_text1",{opacity:1,duration:4})
showprev1.to(".prev_text1",{opacity:0})
// $(".pre1_cont").hover(function(){
// $(".pre1_cont>.shad").css("top","0%")
// },function(){
//   $(".prevshad_1").css("top","100%")
//   })
  // let pre_each =document.querySelectorAll('.pre_each');
  // pre_each.forEach(each=>{
  //   $(`${each}`).hover(function(){
  //     $(`${each}>.shad`).css("top","0%")
  //     },function(){
  //       $(`${each}>.shad`).css("top","100%")
  //       })
  // })
  $( ".pre_each" ).each(function( indexX ){
$(this).hover(function(){
  
  $( ".shad" ).each(function( indexY ){
 if(indexX===indexY){
$(this).css("top","0");

 }
  })
},
function(){
  
  $( ".shad" ).each(function( indexY ){
 if(indexX===indexY){
$(this).css("top","100%");

 }
  })
}
 )
  })

  let prev_move = gsap.timeline({
  
    scrollTrigger:{
      trigger:".prev_trigger1",
      start:"top center",
      end:"bottom center",
     //pin:true,
      //scrub:true,
 // markers:true,
  onLeave:()=>{
  
  },
  toggleActions:"restart none none reverse "
    } 
  });
  prev_move.to(".prevA_cont",{x:"100vw"});
  prev_move.to(".prevB_cont",{x:"-100vw"},"-=0.3");

  let prev_move2= gsap.timeline({
    scrollTrigger:{
      trigger:".prev_trigger2",
      start:"top center",
      end:"bottom center",
      //  toggleActions:"restart none none reverse",
     //pin:true,
      scrub: true,
      
 // markers:true,
  onEnter:()=>{},
  onLeave:()=>{},
  onEnterBack:()=>{},
  onLeaveBack:()=>{}
    } 
  });
  prev_move2.to(".prevent_cont",{y:"-200vh"})

  let govanime1= gsap.timeline({
    scrollTrigger:{
      trigger:".prev_trigger3",
      start:"top center",
      end:"bottom center",
      //  toggleActions:"restart none none reverse",
     //pin:true,
      scrub: true,
      
 // markers:true,
  onEnter:()=>{},
  onLeave:()=>{},
  onEnterBack:()=>{},
  onLeaveBack:()=>{}
    } 
  });
  govanime1.to(".line_cont",{width:"20%"})

  let govanime2= gsap.timeline({
    scrollTrigger:{
      trigger:".prev_trigger4",
      start:"top center",
      end:"bottom center",
        toggleActions:"restart none none reverse",
     //pin:true,
    //  scrub: true,
      
//  markers:true,
  onEnter:()=>{},
  onLeave:()=>{},
  onEnterBack:()=>{},
  onLeaveBack:()=>{}
    } 
  });
  govanime2.to(".gtc1",0.3,{height:"18vw"})
  govanime2.to(".gtc1",0.3,{height:"15vw",width:"23%"})

  let govanime3= gsap.timeline({
    scrollTrigger:{
      trigger:".prev_trigger5",
      start:"top center",
      end:"bottom center",
      //  toggleActions:"restart none none reverse",
     //pin:true,
      scrub: true,
      
//  markers:true,
  onEnter:()=>{},
  onLeave:()=>{},
  onEnterBack:()=>{},
  onLeaveBack:()=>{}
    } 
  });
  govanime3.to(".line_cont",{width:"40%"})
  
  let govanime4= gsap.timeline({
    scrollTrigger:{
      trigger:".prev_trigger6",
      start:"top center",
      end:"bottom center",
        toggleActions:"restart none none reverse",
     //pin:true,
    //  scrub: true,
      
  //markers:true,
  onEnter:()=>{},
  onLeave:()=>{},
  onEnterBack:()=>{},
  onLeaveBack:()=>{}
    } 
  });
  govanime4.to(".gtc2",0.3,{height:"23vw"})
  govanime4.to(".gtc2",0.3,{height:"20vw",width:"28%"})
 
  let govanime5= gsap.timeline({
    scrollTrigger:{
      trigger:".prev_trigger7",
      start:"top center",
      end:"bottom center",
      //  toggleActions:"restart none none reverse",
     //pin:true,
      scrub: true,
      
  // markers:true,
  onEnter:()=>{},
  onLeave:()=>{},
  onEnterBack:()=>{},
  onLeaveBack:()=>{}
    } 
  });
  govanime5.to(".line_cont",{width:"60%"})

  let govanime6= gsap.timeline({
    scrollTrigger:{
      trigger:".prev_trigger8",
      start:"top center",
      end:"bottom center",
        toggleActions:"restart none none reverse",
     //pin:true,
    //  scrub: true,
      
  // markers:true,
  onEnter:()=>{},
  onLeave:()=>{},
  onEnterBack:()=>{},
  onLeaveBack:()=>{}
    } 
  });
  govanime6.to(".gtc3",0.3,{height:"23vw"})
  govanime6.to(".gtc3",0.3,{height:"19.6vw",width:"30%"})

  let govanime7= gsap.timeline({
    scrollTrigger:{
      trigger:".prev_trigger9",
      start:"top center",
      end:"bottom center",
      //  toggleActions:"restart none none reverse",
     //pin:true,
      scrub: true,
      
  // markers:true,
  onEnter:()=>{},
  onLeave:()=>{},
  onEnterBack:()=>{},
  onLeaveBack:()=>{}
    } 
  });
  govanime7.to(".line_cont",{width:"80%"})

  let govanime8= gsap.timeline({
    scrollTrigger:{
      trigger:".prev_trigger10",
      start:"top center",
      end:"bottom center",
        toggleActions:"restart none none reverse",
     //pin:true,
    //  scrub: true,
      
  // markers:true,
  onEnter:()=>{},
  onLeave:()=>{},
  onEnterBack:()=>{},
  onLeaveBack:()=>{}
    } 
  });
  govanime8.to(".gtc4",0.3,{height:"17vw"})
  govanime8.to(".gtc4",0.3,{height:"14vw",width:"20%"})

  let govanime9= gsap.timeline({
    scrollTrigger:{
      trigger:".prev_trigger11",
      start:"top center",
      end:"bottom center",
      //  toggleActions:"restart none none reverse",
     //pin:true,
      scrub: true,
      
  // markers:true,
  onEnter:()=>{},
  onLeave:()=>{},
  onEnterBack:()=>{},
  onLeaveBack:()=>{}
    } 
  });
  govanime9.to(".line_cont",{width:"100%"})

  let gov_out= gsap.timeline({
    scrollTrigger:{
      trigger:".prev_trigger12",
      start:"top center",
      end:"bottom center",
      //  toggleActions:"restart none none reverse",
     //pin:true,
      scrub: true,
      
  // markers:true,
  onEnter:()=>{},
  onLeave:()=>{},
  onEnterBack:()=>{},
  onLeaveBack:()=>{}
    } 
  });
  gov_out.to(".prevent_cont",{opacity:0,duration:4})
  gov_out.to(".prevent_cont",{y:0})

  let final_lib= gsap.timeline({
    scrollTrigger:{
      trigger:".prev_trigger13",
      start:"top center",
      end:"bottom center",
     
     //pin:true,
      scrub: true,
      
  // markers:true,
  onEnter:()=>{},
  onLeave:()=>{},
  onEnterBack:()=>{},
  onLeaveBack:()=>{}
    } 
  });

  final_lib.to(".prev_bg",{y:"-190vh"})
  
  let show_f_doctor= gsap.timeline({
    scrollTrigger:{
      trigger:".prev_trigger14",
      start:"top center",
      end:"bottom center",
        toggleActions:"restart none none reverse",
     //pin:true,
    //  scrub: true,
      
  // markers:true,
  onEnter:()=>{},
  onLeave:()=>{},
  onEnterBack:()=>{},
  onLeaveBack:()=>{}
    } 
  });
  show_f_doctor.to(".finaldoctor",0.3,{y:"-100vh"})
  show_f_doctor.to(".finaldoctor",0.3,{opacity:0.7})
  $(".sidebars").hover(function(){
    $(".fast_cont").css("right","0")
    $(".circles").fadeOut(500)
   },function(){
    $(".fast_cont").css("right","-7vw")
    $(".circles").fadeIn(500)
   } )

   let change_color1= gsap.timeline({
    scrollTrigger:{
      trigger:".fast1_id",
      start:"top center",
      end:"bottom center",
        toggleActions:"restart none none reverse",
     //pin:true,
      scrub: true,
 
    } 
  });
  change_color1.to(".cc1",{backgroundColor:"orange"})
  change_color1.to(".cc2",{backgroundColor:"white"},"<")
  change_color1.to(".cc3",{backgroundColor:"white"},"<")
  change_color1.to(".cc4",{backgroundColor:"white"},"<")
  change_color1.to(".cc5",{backgroundColor:"white"},"<")
  change_color1.to(".cc6",{backgroundColor:"white"},"<")

  let change_color2= gsap.timeline({
    scrollTrigger:{
      trigger:".fast2_id",
      start:"top center",
      end:"bottom center",
        toggleActions:"restart none none reverse",
     //pin:true,
      scrub: true,
 
    } 
  });
  change_color2.to(".cc1",{backgroundColor:"white"})
  change_color2.to(".cc2",{backgroundColor:"orange"},"<")
  change_color2.to(".cc3",{backgroundColor:"white"},"<")
  change_color2.to(".cc4",{backgroundColor:"white"},"<")
  change_color2.to(".cc5",{backgroundColor:"white"},"<")
  change_color2.to(".cc6",{backgroundColor:"white"},"<")

  let change_color3= gsap.timeline({
    scrollTrigger:{
      trigger:".fast3_id",
      start:"top center",
      end:"bottom center",
        toggleActions:"restart none none reverse",
     //pin:true,
      scrub: true,
 
    } 
  });
  change_color3.to(".cc1",{backgroundColor:"white"})
  change_color3.to(".cc3",{backgroundColor:"orange"},"<")
  change_color3.to(".cc2",{backgroundColor:"white"},"<")
  change_color3.to(".cc4",{backgroundColor:"white"},"<")
  change_color3.to(".cc5",{backgroundColor:"white"},"<")
  change_color3.to(".cc6",{backgroundColor:"white"},"<")
  
  let change_color4= gsap.timeline({
    scrollTrigger:{
      trigger:".fast4_id",
      start:"top center",
      end:"bottom center",
        toggleActions:"restart none none reverse",
     //pin:true,
      scrub: true,
 
    } 
  });
  change_color4.to(".cc1",{backgroundColor:"white"})
  change_color4.to(".cc4",{backgroundColor:"orange"},"<")
  change_color4.to(".cc2",{backgroundColor:"white"},"<")
  change_color4.to(".cc3",{backgroundColor:"white"},"<")
  change_color4.to(".cc5",{backgroundColor:"white"},"<")
  change_color4.to(".cc6",{backgroundColor:"white"},"<")

  let change_color5= gsap.timeline({
    scrollTrigger:{
      trigger:".fast5_id",
      start:"top center",
      end:"bottom center",
        toggleActions:"restart none none reverse",
     //pin:true,
      scrub: true,
 
    } 
  });
  change_color5.to(".cc1",{backgroundColor:"white"})
  change_color5.to(".cc5",{backgroundColor:"orange"},"<")
  change_color5.to(".cc2",{backgroundColor:"white"},"<")
  change_color5.to(".cc3",{backgroundColor:"white"},"<")
  change_color5.to(".cc4",{backgroundColor:"white"},"<")
  change_color5.to(".cc6",{backgroundColor:"white"},"<")

  let change_color6= gsap.timeline({
    scrollTrigger:{
      trigger:".fast6_id",
      start:"top center",
      end:"bottom center",
        toggleActions:"restart none none reverse",
     //pin:true,
      scrub: true,
 
    } 
  });
  change_color6.to(".cc1",{backgroundColor:"white"})
  change_color6.to(".cc6",{backgroundColor:"orange"},"<")
  change_color6.to(".cc2",{backgroundColor:"white"},"<")
  change_color6.to(".cc3",{backgroundColor:"white"},"<")
  change_color6.to(".cc4",{backgroundColor:"white"},"<")
  change_color6.to(".cc5",{backgroundColor:"white"},"<")
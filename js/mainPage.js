$(function() {
  window.setTimeout(( () => doorflash.play() ), 4000);
  
    $('.ivy_light').hide()
    $('.elvis_light').hide()
    $('.david_light').hide()
    $('.screen_light').hide()


$('.ivy').hover(
    function(){
        $('.ivy_light').show()
    },function(){ $('.ivy_light').hide()})
$('.elvis').hover(
    function(){
        $('.elvis_light').show()
    },function(){ $('.elvis_light').hide()})
$('.david').hover(
    function(){
        $('.david_light').show()
    },function(){ $('.david_light').hide()})
$('.screen').hover(
    function(){
        $('.screen').css("opacity","0.8")
        $('.screen_light').show()
    },function(){ $('.screen_light').hide()})

    
  
    

}
)
  
anime({
    targets: [ '.v1','.v6','.v11'],
    translateY: 10,
    easing: "linear",
    duration: 1000,
    direction: 'alternate',
  autoplay:true,
   loop:true
  
  });
  
  anime({
    targets: [ '.v2','.v7','.v12'],
    translateY: 7,
    easing: "linear",
    duration: 1300,
    direction: 'alternate',
  autoplay:true,
   loop:true,

  });
  
  anime({
    targets: [ '.v3','.v8','.v13'],
    translateY: 12,
    easing: "linear",
    duration: 1000,
    direction: 'alternate',
  autoplay:true,
   loop:true,
  
  
  });
  
  anime({
    targets: [ '.v4','.v9'],
    translateY: 9,
    easing: "linear",
    duration: 1200,
    direction: 'alternate',
  autoplay:true,
   loop:true,

  
  });
  
  anime({
    targets:[ '.v5','.v10'],
    translateY: 10,
    easing: "linear",
    duration: 1000,
    direction: 'alternate',
  autoplay:true,
   loop:true,
 
  
  });
  let mk1=0
  let mk2=0
  let mk3=0
  let mask1=anime({
    targets:".facemask1",
    translateY: [{value: -40, duration: 0},{value: 0, duration: 800}],
   opacity:[{value: 1, duration: 300}],

  autoplay:false,
   loop:false,
  });   
  let mask2=anime({
    targets:".facemask2",
    translateY: [{value: -40, duration: 0},{value: 0, duration: 800}],
   opacity:[{value: 1, duration: 300}],

  autoplay:false,
   loop:false,
  });
  let mask3=anime({
    targets:".facemask3",
    translateY: [{value: -40, duration: 0},{value: 0, duration: 800}],
   opacity:[{value: 1, duration: 300}],

  autoplay:false,
   loop:false,
  });   
  let mask4=anime({
    targets:".facemask4",
    translateY: [{value: -40, duration: 0},{value: 0, duration: 800}],
   opacity:[{value: 1, duration: 300}],

  autoplay:false,
   loop:false,
  });   
  let value1=-5;
  let value2=10;
  let virus1d = anime({
    targets: '.v1',
    translateY: [{value:-5},{value:10}],
    easing: "linear",
    duration: 300,
    direction: 'alternate',
  autoplay:false,
  }); 
  let virus2d = anime({
    targets: '.v2',
    translateY: [{value:-5},{value:10}],
    easing: "linear",
    duration: 300,
    direction: 'alternate',
  autoplay:false,
  }); 
  let virus3d = anime({
    targets: '.v3',
    translateY: [{value:-5},{value:10}],
    easing: "linear",
    duration: 300,
    direction: 'alternate',
  autoplay:false,
  }); 
  let virus4d = anime({
    targets: '.v4',
    translateY: [{value:value1},{value:value2}],
    easing: "linear",
    duration: 300,
    direction: 'alternate',
  autoplay:false,
  }); 

  let virus5d = anime({
    targets: '.v5',
    translateY: [{value:-5},{value:10}],
    easing: "linear",
    duration: 300,
    direction: 'alternate',
  autoplay:false,
  });  
  let virus6d = anime({
    targets: '.v6',
    translateY: [{value:value1},{value:value2}],
    easing: "linear",
    duration: 300,
    direction: 'alternate',
  autoplay:false,
  });
  let virus7d = anime({
    targets: '.v7',
    translateY: [{value:value1},{value:value2}],
    easing: "linear",
    duration: 300,
    direction: 'alternate',
  autoplay:false,
  });
  let virus8d = anime({
    targets: '.v8',
    translateY: [{value:value1},{value:value2}],
    easing: "linear",
    duration: 300,
    direction: 'alternate',
  autoplay:false,
  });
  let virus9d = anime({
    targets: '.v9',
    translateY: [{value:value1},{value:value2}],
    easing: "linear",
    duration: 300,
    direction: 'alternate',
  autoplay:false,
  });
  let virus10d = anime({
    targets: '.v10',
    translateY: [{value:value1},{value:value2}],
    easing: "linear",
    duration: 300,
    direction: 'alternate',
  autoplay:false,
  });
  let virus11d = anime({
    targets: '.v11',
    translateY: [{value:value1},{value:value2}],
    easing: "linear",
    duration: 300,
    direction: 'alternate',
  autoplay:false,
  });
  let virus12d = anime({
    targets: '.v12',
    translateY: [{value:value1},{value:value2}],
    easing: "linear",
    duration: 300,
    direction: 'alternate',
  autoplay:false,
  });
  let virus13d = anime({
    targets: '.v13',
    translateY: [{value:value1},{value:value2}],
    easing: "linear",
    duration: 300,
    direction: 'alternate',
  autoplay:false,
  });
  
  
  $('.v1').hover(
    function(){
        virus1d.restart()
    },function(){}) 
  $('.v2').hover(
    function(){
        virus2d.restart()
    },function(){}) 
  $('.v3').hover(
    function(){
        virus3d.restart()
    },function(){}) 
  $('.v4').hover(
    function(){
        virus4d.restart()
    },function(){}) 
    
  $('.v5').hover(
    function(){
        virus5d.restart()
    },function(){}) 
  $('.v6').hover(
    function(){
        virus6d.restart()
    },function(){}) 
      $('.v7').hover(
    function(){
        virus7d.restart()
    },function(){}) 
    $('.v8').hover(
      function(){
          virus8d.restart()
      },function(){}) 
      $('.v9').hover(
        function(){
            virus9d.restart()
        },function(){}) 
        $('.v10').hover(
          function(){
              virus10d.restart()
          },function(){}) 
          $('.v11').hover(
            function(){
                virus11d.restart()
            },function(){}) 
            $('.v12').hover(
              function(){
                  virus12d.restart()
              },function(){}) 
              $('.v13').hover(
                function(){
                    virus13d.restart()
                },function(){}) 
anime({
    targets:".stu_st1_all .c_all .cc",
   opacity:"1",
    easing: "linear",
    duration: 800,

  autoplay:true,
   loop:true,
 delay:anime.stagger(200 , {start: 200})
  
  }); 
anime({
    targets:".stu_st2_all .c_all .cc",
   opacity:"1",
    easing: "linear",
    duration: 800,

  autoplay:true,
   loop:true,
 delay:anime.stagger(200 , {start: 200})
  
  }); 
  
  anime({
    targets:".man_st1_all .c_all .cc",
   opacity:"1",
    easing: "linear",
    duration: 800,

  autoplay:true,
   loop:true,
 delay:anime.stagger(200 , {start: 200})
  
  }); 
  anime({
    targets:".dr_st1_all .c_all .cc",
   opacity:"1",
    easing: "linear",
    duration: 800,

  autoplay:true,
   loop:true,
 delay:anime.stagger(200 , {start: 200})
  
  }); 
  let doorflash =anime({
    targets:".door_light",
   opacity:"1",
    easing: "linear",
    duration: 800,
    direction: 'alternate',
  autoplay:false,
   loop:true,

  
  }); 
  $('.stu').hover(
    function(){
      $('.stu_st1_all').hide();
      $('.stu_st2_all').hide();
      $('.stu_t1_all').show();
      $('.stu_t2_all').show();
      if(mk1==0){  
        mask1.play();
      mask2.play();
      mk1=1
    }
    
    },function(){
        $('.stu_st1_all').show();
    $('.stu_st2_all').show();
    $('.stu_t1_all').hide();
      $('.stu_t2_all').hide();
  }) 
  $('.man').hover(
    function(){
      $('.man_st1_all').hide();
      $('.man_t1_all').show();
      if(mk2==0){  
        mask4.play();
      
      mk2=1
    }
    
    },function(){
        $('.man_st1_all').show();
  
      $('.man_t1_all').hide();
  }) 
  $('.dr').hover(
    function(){
      $('.dr_st1_all').hide();
      $('.dr_t1_all').show();
      if(mk3==0){  
        mask3.play();
      
      mk3=1
    }
    },function(){
        $('.dr_st1_all').show();
  
      $('.dr_t1_all').hide();
  }) 
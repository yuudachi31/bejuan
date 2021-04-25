$(function() {
  // window.setTimeout(( () => doorflash.play() ), 4000);
  
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
    },function(){
        $('.man_st1_all').show();
  
      $('.man_t1_all').hide();
  }) 
  $('.dr_st1_all').hide()

  let pppp=3
  // $('.man').hover(
  //   function(){
  //     $('.step7 p').html(`dada+${pppp}`);
     
  //   },function(){
       
  // }) 
 
  // $('.dr').hover(
  //   function(){
  //     $('.dr_st1_all').hide();
  //     $('.dr_t1_all').show();
  //   },function(){
  //       $('.dr_st1_all').show();
  
  //     $('.dr_t1_all').hide();
  // }) 
  let right_num=0;
  let wrong_num=0;
  let step=2;
  let allpass=false;
  let nextstep=function(){
    if(step==2){
      $('.step2').hide();
      $('.step3').show();
    }else if(step==3){

    }
  };
  $('.first_btn').click(
    function(){
      $('.step1').hide();
      $('.step2').show();
     console.log("aaaooo")
    }
  ) 
  $('.first_btn').click(
    function(){
      $('.step1').hide();
      $('.step2').show();
  
    }
  ) 
  $('.w').click(
    function(){
      $('.block').show();
      $(this).css("background-color","rgba(216, 119, 119, 0.781)")
      $(".as").css("background-color","rgba(20, 255, 137, 0.815)")
      setTimeout((()=>{
        $(this).css("background-color","")
        $(".as").css("background-color","")
        if(step==2){
          $('.step2').hide();
          $('.step3').show();
          wrong_num+=1;
          step+=1;
        }else if(step==3){
          $('.step3').hide();
          $('.step4').show();
          step+=1;
          wrong_num+=1;
        }
        else if(step==4){
          $('.step4').hide();
          $('.step5').show();
          step+=1;
          wrong_num+=1;
        }
        else if(step==5){
          $('.step5').hide();
          $('.step6').show();
          step+=1;
          wrong_num+=1;
        }
        else if(step==6){
          $('.step6').hide();
          $('.step7').show();
          step+=1;
          wrong_num+=1;
          $('.wrong_num').html(` ${wrong_num} `);
          $('.right_num').html(` ${right_num} `);
        }
        $('.block').hide();
      }), 2000)
    }
  )
  $('.as').click(
    function(){
      $(this).css("background-color","rgba(20, 255, 137, 0.815)")
      $('.block').show();
      setTimeout((()=>{
        $(this).css("background-color","")
        $(".as").css("background-color","")
        if(step==2){
          $('.step2').hide();
          $('.step3').show();
          step+=1;
          right_num+=1;
        }else if(step==3){
          $('.step3').hide();
          $('.step4').show();
          step+=1;
          right_num+=1;
        }
        else if(step==4){
          $('.step4').hide();
          $('.step5').show();
          step+=1;
          right_num+=1;
        }
        else if(step==5){
          $('.step5').hide();
          $('.step6').show();
          step+=1;
          right_num+=1;
        }
        else if(step==6&&right_num<4){
          $('.step6').hide();
          $('.step7').show();
          step+=1;
          right_num+=1;
          $('.wrong_num').html(` ${wrong_num} `);
          $('.right_num').html(` ${right_num} `);
        }else if(right_num=4){
          // $('.step6').hide();
          // $('.step8').show();
          $('.question_cont').hide();
          $('.virus').fadeOut(1500,function(){
            $('.dr_t2_all').fadeIn(1000)
          })
        }
        $('.block').hide();
      }), 2000)
    }
  )
  $('.replay_btn').click(
    function(){
       right_num=0;
       wrong_num=0;
       step=2;
       $('.step2').show();
       $('.step7').hide();
       $('.step8').hide();
    })
  // $( ".w" ).each(function( indexX ){
  //   $(this).hover(function(){
  //     $(this).css
     
  //    })
      
  //     })
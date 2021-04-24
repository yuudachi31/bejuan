$(function() {
    console.log("a")
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

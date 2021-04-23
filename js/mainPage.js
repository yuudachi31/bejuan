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
    targets: '.v1',
    translateY: 13,
    easing: "linear",
    duration: 1000,
    direction: 'alternate',
  autoplay:true,
   loop:true
  
  });
  
  anime({
    targets: '.v2',
    translateY: 14,
    easing: "linear",
    duration: 1300,
    direction: 'alternate',
  autoplay:true,
   loop:true,
  delay:400,
  });
  
  anime({
    targets: '.v3',
    translateY: 12,
    easing: "linear",
    duration: 1000,
    direction: 'alternate',
  autoplay:true,
   loop:true,
   delay:700,
  
  });
  
  anime({
    targets: '.v4',
    translateY: 14,
    easing: "linear",
    duration: 1200,
    direction: 'alternate',
  autoplay:true,
   loop:true,
   delay:200,
  
  });
  
  anime({
    targets: '.v5',
    translateY: 13,
    easing: "linear",
    duration: 1000,
    direction: 'alternate',
  autoplay:true,
   loop:true,
   delay:800,
  
  });       
  let virus5d = anime({
    targets: '.v5',
    translateY: [{value:-20},{value:10}],
    easing: "linear",
    duration: 300,
    direction: 'alternate',
  autoplay:false,
  
  
  
  });  
  $('.v5').hover(
    function(){
        virus5d.restart()
    },function(){}) 

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
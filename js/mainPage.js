$(function() {
    console.log("a")
    $('.ivy_light').hide()
$('.ivy').hover(
    function(){
        $('.ivy_light').show()
    },function(){ $('.ivy_light').hide()})


}
)
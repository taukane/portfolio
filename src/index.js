function dimOff(){
    document.getElementById("QuickView").style.display = "none";
}
function dimOn(){
    document.getElementById("QuickView").style.display = "block";
}
alert('oi')
$(function() {
    $("img").lazyload({
        event : "sporty"
    });
});
$(window).bind("load", function() {
    var timeout = setTimeout(function() { $("img").trigger("sporty") }, 700);
});
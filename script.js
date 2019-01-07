$(function(){
    $(".nav-container .nav-list li").hover(function(){
        var className = $(this).attr("class");
        className = className.slice(0, 7);
        var arrow = $(".nav-container .hover-arrow ." + className);
        arrow.toggleClass("hidden-arrow");
    });
    
});
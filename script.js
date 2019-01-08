$(function(){
    $(".nav-container .nav-list li").hover(function(){
        var className = $(this).attr("class");
        className = className.slice(0, 7);
        var arrow = $(".nav-container .hover-arrow ." + className);
        arrow.toggleClass("hidden-arrow");
    });

    $(".login img.open-button").click(function(){
        $(this).hide();
        $(".login img.close-button").show();
        $("nav").show();
    });

    $(".login img.close-button").click(function(){
        $(this).hide();
        $(".login img.open-button").show();
        $("nav").hide();
    });
    
});
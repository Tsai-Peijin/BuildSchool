$(function(){
    console.log("ggg");
    $(".menu-toggle").on("click",function(e){
        e.preventDefault(); // 不要到頁面最上方。所有動作停止
        $(this).siblings("ul").slideToggle();
        // 找到隔壁的ul，然後滑上滑下
        $(this).find("i").toggleClass("fa-caret-down").toggleClass("fa-caret-up");
    });
    $("body").on("click",function(e){
        if($(e.target).parents(".main-menu").length < 1){
            $(".main-menu ul").slideUp();
            $(".menu-toggle i").removeClass("fa-caret-up").addClass("fa-caret-down");
        }
    });
});
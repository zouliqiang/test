/**
 * Created by Administrator on 2017/6/25.
 */
$(function(){
    $(".user-btn").click(function(){
        $(".nav-container").toggleClass("showNav hideNav").removeClass("hidden");
        $(this).toggleClass("animated");
    });
    window.onscroll= function(){
        //����t�ǹ���������ʱ�����붥���ľ���
        var t = document.documentElement.scrollTop||document.body.scrollTop;
        if(t>80){
            $(".nav-container").css("top","0px");
        }else{
            $(".nav-container").css("top",80-t+"px");
        }
    }
})
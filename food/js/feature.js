$(function(){

    $.fn.numberRock=function(options){
        var defaults={
            speed:24,
            count:100
        };
        var opts=$.extend({}, defaults, options);

        var div_by = 100,
            count=opts["count"],
            speed = Math.floor(count / div_by),
            sum=0,
            $display = this,
            run_count = 1,
            int_speed = opts["speed"];
        var int = setInterval(function () {
            if (run_count <= div_by&&speed!=0) {
                $display.text(sum=speed * run_count);
                run_count++;
            } else if (sum < count) {
                $display.text(++sum);
            } else {
                clearInterval(int);
            }
        }, int_speed);
    }
    $.ajax({
        type : "GET",  //提交方式
        url : host+"food/feature",//路径
        data : {},//参数数据，这里使用的是Json格式进行传输
        success : function(result) {//返回数据根据结果进行相应的处理
            if(result.code==0){
                var data=result.data;
                var footList=data.footList;//美食列表
                var completion=data.completion;//完成量
                var project=data.project;//项目
                var profit=data.profit;//利润
                var customer=data.customer;//顾客
                //美食列表
                var footListUl=$(".scale-image ul");
                for(var i=0;i<footList.length;i++){
                        footListUl.append(
                        '<li  title="'+footList[i].region+'">'+
                        '<a href="javascript:;">'+
                        '<img src="'+footList[i].image+'" class="img-responsive" alt="1"/>'+
                        '</a>'+
                        '<div class="wrapper">'+
                        '<p>'+
                        '<span class="glyphicon glyphicon-zoom-in"></span>'+
                        '</p>'+
                        '</div>'+
                        '</li>'
                        );
                }


                $(".lr").numberRock({
                    speed:50,
                    count:profit
                })
                $(".wcl").numberRock({
                    speed:150,
                    count:completion
                })
                $(".xm").numberRock({
                    speed:34,
                    count:project
                })
                $(".gk").numberRock({
                    speed:200,
                    count:customer
                })

            }
        }
    });

 /*   $("").not(".glyphicon-zoom-in")*/



    $(".close-btn").on("click",function(){
        //$(".enlarger").hide();
        $(".enlarger").css("display","none");
    });
    /*$(".close-btn").click(function()
     {
     $("enlarger").hide();
     })*/

    $("body").on("click",".wrapper span",function(){

        var src=$(this).parents("li").children("a").children("img").attr("src")
        $(".enlarge-box .img-show img").attr("src",src);
        $(".enlarger").show();

    });
   $(".left").click(function(){
        var $this=$(this).next().children("img").attr("src");
        $(".scale-image ul li").each(function(){
            var img=$(this).children("a").children("img").attr("src");
            if(img==$this){
                var prevLi=$(this).prev();
                if(prevLi.children("a").html()==null||prevLi.children("a").html()==undefined){
                    var src= $(".scale-image ul li:last").children("a").children("img").attr("src");
                    $(".enlarge-box .img-show img").attr("src",src);
                }else{
                    var src= prevLi.children("a").children("img").attr("src");
                    $(".enlarge-box .img-show img").attr("src",src);
                }
            }

        })
    });













  $(".right").on("click",function(){
      var enlargeSrc=$(this).prev().children("img").attr("src");
      $(".scale-image>ul>li").each(function(){
      var liSrc= $(this).children("a").children("img").attr("src");
       if(enlargeSrc==liSrc){
           var nextSrc= $(this).next().children("a").children("img").attr("src")
           if(nextSrc==undefined||nextSrc==null){
               var lifirstSrc=$(".scale-image>ul li:first").children("a").children("img").attr("src");
               $(".right").prev().children("img").attr("src",lifirstSrc);
           }else{

               $(".right").prev().children("img").attr("src",nextSrc);
           }
       }

      })
  })


    /*地区切换*/
    $("#button-scale .btn-item-group").on("click","button",function(){
      var title=$(this).html();
        if(title=="全部"){
            $(".scale-image ul li").each(function () {
                $(this).fadeIn("fast");
            });
        }else {
            $(".scale-image ul li").each(function () {
                var imgTitle = $(this).attr("title");
                if (imgTitle != title) {
                    $(this).hide();
                } else {
                    $(this).fadeIn("fast");
                }
            });
        }
    })




})
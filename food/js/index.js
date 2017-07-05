$(function(){
    $.ajax({
        type : "GET",  //提交方式
        url : host+"food/index",//路径
        data : {},//参数数据，这里使用的是Json格式进行传输
        success : function(result) {//返回数据根据结果进行相应的处理
        if(result.code==0){
            var data=result.data;
            var bannerList=data.bannerList;//轮播图
            var footList=data.footList;//美食相伴
            var footSayList=data.footSayList;//美食物语
            var footPeopleList=data.footPeopleList;//美食达人
            var footListUl=$(".delicious-words-img-group ul");
            //轮播图
            var bannerUl=$("#slider-img-change");
            var carouselUl=$(".carousel-indicators");
            for(var i=0;i<bannerList.length;i++){
                if(i==0) {
                    bannerUl.append(
                        '<div  class="item active">' +
                        '<img src="'+bannerList[i].image+'" class="img-responsive" >' +
                        '<div class="carousel-caption" >' +
                        '<h1>'+bannerList[i].h1+'</h1>' +
                        '<p >'+bannerList[i].p+'</p>' +
                        '</div>' +
                        '</div>'
                    );
                    carouselUl.append('<li data-target="#myCar1" data-slide-to="'+i+'" class="active"></li>');
                }else{
                    bannerUl.append(
                        '<div  class="item">' +
                        '<img src="'+bannerList[i].image+'" class="img-responsive" >' +
                        '<div class="carousel-caption" >' +
                        '<h1>'+bannerList[i].h1+'</h1>' +
                        '<p >'+bannerList[i].p+'</p>' +
                        '</div>' +
                        '</div>'
                    );
                    carouselUl.append('<li data-target="#myCar1" data-slide-to="'+i+'"></li>');
                }
            }
            //美食相伴
           for(var i=0;i<footList.length;i++){
               footListUl.append(
               '<li onclick=window.location.href="tese.html">'+
               '<div class="img-meat">'+
               '<img src="'+footList[i].image+'" alt="图片未显示"/>'+
               '</div>'+
               '<p>'+
               '<span>'+footList[i].name+'</span>'+
               '</p>'+
               '<div class="shadow-box">'+footList[i].price+'</div>'+
               '</li>'
               );
           }

            //美食物语
            $(".breakfast-img-write").attr("onclick",'window.location.href="news-details.html"');
            $(".breakfast-img-write .breakfast-img-write-left img").attr("src",footSayList[0].image);
            $(".breakfast-img-write .breakfast-img-write-right h3").html(footSayList[0].name);
            $(".breakfast-img-write .breakfast-img-write-right p").html(footSayList[0].introduce);
            var footSayListUl=$(".breakfast-date-write ul");
            for(var i=1;i<footSayList.length;i++){
                footSayListUl.append(
                '<li onclick=window.location.href="news-details.html">'+
                '<span>'+footSayList[i].date+'</span>'+
                '<a href="javascript:;">'+footSayList[i].name+'</a>'+
                '</li>'
                );
            }

            //美食达人
            var footPeopleListUl=$(".bodies-group");
            for(var i=0;i<footPeopleList.length;i++){
                footPeopleListUl.append(
                '<dl onclick=window.location.href="gerenzhuye.html"><dt><img src="'+footPeopleList[i].image+'"  alt="图片未显示"/></dt>'+
                     '<dd>'+footPeopleList[i].name+'</dd></dl>'
                );
            }

        }
        }
    });

    $(".login-register-head ul").find("li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
          if($(this).index()==0){
              $(".login-div").show();
              $(".register-div").hide();
          }else{
              $(".register-div").show();
              $(".login-div").hide();
          }
    });

    $(".go-login").click(function(){
        $(this).css("color","#ffffff")
     $(".login-register-box").slideToggle("slow");
    });
})
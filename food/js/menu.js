$(function(){
    $.ajax({
        type : "GET",  //提交方式
        url : host+"food/menu",//路径
        data : {},//参数数据，这里使用的是Json格式进行传输
        success : function(result) {//返回数据根据结果进行相应的处理
            if(result.code==0){
                var data=result.data;
                var menuList=data.menuList;//轮播图
                var menuListUl=$(".wrap-content ul");

                //美食相伴
                for(var i=0;i<menuList.length;i++){
                    menuListUl.append(
                    '<li onclick=window.location.href="tese.html">'+
                    '<div class="zoom-container">'+
                    '<a href="">'+
                    '<img src="'+menuList[i].image+'" class="img-responsive"/>'+
                    '</a>'+
                    '</div>'+
                    '<div class="zoom-shadow">'+
                    '<span>'+menuList[i].name+' &nbsp;<i>'+menuList[i].price+'</i></span>'+
                    '</div>'+
                    '</li>'
                    );
                }



            }
        }
    });
})
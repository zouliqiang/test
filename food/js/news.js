$(function(){
    var page=1;
    var total=0;
    appendHtml(page);



    function appendHtml(page){
        var newsListli=$("#news-main ul.list li");
        newsListli.remove();
        $.ajax({
            type : "GET",  //提交方式
            url : host+"food/news",//路径
            data : {page:page},//参数数据，这里使用的是Json格式进行传输
            success : function(result) {//返回数据根据结果进行相应的处理
                if(result.code==0){
                    var data=result.data;
                    var newsList=data.newsList;//新鲜事列表
                    total=data.total;//总页码
                    var newsListUl=$("#news-main ul.list");
                    for(var i=0;i<newsList.length;i++){
                        newsListUl.append(
                            '<li onclick=window.location.href="news-details.html">'+
                            '<div class="main-left">'+
                            '<div>'+
                            '<img src="'+newsList[i].image+'" class="img-responsive"/>'+
                            '</div>'+
                            '</div>'+
                            '<div class="main-right">'+
                            '<h3>'+newsList[i].name+'</h3>'+
                            '<p>'+newsList[i].introduce+'</p>'+
                            '</div>'+
                            '</li>'
                        );
                    }
                    showPage(page,total);
                }
            }
        });

    }
    function showPage(page,total){
        var pageUl=$(".news-main-page ul");
        pageUl.find("li").remove();
        pageUl.append('<li class="start"><a href="javascript:;">首页</a></li><li class="prev"><a href="javascript:;"><<</a></li>');
        if(page==1){
            pageUl.find("li.start").addClass("active");
            pageUl.find("li.prev").addClass("disabled");

        }
        if(total<=7){
            for(var i=1;i<=total;i++) {
                if (i == page) {
                    pageUl.append('<li class="active"><a href="javascript:;">' + page + '</a></li>');
                } else {
                    pageUl.append('<li><a href="javascript:;">' + i+ '</a></li>');
                }
            }
        }else{
            if(page>=4) {
                if(total<=page+3){
                    for (var i = parseInt(total)-6; i <= parseInt(total); i++) {
                        if (i == page) {
                            pageUl.append('<li class="active"><a href="javascript:;">' + page + '</a></li>');
                        } else {
                            pageUl.append('<li><a href="javascript:;">' + i + '</a></li>');
                        }
                    }
                }else {
                    for (var i = parseInt(page)-3; i <= parseInt(page)+3; i++) {
                        if (i == page) {
                            pageUl.append('<li class="active"><a href="javascript:;">' + page + '</a></li>');
                        } else {
                            pageUl.append('<li><a href="javascript:;">' + i + '</a></li>');
                        }
                    }
                }
            }else{
                for (var i =1; i <=7; i++) {
                    if (i == page) {
                        pageUl.append('<li class="active"><a href="javascript:;">' + page + '</a></li>');
                    } else {
                        pageUl.append('<li><a href="javascript:;">' + i + '</a></li>');
                    }
                }
            }

        }
        pageUl.append('<li class="next"><a href="javascript:;">>></a></li> <li class="end"><a href="javascript:;">尾页</a></li>');
        if(page==total){
            pageUl.find("li.end").addClass("active");
            pageUl.find("li.next").addClass("disabled");
        }else if(page!=1){
            pageUl.find("li.end").removeClass("active");
            pageUl.find("li.next").removeClass("disabled");
            pageUl.find("li.start").removeClass("active");
            pageUl.find("li.prev").removeClass("disabled");
        }
    }

    $("body").on("click",".news-main-page ul li",function(){
        var li=$(this);
        if(li.attr("class")=="start"){
            appendHtml(1);
        }else if(li.attr("class")=="end"){
            appendHtml(total)
        }else if(li.hasClass("prev")){
            if(li.hasClass("disabled")){
                return;
            }
            var pageNum=$(".news-main-page ul li.active").not(".start").not(".end").find("a").html();
            page=parseInt(pageNum)-1;
            appendHtml(page);
        }else if(li.hasClass("next")){
            if(li.hasClass("disabled")){
                return;
            }
            var pageNum=$(".news-main-page ul li.active").not(".start").not(".end").find("a").html();
            page=parseInt(pageNum)+1;
            appendHtml(page);
        }else{
            var pageNum=li.find("a").html();
            page=parseInt(pageNum);
            appendHtml(page);
        }

    });
})
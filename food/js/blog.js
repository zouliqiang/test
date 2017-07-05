$(function(){
    var page=1;
    appendHtml(page);
    function appendHtml(page){
        $.ajax({
            type : "GET",  //提交方式
            url : host+"food/blog",//路径
            data : {page:page},//参数数据，这里使用的是Json格式进行传输
            success : function(result) {//返回数据根据结果进行相应的处理
                if(result.code==0){
                    var data=result.data;
                    var blogList=data.blogList;//博客列表
                    var blogListUl=$(".block ul");
                    for(var i=0;i<blogList.length;i++){
                        blogListUl.append(
                        '<li>'+
                        '<div class="blog-img img-left">'+
                        '<img src="'+blogList[i].image+'" alt=""/>'+
                        ' </div>'+
                        ' <div class="content-right">'+
                        ' <h3>'+
                        blogList[i].name+
                        '</h3>'+
                        '<p>'+
                        blogList[i].introduce+
                        '</p>'+
                        '</div>'+
                        '</li>'
                        );
                    }
                }
            }
        });

    }


    $("#more-info").on("click",function(){
        page=parseInt(page)+1;
        appendHtml(page);
    });
})
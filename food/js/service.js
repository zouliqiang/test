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
        url : host+"food/service",//路径
        data : {},//参数数据，这里使用的是Json格式进行传输
        success : function(result) {//返回数据根据结果进行相应的处理
            if(result.code==0){
                var data=result.data;
                var lunch=data.lunch;//丰盛午餐
                var dish=data.dish;//菜肴
                var year=data.year;//经营年限
                var buffet=data.buffet;//自助餐
                var dinner=data.dinner;//健康晚餐
                var cabinet=data.cabinet;//优雅内阁
                var Favorable=data.Favorable;//好评率
                var party=data.party;//团体聚会餐
                var praise=data.praise;//赞
                var breakfast=data.breakfast;//营养早餐


                $("#service-main-img-write .img-write p").eq(0).html(breakfast);
                $("#service-main-img-write .img-write p").eq(1).html(lunch);
                $("#service-main-img-write .img-write p").eq(2).html(dinner);
                $("#bprGroup .bpr-commen p").eq(0).html(buffet);
                $("#bprGroup .bpr-commen p").eq(1).html(party);
                $("#bprGroup .bpr-commen p").eq(2).html(cabinet);

               /* $(".main-box-row .grid-box h5").eq(0).html(dish);
                $(".main-box-row .grid-box h5").eq(1).html(praise);
                $(".main-box-row .grid-box h5").eq(2).html(year);
                $(".main-box-row .grid-box h5").eq(3).html(Favorable);*/
                var fa= Favorable.substring(0,Favorable.length-1);
                $(".main-box-row .grid-box h5").eq(0).numberRock({
                    speed:50,
                    count:dish
                })
                $(".main-box-row .grid-box h5").eq(1).numberRock({
                    speed:150,
                    count:praise
                })
                $(".main-box-row .grid-box h5").eq(2).numberRock({
                    speed:150,
                    count:year
                })
                $(".main-box-row .grid-box h5").eq(3).numberRock({
                    speed:100,
                    count:fa
                })


            }
        }
    });




})
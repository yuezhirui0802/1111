$(document).ready(function () {
    var vote={
        indexInit:function () {
            var that=this;
            this.getIndexUserList("/vote/index/data?limit=10&offset=0","GET","json",function (data) {
                var lists = data.data.objects;
                var str=that.getData(lists);
                $('.coming').html(str);
            });

        },
        getData:function (lists) {
            var str = '',
                iii;
            if(iii<10){
                for (var i = 0; i < lists.length; i++) {
                    str += '<li>'
                        + '<div class="head">'
                        + '<a href="detail.html">'
                        + '<img src="'+lists[i].head_icon+'" alt="">'
                        + '</a>'
                        + ' </div>'
                        + ' <div class="up">'
                        + '<div class="vote">'
                        + ' <span>'+lists[i].vote+'票</span>'
                        + '</div>'
                        + '<div class="btn">'
                        + '投TA一票'
                        + '</div>'
                        + '</div>'
                        + '<div class="descr">'
                        + '<a href="detail.html">'
                        + '<div>'
                        + '<span>'+lists[i].username+'</span>'
                        + '<span>|</span>'
                        + '<span>编号#'+lists[i].id+'</span>'
                        + '</div>'
                        + '<p>'+lists[i].description+'</p>'
                        + '</a>'
                        + '</div>'
                        + '</li>'
                }
            /*延时是为了更好的演示效果*/
            setTimeout(function(){
                $('.coming').append(str);
                load.reset();
            }, 1000)
            }else {

                load.complete();
                /*延时是为了更好的演示效果*/
                setTimeout(function () {
                    load.reset();
                }, 1000);
            }

            return str;
        },
        getIndexUserList:function(url,method,dataType,fn) {
            $.ajax({
                url:url,
                method:method,
                dataType:dataType,
                success:fn
            })
        }
    };
    var url=window.location.href,
        indexReg=/index/,
        registerReg=/register/;
    if(indexReg.test(url)){
        vote.indexInit();
    }else if(registerReg.test(url)){

    }

});

let httpJsonp=function(type,url,that){
   $.ajax({
                    type:type,
                    url:url,
                    dataType:"jsonp", //返回格式
                    jsonp: "cd",  //不可该
                    jsonpCallback:"callback",
                    success: function (data) {
                        console.log(this);
                        that.arrayData=data.s;
                        console.log(that.arrayData);
                    },
                    error: function () {

                    }
                });
}

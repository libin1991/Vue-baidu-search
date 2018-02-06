 window.onload=(()=>{
        var vm=new Vue({
        el:"#app",
        data(){
            return {
                input1:"",
                input2:"触发了",
                show1:false,
                arrayData:[],
                isflag:false,
                showflag:-1,
                shownum1:1,
                shownum2:2
            }
        },
        methods:{
            tiao(index){
               window.location.href="https://www.baidu.com/s?ie=utf-8&wd="+index;
            },
            EnTer(){
                 if(this.shownum1>this.shownum2){
                      window.location.href="https://www.baidu.com/s?ie=utf-8&wd="+this.input2;
                  }else{
                    window.location.href="https://www.baidu.com/s?ie=utf-8&f=8&wd="+this.input1;
                  }

            },
            overallsituation(){
                alert(1);
            },
            keyboard(event){
                /* 判断键盘 */
                if(event.keyCode==38){
                    this.shownum2=1;
                    this.shownum1=2;
                    this.showflag--;
                    this.isflag=true;
                    if(this.showflag<0){
                        this.showflag=0;
                    }
                    this.input2=this.arrayData[this.showflag];
                }else if(event.keyCode==40){
                       this.shownum2=1;
                    this.shownum1=2;
                    this.showflag++;
                    if(this.showflag>(this.arrayData.length-1)){
                        this.showflag=this.arrayData.length-1;
                    }
                    this.isflag=true;
                    this.input2=this.arrayData[this.showflag];
                }
            },
            search(){
                if(this.shownum1>this.shownum2){
                      window.location.href="https://www.baidu.com/s?ie=utf-8&mod=1&wd="+this.input2;
                  }else{
                    window.location.href="https://www.baidu.com/s?ie=utf-8&wd="+this.input1;
                  }
            },
            enter1(){
                alert("你按了回车");
            }
        },
        watch:{
            //检测
            input1(){
                this.show1=true;
                var that=this;
                if(this.input1==""){
                    this.show1=false;
                }
                /* 此处跨域请求百度接口 ajax+jsonp */
               httpJsonp("get","https://gsp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=callback&wd="+this.input1,that)
            }
        }

     });
    document.getElementById("wrap").addEventListener("click",()=>{
            vm.show1=false;
    },false)
    })
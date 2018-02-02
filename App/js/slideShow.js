
Vue.component('slide',{
    template:"#slide",
    props:["message"],
    data:function () {
        return {
            timer:null,
            num:0,
            name:"component",
            time:2000,
            src:["../App/images/banner1.jpg","../App/images/banner2.jpg","../App/images/banner4.jpg","../App/images/banner5.jpg","../App/images/banner7.jpg"],
            sort:[1,2,3,4,5],
            left:'<',
            right:'>'
        }
    },
    computed:{
        autoplay1:function () {
            let that = this;
            this.timer = setInterval(function () {
                that.event();
            },this.time)
        }
    },
    methods:{
        change:function ($index) {
            let oLis = document.querySelectorAll('.olist>li');
            let imgs= document.querySelectorAll('.list>li');

            [...oLis].map((item,index) => {
                if(index == $index){
                    item.className = 'active';
                    imgs[index].style.display = 'block';
                    this.num = index;
                }else{
                    item.className = '';
                    imgs[index].style.display = 'none';
                }
            })
        },
        event:function () {
            let oLis = document.querySelectorAll('.olist>li');
            this.num++;
            if(this.num>oLis.length-1){
                this.num = 0;
            }
            this.change(this.num);
        },
        prev:function () {
            let oLis = document.querySelectorAll('.olist>li');
            let imgs= document.querySelectorAll('.list>li');
            this.num--;
            if(this.num < 0 ){
                this.num = oLis.length-1;
            }
           this.change(this.num);
        },
        next:function(){
            this.event();
        },
        stop1:function () {
            let left = document.querySelector('#left');
            let right = document.querySelector('#right');
            left.style.display = 'block';
            right.style.display = 'block';
        },
        show:function () {
            let left = document.querySelector('#left');
            let right = document.querySelector('#right');
            left.style.display = 'none';
            right.style.display = 'none';
        }
    }
});

new Vue({
    el:"#app",
    data:{
        style1:"轮播图"
    }
});
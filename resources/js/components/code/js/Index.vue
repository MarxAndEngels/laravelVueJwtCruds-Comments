<template lang="">
    <div class='mt-5'>
        <h1>Алгоритмические задачки</h1>
        <h5>Когда чем-то новым занимаешься, из головы начинают стираться старые вещи, так что эта страничка может помочь вспомнить:</h5>
        <router-link :to="{ name: 'code.js.index' }" > <img class='icon_select active' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" alt=""></router-link> 
       <router-link :to="{ name: 'code.php.index' }" > <img class='icon_select' src="https://avatars.mds.yandex.net/i?id=bf67c2bdef8211ceacb82980e77819e7-5879784-images-thumbs&n=13&exp=1" alt=""></router-link> 
        <div v-if='codeObj' class='row'>
            <div v-for='(el,index) in codeObj' :key='index' class="col-lg-12 code">
     <div class='code__qusetion'>
     <div class='code__text mb-2 mt-2'>
               {{ el.question }}
          </div>
          <button class='btn btn-success' :class="{'btn-danger':numberComponent == el.id}" @click='show(el.id, $event)'> {{ numberComponent == el.id ? 'Ой, закрой меня, тут вынос мозга 🤯': 'Открыть решение' }}</button>
                 </div>  
                   <transition name='fade'>        
    <code-highlight language="javascript" class='code__panel' v-if='numberComponent == el.id'>
      {{ el.answer }}
      <br>  
        <br>  
        <br>  
    </code-highlight>
                  </transition>
    </div>
         
    </div>
  
    </div>
</template>
<script>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";
import dataCode from './data1.js';
 
export default {
    name:'Index',
      components: {
    CodeHighlight
  },
  mounted() {
    let obj = dataCode.filter((el,k)=>{return k <= this.paginate });
    this.codeObj = obj;
    this.scrollMain();
  },
    data(){
        return{
            stateCode:false,
            codeObj: null,
            numberComponent: null,
            paginate:4
        }
    },
    methods:{
     show(id,e){
         if(this.numberComponent == id){
             this.numberComponent = 0;
             return 0;
         }
         this.numberComponent = id;
     },
     paginateButt(){
       if(Object.keys(dataCode).length < this.paginate){
           this.paginate = Object.keys(dataCode).length;
       }
         this.paginate+=4;
   let obj = dataCode.filter((el,k)=>{return k <= this.paginate });
    this.codeObj = obj;
     },
                     scrollMain(){
         onscroll = ()=>{ var scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
   );
   if(window.scrollY+1 >= scrollHeight - innerHeight) {
         this.paginateButt();
      };}

        }
    }
}
</script>
<style>
.code{
    height: 100%;
    overflow: auto;
    margin-bottom: 16px;
}
code.language-javascript{
    font-size: 20px !important;
    padding-bottom: 60px;
}
.code__panel{
     font-size: 20px !important;
}
.fade-enter-active, .fade-leave-active{
   opacity: 1;
    transition-duration: 0.6s;
}
.fade-enter ,.fade-leave-to{
    opacity: 0;
}
.code__qusetion{
    font-size: 18px;
    background: #1d262f;
    border-radius: 12px;
    padding:15px 26px;
    color: snow;
}

code.language-css, code.language-scss, .token.boolean, .token.string, .token.entity, .token.url, .language-css .token.string, .language-scss .token.string, .style .token.string, .token.attr-value, .token.keyword, .token.control, .token.directive, .token.unit, .token.statement, .token.regex, .token.atrule {
    color: #d8f1e9 !important;
}
code.language-javascript, .token.attr-name {
    color: #dd4a68 !important;
}
.token.property, .token.function {
    color: #708090 !important;
}
.icon_select{
    width:40px;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 16px;
}
.icon_select.active{
    border: 3px solid rgb(128, 199, 228);
    animation: opacity .5s ease-in-out;
    transition-duration: .5s;
}
@keyframes opacity{
 0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }

}

</style>
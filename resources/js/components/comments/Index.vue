<template lang="">
    <div>
       <div v-if='authPlease' style='color:red' class='mt-3'>Авторизуйтесь 
          <router-link :to="{ name: 'user.login' }" ><i class="fa fa-sign-in" aria-hidden="true"></i> <span>Войти</span></router-link>
          </div>
        <div v-if='!authPlease' class="container mt-5">
          <!-- modal -->
         <Modal @UpdateComm='SendUpdate'>  
           <p>{{ dataModalText }}</p>
             <label for="exampleFormControlTextarea1" class="form-label">Ваш текст</label>
  <textarea v-model='dataModalText' class="form-control" id="exampleFormControlTextarea1" rows="5">{{ dataModalText }}</textarea> 
  </Modal>
          <!-- modal -->
          <h2>Оставить ваш комментарий</h2>
          <div class="form-group">
    <label for="exampleFormControlTextarea1">Ваше сообщение</label>
    <textarea v-model='textar' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
        <button class='btn btn-primary mt-3' @click='sendComment'>Отправить</button>
     <div class='mt-3' v-if='mesControl'>
        <h3 style='color:red'>Сообщение должно быть более 5 символов</h3>
    </div>
     <div class='mt-3' v-if='mesControlAccept'>
        <h3 style='color:green'>Сообщение отправленно</h3>
    </div>
    <h3 class='mt-5'>Сообщения:</h3>
     <Loader v-if='!comments'/>
       <div v-if='comments' class='mt-1'>
         <div v-for='comment of comments' :key='comment.id'>
           <div class='main-cont-comment'>
           <div v-if='comment.user.status === 1' class='del' @click="deleteCommenMain(comment.id)"><i class="fa fa-trash-o" aria-hidden="true"></i></div>
           <div v-if='comment.user.status === 1' class='red' @click="updateComment(comment.content, comment.id, comment.user_id , 'comment')" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-pencil" aria-hidden="true"></i></div>
           <div class='text-comment'><i class="fa fa-user-circle-o" aria-hidden="true"></i> {{ comment.user.name }}</div>
           <div class='content-text'></i> {{ comment.content }}</div>
           <div class='requst' @click="sendAnswComment(comment.id)"><i class="fa fa-hand-paper-o" aria-hidden="true"></i> Ответить</div>

            <div class='p-3' v-if='openAnsw === comment.id'>
                <div class="form-group">
            <label for="exampleFormControlTextarea1">Ваше сообщение</label>
        <textarea v-model='textAnswer' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        <button class='btn btn-primary mt-3' @click='sendCommentAnswer(comment.id)'>Отправить</button>
           </div>
           
 

  </div>
          <br>
            <h6>Ответы: {{ comment.comments_answ.length }}</h6> 
            <h6 @click='checkBlock' v-if='comment.comments_answ.length' class='message_answers'>Показать ответы ++</h6>
             <div data-countp='0' class='blockPagin'>
              <div style='padding-left:20px; display:none' v-for='el of comment.comments_answ' :key='el.id'>
                     <div class='main-cont-comment mt-1'>
            <div v-if='el.user.status === 1' class='del' @click="deleteComment(el.id)"><i class="fa fa-trash-o" aria-hidden="true"></i></div>
           <div v-if='el.user.status === 1' class='red' @click="updateCommentAnsw(el.content, el.id, el.user_id , 'answer')" data-bs-toggle="modal" data-bs-target="#exampleModal"><i  class="fa fa-pencil" aria-hidden="true"></i></div>
           <div class='text-comment'><i class="fa fa-user-circle-o" aria-hidden="true"></i> {{ el.user.name }}</div>
           <div class='content-text'></i> {{ el.content }}</div>
           <div class='requst' @click="sendAnswComment(comment.id)"><i class="fa fa-hand-paper-o" aria-hidden="true"></i> Ответить</div>

               </div>

           </div>
           </div>
            <br>
            <br>

         </div>
    </div>

    <button @click='moreComment' class='btn btn-primary'>Показать еще комментарии</button>
    </div>
     <div style='height:200px'></div>
    </div>
</template>
<script>
import api from '../../api';

import Modal from './Modal.vue';
import Loader from '../something/Loader';

export default {
     name:'Index',
     components:{
          Modal ,Loader
     },
     data(){
        return{
          textar: null,
          mesControl:false,
          mesControlAccept:false,
          comments:null,
          openAnsw:null,
          authPlease:false,
          textAnswer:null,
          countPage:2,
          dataModal: {},
          dataModalText: null,
        }
    },
    mounted(){
     this.getComments(this.countPage);
    },
    methods:{
         getComments(count){
         api.get('/api/auth/comments/'+count).then(res=>{
          this.comments = res.data.data;

         }).catch(err=>{
              this.authPlease = true;  
           })
         },
         sendComment(){
             if(this.textar.length<= 5){
                 this.mesControl=true
                  this.mesControlAccept = false
               return 0;
             }
              this.mesControl=false
              api.post('/api/auth/comments',{content: this.textar}).then(res=>{
 
               if(res.data.status == 'success'){
                    this.mesControlAccept = true
               }
                this.getComments(this.countPage);
         }).catch(err=>{
                
           })
         },
         sendAnswComment(id){
            this.openAnsw = id
         },
         checkBlock(e){
            let param = e.target.nextElementSibling;
             let countPag = param.dataset.countp;
             countPag++;
             param.dataset.countp = countPag;
            let all = param.children.length;

            if(param.dataset.countp > all){
              return 0;
            }
            for(let i=0; i<countPag; i++){
              param.children[i].style.display = 'block';
            }
         },
         sendCommentAnswer(id){
           if(this.textAnswer.length<= 5){
               this.mesControl=true
                  this.mesControlAccept = false
             return 0;
           }
            api.post('/api/auth/comments/answers',{comment_id: id,content: this.textAnswer}).then(res=>{
             if(res.data.status == 'success'){
                    this.mesControl=false;
                    this.mesControlAccept = true;
               }
                this.getComments(this.countPage);
                this.textAnswer = ''
             }).catch(err=>{
                
             })
         },
         moreComment(){
           this.countPage+=2;
            this.getComments(this.countPage);
         },
         updateComment(text, id,userid, type){
           this.dataModalText = text;
           this.dataModal.id = id;
           this.dataModal.userid = userid;
           this.dataModal.type = type;
         },
         updateCommentAnsw(text, id,userid, type){
           this.dataModalText = text;
           this.dataModal.id = id;
           this.dataModal.userid = userid;
           this.dataModal.type = type;
         },
         SendUpdate(){
             if(this.dataModal.type==='comment'){
                api.patch('/api/auth/comments/'+this.dataModal.id,{user: this.dataModal.userid, content: this.dataModalText}).then(res=>{
                this.getComments(this.countPage);
             })
             }
             if(this.dataModal.type==='answer'){
                api.patch('/api/auth/comments/answers/'+this.dataModal.id,{user: this.dataModal.userid, content: this.dataModalText}).then(res=>{
                this.getComments(this.countPage);
             })
             }
         },
         deleteComment(id){
           api.delete('/api/auth/comments/answers/'+id).then(res=>{
                this.getComments(this.countPage);
             })
         },
         deleteCommenMain(id){
           api.delete('/api/auth/comments/'+id).then(res=>{
                this.getComments(this.countPage);
             })
         }
    }
}
</script>
<style scoped>
      .container{
        max-width: 720px;
    }
    .main-cont-comment{
      position: relative;
        margin-top:30px;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
       transition-duration: .2s;
       padding: 6px 2px;
       border-radius: 0 0 15px 0px;
    }
    .text-comment{
      font-size: 16px;
    }
    .content-text{
      padding: 5px 20px;
    }
    .del{
      cursor: pointer;
      position: absolute;
      top:8px;
      right: 8px;
        color:rgb(204, 42, 42);
    }
    .red{
          cursor: pointer;
      position: absolute;
      top:8px;
      right: 28px;
      color:rgb(29, 98, 29);
    }
    .requst{
      cursor:pointer;
      padding: 2px 20px;
      color: #0d6efd;
    }

     .message_answers{
       cursor: pointer;
       color: rgb(191, 111, 206);
      }
</style>
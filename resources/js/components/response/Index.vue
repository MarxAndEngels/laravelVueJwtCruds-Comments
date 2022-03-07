<template lang="">
    <div>
        <div class="container">
        <h1 class='mt-4'>Обратная связь</h1>

        <h2 v-if='success' style='color:green' class='mt-3'>Ваше сообщение успешно отправленно!</h2>
        <div v-if='authPlease' style='color:red' class='mt-3'>Авторизуйтесь 
          <router-link :to="{ name: 'user.login' }" ><i class="fa fa-sign-in" aria-hidden="true"></i> <span>Войти</span></router-link>
          </div>
   <!-- ошибки -->
          <p v-if="errors.length">
    <ul>
      <li class='error' v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
   <!-- ошибки -->

   <Loader v-if='stateLoadong'></Loader>
   <div v-if='!success'>
     <div class="form-group mb-3 mt-2">
    <label for="exampleFormControlInput1">Ваша почта</label>
    <input type="email" v-model='email' class="form-control" id="exampleFormControlInput1" placeholder="email">
  </div>
     <div class="form-group mb-3">
    <label >Ваша телефон</label> <br>
 <vue-tel-input v-model="valv"></vue-tel-input>
<div style='margin-top:18px'> Исходные данные телефона: {{ valv }}</div>
  </div>

<div class="mb-3">
  <label for="exampleFormControlInput3" class="form-label">Ваше сообщение</label>
   <textarea style='padding:15px' v-model='textar' class="form-control" id="exampleFormControlTextarea3" rows="6"></textarea>
</div>

<button @click.prevent='sendMess' class='btn btn-success'>Отправить сообщение</button>
  </div>
  </div>

  </div>
</template>
<script>
import api from '../../api';

import { VueTelInput } from 'vue-tel-input';

import Loader from '../something/Loader.vue';
export default {
    name: 'Index',
       components: {
      VueTelInput,
      Loader,
    },
    data(){
        return{
            email:null,
             valv:null,
             errors:[],
             textar:null,
             success:false,
             authPlease: false,
             stateLoadong: false,
        }
    },
    mounted(){
   
    },
    methods:{
       sendMess(){
           this.errors = [];
          if (!this.email) {
        this.errors.push('Заполните вашу почту');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Введите корректную почту');
      }
         let countText= this.textar.length 
          if(countText <= 14){
             this.errors.push('Текст должен содержать хотя бы 14 символов'); 
          }

         if (!this.errors.length) {
            this.stateLoadong = true;

           api.post('/api/auth/response',{email:this.email,valv:this.valv, textar: this.textar}).then(res=>{
            if(res.data.status == 'success'){
                 this.success = true;

                 this.stateLoadong = false;
            };
           }).catch(err=>{
              this.authPlease = true
           })
        }

       },

        validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    }
}
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style scoped>
    .container{
        max-width: 720px;
    }
    .error{
        color: rgb(243, 70, 70);
    }

</style>
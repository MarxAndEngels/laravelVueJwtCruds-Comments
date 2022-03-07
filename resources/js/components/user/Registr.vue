<template lang="">
    <div class='container mt-5'>
          <h1>Регистрация</h1>
         <input v-model='name' type="name" class='form-control mb-3'  placeholder='name'>
        <input v-model='email' type="email" class='form-control mb-3' placeholder='email'>
        <input v-model='password' type="password" class='form-control mb-3' placeholder='password'>
        <input v-model='password_confirm' type="password" class='form-control mb-3' placeholder='confirm password'>
               <div v-if='error' class='text-danger'>{{ error }}</div>
        <input @click.prevent='store' type="submit" value='отправить' class='btn btn-primary'>
    </div>
</template>
<script>
import api from '../../api';
export default {
    name:'Registr',
    data(){
        return {
            name: null,
            email: null,
            password: null,
            password_confirm: null,
            error:null
        }
    },
    methods:{
      store(){
          axios.post('/api/user/', { name:this.name,  email:this.email,  password:this.password , password_confirm:this.password_confirm, role:0 })
          .then(res=>{
                localStorage.setItem('access_token',res.data.access_token);
                document.location.reload();
                this.$router.push({name:'main.skills.index'});

          }).catch(error=>{
              console.log(error.response);
              this.error = error.response.data.error;
          });
      }
    }
}
</script>
<style lang="">
</style>
<template lang="">
    <div class='container mt-5'>
        <h1>Войти</h1>
        <input v-model='email' type="email" class='form-control mb-3' placeholder='email'>
        <input v-model='password' type="password" class='form-control mb-3' placeholder='password'>
        <div v-if='error' class='text-danger'>{{ error }}</div>
        <input @click.prevent='login' type="submit" value='отправить' class='btn btn-primary'>
          <div class='mt-3 registration_link'><router-link :to="{ name: 'user.registr' }" ><i class="fa fa-address-card-o" aria-hidden="true"></i> <span>Открыть страницу с регистрацией </span></router-link></div>
    </div>
</template>
<script>

export default {
    name:'Login',
    data(){
        return{
            email:null,
            password:null,
            error:null
        }
    },
    methods:{
        login(){
            axios.post('/api/auth/login', {email: this.email, password: this.password})
            .then(res=>{
                localStorage.setItem('access_token',res.data.access_token);
                this.$router.push({name:'main.skills.index'});
                 document.location.reload();
            } ).catch(error=>{
               this.error = error.response.data.error;
            } )
        }
        
    },
}
</script>
<style>
  .registration_link{
      text-align: end;
      transition-duration: 0.5s;
  }
  .registration_link:hover{
      margin-right: 6px;
  }
</style>
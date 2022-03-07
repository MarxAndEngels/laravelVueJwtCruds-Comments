<template lang="">
    <div>
        <Navbar :token=token @stateNavbar='stateNavbarFucn'></Navbar>
            <div class='wrap-content' :class='{active: stateNavbar}'>
                <div class="container">
        <!-- <router-link v-if='token' :to="{ name: 'fruits.index' }" >fruits</router-link>
        <router-link v-if='!token' :to="{ name: 'user.login' }" >login</router-link>
        <router-link v-if='!token' :to="{ name: 'user.registr' }" >registr</router-link>
        <router-link v-if='token' :to="{ name: 'user.personal' }" >personal</router-link> -->
                <!-- <a v-if='token' @click.prevent='logout' href="">Выйти</a> -->
                  <router-view></router-view>

                  
                   <Social/>
                  </div>
                  </div>
               

          
    </div>
</template>
<script>
import Navbar from './something/Navbar';
import Social from './something/Social';
import api from '../api';
export default {
    name: 'Index',
    components:{
        Navbar
    },
    data(){
        return{
            token: null,
            stateNavbar: true
        }
    },
    mounted(){
       this.getToken();
    },
    updated(){
       this.getToken();
    },
    methods:{
        getToken(){
          this.token = localStorage.getItem('access_token');
        },
        // logout(){
        //   api.post('/api/auth/logout').then(res=>{
        //       localStorage.removeItem('access_token');
        //        this.$router.push({name:'user.login'});
        //   });
        // },
        stateNavbarFucn(state){
             this.stateNavbar = state
        }
    }
}
</script>
<style scoped>
.wrap-content{
    position: absolute;
    left: 180px;
    width:calc(100% - 190px);
    height: 100vh;
    transition-duration: 0.5s;
}
.wrap-content.active{
    left: 80px;
    width:calc(100% - 80px);
}
    
</style>
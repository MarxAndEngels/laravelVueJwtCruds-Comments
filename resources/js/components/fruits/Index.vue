<template lang="">
    <div>
      fdsfds
     <!-- <table class="table" v-if='fruits'>
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="fruit of fruits">
      <td scope="row">{{ fruit.id }}</td>
      <td>{{ fruit.name }}</td>
      <td>{{ fruit.price }}</td>
    </tr>
  </tbody>
</table> -->
<p v-if='errorMes'>{{ errorMes }}</p>

    </div>
</template>
<script>
import api from '../../api';

export default {
    name:'Index',
    data(){
        return{
            fruits:null,
            errorMes:null
        }
    },
    mounted(){
      //  this.getFruits();
    },
    methods:{
        // getFruits(){
        //    api.get('/api/auth/fruits').then(res=>{
        //      console.log(res);
        //     this.fruits = res.data;
        //    }).catch(err=>{
        //          this.errorMes = 'У вас нет прав администратора';
        //    })
        // }
    }
}
</script>
<style lang="">
    
</style>
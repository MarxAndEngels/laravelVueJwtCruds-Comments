<template lang="">
    <div>
        <div v-if='admin' class='container mt-5'>
            <h1>Создание технологий</h1>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Название</label>
  <input type="text" v-model='name' class="form-control" id="exampleFormControlInput1">
</div>
        <div class="mb-3">
  <label for="exampleFormControlInput2" class="form-label">Загрузить файл</label><br>
  <input type="file" ref='image' @change='StoreImage' id="exampleFormControlInput2">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput3" class="form-label">Дополнительное описание</label>
   <textarea class="form-control" v-model='hidden_content' id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<label for="exampleFormControlInput4" class="form-label">Категория</label><br>
<select v-model='category_id' v-if='categories' class="form-select mb-3" aria-label="Default select example" id='exampleFormControlInput4'>
  <option v-for='category of categories' :value='category.id' :key='category.id' >{{ category.tittle }}</option>
</select>

<button @click.prevent='CreateSkill' class='btn btn-success'>Создать</button>
    </div>
    </div>
</template>
<script>
import api from '../../api';

export default {
    name:'Create',
    data(){
        return{
          name:null,
          image:null,
          hidden_content:'Ничего',
          admin:false,
          categories:null,
          category_id:null
        }
    },
    mounted(){
     this.statusAdmin();
     this.getCategories();
    },
    methods:{
        StoreImage(){
            // this.image = this.$refs.image.files[0];
        },

        CreateSkill(){
            let formData = new FormData();
            formData.append('image', this.$refs.image.files[0]);
            formData.append('name', this.name);
            formData.append('hidden_content', this.hidden_content);
            formData.append('category_id', this.category_id);
           api.post('/api/auth/skills', formData).then(res=>{
            console.log(res.data);
              this.$router.push({name: 'admin.index'})
           }).catch(err=>{
              console.log(err);
           })
        },

           statusAdmin(){
           api.get('/api/auth/fruits').then(res=>{
          if(res.data == '1'){
                  this.admin = true;
            }
           }).catch(err=>{
                this.admin = false
           })
        },
           getCategories(){
           api.get('/api/auth/categories').then(res=>{
               console.log(res.data)
               this.categories = res.data
           }).catch(err=>{
               
           })
        },
    }
}
</script>
<style scoped>
      .container{
        max-width: 720px;
    }
</style>
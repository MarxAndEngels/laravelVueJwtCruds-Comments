<template lang="">
    <div>
        <div v-if='admin && skill' class='container'>
            <h1 >Создание технологий</h1>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Название</label>
  <input type="text" v-model='name' class="form-control" id="exampleFormControlInput1">
</div>
        <div class="mb-3">
  <label class="form-label">Загрузить файл</label><br>
   <div v-if='statePict'>
   <h4>Ваш файл</h4>
  <img :src="image" width='90px' height='90px' alt="">
  </div>
  <br>
  <label @click='hiddePict'  for="exampleFormControlInput2"><br>
  <div class='btn btn-primary'>Выбрать другой</div><br>
  <input v-show='false' type="file" ref='image' @change='StoreImage' id="exampleFormControlInput2">
  </label>
  <br>
  
</div>

<div class="mb-3">
  <label for="exampleFormControlInput3" class="form-label">Дополнительное описание</label>
   <textarea class="form-control" v-model='hidden_content' id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<select v-model='category_id' v-if='categories' class="form-select mb-3" aria-label="Default select example">
  <option v-for='category of categories' :value='category.id' :key='category.id' >{{ category.tittle }}</option>
</select>

<button @click.prevent='UpdateSkill' class='btn btn-success'>Обновить</button>
    </div>
    </div>
</template>
<script>
import api from '../../api';

export default {
    name:'Update',
  data(){
        return{
          name:null,
          image:null,
          hidden_content:null,
          admin:false,
          categories:null,
          category_id:null,
          skill:null,
          statePict:true
        }
    },
    mounted(){
     this.statusAdmin();
     this.getCategories();
     this.getSkill();
    },
    methods:{
        StoreImage(){
            // this.image = this.$refs.image.files[0];
        },

        UpdateSkill(){
            let formData = new FormData();
            formData.append('image', this.$refs.image.files[0]);
            formData.append('name', this.name);
            formData.append('hidden_content', this.hidden_content);
            formData.append('category_id', this.category_id);
            formData.append('old_image', this.image);
            formData.append('_method', 'PATCH');
           api.post('/api/auth/skills/'+this.$route.params.id, formData).then(res=>{
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
               this.categories = res.data
           }).catch(err=>{
               
           })
        },
        getSkill(){
             api.get('/api/auth/skills/'+this.$route.params.id).then(res=>{
               this.skill =res.data;
               this.name = res.data.name;
               this.image = res.data.image;
               console.log(this.image);
               this.hidden_content= res.data.hidden_content;
               this.category_id= res.data.category_id;
           }).catch(err=>{
               
           })
        },
        hiddePict(){
        this.statePict= false
        }
    }
}
</script>
<style scoped>
      .container{
        max-width: 720px;
    }
</style>
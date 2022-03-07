import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const route = new VueRouter({
    mode:'history',
    routes: [
        {
            path: "/fruits", 
            component: ()=>{return import('./components/fruits/Index')},
            name: 'fruits.index'    
        },
        {
            path: "/user/login", 
            component: ()=>{return import('./components/user/Login')},
            name: 'user.login'    
        },
        {
            path: "/user/registraton", 
            component: ()=>{return import('./components/user/Registr')},
            name: 'user.registr'    
        },
        {
            path: "/user/personal", 
            component: ()=>{return import('./components/user/Personal')},
            name: 'user.personal'    
        },
        {
            path: "/admin", 
            component: ()=>{return import('./components/admin/Index')},
            name: 'admin.index'    
        },
        {
            path: "/admin/create", 
            component: ()=>{return import('./components/admin/Create')},
            name: 'admin.create'    
        },
        {
            path: "/admin/update/{id}", 
            component: ()=>{return import('./components/admin/Update')},
            name: 'admin.update'    
        },
        {
            path: "/", 
            component: ()=>{return import('./components/main/Skills')},
            name: 'main.skills.index'    
        },
        {
            path: "/response", 
            component: ()=>{return import('./components/response/Index')},
            name: 'response.index'    
        },
        {
            path: "/comments", 
            component: ()=>{return import('./components/comments/Index')},
            name: 'comments.index'    
        },
        {
            path: "/code/js", 
            component: ()=>{return import('./components/code/js/Index')},
            name: 'code.js.index'    
        },
        {
            path: "/code/php", 
            component: ()=>{return import('./components/code/php/Index')},
            name: 'code.php.index'    
        },
        {
            path: "/works", 
            component: ()=>{return import('./components/works/Index')},
            name: 'works.index'    
        },
        {
            path: "/about", 
            component: ()=>{return import('./components/about/Index')},
            name: 'about.index'    
        },
        // {
        //     path: "*", 
        //     component: ()=>{return import('./components/user/Personal')},
        //     name: '404'    //404 страницу можно сюда 
        // },
       ]
    
});

route.beforeEach( (to,from,next)=>{
    const accessToken = localStorage.getItem('access_token');
    if(!accessToken){
        if(to.name === 'user.login' || to.name === 'user.registr'){
            return next()
        }
        else{
            // return next({name: 'user.login'})
        }
    }
    if(to.name === 'user.login' || to.name === 'user.registr' && accessToken){
        return next({name: 'main.skills.index'})
    }
    //откуда переходили to.name from.name 
  next(); //обработка куда дальше идем
})

export default route;
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[271],{1852:(t,s,r)=>{r.d(s,{Z:()=>a});var n=r(3645),i=r.n(n)()((function(t){return t[1]}));i.push([t.id,".works__relative[data-v-4123e110]{position:relative}.works__img[data-v-4123e110]{flex-shrink:0}.works__img[data-v-4123e110],.works__options[data-v-4123e110]{border-radius:10px;height:100%;max-height:220px;width:100%}.works__options[data-v-4123e110]{background-color:rgba(0,0,0,.5);color:snow;font-size:18px;left:50%;opacity:0;padding-left:10px;padding-right:10px;padding-top:40px;position:absolute;text-align:center;top:70px;transform:translate(-50%,-50%);transition-duration:.8s}.works__options div span[data-v-4123e110]{font-size:15px}.works__relative:hover>.works__options[data-v-4123e110]{opacity:1;top:110px}button[data-v-4123e110]{margin:0 4px}",""]);const a=i},7271:(t,s,r)=>{r.r(s),r.d(s,{default:()=>l});const n={name:"Index",data:function(){return{standartWorks:null,works:[{href:"http://htmlbook.ru/html/a/target",img:"storage/works/dqewdqwqwd.png",title:"Интернет-магазин",description:"Работа со стандартной формы и подключением тестовой системы оплаты fondy",skills:{html:"danger",css:"primary",OpenCart:"info"}},{href:"http://u92002uo.beget.tech/products/index",img:"storage/works/dqewdqwqwd.png",title:"Интернет-магазин",description:"Работа с магазином на чистом Laravel, более простая версия, которая может быть",skills:{html:"danger",css:"primary",bootstrap:"info",Laravel:"primary"}},{href:"https://marxandengels.github.io/dr",img:"storage/works/вцйвй554цуцйу.png",title:"Сайт поздравление с др",description:"Работа с версткой и всевозможными возможностями js",skills:{html:"danger",css:"primary",js:"warning"}},{href:"https://marxandengels.github.io/dr/botsrt/",img:"storage/works/йуцауцауцацуауц.png",title:"Верстка макета",description:"Работа с bootstrap",skills:{html:"danger",css:"primary",bootstrap:"info"}},{href:"https://marxandengels.github.io/dr/braincloud/",img:"storage/works/куцауцацуа.png",title:"Верстка макета",description:"Работа с версткой, без методологии БЭМ. Сейчас, конечно, буду стараться придерживаться БЭМ",skills:{html:"danger",css:"primary",js:"warning"}},{href:"https://marxandengels.github.io/dr/web/",img:"storage/works/цйвайцуауца.png",title:"Верстка макета",description:"Работа с версткой, без методологии БЭМ. Сейчас, конечно, буду стараться придерживаться БЭМ",skills:{html:"danger",css:"primary"}}]}},mounted:function(){localStorage.setItem("works",JSON.stringify(this.works))},methods:{filterWorks:function(t){var s=localStorage.getItem("works");s=JSON.parse(s),this.works=s.filter((function(s){return s.skills.hasOwnProperty(t)}))},filterWorksAll:function(){var t=localStorage.getItem("works");t=JSON.parse(t),this.works=t}}};var i=r(3379),a=r.n(i),o=r(1852),e={insert:"head",singleton:!1};a()(o.Z,e);o.Z.locals;const l=(0,r(1900).Z)(n,(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",[r("h4",{staticClass:"mt-5"},[t._v("Чтоб выкладывать работы нужен хост и это грустно 😥")]),t._v(" "),r("button",{staticClass:"mb-5 btn btn-success",on:{click:function(s){return t.filterWorksAll()}}},[t._v("Все")]),t._v(" "),r("button",{staticClass:"mb-5 btn btn-primary",on:{click:function(s){return t.filterWorks("Laravel")}}},[t._v("Laravel")]),t._v(" "),r("button",{staticClass:"mb-5 btn btn-warning",on:{click:function(s){return t.filterWorks("js")}}},[t._v("JS")]),t._v(" "),r("button",{staticClass:"mb-5 btn btn-primary",on:{click:function(s){return t.filterWorks("bootstrap")}}},[t._v("Bootstrap")]),t._v(" "),r("button",{staticClass:"mb-5 btn btn-info",on:{click:function(s){return t.filterWorks("OpenCart")}}},[t._v("OpenCart")]),t._v(" "),r("button",{staticClass:"mb-5 btn btn-danger",on:{click:function(s){return t.filterWorks("html")}}},[t._v("HTML")]),t._v(" "),r("div",{staticClass:"row"},t._l(t.works,(function(s,n){return r("div",{key:n,staticClass:"col-lg-4"},[r("a",{attrs:{href:s.href,target:"_blank"}},[r("div",[r("div",{staticClass:"works__relative"},[r("img",{staticClass:"works__img mb-5",attrs:{src:s.img,alt:""}}),t._v(" "),r("div",{staticClass:"works__options"},[r("div",[r("p",[t._v(t._s(s.title))])]),t._v(" "),r("div",[r("p",[r("span",[t._v(t._s(s.description))])])]),t._v(" "),r("div",{staticClass:"d-flex justify-content-center"},t._l(s.skills,(function(s,n){return r("span",["primary"==s?r("button",{staticClass:"btn btn-primary"},[t._v(t._s(n))]):t._e(),t._v(" "),"success"==s?r("button",{staticClass:"btn btn-success"},[t._v(t._s(n))]):t._e(),t._v(" "),"danger"==s?r("button",{staticClass:"btn btn-danger"},[t._v(t._s(n))]):t._e(),t._v(" "),"warning"==s?r("button",{staticClass:"btn btn-warning"},[t._v(t._s(n))]):t._e(),t._v(" "),"info"==s?r("button",{staticClass:"btn btn-info"},[t._v(t._s(n))]):t._e()])})),0)])])])])])})),0)])}),[],!1,null,"4123e110",null).exports}}]);
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_code_php_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/php/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/php/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_code_highlight_src_CodeHighlight_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-code-highlight/src/CodeHighlight.vue */ "./node_modules/vue-code-highlight/src/CodeHighlight.vue");
/* harmony import */ var vue_code_highlight_themes_duotone_sea_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-code-highlight/themes/duotone-sea.css */ "./node_modules/vue-code-highlight/themes/duotone-sea.css");
/* harmony import */ var vue_code_highlight_themes_window_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-code-highlight/themes/window.css */ "./node_modules/vue-code-highlight/themes/window.css");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.js */ "./resources/js/components/code/php/data.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Index',
  components: {
    CodeHighlight: vue_code_highlight_src_CodeHighlight_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    var obj = _data_js__WEBPACK_IMPORTED_MODULE_3__["default"].filter(function (el, k) {
      return k <= _this.paginate;
    });
    this.codeObj = obj;
    this.scrollMain();
  },
  data: function data() {
    return {
      stateCode: false,
      codeObj: null,
      numberComponent: null,
      paginate: 4
    };
  },
  methods: {
    show: function show(id, e) {
      if (this.numberComponent == id) {
        this.numberComponent = 0;
        return 0;
      }

      this.numberComponent = id;
    },
    paginateButt: function paginateButt() {
      var _this2 = this;

      if (Object.keys(_data_js__WEBPACK_IMPORTED_MODULE_3__["default"]).length < this.paginate) {
        this.paginate = Object.keys(_data_js__WEBPACK_IMPORTED_MODULE_3__["default"]).length;
      }

      this.paginate += 4;
      var obj = _data_js__WEBPACK_IMPORTED_MODULE_3__["default"].filter(function (el, k) {
        return k <= _this2.paginate;
      });
      this.codeObj = obj;
    },
    scrollMain: function scrollMain() {
      var _this3 = this;

      onscroll = function onscroll() {
        var scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);

        if (window.scrollY + 1 >= scrollHeight - innerHeight) {
          _this3.paginateButt();
        }

        ;
      };
    }
  }
});

/***/ }),

/***/ "./resources/js/components/code/php/data.js":
/*!**************************************************!*\
  !*** ./resources/js/components/code/php/data.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dataCode = [{
  'id': 1,
  'question': "\u041F\u043E\u0434\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0446\u0438\u0444\u0440 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435",
  'answer': "\n    function countNumbers($arr)\n    {\n      $result;\n      foreach($arr as $el){\n        if(isset($result[$el])){\n            $result[$el]++;\n        }else{\n            $result[$el] = 1;\n        }\n    }\n    return $result;\n    }\n    countNumbers([1,3,5,4,4,5,4,5]);"
}, {
  'id': 1,
  'question': "\u041D\u0430\u0439\u0442\u0438 \u0432\u0441\u0435 \u043F\u0440\u043E\u0441\u0442\u044B\u0435 \u0447\u0438\u0441\u043B\u0430",
  'answer': "\n         function divisors($integer) {\n            if($integer > 1){\n            $arr = [];\n            for($i=2; $i<$integer; $i++){\n              if($integer % $i == 0){\n              array_push($arr , $i);\n            }\n              }\n             }\n            return $arr;\n          }"
}, {
  'id': 2,
  'question': "\u041D\u0430\u0439\u0442\u0438 \u043B\u0438\u0448\u043D\u0435\u0435 \u0447\u0438\u0441\u043B\u043E. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 [1, 1, 2] \u0434\u043E\u043B\u0436\u043D\u043E \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E 2",
  'answer': "\n     function stray($arr)\n     {\n      $newarr;\n      foreach($arr as $el){\n          if(isset($newarr[$el])){\n              $newarr[$el]++;\n          }else{\n               $newarr[$el]=1;\n          }\n      }\n      foreach($newarr as $key=>$el){\n         if($el > 1){\n             unset($newarr[$key]);\n         }\n      }\n        foreach($newarr as $key=>$el){\n          return([$key]);\n       }\n     }\n     stray([1,1,2]);"
}, {
  'id': 3,
  'question': "\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u043D\u0430 \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435",
  'answer': "function invert( $arr)\n     {\n       for($i=0; $i< count($arr); $i++){\n           if($arr[$i] < 0){\n                $arr[$i] = (int) str_replace('-' ,'',$arr[$i]);\n           }else{\n               $arr[$i] = -$arr[$i];\n           }\n       }\n       var_dump($arr);\n     }\n     stray([-12,22,12]);"
}, {
  'id': 3,
  'question': "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043D\u0430 \u0438\u0437\u043E\u0433\u0440\u0430\u043C\u043C\u0443 - \u043D\u0430 \u0441\u043B\u043E\u0432\u043E \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u043D\u0435\u0442 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u0449\u0438\u0445\u0441\u044F \u0431\u0443\u043A\u0432",
  'answer': "function isIsogram($string) {\n        $arr =[];\n        $text = strtolower($string);\n        $text = str_split($text,1);\n        \n        foreach($text as $el){\n          if(isset($arr[$el])){\n            $arr[$el]++;\n          }else{\n            $arr[$el] = 1;\n          }\n        }\n        \n        foreach($arr as $key=>$el){\n          if($el > 1){\n            return false;\n          }\n        }\n        return true;\n      }"
}, {
  'id': 5,
  'question': "\u0417\u0430\u0434\u0430\u0447\u0430 \u043D\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u043E\u043A\u0438",
  'answer': "function strRepeat($str)\n     {\n         $str = str_split($str);\n         $newstr = '';\n         for($i=0;$i<count($str); $i++){\n             $newstr.= str_repeat($str[$i],$i+1).'-';\n         }\n         return $newstr;\n     \n     }\n     strRepeat('eqwsadasdwqd');"
}, {
  'id': 6,
  'question': "\u041F\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044F \u043C\u0430\u0441\u0441\u0438\u0432, \u043D\u0443\u0436\u043D\u043E \u0432\u0437\u044F\u0442\u044C \u0441\u0430\u043C\u044B\u0435 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0432 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u043E\u0433\u043E $size. \u0418 \u043F\u0435\u0440\u0435\u043C\u043D\u043E\u0436\u0438\u0442\u044C \u044D\u0442\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
  'answer': "    \n    function maxProduct($arr,$size)\n    {\n        $result=0;\n        rsort($arr);\n        \n        $result = array_splice($arr,0,$size);\n        $answer=1;\n        foreach($result as $el){\n            $answer*=$el;\n        }\n        echo $answer;\n    \n    }\n    maxProduct([1,3,5,4],3);"
}, {
  'id': 631,
  'question': "\u041D\u0430\u0439\u0442\u0438 \u0444\u0430\u043A\u0442\u043E\u0440\u0438\u0430\u043B \u0447\u0438\u0441\u043B\u0430",
  'answer': "    \n    function factorial(int $n): int {\n        if($n === 0 || $n === 1){\n          return 1;\n        }\n        return $n * factorial($n-1);\n      }"
}, {
  'id': 3631,
  'question': "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u0449\u0438\u0435\u0441\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u0430",
  'answer': "    \n    let arr = ['kate','Kate','Alex','Adsd',12,32,12];\n    let newarr =arr.map(el=>{\n        if(typeof el == 'string'){\n            return el.toLowerCase();\n        }\n        else{\n              return el;\n        }\n    })\n        newarr= newarr.filter((el,index)=>{\n        return index === newarr.indexOf(el);\n        //\u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0433\u0434\u0435 \u0438\u043D\u0434\u0435\u043A\u0441 === \u043F\u0435\u0440\u0432\u043E\u043C\u0443 \u043D\u0430\u0439\u0434\u0435\u043D\u043E\u043C\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0430\n         })\n         console.log(newarr);"
}, {
  'id': 7,
  'question': "\u041D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430. \u0427\u0438\u0441\u043B\u043E \u043D\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0441\u0442\u044B\u043C, \u0435\u0441\u043B\u0438 \u043E\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435 1 \u0438 \u0435\u0441\u043B\u0438 \u043E\u043D\u043E \u0434\u0435\u043B\u0438\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0430\u043C\u043E \u043D\u0430 \u0441\u0435\u0431\u044F \u0438 \u043D\u0430 1. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0447\u0438\u0441\u043B\u043E 5 - \u043F\u0440\u043E\u0441\u0442\u043E\u0435. \u0410 \u0447\u0438\u0441\u043B\u043E 6 - \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0441\u0442\u044B\u043C, \u0442.\u043A. \u0443 \u043D\u0435\u0433\u043E \u0435\u0441\u0442\u044C \u0435\u0449\u0435 \u0434\u0435\u043B\u0438\u0442\u0435\u043B\u0438 2 \u0438 3.",
  'answer': "    \n    function isPrime(num){\n        for(let i=2; i<num; i++){\n          if(num % i == 0){\n              return false\n          }\n          return true;\n        }\n       }\n       console.log(isPrime(12));\n       console.log(isPrime(11));"
}, {
  'id': 8,
  'question': "\u0420\u0435\u043A\u0443\u0440\u0441\u0438\u0432\u043D\u043E\u0435 \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0444\u0430\u043A\u0442\u043E\u0440\u0438\u0430\u043B\u0430",
  'answer': "    \n    function factorial(num){\n        if(num == 0 || num == 1){ //\u043F\u0440\u0438 0 \u0438 1 \u0444\u0430\u043A\u0442\u043E\u0440\u0438\u0430\u043B = 1\n            return 1;\n        }\n        return num * factorial(num-1)\n     }\n     console.log(factorial(5));"
}, {
  'id': 9,
  'question': "\u0414\u0430\u043D \u043D\u0435\u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0435\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u0446\u0438\u0444\u0440 \u043E\u0442 0 \u0434\u043E 9. \u0421\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0438\u0437 \u044D\u0442\u0438\u0445 \u0446\u0438\u0444\u0440 \u043D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0435\u0435 \u0447\u0438\u0441\u043B\u043E. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0438\u0437 32992435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0441\u044F 99543322",
  'answer': "    \n    function findMax(num){\n        let newarr = num.split('');\n        newarr.sort((a,b)=>{return b-a});\n        let result = newarr.join('');\n        console.log(result);\n    }\n    findMax('32992435');"
}, {
  'id': 923,
  'question': "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043D\u0430 \u0432\u0445\u043E\u0434 \u0434\u0432\u0430 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0441 \u0447\u0438\u0441\u043B\u0430\u043C\u0438. \u041D\u0430 \u0432\u044B\u0445\u043E\u0434\u0435 \u043C\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u0443\u0434\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u043B\u0438\u0441\u044C \u0432 \u043E\u0431\u043E\u0438\u0445 \u043C\u0430\u0441\u0441\u0438\u0432\u0430\u0445, \u0431\u0435\u0437 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u0449\u0438\u0445\u0441\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 ",
  'answer': "    \n    function findUnique(arr1,arr2){\n        let newarr =[];\n        for(let el of arr1){\n            if(arr2.includes(el)){\n                if(!newarr.includes(el)){\n                       newarr.push(el);\n                }\n            }\n        }\n        console.log(newarr);\n    }\n    findUnique([132,32,43,1234,32],[132,32,43132,231,1]);"
}, {
  'id': 92233,
  'question': "\u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0441 \u043D\u0435\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u044B\u043C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E\u043C \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432",
  'answer': "    \n    function getInt(...arrs){\n        let result = [];\n        arrel= arrs.shift();  //\u0432\u044B\u0440\u0435\u0437\u0430\u043B\u0438 1-\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432 [1, 2, 3]\n        for( let el of arrel){\n            if( InArray(el, arrs )){\n                result.push(el);\n            }\n        }\n        return result;\n     }\n     function InArray(el , arrs){\n         for(let arr of arrs){\n            if( inIndex(el, arr )){\n                return false;\n            }\n         }\n         return true;\n     }\n     function inIndex( el, arr){\n         return arr.indexOf(el) == -1;\n     }\n     \n     let result = getInt([1, 2, 3], [2, 3, 4], [4, 3, 2]);\n     console.log(result); // \u0432\u044B\u0432\u0435\u0434\u0435\u0442 [2, 3]\n     "
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataCode);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-code-highlight/themes/duotone-sea.css":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-code-highlight/themes/duotone-sea.css ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n  font-family: Hack, Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace;\n  font-size: 14px;\n  line-height: 1.375;\n  direction: ltr;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n\n  -webkit-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n  background: #1d262f;\n  color: #57718e;\n}\n\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n  text-shadow: none;\n  background: #004a9e;\n}\n\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection, code[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n  text-shadow: none;\n  background: #004a9e;\n}\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n  text-shadow: none;\n  background: #004a9e;\n}\n\npre[class*=\"language-\"] {\n  padding: 1em;\n  margin: .5em 0;\n  overflow: auto;\n}\n\n:not(pre) > code[class*=\"language-\"] {\n  padding: .1em;\n  border-radius: .3em;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #4a5f78;\n}\n\n.token.punctuation {\n  color: #4a5f78;\n}\n\n.token.namespace {\n  opacity: .7;\n}\n\n.token.tag,\n.token.operator,\n.token.number {\n  color: #0aa370;\n}\n\n.token.property,\n.token.function {\n  color: #708090 !important;\n}\n\n.token.tag-id,\n.token.selector,\n.token.atrule-id {\n  color: #ebf4ff;\n}\n\ncode.language-javascript,\n.token.attr-name {\n  color: #dd4a68 !important;\n}\n\ncode.language-css,\ncode.language-scss,\n.token.boolean,\n.token.string,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.language-scss .token.string,\n.style .token.string,\n.token.attr-value,\n.token.keyword,\n.token.control,\n.token.directive,\n.token.unit,\n.token.statement,\n.token.regex,\n.token.atrule {\n  color: #d8f1e9 !important;\n}\n\n.token.placeholder,\n.token.variable {\n  color: #47ebb4;\n}\n\n.token.deleted {\n  text-decoration: line-through;\n}\n\n.token.inserted {\n  border-bottom: 1px dotted #ebf4ff;\n  text-decoration: none;\n}\n\n.token.italic {\n  font-style: italic;\n}\n\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n\n.token.important {\n  color: #7eb6f6;\n}\n\n.token.entity {\n  cursor: help;\n}\n\npre > code.highlight {\n  outline: .4em solid #34659d;\n  outline-offset: .4em;\n}\n.line-numbers .line-numbers-rows {\n  border-right-color: #1f2932;\n}\n\n.line-numbers-rows > span:before {\n  color: #2c3847;\n}\n\n.line-highlight {\n  background: rgba(10, 163, 112, 0.2);\n  background: -webkit-gradient(linear, left top, right top, color-stop(70%, rgba(10, 163, 112, 0.2)), to(rgba(10, 163, 112, 0)));\n  background: linear-gradient(to right, rgba(10, 163, 112, 0.2) 70%, rgba(10, 163, 112, 0));\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-code-highlight/themes/window.css":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-code-highlight/themes/window.css ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div pre[class*=\"language-\"] {\n  display: inline-block;\n  width: 100%;\n  padding-right: 10em;\n  padding-top: 3rem;\n  border-radius: 6px;\n  background-image: url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"54\" height=\"14\" viewBox=\"0 0 54 14\"><g fill=\"none\" fillRule=\"evenodd\" transform=\"translate(1 1)\"><circle cx=\"6\" cy=\"6\" r=\"6\" fill=\"%23FF5F56\" stroke=\"%23E0443E\" strokeWidth=\".5\" /><circle cx=\"26\" cy=\"6\" r=\"6\" fill=\"%23FFBD2E\" stroke=\"%23DEA123\" strokeWidth=\".5\" /><circle cx=\"46\" cy=\"6\" r=\"6\" fill=\"%2327C93F\" stroke=\"%231AAB29\" strokeWidth=\".5\" /></g></svg>');\n  background-repeat: no-repeat;\n  background-position: 16px 16px;\n  -webkit-box-shadow: 5px 5px 15px 0px rgba(50, 50, 50, 0.75);\n          box-shadow: 5px 5px 15px 0px rgba(50, 50, 50, 0.75);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/php/Index.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/php/Index.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.code{\r\n    height: 100%;\r\n    overflow: auto;\r\n    margin-bottom: 16px;\n}\ncode.language-javascript{\r\n    font-size: 20px;\r\n    padding-bottom: 60px;\n}\n.fade-enter-active, .fade-leave-active{\r\n   opacity: 1;\r\n    transition-duration: 0.6s;\n}\n.fade-enter ,.fade-leave-to{\r\n    opacity: 0;\n}\n.code__qusetion{\r\n    font-size: 18px;\r\n    background: #1d262f;\r\n    border-radius: 12px;\r\n    padding:15px 26px;\r\n    color: snow;\n}\ncode.language-css, code.language-scss, .token.boolean, .token.string, .token.entity, .token.url, .language-css .token.string, .language-scss .token.string, .style .token.string, .token.attr-value, .token.keyword, .token.control, .token.directive, .token.unit, .token.statement, .token.regex, .token.atrule {\r\n    color: #d8f1e9;\n}\ncode.language-javascript, .token.attr-name {\r\n    color: #dd4a68;\n}\n.token.property, .token.function {\r\n    color: #708090;\n}\n.icon_select{\r\n    width:40px;\r\n    cursor: pointer;\r\n    margin-right: 10px;\r\n    margin-bottom: 16px;\n}\n.icon_select.active{\r\n    border: 3px solid rgb(128, 199, 228);\r\n    -webkit-animation: opacity .5s ease-in-out;\r\n            animation: opacity .5s ease-in-out;\r\n    transition-duration: .5s;\n}\n@-webkit-keyframes opacity{\n0% {\r\n    transform: scale(1);\n}\n50% {\r\n    transform: scale(1.3);\n}\n100% {\r\n    transform: scale(1);\n}\n}\n@keyframes opacity{\n0% {\r\n    transform: scale(1);\n}\n50% {\r\n    transform: scale(1.3);\n}\n100% {\r\n    transform: scale(1);\n}\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/prism-es6/prism.js":
/*!*****************************************!*\
  !*** ./node_modules/prism-es6/prism.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
/* eslint-disable */
/* **********************************************
     Begin prism-core.js
********************************************** */

let _self = {};

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

let Prism = (function () {
// Private helper vars
  let lang = /\blang(?:uage)?-([\w-]+)\b/i;
  let uniqueId = 0;

  var _ = _self.Prism = {
    manual: _self.Prism && _self.Prism.manual,
    disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
    util: {
      encode (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

      type (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

      objId (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

      // Deep clone a language definition (e.g. to extend it)
      clone (o, visited) {
			var type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					if (visited[_.util.objId(o)]) {
						return visited[_.util.objId(o)];
					}
					var clone = {};
					visited[_.util.objId(o)] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					if (visited[_.util.objId(o)]) {
						return visited[_.util.objId(o)];
					}
					var clone = [];
					visited[_.util.objId(o)] = clone;

					o.forEach(function (v, i) {
						clone[i] = _.util.clone(v, visited);
					});

					return clone;
			}

			return o;
		},
    },

    languages: {
      extend (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

      /**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
      insertBefore (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

      // Traverse a language definition with Depth First Search
      DFS(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		},
    },
    plugins: {},

    highlightAll(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

    highlightAllUnder(container, async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || container.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

    highlightElement(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		if (element.parentNode) {
			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		_.hooks.run('before-sanity-check', env);

		if (!env.code || !env.grammar) {
			if (env.code) {
				_.hooks.run('before-highlight', env);
				env.element.textContent = env.code;
				_.hooks.run('after-highlight', env);
			}
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				env.highlightedCode = evt.data;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(env.element);
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		}
	},

    highlight (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

    matchGrammar (text, strarr, grammar, index, startPos, oneshot, target) {
		var Token = _.Token;

		for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			if (token == target) {
				return;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					if (greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						var match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						// If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						if (strarr[i] instanceof Token) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						pattern.lastIndex = 0;

						var match = pattern.exec(str),
							delNum = 1;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1] ? match[1].length : 0;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token);

					if (oneshot)
						break;
				}
			}
		}
	},

    tokenize(text, grammar, language) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
	},

    hooks: {
      all: {},

      add (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

      run (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		},
    },
  };

  var Token = _.Token = function (type, content, alias, matchedStr, greedy) {
    this.type = type;
    this.content = content;
    this.alias = alias;
    // Copy of the full string this token was created from
    this.length = (matchedStr || '').length | 0;
    this.greedy = !!greedy;
  };

  Token.stringify = function (o, language, parent) {
    if (typeof o === 'string') {
      return o;
    }

    if (_.util.type(o) === 'Array') {
      return o.map((element) => {
			return Token.stringify(element, language, o);
		}).join('');
    }

    let env = {
      type: o.type,
      content: Token.stringify(o.content, language, parent),
      tag: 'span',
      classes: ['token', o.type],
      attributes: {},
      language,
      parent,
    };

    if (o.alias) {
      let aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
      Array.prototype.push.apply(env.classes, aliases);
    }

    _.hooks.run('wrap', env);

    let attributes = Object.keys(env.attributes).map((name) => {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

    return `<${  env.tag  } class="${  env.classes.join(' ')  }"${  attributes ? ' ' + attributes : ''  }>${  env.content  }</${  env.tag  }>`;
  };

  if (!_self.document) {
    if (!_self.addEventListener) {
      // in Node.js
      return _self.Prism;
    }

    if (!_.disableWorkerMessageHandler) {
      // In worker
      _self.addEventListener('message', (evt) => {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
    }

    return _self.Prism;
  }

  // Get current script and highlight
  // let script = document.currentScript || [].slice.call(document.getElementsByTagName('script')).pop();

  // if (script) {
  //   _.filename = script.src;

  //   if (!_.manual && !script.hasAttribute('data-manual')) {
  //     if (document.readyState !== 'loading') {
  //       if (window.requestAnimationFrame) {
  //         window.requestAnimationFrame(_.highlightAll);
  //       } else {
  //         window.setTimeout(_.highlightAll, 16);
  //       }
  //     } else {
  //       document.addEventListener('DOMContentLoaded', _.highlightAll);
  //     }
  //   }
  // }

  return _self.Prism;
}());

if ( true && module.exports) {
  module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof __webpack_require__.g !== 'undefined') {
  __webpack_require__.g.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
  comment: /<!--[\s\S]*?-->/,
  prolog: /<\?[\s\S]+?\?>/,
  doctype: /<!DOCTYPE[\s\S]+?>/i,
  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
    greedy: true,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/,
        },
      },
      'attr-value': {
        pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
        inside: {
          punctuation: [
            /^=/,
            {
              pattern: /(^|[^\\])["']/,
              lookbehind: true,
            },
          ],
        },
      },
      punctuation: /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/,
        },
      },

    },
  },
  entity: /&#?[\da-z]{1,8};/i,
};

Prism.languages.markup.tag.inside['attr-value'].inside.entity =	Prism.languages.markup.entity;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', (env) => {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

Prism.languages.css = {
  comment: /\/\*[\s\S]*?\*\//,
  atrule: {
    pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
    inside: {
      rule: /@[\w-]+/,
      // See rest below
    },
  },
  url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
  selector: /[^{}\s][^{};]*?(?=\s*\{)/,
  string: {
    pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true,
  },
  property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
  important: /\B!important\b/i,
  function: /[-a-z0-9]+(?=\()/i,
  punctuation: /[(){};:]/,
};

Prism.languages.css.atrule.inside.rest = Prism.languages.css;

if (Prism.languages.markup) {
  Prism.languages.insertBefore('markup', 'tag', {
    style: {
      pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
      lookbehind: true,
      inside: Prism.languages.css,
      alias: 'language-css',
      greedy: true,
    },
  });

  Prism.languages.insertBefore('inside', 'attr-value', {
    'style-attr': {
      pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
      inside: {
        'attr-name': {
          pattern: /^\s*style/i,
          inside: Prism.languages.markup.tag.inside,
        },
        punctuation: /^\s*=\s*['"]|['"]\s*$/,
        'attr-value': {
          pattern: /.+/i,
          inside: Prism.languages.css,
        },
      },
      alias: 'language-css',
    },
  }, Prism.languages.markup.tag);
}

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
  comment: [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: true,
    },
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true,
      greedy: true,
    },
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true,
  },
  'class-name': {
    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: true,
    inside: {
      punctuation: /[.\\]/,
    },
  },
  keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /[a-z0-9_]+(?=\()/i,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/,
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
  keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
  number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
  operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
});

Prism.languages.insertBefore('javascript', 'keyword', {
  regex: {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: true,
    greedy: true,
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
    alias: 'function',
  },
  constant: /\b[A-Z][A-Z\d_]*\b/,
});

Prism.languages.insertBefore('javascript', 'string', {
  'template-string': {
    pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
    greedy: true,
    inside: {
      interpolation: {
        pattern: /\${[^}]+}/,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\${|}$/,
            alias: 'punctuation',
          },
          rest: null, // See below
        },
      },
      string: /[\s\S]+/,
    },
  },
});
Prism.languages.javascript['template-string'].inside.interpolation.inside.rest = Prism.languages.javascript;

if (Prism.languages.markup) {
  Prism.languages.insertBefore('markup', 'tag', {
    script: {
      pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
      lookbehind: true,
      inside: Prism.languages.javascript,
      alias: 'language-javascript',
      greedy: true,
    },
  });
}

Prism.languages.js = Prism.languages.javascript;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prism);


/***/ }),

/***/ "./node_modules/vue-code-highlight/themes/duotone-sea.css":
/*!****************************************************************!*\
  !*** ./node_modules/vue-code-highlight/themes/duotone-sea.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_duotone_sea_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./duotone-sea.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-code-highlight/themes/duotone-sea.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_duotone_sea_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_duotone_sea_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-code-highlight/themes/window.css":
/*!***********************************************************!*\
  !*** ./node_modules/vue-code-highlight/themes/window.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_window_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./window.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-code-highlight/themes/window.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_window_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_window_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/php/Index.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/php/Index.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/php/Index.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-code-highlight/src/CodeHighlight.vue":
/*!***************************************************************!*\
  !*** ./node_modules/vue-code-highlight/src/CodeHighlight.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CodeHighlight_vue_vue_type_template_id_320fe4a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeHighlight.vue?vue&type=template&id=320fe4a2& */ "./node_modules/vue-code-highlight/src/CodeHighlight.vue?vue&type=template&id=320fe4a2&");
/* harmony import */ var _CodeHighlight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeHighlight.vue?vue&type=script&lang=js& */ "./node_modules/vue-code-highlight/src/CodeHighlight.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CodeHighlight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CodeHighlight_vue_vue_type_template_id_320fe4a2___WEBPACK_IMPORTED_MODULE_0__.render,
  _CodeHighlight_vue_vue_type_template_id_320fe4a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-code-highlight/src/CodeHighlight.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-code-highlight/src/CodeHighlight.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-code-highlight/src/CodeHighlight.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prism_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prism-es6 */ "./node_modules/prism-es6/prism.js");
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'code-highlight',
  props: {
    language: {
      type: String,
      default: 'javascript',
    },
  },
  computed: {
    languageClass() {
      return `language-${this.language}`;
    },
  },
  mounted() {
    prism_es6__WEBPACK_IMPORTED_MODULE_0__["default"].highlightAllUnder(this.$refs.codeBlock);
  },

  beforeUpdate() {
    if ( typeof this.$slots.default[0] === 'string' ) {
      const newText = this.$slots.default[0].replace(/^[\r\n\s]*|[\r\n\s]*$/g, '');
      this.$el.querySelector('code').textContent = newText;
      prism_es6__WEBPACK_IMPORTED_MODULE_0__["default"].highlightAllUnder(this.$refs.codeBlock);
    }
  },
});


/***/ }),

/***/ "./resources/js/components/code/php/Index.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/code/php/Index.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_7d8a8e44_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=7d8a8e44&lang=true& */ "./resources/js/components/code/php/Index.vue?vue&type=template&id=7d8a8e44&lang=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/code/php/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/code/php/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_7d8a8e44_lang_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_7d8a8e44_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/code/php/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/code/php/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/code/php/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/php/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/code/php/Index.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/code/php/Index.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/php/Index.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./node_modules/vue-code-highlight/src/CodeHighlight.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./node_modules/vue-code-highlight/src/CodeHighlight.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_CodeHighlight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/index.js??vue-loader-options!./CodeHighlight.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-code-highlight/src/CodeHighlight.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_CodeHighlight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-code-highlight/src/CodeHighlight.vue?vue&type=template&id=320fe4a2&":
/*!**********************************************************************************************!*\
  !*** ./node_modules/vue-code-highlight/src/CodeHighlight.vue?vue&type=template&id=320fe4a2& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_CodeHighlight_vue_vue_type_template_id_320fe4a2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_CodeHighlight_vue_vue_type_template_id_320fe4a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_CodeHighlight_vue_vue_type_template_id_320fe4a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../vue-loader/lib/index.js??vue-loader-options!./CodeHighlight.vue?vue&type=template&id=320fe4a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-code-highlight/src/CodeHighlight.vue?vue&type=template&id=320fe4a2&");


/***/ }),

/***/ "./resources/js/components/code/php/Index.vue?vue&type=template&id=7d8a8e44&lang=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/code/php/Index.vue?vue&type=template&id=7d8a8e44&lang=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7d8a8e44_lang_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7d8a8e44_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7d8a8e44_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=7d8a8e44&lang=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/php/Index.vue?vue&type=template&id=7d8a8e44&lang=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-code-highlight/src/CodeHighlight.vue?vue&type=template&id=320fe4a2&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-code-highlight/src/CodeHighlight.vue?vue&type=template&id=320fe4a2& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "codeBlock" }, [
    _c("pre", { class: _vm.languageClass }, [
      _c("code", [_vm._t("default")], 2),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/php/Index.vue?vue&type=template&id=7d8a8e44&lang=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/php/Index.vue?vue&type=template&id=7d8a8e44&lang=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "mt-5" },
    [
      _c("h1", [_vm._v("Алгоритмические задачки")]),
      _vm._v(" "),
      _c("h5", [
        _vm._v(
          "Когда чем-то новым занимаешься, из головы начинают стираться старые вещи, так что эта страничка может помочь вспомнить:"
        ),
      ]),
      _vm._v(" "),
      _c("router-link", { attrs: { to: { name: "code.js.index" } } }, [
        _c("img", {
          staticClass: "icon_select",
          attrs: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
            alt: "",
          },
        }),
      ]),
      _vm._v(" "),
      _c("router-link", { attrs: { to: { name: "code.php.index" } } }, [
        _c("img", {
          staticClass: "icon_select active",
          attrs: {
            src: "https://avatars.mds.yandex.net/i?id=bf67c2bdef8211ceacb82980e77819e7-5879784-images-thumbs&n=13&exp=1",
            alt: "",
          },
        }),
      ]),
      _vm._v(" "),
      _vm.codeObj
        ? _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.codeObj, function (el, index) {
              return _c(
                "div",
                { key: index, staticClass: "col-lg-12 code" },
                [
                  _c("div", { staticClass: "code__qusetion" }, [
                    _c("div", { staticClass: "code__text mb-2 mt-2" }, [
                      _vm._v(
                        "\n           " + _vm._s(el.question) + "\n      "
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        class: { "btn-danger": _vm.numberComponent == el.id },
                        on: {
                          click: function ($event) {
                            return _vm.show(el.id, $event)
                          },
                        },
                      },
                      [
                        _vm._v(
                          " " +
                            _vm._s(
                              _vm.numberComponent == el.id
                                ? "Ой, закрой меня, тут вынос мозга 🤯"
                                : "Открыть решение"
                            )
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "transition",
                    { attrs: { name: "fade" } },
                    [
                      _vm.numberComponent == el.id
                        ? _c(
                            "code-highlight",
                            {
                              staticClass: "code__panel",
                              attrs: { language: "javascript" },
                            },
                            [
                              _vm._v("\n  " + _vm._s(el.answer) + "\n  "),
                              _c("br"),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("br"),
                            ]
                          )
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              )
            }),
            0
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
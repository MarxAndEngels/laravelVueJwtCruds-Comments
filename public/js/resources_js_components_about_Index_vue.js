"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_about_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/about/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/about/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  data: function data() {
    return {
      text: 'Веб разработчик',
      outText: '',
      stick: '|',
      moneyFly: true,
      age: 0,
      information: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.textStart();
    }, 500);
    this.timeAge();
  },
  methods: {
    timeAge: function timeAge() {
      var _this2 = this;

      var date1 = new Date("2001/08/08 00:00:00");
      var date2 = new Date();
      var diff = (date2 - date1) / 1000;
      var diff = Math.abs(Math.floor(diff));
      var years = Math.floor(diff / (365 * 24 * 60 * 60));
      var ageInterval = setInterval(function () {
        _this2.age++;

        if (_this2.age == years) {
          clearInterval(ageInterval);
        }
      }, 50);
    },
    textStart: function textStart() {
      var _this3 = this;

      var i = 0;
      var timer = setInterval(function () {
        _this3.outText += _this3.text[i];
        i++;

        if (i == _this3.text.length) {
          clearInterval(timer);
          setTimeout(function () {
            _this3.stick = null;
          }, 3000);
        }
      }, 300 - Math.random() * 50);
    },
    fly: function fly() {
      this.moneyFly = !this.moneyFly;
    },
    toggInformation: function toggInformation() {
      this.information = !this.information;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/about/Index.vue?vue&type=style&index=0&id=30806eb5&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/about/Index.vue?vue&type=style&index=0&id=30806eb5&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.stick[data-v-30806eb5]{\n        -webkit-animation: opacity-data-v-30806eb5 1s ease-in-out infinite;\n                animation: opacity-data-v-30806eb5 1s ease-in-out infinite;\n        transition-duration: 1s;\n}\n@-webkit-keyframes opacity-data-v-30806eb5{\nfrom{\n          opacity: 1;\n}\nto{\n            opacity: 0;\n}\n}\n@keyframes opacity-data-v-30806eb5{\nfrom{\n          opacity: 1;\n}\nto{\n            opacity: 0;\n}\n}\n.about__picture[data-v-30806eb5]{\n        width: 100%;\n        max-width: 500px;\n}\n.about__relative[data-v-30806eb5]{\n           position: relative;\n}\n.about__picture_money[data-v-30806eb5]{\n        position: absolute;\n        top: 180px;\n        left: 250px;\n        width: 100%;\n        max-width: 64px;\n        transform: rotate(91deg);\n        offset-path: path('M50 59C40 105 43 66 2 2L41 16C50 9.33334 67.6 -2.8 66 2C64 8 60 13 50 59Z');\n     -webkit-animation: followpath-data-v-30806eb5 9s linear infinite;\n             animation: followpath-data-v-30806eb5 9s linear infinite;\n     /* offset-rotate: 9deg; */\n}\n@-webkit-keyframes followpath-data-v-30806eb5 {\nto {\n     motion-offset: 100%;\n     offset-distance: 100%;\n}\n}\n@keyframes followpath-data-v-30806eb5 {\nto {\n     motion-offset: 100%;\n     offset-distance: 100%;\n}\n}\n.about_people[data-v-30806eb5]{\n    padding-left: 30px;\n}\n.margin-top[data-v-30806eb5]{\n    margin-top: 78px;\n}\n.about__main[data-v-30806eb5]{\n    line-height: 1.5;\n    padding-left: 10px;\n    position: relative;\n}\n.about__main_uppertext[data-v-30806eb5]{\n    font-size: 66px;\n    font-weight: 800;\n}\n.about__main_middletext[data-v-30806eb5]{\n     margin-top:7px;\n     font-size: 32px;\n}\n.about__main_text[data-v-30806eb5]{\n    margin-top:12px;\n     font-size: 18px;\n}\n.arrow[data-v-30806eb5]{\n     font-size: 36px;\n     cursor: pointer;\n}\n.circle[data-v-30806eb5]{\n      margin-top:10px;\n      width: 16px;\n      height: 16px;\n      border:2px solid #232323;\n      background: #5075da;\n      display: inline-block;\n      border-radius: 50%;\n      transform: translateY(-4px);\n}\n.about__main_text_age[data-v-30806eb5]{\n          margin-top:12px;\n     font-size: 24px;\n}\n.circle_little[data-v-30806eb5]{\n      width: 10px;\n      height: 10px;\n      border:1px solid #232323;\n      background: #5075da;\n      display: inline-block;\n      border-radius: 50%;\n      transform: translateY(-1px);\n}\na[data-v-30806eb5]{\n        text-decoration: none;\n        font-size: 34px;\n}\n.information[data-v-30806eb5]{\n        opacity: 1;\n        display: block;\n        pointer-events:visible;\n        transition-duration: 1s;\n}\n.information.active[data-v-30806eb5]{\n            display: none;\n        opacity: 0;\n         pointer-events: none;\n}\n.toggInf[data-v-30806eb5]{\n        font-size: 36px;\n        cursor: pointer;\n        transition-duration: 0.8s;\n        transform: rotate(180deg);\n}\n.toggInf.active[data-v-30806eb5]{\n       transform: rotate(0deg);\n}\n.about__main_message[data-v-30806eb5]{\n        z-index: -2;\n        position: absolute;\n        top:-40px;\n        right: 44px;\n        width:100%;\n        height: 460px;\n        max-width: 600px;\n        /* max-height: 490px; */\n        background: #7B95F2;\n        transform: rotate(30deg);\n        -webkit-clip-path: ellipse(25% 40% at 50% 50%);\n                clip-path: ellipse(25% 40% at 50% 50%);\n            transition-duration: 1s;\n}\n.about__main_message_small[data-v-30806eb5]{\n          z-index: -1;\n        position: absolute;\n        top:100px;\n        right: 244px;\n        width:100%;\n        height: 80px;\n        max-width: 80px;\n        /* max-height: 490px; */\n        background: #4F5BB8;\n             transform: rotate(10deg);\n        -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);\n                clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);\n            transition-duration: 1s;\n}\n.btn-primary[data-v-30806eb5]{\n        background: #4F5BB8;\n}\n@media ( max-width: 767px){\n.about__main[data-v-30806eb5]{\n           padding-left: 30px;\n}\n.about__main_uppertext[data-v-30806eb5] {\n    font-size: 54px;\n    font-weight: 800;\n}\n.about__main_message_small[data-v-30806eb5]{\n        right: 144px;\n}\n}\n@media ( max-width: 400px){\n.about__picture_money[data-v-30806eb5] {\n       top: 110px;\n    left: 130px;\n    max-width: 54px;\n}\n}\n@media ( max-width: 380px){\n.about__main_message_small[data-v-30806eb5]{\n        right: 104px;\n}\n}\n    \n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/about/Index.vue?vue&type=style&index=0&id=30806eb5&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/about/Index.vue?vue&type=style&index=0&id=30806eb5&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_30806eb5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=30806eb5&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/about/Index.vue?vue&type=style&index=0&id=30806eb5&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_30806eb5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_30806eb5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/about/Index.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/about/Index.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_30806eb5_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=30806eb5&scoped=true&lang=true& */ "./resources/js/components/about/Index.vue?vue&type=template&id=30806eb5&scoped=true&lang=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/about/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_30806eb5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=30806eb5&scoped=true&lang=css& */ "./resources/js/components/about/Index.vue?vue&type=style&index=0&id=30806eb5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_30806eb5_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_30806eb5_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "30806eb5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/about/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/about/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/about/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/about/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/about/Index.vue?vue&type=style&index=0&id=30806eb5&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/about/Index.vue?vue&type=style&index=0&id=30806eb5&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_30806eb5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=30806eb5&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/about/Index.vue?vue&type=style&index=0&id=30806eb5&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/about/Index.vue?vue&type=template&id=30806eb5&scoped=true&lang=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/about/Index.vue?vue&type=template&id=30806eb5&scoped=true&lang=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_30806eb5_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_30806eb5_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_30806eb5_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=30806eb5&scoped=true&lang=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/about/Index.vue?vue&type=template&id=30806eb5&scoped=true&lang=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/about/Index.vue?vue&type=template&id=30806eb5&scoped=true&lang=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/about/Index.vue?vue&type=template&id=30806eb5&scoped=true&lang=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", {}, [
      _c("div", { staticClass: "row margin-top" }, [
        _c("div", { staticClass: "col-lg-6 about_people" }, [
          _c("div", { staticClass: "about__relative" }, [
            _c("img", {
              staticClass: "about__picture",
              attrs: {
                src: "storage/about/—Pngtree—men work at home with_5361912.png",
                alt: "",
              },
            }),
            _vm._v(" "),
            _vm.moneyFly
              ? _c("img", {
                  staticClass: "about__picture_money",
                  attrs: {
                    src: "storage/about/free-icon-money-4342858.png",
                    alt: "",
                  },
                  on: { click: _vm.fly },
                })
              : _vm._e(),
          ]),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary", on: { click: _vm.fly } },
            [
              _vm._v(
                _vm._s(
                  _vm.moneyFly == true
                    ? "Отключить анимацию денег"
                    : "Включить анимацию денег"
                ) + " "
              ),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6 margin-top about__main" }, [
          _c("div", { staticClass: "about__main_message" }),
          _vm._v(" "),
          _c("div", { staticClass: "about__main_message_small" }),
          _vm._v(" "),
          _c("div", { staticClass: "about__main_uppertext" }, [
            _vm._v("Федоров"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "about__main_uppertext" }, [
            _vm._v("Максим"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "about__main_middletext" }, [
            _c("span", { staticClass: "circle" }),
            _vm._v(" " + _vm._s(_vm.outText)),
            _vm.stick
              ? _c("span", { staticClass: "stick" }, [
                  _vm._v(_vm._s(_vm.stick)),
                ])
              : _vm._e(),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "about__main_text_age" }, [
            _c("i", {
              staticClass: "fa fa-calendar",
              attrs: { "aria-hidden": "true" },
            }),
            _vm._v(" "),
            _c("span", { staticStyle: { "margin-left": "4px" } }, [
              _vm._v(_vm._s(_vm.age) + " лет "),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "arrow", on: { click: _vm.toggInformation } },
            [
              _c("div", { staticClass: "about__main_text mt-3" }, [
                _c("strong", [
                  _vm._v(
                    " " +
                      _vm._s(
                        _vm.information == true
                          ? "Показать больше основной информации"
                          : "Закрыть"
                      ) +
                      "  "
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", [
                _c("i", {
                  staticClass: "fa fa-chevron-down mt-2",
                  class: { toggInf: true, active: _vm.information },
                  attrs: { "aria-hidden": "true" },
                }),
              ]),
            ]
          ),
          _vm._v(" "),
          _c("div", { class: { information: true, active: _vm.information } }, [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _vm._m(5),
            _vm._v(" "),
            _vm._m(6),
          ]),
          _vm._v(" "),
          _vm._m(7),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "about__main_text mt-2" }, [
      _c("i", {
        staticClass: "fa fa-university",
        attrs: { "aria-hidden": "true" },
      }),
      _vm._v(" "),
      _c("strong", [_vm._v(" Университет:")]),
      _vm._v(" НГТУ им. Р.Е. Алексеева "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "about__main_text mt-3" }, [
      _c("i", {
        staticClass: "fa fa-address-book-o",
        attrs: { "aria-hidden": "true" },
      }),
      _vm._v(" "),
      _c("strong", [_vm._v(" Направление:")]),
      _vm._v(" Системный анализ и управление "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "about__main_text mt-3" }, [
      _c("i", { staticClass: "fa fa-code", attrs: { "aria-hidden": "true" } }),
      _vm._v(" "),
      _c("strong", [_vm._v("Сайт:")]),
      _vm._v(" www.super-website.ru "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "about__main_text mt-3" }, [
      _c("i", {
        staticClass: "fa fa-phone",
        staticStyle: { transform: "rotate(90deg)" },
        attrs: { "aria-hidden": "true" },
      }),
      _vm._v(" "),
      _c("strong", [_vm._v(" Телефон:")]),
      _vm._v(" 89200230922 "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "about__main_text mt-3" }, [
      _c("i", { staticClass: "fa fa-at", attrs: { "aria-hidden": "true" } }),
      _vm._v(" "),
      _c("strong", [_vm._v(" Почта:")]),
      _vm._v(" gladvalakaspwnz11@gmail.com "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "about__main_text mt-3" }, [
      _c("strong", [_vm._v("Мои ссылки:")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { attrs: { href: "https://t.me/qwerty_maks", target: "_blank" } },
      [
        _c("i", {
          staticClass: "fa fa-telegram",
          attrs: { "aria-hidden": "true" },
        }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("br"), _vm._v(" "), _c("br")])
  },
]
render._withStripped = true



/***/ })

}]);
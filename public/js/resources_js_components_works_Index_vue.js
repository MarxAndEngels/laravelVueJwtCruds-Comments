"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_works_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/works/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/works/Index.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Index',
  data: function data() {
    return {
      standartWorks: null,
      works: [{
        'href': 'http://htmlbook.ru/html/a/target',
        'img': 'storage/works/dqewdqwqwd.png',
        'title': 'Интернет-магазин',
        'description': 'Работа со стандартной формы и подключением тестовой системы оплаты fondy',
        'skills': {
          'html': 'danger',
          'css': 'primary',
          'OpenCart': 'info'
        }
      }, {
        'href': 'http://u92002uo.beget.tech/products/index',
        'img': 'storage/works/dqewdqwqwd.png',
        'title': 'Интернет-магазин',
        'description': 'Работа с магазином на чистом Laravel, более простая версия, которая может быть',
        'skills': {
          'html': 'danger',
          'css': 'primary',
          'bootstrap': 'info',
          'Laravel': 'primary'
        }
      }, {
        'href': 'https://marxandengels.github.io/dr',
        'img': 'storage/works/вцйвй554цуцйу.png',
        'title': 'Сайт поздравление с др',
        'description': 'Работа с версткой и всевозможными возможностями js',
        'skills': {
          'html': 'danger',
          'css': 'primary',
          'js': 'warning'
        }
      }, {
        'href': 'https://marxandengels.github.io/dr/botsrt/',
        'img': 'storage/works/йуцауцауцацуауц.png',
        'title': 'Верстка макета',
        'description': 'Работа с bootstrap',
        'skills': {
          'html': 'danger',
          'css': 'primary',
          'bootstrap': 'info'
        }
      }, {
        'href': 'https://marxandengels.github.io/dr/braincloud/',
        'img': 'storage/works/куцауцацуа.png',
        'title': 'Верстка макета',
        'description': 'Работа с версткой, без методологии БЭМ. Сейчас, конечно, буду стараться придерживаться БЭМ',
        'skills': {
          'html': 'danger',
          'css': 'primary',
          'js': 'warning'
        }
      }, {
        'href': 'https://marxandengels.github.io/dr/web/',
        'img': 'storage/works/цйвайцуауца.png',
        'title': 'Верстка макета',
        'description': 'Работа с версткой, без методологии БЭМ. Сейчас, конечно, буду стараться придерживаться БЭМ',
        'skills': {
          'html': 'danger',
          'css': 'primary'
        }
      }]
    };
  },
  mounted: function mounted() {
    localStorage.setItem('works', JSON.stringify(this.works));
  },
  methods: {
    filterWorks: function filterWorks(name) {
      var obj = localStorage.getItem('works');
      obj = JSON.parse(obj);
      this.works = obj.filter(function (el) {
        return el.skills.hasOwnProperty(name);
      });
    },
    filterWorksAll: function filterWorksAll() {
      var obj = localStorage.getItem('works');
      obj = JSON.parse(obj);
      this.works = obj;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/works/Index.vue?vue&type=style&index=0&id=4b52b86a&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/works/Index.vue?vue&type=style&index=0&id=4b52b86a&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.works__relative[data-v-4b52b86a]{\r\n    position: relative;\n}\n.works__img[data-v-4b52b86a]{\r\n        width: 100%;\r\n        height: 100%;\r\n        flex-shrink: 0;\r\n        max-height: 220px;\r\n        border-radius: 10px;\n}\n.works__options[data-v-4b52b86a]{\r\n        position: absolute;\r\n        top:70px;\r\n         left: 50%;\r\n    transform: translate(-50%, -50%);\r\n        background-color: rgb(0, 0, 0,.5);\r\n        width: 100%;\r\n        height: 100%;\r\n          max-height: 220px;\r\n    text-align: center;\r\n    padding-top:40px;\r\n    color:snow;\r\n    font-size: 18px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n     opacity: 0;\r\n     transition-duration: 0.8s;\r\n      border-radius: 10px;\n}\n.works__options div span[data-v-4b52b86a] {\r\n         font-size: 15px;\n}\n.works__relative:hover > .works__options[data-v-4b52b86a]{\r\n         top:110px;\r\n        opacity: 1;\n}\nbutton[data-v-4b52b86a]{\r\n       \r\n       margin: 0 4px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/works/Index.vue?vue&type=style&index=0&id=4b52b86a&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/works/Index.vue?vue&type=style&index=0&id=4b52b86a&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_4b52b86a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=4b52b86a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/works/Index.vue?vue&type=style&index=0&id=4b52b86a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_4b52b86a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_4b52b86a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/works/Index.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/works/Index.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_4b52b86a_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=4b52b86a&scoped=true&lang=true& */ "./resources/js/components/works/Index.vue?vue&type=template&id=4b52b86a&scoped=true&lang=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/works/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_4b52b86a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=4b52b86a&scoped=true&lang=css& */ "./resources/js/components/works/Index.vue?vue&type=style&index=0&id=4b52b86a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_4b52b86a_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_4b52b86a_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4b52b86a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/works/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/works/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/works/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/works/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/works/Index.vue?vue&type=style&index=0&id=4b52b86a&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/works/Index.vue?vue&type=style&index=0&id=4b52b86a&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_4b52b86a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=4b52b86a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/works/Index.vue?vue&type=style&index=0&id=4b52b86a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/works/Index.vue?vue&type=template&id=4b52b86a&scoped=true&lang=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/works/Index.vue?vue&type=template&id=4b52b86a&scoped=true&lang=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4b52b86a_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4b52b86a_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4b52b86a_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=4b52b86a&scoped=true&lang=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/works/Index.vue?vue&type=template&id=4b52b86a&scoped=true&lang=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/works/Index.vue?vue&type=template&id=4b52b86a&scoped=true&lang=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/works/Index.vue?vue&type=template&id=4b52b86a&scoped=true&lang=true& ***!
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
    _c("h4", { staticClass: "mt-5" }, [
      _vm._v("Чтоб выкладывать работы нужен хост и это грустно 😥"),
    ]),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "mb-5 btn btn-success",
        on: {
          click: function ($event) {
            return _vm.filterWorksAll()
          },
        },
      },
      [_vm._v("Все")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "mb-5 btn btn-primary",
        on: {
          click: function ($event) {
            return _vm.filterWorks("Laravel")
          },
        },
      },
      [_vm._v("Laravel")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "mb-5 btn btn-warning",
        on: {
          click: function ($event) {
            return _vm.filterWorks("js")
          },
        },
      },
      [_vm._v("JS")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "mb-5 btn btn-primary",
        on: {
          click: function ($event) {
            return _vm.filterWorks("bootstrap")
          },
        },
      },
      [_vm._v("Bootstrap")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "mb-5 btn btn-info",
        on: {
          click: function ($event) {
            return _vm.filterWorks("OpenCart")
          },
        },
      },
      [_vm._v("OpenCart")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "mb-5 btn btn-danger",
        on: {
          click: function ($event) {
            return _vm.filterWorks("html")
          },
        },
      },
      [_vm._v("HTML")]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      _vm._l(_vm.works, function (el, key) {
        return _c("div", { key: key, staticClass: "col-lg-4" }, [
          _c("a", { attrs: { href: el.href, target: "_blank" } }, [
            _c("div", [
              _c("div", { staticClass: "works__relative" }, [
                _c("img", {
                  staticClass: "works__img mb-5",
                  attrs: { src: el.img, alt: "" },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "works__options" }, [
                  _c("div", [_c("p", [_vm._v(_vm._s(el.title))])]),
                  _vm._v(" "),
                  _c("div", [
                    _c("p", [_c("span", [_vm._v(_vm._s(el.description))])]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex justify-content-center" },
                    _vm._l(el.skills, function (option, name) {
                      return _c("span", [
                        option == "primary"
                          ? _c("button", { staticClass: "btn btn-primary" }, [
                              _vm._v(_vm._s(name)),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        option == "success"
                          ? _c("button", { staticClass: "btn btn-success" }, [
                              _vm._v(_vm._s(name)),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        option == "danger"
                          ? _c("button", { staticClass: "btn btn-danger" }, [
                              _vm._v(_vm._s(name)),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        option == "warning"
                          ? _c("button", { staticClass: "btn btn-warning" }, [
                              _vm._v(_vm._s(name)),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        option == "info"
                          ? _c("button", { staticClass: "btn btn-info" }, [
                              _vm._v(_vm._s(name)),
                            ])
                          : _vm._e(),
                      ])
                    }),
                    0
                  ),
                ]),
              ]),
            ]),
          ]),
        ])
      }),
      0
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
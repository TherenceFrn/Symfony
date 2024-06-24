"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/vue_app.js":
/*!***************************!*\
  !*** ./assets/vue_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_QuizApp_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/QuizApp.vue */ "./assets/components/QuizApp.vue");


console.log('Initializing Vue app');
(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_components_QuizApp_vue__WEBPACK_IMPORTED_MODULE_1__["default"]).mount('#app');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/QuizApp.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/QuizApp.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    questions: Array,
    quizzId: Number
  },
  data: function data() {
    return {
      currentIndex: 0,
      selectedAnswer: null,
      results: []
    };
  },
  computed: {
    currentQuestion: function currentQuestion() {
      return this.questions[this.currentIndex];
    }
  },
  methods: {
    nextQuestion: function nextQuestion() {
      if (this.selectedAnswer !== null) {
        this.results.push({
          question: this.currentQuestion.id,
          answer: this.selectedAnswer
        });
        this.selectedAnswer = null;
        this.currentIndex++;
      }
    },
    submitResults: function submitResults() {
      fetch("/quizz/".concat(this.quizzId, "/results"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.results)
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log('Success:', data);
      })["catch"](function (error) {
        console.error('Error:', error);
      });
    }
  },
  mounted: function mounted() {
    console.log('QuizApp component has been mounted!');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/QuizApp.vue?vue&type=template&id=bc32db3e&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/QuizApp.vue?vue&type=template&id=bc32db3e&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-bc32db3e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  "class": "text-2xl font-bold mb-4"
};
var _hoisted_3 = {
  "class": "mb-4"
};
var _hoisted_4 = ["value"];
var _hoisted_5 = {
  key: 1
};
var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "text-2xl font-bold mb-4"
  }, "Quiz Complete!", -1 /* HOISTED */);
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [$options.currentQuestion ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.currentQuestion.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.currentQuestion.answers, function (answer) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: answer.id,
      "class": "mb-2"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "radio",
      value: answer.id,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
        return $data.selectedAnswer = $event;
      })
    }, null, 8 /* PROPS */, _hoisted_4), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.selectedAnswer]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(answer.title), 1 /* TEXT */)])]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.nextQuestion && $options.nextQuestion.apply($options, arguments);
    }),
    "class": "bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
  }, "Next")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.submitResults && $options.submitResults.apply($options, arguments);
    }),
    "class": "bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
  }, "Submit Results")]))]);
}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/QuizApp.vue?vue&type=style&index=0&id=bc32db3e&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/QuizApp.vue?vue&type=style&index=0&id=bc32db3e&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/components/QuizApp.vue":
/*!***************************************!*\
  !*** ./assets/components/QuizApp.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuizApp_vue_vue_type_template_id_bc32db3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizApp.vue?vue&type=template&id=bc32db3e&scoped=true */ "./assets/components/QuizApp.vue?vue&type=template&id=bc32db3e&scoped=true");
/* harmony import */ var _QuizApp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizApp.vue?vue&type=script&lang=js */ "./assets/components/QuizApp.vue?vue&type=script&lang=js");
/* harmony import */ var _QuizApp_vue_vue_type_style_index_0_id_bc32db3e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuizApp.vue?vue&type=style&index=0&id=bc32db3e&scoped=true&lang=css */ "./assets/components/QuizApp.vue?vue&type=style&index=0&id=bc32db3e&scoped=true&lang=css");
/* harmony import */ var C_Users_User_Documents_Therence_Code_symfony7_Izabela_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_User_Documents_Therence_Code_symfony7_Izabela_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_QuizApp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_QuizApp_vue_vue_type_template_id_bc32db3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-bc32db3e"],['__file',"assets/components/QuizApp.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/QuizApp.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./assets/components/QuizApp.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizApp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizApp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuizApp.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/QuizApp.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/QuizApp.vue?vue&type=template&id=bc32db3e&scoped=true":
/*!*********************************************************************************!*\
  !*** ./assets/components/QuizApp.vue?vue&type=template&id=bc32db3e&scoped=true ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizApp_vue_vue_type_template_id_bc32db3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizApp_vue_vue_type_template_id_bc32db3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuizApp.vue?vue&type=template&id=bc32db3e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/QuizApp.vue?vue&type=template&id=bc32db3e&scoped=true");


/***/ }),

/***/ "./assets/components/QuizApp.vue?vue&type=style&index=0&id=bc32db3e&scoped=true&lang=css":
/*!***********************************************************************************************!*\
  !*** ./assets/components/QuizApp.vue?vue&type=style&index=0&id=bc32db3e&scoped=true&lang=css ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuizApp_vue_vue_type_style_index_0_id_bc32db3e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuizApp.vue?vue&type=style&index=0&id=bc32db3e&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/QuizApp.vue?vue&type=style&index=0&id=bc32db3e&scoped=true&lang=css");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_vue-loader_dist_exportHelper_js-node_modules_vue_dist_vue_esm-bundler_js-452aa7"], () => (__webpack_exec__("./assets/vue_app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnQztBQUNlO0FBRS9DRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztBQUNuQ0gsOENBQVMsQ0FBQ0MsK0RBQU8sQ0FBQyxDQUFDRyxLQUFLLENBQUMsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2tCaEMsaUVBQWU7RUFDWEMsS0FBSyxFQUFFO0lBQ0hDLFNBQVMsRUFBRUMsS0FBSztJQUNoQkMsT0FBTyxFQUFFQztFQUNiLENBQUM7RUFDREMsSUFBSSxXQUFBQSxLQUFBLEVBQUc7SUFDSCxPQUFPO01BQ0hDLFlBQVksRUFBRSxDQUFDO01BQ2ZDLGNBQWMsRUFBRSxJQUFJO01BQ3BCQyxPQUFPLEVBQUU7SUFDYixDQUFDO0VBQ0wsQ0FBQztFQUNEQyxRQUFRLEVBQUU7SUFDTkMsZUFBZSxXQUFBQSxnQkFBQSxFQUFHO01BQ2QsT0FBTyxJQUFJLENBQUNULFNBQVMsQ0FBQyxJQUFJLENBQUNLLFlBQVksQ0FBQztJQUM1QztFQUNKLENBQUM7RUFDREssT0FBTyxFQUFFO0lBQ0xDLFlBQVksV0FBQUEsYUFBQSxFQUFHO01BQ1gsSUFBSSxJQUFJLENBQUNMLGNBQWEsS0FBTSxJQUFJLEVBQUU7UUFDOUIsSUFBSSxDQUFDQyxPQUFPLENBQUNLLElBQUksQ0FBQztVQUFFQyxRQUFRLEVBQUUsSUFBSSxDQUFDSixlQUFlLENBQUNLLEVBQUU7VUFBRUMsTUFBTSxFQUFFLElBQUksQ0FBQ1Q7UUFBZSxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDQSxjQUFhLEdBQUksSUFBSTtRQUMxQixJQUFJLENBQUNELFlBQVksRUFBRTtNQUN2QjtJQUNKLENBQUM7SUFDRFcsYUFBYSxXQUFBQSxjQUFBLEVBQUc7TUFDWkMsS0FBSyxXQUFBQyxNQUFBLENBQVcsSUFBSSxDQUFDaEIsT0FBTyxlQUFZO1FBQ3BDaUIsTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1VBQ0wsY0FBYyxFQUFFO1FBQ3BCLENBQUM7UUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUNoQixPQUFPO01BQ3JDLENBQUMsRUFDSWlCLElBQUksQ0FBQyxVQUFDQyxRQUFRO1FBQUEsT0FBS0EsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztNQUFBLEdBQ2xDRixJQUFJLENBQUMsVUFBQ3BCLElBQUksRUFBSztRQUNaUixPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEVBQUVPLElBQUksQ0FBQztNQUNqQyxDQUFDLFVBQ0ssQ0FBQyxVQUFDdUIsS0FBSyxFQUFLO1FBQ2QvQixPQUFPLENBQUMrQixLQUFLLENBQUMsUUFBUSxFQUFFQSxLQUFLLENBQUM7TUFDbEMsQ0FBQyxDQUFDO0lBQ1Y7RUFDSixDQUFDO0VBQ0RDLE9BQU8sV0FBQUEsUUFBQSxFQUFHO0lBQ05oQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQztFQUN0RDtBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaEVlLFNBQU07QUFBeUI7O0VBQy9CLFNBQU07QUFBTTs7Ozs7O3NCQVdoQmdDLHVEQUFBLENBQXVEO0lBQW5ELFNBQU07RUFBeUIsR0FBQyxnQkFBYztBQUFBOzsyREFkMURDLHVEQUFBLENBaUJNLGNBaEJTQyxRQUFBLENBQUF0QixlQUFlLHNEQUExQnFCLHVEQUFBLENBV00sT0FBQUUsVUFBQSxHQVZGSCx1REFBQSxDQUFvRSxNQUFwRUksVUFBb0UsRUFBQUMsb0RBQUEsQ0FBN0JILFFBQUEsQ0FBQXRCLGVBQWUsQ0FBQzBCLEtBQUssa0JBQzVETix1REFBQSxDQU9LLE1BUExPLFVBT0ssMERBTkROLHVEQUFBLENBS0tPLHlDQUFBLFFBQUFDLCtDQUFBLENBTGdCUCxRQUFBLENBQUF0QixlQUFlLENBQUM4QixPQUFPLFlBQWpDeEIsTUFBTTs2REFBakJlLHVEQUFBLENBS0s7TUFMMENVLEdBQUcsRUFBRXpCLE1BQU0sQ0FBQ0QsRUFBRTtNQUFFLFNBQU07UUFDakVlLHVEQUFBLENBR1Esb0VBRkpBLHVEQUFBLENBQWtFO01BQTNEWSxJQUFJLEVBQUMsT0FBTztNQUFFQyxLQUFLLEVBQUUzQixNQUFNLENBQUNELEVBQUU7O2VBQVc2QixLQUFBLENBQUFyQyxjQUFjLEdBQUFzQyxNQUFBO01BQUE7eUZBQWRELEtBQUEsQ0FBQXJDLGNBQWMsMERBQUksR0FDbEUsR0FBQTRCLG9EQUFBLENBQUduQixNQUFNLENBQUNvQixLQUFLO29DQUkzQk4sdURBQUEsQ0FBNkk7SUFBcElnQixPQUFLLEVBQUFDLE1BQUEsUUFBQUEsTUFBQTtNQUFBLE9BQUVmLFFBQUEsQ0FBQXBCLFlBQUEsSUFBQW9CLFFBQUEsQ0FBQXBCLFlBQUEsQ0FBQW9DLEtBQUEsQ0FBQWhCLFFBQUEsRUFBQWlCLFNBQUEsQ0FBWTtJQUFBO0lBQUUsU0FBTTtLQUE0RixNQUFJLDBEQUV4SWxCLHVEQUFBLENBR00sT0FBQW1CLFVBQUEsR0FGRkMsVUFBdUQsRUFDdkRyQix1REFBQSxDQUF3SjtJQUEvSWdCLE9BQUssRUFBQUMsTUFBQSxRQUFBQSxNQUFBO01BQUEsT0FBRWYsUUFBQSxDQUFBZixhQUFBLElBQUFlLFFBQUEsQ0FBQWYsYUFBQSxDQUFBK0IsS0FBQSxDQUFBaEIsUUFBQSxFQUFBaUIsU0FBQSxDQUFhO0lBQUE7SUFBRSxTQUFNO0tBQTRGLGdCQUFjOzs7Ozs7Ozs7Ozs7QUNoQjNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWdGO0FBQ3RCO0FBQ0w7O0FBRXJELENBQThFOztBQUU4RDtBQUM1SSxpQ0FBaUMsOElBQWUsQ0FBQyw0RUFBTSxhQUFhLDBGQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFjZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzFCdUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9RdWl6QXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9RdWl6QXBwLnZ1ZT8xOGVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1F1aXpBcHAudnVlP2E3ZWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUXVpekFwcC52dWU/MTc0YiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9RdWl6QXBwLnZ1ZT9lZmM1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1F1aXpBcHAudnVlPzllOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IFF1aXpBcHAgZnJvbSAnLi9jb21wb25lbnRzL1F1aXpBcHAudnVlJztcclxuXHJcbmNvbnNvbGUubG9nKCdJbml0aWFsaXppbmcgVnVlIGFwcCcpO1xyXG5jcmVhdGVBcHAoUXVpekFwcCkubW91bnQoJyNhcHAnKTtcclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJjdXJyZW50UXVlc3Rpb25cIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj57eyBjdXJyZW50UXVlc3Rpb24udGl0bGUgfX08L2gyPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCJhbnN3ZXIgaW4gY3VycmVudFF1ZXN0aW9uLmFuc3dlcnNcIiA6a2V5PVwiYW5zd2VyLmlkXCIgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgOnZhbHVlPVwiYW5zd2VyLmlkXCIgdi1tb2RlbD1cInNlbGVjdGVkQW5zd2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgYW5zd2VyLnRpdGxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwibmV4dFF1ZXN0aW9uXCIgY2xhc3M9XCJiZy1pbmRpZ28tNjAwIHRleHQtd2hpdGUgcHgtNiBweS0zIHJvdW5kZWQtbGcgaG92ZXI6YmctaW5kaWdvLTcwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMFwiPk5leHQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj5RdWl6IENvbXBsZXRlITwvaDI+XHJcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic3VibWl0UmVzdWx0c1wiIGNsYXNzPVwiYmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlIHB4LTYgcHktMyByb3VuZGVkLWxnIGhvdmVyOmJnLWluZGlnby03MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDBcIj5TdWJtaXQgUmVzdWx0czwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHF1ZXN0aW9uczogQXJyYXksXHJcbiAgICAgICAgcXVpenpJZDogTnVtYmVyLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY3VycmVudEluZGV4OiAwLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEFuc3dlcjogbnVsbCxcclxuICAgICAgICAgICAgcmVzdWx0czogW10sXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGN1cnJlbnRRdWVzdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudEluZGV4XTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBuZXh0UXVlc3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQW5zd2VyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdHMucHVzaCh7IHF1ZXN0aW9uOiB0aGlzLmN1cnJlbnRRdWVzdGlvbi5pZCwgYW5zd2VyOiB0aGlzLnNlbGVjdGVkQW5zd2VyIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEFuc3dlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJtaXRSZXN1bHRzKCkge1xyXG4gICAgICAgICAgICBmZXRjaChgL3F1aXp6LyR7dGhpcy5xdWl6eklkfS9yZXN1bHRzYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLnJlc3VsdHMpLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1F1aXpBcHAgY29tcG9uZW50IGhhcyBiZWVuIG1vdW50ZWQhJyk7XHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi8qIEFkZCBhbnkgc2NvcGVkIHN0eWxlcyBoZXJlICovXHJcbjwvc3R5bGU+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vUXVpekFwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmMzMmRiM2Umc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9RdWl6QXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9RdWl6QXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vUXVpekFwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iYzMyZGIzZSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFVzZXJcXFxcRG9jdW1lbnRzXFxcXFRoZXJlbmNlXFxcXENvZGVcXFxcc3ltZm9ueTdcXFxcSXphYmVsYVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxkaXN0XFxcXGV4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LWJjMzJkYjNlXCJdLFsnX19maWxlJyxcImFzc2V0cy9jb21wb25lbnRzL1F1aXpBcHAudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImJjMzJkYjNlXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnYmMzMmRiM2UnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCdiYzMyZGIzZScsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUXVpekFwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmMzMmRiM2Umc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignYmMzMmRiM2UnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1F1aXpBcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vUXVpekFwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9RdWl6QXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYzMyZGIzZSZzY29wZWQ9dHJ1ZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vUXVpekFwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iYzMyZGIzZSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIl0sIm5hbWVzIjpbImNyZWF0ZUFwcCIsIlF1aXpBcHAiLCJjb25zb2xlIiwibG9nIiwibW91bnQiLCJwcm9wcyIsInF1ZXN0aW9ucyIsIkFycmF5IiwicXVpenpJZCIsIk51bWJlciIsImRhdGEiLCJjdXJyZW50SW5kZXgiLCJzZWxlY3RlZEFuc3dlciIsInJlc3VsdHMiLCJjb21wdXRlZCIsImN1cnJlbnRRdWVzdGlvbiIsIm1ldGhvZHMiLCJuZXh0UXVlc3Rpb24iLCJwdXNoIiwicXVlc3Rpb24iLCJpZCIsImFuc3dlciIsInN1Ym1pdFJlc3VsdHMiLCJmZXRjaCIsImNvbmNhdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnJvciIsIm1vdW50ZWQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIiRvcHRpb25zIiwiX2hvaXN0ZWRfMSIsIl9ob2lzdGVkXzIiLCJfdG9EaXNwbGF5U3RyaW5nIiwidGl0bGUiLCJfaG9pc3RlZF8zIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJhbnN3ZXJzIiwia2V5IiwidHlwZSIsInZhbHVlIiwiJGRhdGEiLCIkZXZlbnQiLCJvbkNsaWNrIiwiX2NhY2hlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaG9pc3RlZF81IiwiX2hvaXN0ZWRfNiJdLCJzb3VyY2VSb290IjoiIn0=
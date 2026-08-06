/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/main.css"
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://amaliy-ish/./src/css/main.css?\n}");

/***/ },

/***/ "./src/js/filter.js"
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
() {

eval("{const searchFormEl = document.querySelector(`.search`)\r\n\r\nsearchFormEl.search.addEventListener('input', () => {\r\n    const searchValue = searchFormEl.search.value.toLowerCase()\r\n    const cardsIteam = document.querySelectorAll('.cards__item')\r\n    const  cardsTitle = document.querySelectorAll('.cards__title')\r\n\r\n    cardsTitle.forEach((title, i) => {\r\n        if(title.textContent.toLowerCase().includes(searchValue)) {\r\n            cardsIteam[i].style.display = 'block'\r\n        }else{\r\n            cardsIteam[i].style.display = 'none'\r\n        }\r\n    })\r\n})\r\n\r\n\r\n// filtrlash\r\n\r\n// const searchSelect = document.querySelectorAll('.search__select-list li')\r\n// const searchSelectSpan = document.querySelector('.search__select span')\r\n\r\n// import {createCountries} from './updateUI'\r\n// import request from './request'\r\n\r\n// searchSelect.forEach((li) => {\r\n//     li.addEventListener('click', (e) => {\r\n//         searchSelectSpan.textContent = li.textContent\r\n//         let filterApi\r\n\r\n//         if(li.textContent == 'All'){\r\n//             filterApi = ''\r\n//         }else {\r\n//             filterapi = `.............${li.textContent}`\r\n//         }\r\n\r\n\r\n//         request(filterApi).then((data) => {\r\n//             createCountries(data)\r\n//         }).catch((err) => {\r\n//             alert(err.message)\r\n//         })\r\n//     })\r\n// })\n\n//# sourceURL=webpack://amaliy-ish/./src/js/filter.js?\n}");

/***/ },

/***/ "./src/js/loader.js"
/*!**************************!*\
  !*** ./src/js/loader.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loaderEl = document.querySelector(`.hidden`)\r\n\r\nconst loaderToggle = (info) => {\r\n    if(info){\r\n        loaderEl.classList.remove(`hidden`)\r\n    }else{\r\n        loaderEl.classList.add(`hidden`)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loaderToggle);\n\n//# sourceURL=webpack://amaliy-ish/./src/js/loader.js?\n}");

/***/ },

/***/ "./src/js/main.js"
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateUI */ \"./src/js/updateUI.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter */ \"./src/js/filter.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_filter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mode */ \"./src/js/mode.js\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mode__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst API = 'https://raw.githubusercontent.com/mledoze/countries/master/dist/countries.json'\r\n\r\n;(0,_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(API).then((data) => {\r\n    ;(0,_updateUI__WEBPACK_IMPORTED_MODULE_2__.createCountries)(data)\r\n}).catch((err) => {\r\n    alert(err.message)\r\n})\n\n//# sourceURL=webpack://amaliy-ish/./src/js/main.js?\n}");

/***/ },

/***/ "./src/js/mode.js"
/*!************************!*\
  !*** ./src/js/mode.js ***!
  \************************/
() {

eval("{const modeBtn = document.querySelector('header__dark-mode')\r\nconst body = document.querySelector('body')\r\n\r\n\r\n\r\nmodeBtn.addEventListener('click', () => {\r\n    body.classList.toggle('dark-mode')\r\n})\n\n//# sourceURL=webpack://amaliy-ish/./src/js/mode.js?\n}");

/***/ },

/***/ "./src/js/request.js"
/*!***************************!*\
  !*** ./src/js/request.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ \"./src/js/loader.js\");\n\r\n\r\nconst request = async (resurse) => {\r\n    (0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(true)\r\n    const req = await fetch(resurse)\r\n\r\n    if(!req.ok){\r\n        throw new Error (`Something went wrong :(`)\r\n    }\r\n\r\n    const data = await req.json()\r\n    ;(0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false)\r\n    return data    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\n\n//# sourceURL=webpack://amaliy-ish/./src/js/request.js?\n}");

/***/ },

/***/ "./src/js/updateUI.js"
/*!****************************!*\
  !*** ./src/js/updateUI.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCountries: () => (/* binding */ createCountries)\n/* harmony export */ });\nconst cardsEl = document.querySelector('.cards')\r\n\r\nconst createCountries = (countries) => {\r\n    cardsEl.innerHTML = ''\r\n    countries.forEach((country) => {\r\n        const commonName = country.name.common\r\n        const region = country.region\r\n        const capital = country.capital ? country.capital[0] : \"No capital\"\r\n\r\n\r\n        //li\r\n        const li = document.createElement('li')\r\n        li.classList.add('cards__item')\r\n\r\n        li.innerHTML = `<a href=\"./about.html\">\r\n                        <img src=\"./images/jpg/algeria-flag.jpg\" alt=\"algeria-flag\" width=\"267\" height=\"160\">\r\n                        <div class=\"cards__item-inner\">\r\n                            <h3 class=\"cards__title\">${commonName}</h3>\r\n                            <p class=\"population\">Population: <span>40,400,000</span></p>\r\n                            <p class=\"region\">Region: <span>${region}</span></p>\r\n                            <p class=\"capital\">Capital: <span>${capital}</span></p>\r\n                        </div>\r\n                       </a>`\r\n\r\n        //ul\r\n        \r\n        cardsEl.appendChild(li)\r\n    })  \r\n}\n\n//# sourceURL=webpack://amaliy-ish/./src/js/updateUI.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;
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

/***/ "./src/js/about.js"
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mode */ \"./src/js/mode.js\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mode__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateUI */ \"./src/js/updateUI.js\");\n\r\n\r\n\r\n\r\n\r\nconst querySting = window.location.search \r\nconst urlParams = new URLSearchParams(querySting)\r\nconst country = urlParams.get('country')\r\nconsole.log(country)\r\n\r\nconst regEx = /^[A-Z]{3}$/.test(country)\r\n\r\nconst countryApi = regEx\r\n    ? `https://api.restcountries.com/countries/v5/codes.alpha_3/${country}`\r\n    : `https://api.restcountries.com/countries/v5?q=${country}`\r\n    \r\nconst countryKey = `rc_live_5fb28576f2f241298f16d43115854140`\r\n\r\n;(0,_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(countryApi, {\r\n    headers: {\r\n        'Authorization': `Bearer ${countryKey}`\r\n    }\r\n}).then((data) => {\r\n    const foundCountry = data.data.objects[0]\r\n    ;(0,_updateUI__WEBPACK_IMPORTED_MODULE_3__.createCountrieInfo)(foundCountry)\r\n}).catch((err) => {\r\n    alert(err.message)\r\n})\r\n\n\n//# sourceURL=webpack://amaliy-ish/./src/js/about.js?\n}");

/***/ },

/***/ "./src/js/loader.js"
/*!**************************!*\
  !*** ./src/js/loader.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loaderEl = document.querySelector(`.hidden`)\r\n\r\nconst loaderToggle = (info) => {\r\n    if(info){\r\n        loaderEl.classList.remove(`hidden`)\r\n    }else{\r\n        loaderEl.classList.add(`hidden`)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loaderToggle);\n\n//# sourceURL=webpack://amaliy-ish/./src/js/loader.js?\n}");

/***/ },

/***/ "./src/js/mode.js"
/*!************************!*\
  !*** ./src/js/mode.js ***!
  \************************/
() {

eval("{const modeBtn = document.querySelector('.header__dark-mode')\r\nconst body = document.querySelector('body')\r\nconst modeFromLocal = localStorage.getItem('mode') ? localStorage.getItem('mode') : null\r\n\r\nif(modeFromLocal) {\r\n    body.classList.add('dark-mode')\r\n}\r\n\r\n\r\nmodeBtn.addEventListener('click', () => {\r\n    body.classList.toggle('dark-mode')\r\n    modeFromLocal ? localStorage.setItem('mode', '') : localStorage.setItem('mode', 'dark')\r\n})\n\n//# sourceURL=webpack://amaliy-ish/./src/js/mode.js?\n}");

/***/ },

/***/ "./src/js/request.js"
/*!***************************!*\
  !*** ./src/js/request.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ \"./src/js/loader.js\");\n// import loaderToggle from \"./loader\"\r\n\r\n// const request = async (resurse) => {\r\n//     loaderToggle(true)\r\n//     const req = await fetch(resurse)\r\n\r\n//     if(!req.ok){\r\n//         throw new Error (`Something went wrong :(`)\r\n//     }\r\n\r\n//     const data = await req.json()\r\n//     loaderToggle(false)\r\n//     return data    \r\n// }\r\n\r\n// export default request\r\n\r\n\r\n\r\n\r\nconst request = async (resurse, options = {}) => {\r\n    (0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(true)\r\n    const req = await fetch(resurse, options)\r\n\r\n    if(!req.ok){\r\n        throw new Error (`Something went wrong :(`)\r\n    }\r\n\r\n    const data = await req.json()\r\n    ;(0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false)\r\n    return data    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\n\n//# sourceURL=webpack://amaliy-ish/./src/js/request.js?\n}");

/***/ },

/***/ "./src/js/updateUI.js"
/*!****************************!*\
  !*** ./src/js/updateUI.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCountrieInfo: () => (/* binding */ createCountrieInfo),\n/* harmony export */   createCountries: () => (/* binding */ createCountries)\n/* harmony export */ });\n    // const cardsEl = document.querySelector('.cards')\r\n\r\n    // export const createCountries = (countries) => {\r\n    //     cardsEl.innerHTML = ''\r\n    //     countries.forEach((country) => {\r\n    //         const commonName = country.names.common\r\n    //         const region = country.region\r\n    //         const capital = country.capital[0].name ? country.capital[0].name : \"No capital\"\r\n\r\n\r\n    //         //li\r\n    //         const li = document.createElement('li')\r\n    //         li.classList.add('cards__item')\r\n\r\n    //         li.innerHTML = `<a href=\"./about.html?country=${commonName}\">\r\n    //                         <img src=\"./images/jpg/algeria-flag.jpg\" alt=\"algeria-flag\" width=\"267\" height=\"160\">\r\n    //                         <div class=\"cards__item-inner\">\r\n    //                             <h3 class=\"cards__title\">${commonName}</h3>\r\n    //                             <p class=\"population\">Population: <span>40,400,000</span></p>\r\n    //                             <p class=\"region\">Region: <span>${region}</span></p>\r\n    //                             <p class=\"capital\">Capital: <span>${capital}</span></p>\r\n    //                         </div>\r\n    //                        </a>`\r\n\r\n    //         //ul\r\n            \r\n    //         cardsEl.appendChild(li)\r\n    //     })  \r\n    // }\r\n\r\n\r\n    // //About ui\r\n\r\n    // export const createCountrieInfo = (country) => {\r\n    //     console.log(country)\r\n    // }\r\n\r\n\r\n    const cardsEl = document.querySelector('.cards')\r\n\r\n    const createCountries = (countries) => {\r\n        cardsEl.innerHTML = ''\r\n        countries.forEach((country) => {\r\n            const commonName = country.names.common\r\n            const region = country.continents ? country.continents[0] : \"No region\"\r\n            const capital = country.capitals && country.capitals[0] ? country.capitals[0].name : \"No capital\"\r\n            const population = country.population\r\n            const flags = country.flag.url_svg\r\n\r\n\r\n\r\n            //li\r\n            const li = document.createElement('li')\r\n            li.classList.add('cards__item')\r\n\r\n            li.innerHTML = `<a href=\"./about.html?country=${commonName}\">\r\n                            <img src=\"${flags}\" alt=\"algeria-flag\" width=\"267\" height=\"160\">\r\n                            <div class=\"cards__item-inner\">\r\n                                <h3 class=\"cards__title\">${commonName}</h3>\r\n                                <p class=\"population\">Population: <span>${population}</span></p>\r\n                                <p class=\"region\">Region: <span>${region}</span></p>\r\n                                <p class=\"capital\">Capital: <span>${capital}</span></p>\r\n                            </div>\r\n                        </a>`\r\n\r\n            //ul\r\n            \r\n            cardsEl.appendChild(li)\r\n        })  \r\n    }\r\n\r\n\r\n    //About ui\r\n\r\n    const  cuntryInfoEl = document.querySelector('.country-info')\r\n    const createCountrieInfo = (country) => {\r\n        const {population, borders, capitals, flag, names, region, tld, currencies, languages} = country\r\n        const nativeName = names.native ?  Object.values(names.native)[0].official: \"N/A\"\r\n        const currency = currencies[0].code\r\n        const language = languages[0].name \r\n        const flags = flag.url_svg\r\n        console.log(country)\r\n        console.log(nativeName) \r\n        console.log(currency)\r\n        console.log(language)\r\n        console.log(flags)\r\n\r\n\r\n        cuntryInfoEl.innerHTML = `\r\n        \r\n          <img\r\n            class=\"country-info__img\"\r\n            src=\"${flags}\"\r\n            alt=\"germany-flag\"\r\n            width=\"560\"\r\n            height=\"400\"\r\n          />\r\n          <div class=\"country-info__content\">\r\n            <h2>${names.common}</h2>\r\n            <ul class=\"country-info__list\">\r\n              <li class=\"country-info__item\">\r\n                <p class=\"name\">\r\n                  Native Name:\r\n                  <span>${nativeName}</span>\r\n                </p>\r\n                <p class=\"population\">\r\n                  Population:\r\n                  <span>${population}</span>\r\n                </p>\r\n                <p class=\"region\">\r\n                  Region:\r\n                  <span>${region}</span>\r\n                </p>\r\n                <p class=\"sub-region\">\r\n                  Sub Region:\r\n                  <span>Western Europe</span>\r\n                </p>\r\n                <p class=\"capital\">\r\n                  Capital:\r\n                  <span>${capitals[0].name}</span>\r\n                </p>\r\n              </li>\r\n              <li class=\"country-info__item\">\r\n                <p class=\"name\">\r\n                  Top Level Domain:\r\n                  <span>${tld}</span>\r\n                </p>\r\n                <p class=\"population\">\r\n                  Currencies:\r\n                  <span>${currency}</span>\r\n                </p>\r\n                <p class=\"region\">\r\n                  Languages:\r\n                  <span>${language}</span>\r\n                </p>\r\n              </li>\r\n            </ul>\r\n\r\n            <div class=\"country-info__borders\">\r\n            <h3>Border Countries:</h3>\r\n            ${borders && borders.length > 0 \r\n            ? borders.map((border) => `<a href=\"./about.html?country=${border}\">${border}</a>`).join('') \r\n            : `<a href=\"./index.html\">No borders</a>`}\r\n            </div>\r\n             \r\n        \r\n        `\r\n        console.log(borders)\r\n    }\r\n\n\n//# sourceURL=webpack://amaliy-ish/./src/js/updateUI.js?\n}");

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
/******/ 	let __webpack_exports__ = __webpack_require__("./src/js/about.js");
/******/ 	
/******/ })()
;
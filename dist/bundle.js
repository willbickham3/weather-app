/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ \"./src/interface.js\");\n// API Key: a732470edfbc4cbdb9220158230708 http://api.weatherapi.com/v1/current.json?key=a732470edfbc4cbdb9220158230708&q=London\n\n\n(0,_interface__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n// fetch('http://api.weatherapi.com/v1/marine.json?key=a732470edfbc4cbdb9220158230708&q=London', { mode: 'cors' })\n// .then(function(response) {\n//     return response.json();\n// })\n// .then(function(response) {\n//     console.log(response)\n// })\n// console.log('Hello')\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ inputButton)\n/* harmony export */ });\nfunction createAnElement(element, classList, innerHTML) {\n    const newElement = document.createElement(`${element}`);\n    newElement.classList.add(`${classList}`);\n    newElement.innerHTML = `${innerHTML}`;\n    return newElement\n}\n\nfunction inputButton() {\n    const mainContent = document.querySelector('.main-content');\n\n    const locationInp = document.createElement('input');\n    locationInp.type = 'text';\n    locationInp.classList.add('location-input');\n    locationInp.setAttribute('id', 'input');\n\n    const searchBtn = document.createElement('button');\n    searchBtn.classList.add('location-input');\n    searchBtn.setAttribute('id', 'button');\n    searchBtn.innerHTML = 'Search';\n    searchBtn.addEventListener('click', clickSearch)\n\n    mainContent.append(locationInp, searchBtn);\n}\n\n async function clickSearch() {\n    const input = document.querySelector('#input');\n    let search = input.value;\n    let weather = await getWeather(search);\n    populatePage(weather.loc, weather.temperature);\n}\n\nasync function getWeather(location) {\n    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=a732470edfbc4cbdb9220158230708&q=${location}`, { mode: 'cors' });\n    const weather = await response.json();\n    console.log(weather.current.temp_f);\n    let temperature = weather.current.temp_f;\n    let loc = weather.location.name;\n    return {temperature, loc}\n}\n\nfunction populatePage(location, temperature) {\n    const mainContent = document.querySelector('.main-content');\n    const locationDiv = createAnElement('h1', 'location', `${location}`);\n    const temperatureDiv = createAnElement('div', 'temperature', `${temperature}° F`);\n    mainContent.prepend(locationDiv, temperatureDiv);\n}\n\n//# sourceURL=webpack://weather-app/./src/interface.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
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
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
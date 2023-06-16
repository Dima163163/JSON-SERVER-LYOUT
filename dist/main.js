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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/userService */ \"./src/modules/userService.js\");\n/* harmony import */ var _modules_addUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addUsers */ \"./src/modules/addUsers.js\");\n/* harmony import */ var _modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/removeUsers */ \"./src/modules/removeUsers.js\");\n/* harmony import */ var _modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changePermissions */ \"./src/modules/changePermissions.js\");\n/* harmony import */ var _modules_editUsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/editUsers */ \"./src/modules/editUsers.js\");\n/* harmony import */ var _modules_filterUsers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/filterUsers */ \"./src/modules/filterUsers.js\");\n/* harmony import */ var _modules_sortUsers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sortUsers */ \"./src/modules/sortUsers.js\");\n/* harmony import */ var _modules_searchUsers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/searchUsers */ \"./src/modules/searchUsers.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.userService = new _modules_userService__WEBPACK_IMPORTED_MODULE_1__.UserService\r\n\r\nuserService.getUsers().then(data => {\r\n\t;(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)(data)\r\n})\r\n\r\n\r\n;(0,_modules_addUsers__WEBPACK_IMPORTED_MODULE_2__.addUsers)()\r\n;(0,_modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__.removeUsers)()\r\n;(0,_modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__.changePermissions)()\r\n;(0,_modules_editUsers__WEBPACK_IMPORTED_MODULE_5__.editUsers)()\r\n;(0,_modules_filterUsers__WEBPACK_IMPORTED_MODULE_6__.filterUsers)()\r\n;(0,_modules_sortUsers__WEBPACK_IMPORTED_MODULE_7__.sortUsers)()\r\n;(0,_modules_searchUsers__WEBPACK_IMPORTED_MODULE_8__.searchUsers)()\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/addUsers.js":
/*!*********************************!*\
  !*** ./src/modules/addUsers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUsers: () => (/* binding */ addUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\nconst addUsers = () => {\n\tconst form = document.querySelector('form');\n\tconst nameInput = document.querySelector('#form-name')\n\tconst emailInput = document.querySelector('#form-email')\n\tconst childrenInput = document.querySelector('#form-children')\n\n\tform.addEventListener('submit', (e) => {\n\t\te.preventDefault()\n\n\t\tif(!form.dataset.method){\n\t\t\tconst user = {\n\t\t\t\t\tname: nameInput.value,\n\t\t\t\t\temail: emailInput.value,\n\t\t\t\t\tchildren: childrenInput.checked,\n\t\t\t\t\tpermissions: false\n\t\t\t}\n\n\t\t\tuserService.addUser(user).then(() => {\n\t\t\t\tuserService.getUsers().then(users => {\n\t\t\t\t\t;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\n\t\t\t\t\tform.reset()\n\t\t\t\t})\n\t\t\t})\n\t\t}\n\t})\n\n\t\n}\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/addUsers.js?");

/***/ }),

/***/ "./src/modules/changePermissions.js":
/*!******************************************!*\
  !*** ./src/modules/changePermissions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changePermissions: () => (/* binding */ changePermissions)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\nconst changePermissions = () => {\n\tconst tbody = document.getElementById('table-body')\n\n\ttbody.addEventListener('click', (e) => {\n\t\tif(e.target.closest('input[type=checkbox]')){\n\t\t\tconst tr = e.target.closest('tr')\n\t\t\tconst input = tr.querySelector('input[type=checkbox]')\n\t\t\tconst id = tr.dataset.key\n\n\n\t\t\tuserService.changeUser(id, {permissions: input.checked}).then(res => {\n\t\t\t\tuserService.getUsers().then(users => {\n\t\t\t\t\t;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\n\t\t\t\t})\n\t\t\t})\n\t\t\t\n\t\t}\n\t})\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/changePermissions.js?");

/***/ }),

/***/ "./src/modules/editUsers.js":
/*!**********************************!*\
  !*** ./src/modules/editUsers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editUsers: () => (/* binding */ editUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\nconst editUsers = () => {\n\tconst tbody = document.getElementById('table-body')\n\tconst form = document.querySelector('form');\n\tconst nameInput = document.querySelector('#form-name')\n\tconst emailInput = document.querySelector('#form-email')\n\tconst childrenInput = document.querySelector('#form-children')\n\n\ttbody.addEventListener('click', (e) => {\n\t\tif(e.target.closest('.btn-edit')){\n\t\t\tconst tr = e.target.closest('tr')\n\t\t\tconst id = tr.dataset.key\n\n\t\t\tuserService.getUser(id).then(user => {\n\t\t\t\tnameInput.value = user.name\n\t\t\t\temailInput.value = user.email\n\t\t\t\tchildrenInput.checked = user.children\n\n\t\t\t\tform.dataset.method = id\n\t\t\t})\n\t\t}\n\t})\n\n\tform.addEventListener('submit', (e) => {\n\t\te.preventDefault()\n\n\t\tif(form.dataset.method){\n\t\t\tconst id = form.dataset.method\n\t\t\tconst user = {\n\t\t\t\t\tname: nameInput.value,\n\t\t\t\t\temail: emailInput.value,\n\t\t\t\t\tchildren: childrenInput.checked,\n\t\t\t\t\tpermissions: false\n\t\t\t}\n\n\t\t\tuserService.editUser(id, user).then(() => {\n\t\t\t\tuserService.getUsers().then(users => {\n\t\t\t\t\t;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\n\t\t\t\t\tform.reset()\n\t\t\t\t\tform.removeAttribute('data-method')\n\t\t\t\t})\n\t\t\t})\n\t\t}\n\t})\n\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/editUsers.js?");

/***/ }),

/***/ "./src/modules/filterUsers.js":
/*!************************************!*\
  !*** ./src/modules/filterUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filterUsers: () => (/* binding */ filterUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\nconst filterUsers = () => {\n\tconst btnIsChildern = document.getElementById('btn-isChildren')\n\tconst btnIsPermission = document.getElementById('btn-isPermissions')\n\tconst btnIsAll = document.getElementById('btn-isAll')\n\n\n\tbtnIsChildern.addEventListener('click', () => {\n\t\tuserService.filterUsers('children').then(users => {\n\t\t\t;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\n\t\t})\n\t})\n\tbtnIsPermission.addEventListener('click', () => {\n\t\tuserService.filterUsers('permissions').then(users => {\n\t\t\t;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\n\t\t})\n\t})\n\tbtnIsAll.addEventListener('click', () => {\n\t\tuserService.getUsers().then(users => {\n\t\t\t;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\n\t\t})\n\t})\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/filterUsers.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debounce: () => (/* binding */ debounce)\n/* harmony export */ });\nconst debounce = (func, ms = 300) => {\n\tlet timer \n\n\treturn (...args) => {\n\t\tclearTimeout(timer)\n\t\ttimer = setTimeout(() => {func.apply(undefined, args)}, ms)\n\t}\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/removeUsers.js":
/*!************************************!*\
  !*** ./src/modules/removeUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeUsers: () => (/* binding */ removeUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\nconst removeUsers = () => {\n\tconst tbody = document.getElementById('table-body')\n\n\ttbody.addEventListener('click', (e) => {\n\t\tif(e.target.closest('.btn-remove')){\n\t\t\tconst tr = e.target.closest('tr')\n\t\t\tconst id = tr.dataset.key\n\n\t\t\tuserService.removeUser(id).then(res => {\n\t\t\t\tuserService.getUsers().then(users => {\n\t\t\t\t\t;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\n\t\t\t\t})\n\t\t\t})\n\t\t}\n\t})\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/removeUsers.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nconst render = (users) => {\r\n\tconst tbody = document.getElementById('table-body')\r\n\ttbody.innerHTML =''\r\n\r\n \tusers.forEach(user => {\r\n\t\ttbody.insertAdjacentHTML('beforeend', `\r\n\t\t\t<tr data-key=\"${user.id}\">\r\n\t\t\t\t\t<th scope=\"row\">${user.id}</th>\r\n\t\t\t\t\t<td>${user.name}</td>\r\n\t\t\t\t\t<td>${user.email}</td>\r\n\t\t\t\t\t<td>${user.children ? \"Есть\" : \"Нет\"}</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<div class=\"form-check form-switch\">\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" role=\"switch\"\r\n\t\t\t\t\t\t\t\t\t\t\tid=\"form-children\" ${user.permissions ? 'checked' : ''}>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-edit\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"bi-pencil-square\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-remove\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"bi-person-x\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t`)\r\n\t});\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/searchUsers.js":
/*!************************************!*\
  !*** ./src/modules/searchUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   searchUsers: () => (/* binding */ searchUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\n\n\nconst searchUsers = () => {\n\tconst input = document.getElementById('search-input')\n\n\tconst debounceSearch = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.debounce)(() => {\n\t\tuserService.getSearchUsers(input.value).then(users => {\n\t\t\t;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\n\t\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.debounce)()\n\t\t})\n\t}, 500)\n\n\tinput.addEventListener('input', debounceSearch)\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/searchUsers.js?");

/***/ }),

/***/ "./src/modules/sortUsers.js":
/*!**********************************!*\
  !*** ./src/modules/sortUsers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sortUsers: () => (/* binding */ sortUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\nconst sortUsers = () => {\n\tconst headerSortIsChildren = document.getElementById('sort-is-children')\n\n\tlet isSort = false\n\n\theaderSortIsChildren.style.cursor = 'pointer'\n\n\t\n\n\theaderSortIsChildren.addEventListener('click', () => {\n\t\tuserService.getSortUsers({\n\t\t\tname: 'children',\n\t\t\tvalue: isSort ? \"asc\" : \"desc\"\n\t\t}).then(users => {\n\t\t\t\t;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\n\t\t})\n\t\tisSort = !isSort\n\t\n\t})\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/sortUsers.js?");

/***/ }),

/***/ "./src/modules/userService.js":
/*!************************************!*\
  !*** ./src/modules/userService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserService: () => (/* binding */ UserService)\n/* harmony export */ });\nclass UserService {\n\n\t\tgetUsers(){\n\t\t\treturn fetch('http://localhost:4444/users')\n\t\t\t\t.then(res => res.json())\n\t\t}\n\n\t\taddUser(user) {\n\t\t\treturn fetch('http://localhost:4444/users', {\n\t\t\t\tmethod: 'POST',\n\t\t\t\theaders: {\n\t\t\t\t\t'Content-type': \"application/json\",\n\t\t\t\t},\n\t\t\t\tbody: JSON.stringify(user)\n\t\t\t}).then(res => res.json())\n\t\t}\n\n\t\tremoveUser(id) {\n\t\t\treturn fetch(`http://localhost:4444/users/${id}`, {\n\t\t\t\tmethod: 'DELETE'\n\t\t\t}).then(res => res.json())\n\t\t}\n\n\t\tchangeUser(id, data) {\n\t\t\treturn fetch(`http://localhost:4444/users/${id}`, {\n\t\t\t\tmethod: 'PATCH',\n\t\t\t\tbody: JSON.stringify(data),\n\t\t\t\theaders: {\n\t\t\t\t\t'Content-type': \"application/json\",\n\t\t\t\t},\n\t\t\t}).then(res => res.json())\n\t\t}\n\n\t\tgetUser(id) {\n\t\t\treturn fetch(`http://localhost:4444/users/${id}`).then(res => res.json())\n\t\t}\n\n\t\teditUser(id, user) {\n\t\t\treturn fetch(`http://localhost:4444/users/${id}`, {\n\t\t\t\tmethod: 'PUT',\n\t\t\t\tbody: JSON.stringify(user),\n\t\t\t\theaders: {\n\t\t\t\t\t'Content-type': \"application/json\",\n\t\t\t\t},\n\t\t\t}).then(res => res.json())\n\t\t}\n\n\t\tfilterUsers(filterOption) {\n\t\t\treturn fetch(`http://localhost:4444/users?${filterOption}=true`).then(res => res.json())\n\t\t}\n\n\t\tgetSortUsers(sortOptions) {\n\t\t\treturn fetch(`http://localhost:4444/users?_sort=${sortOptions.name}&_order=${sortOptions.value}`).then(res => res.json())\n\t\t}\n\n\t\tgetSearchUsers(str) {\n\t\t\treturn fetch(`http://localhost:4444/users?name_like=${str}`).then(res => res.json())\n\t\t}\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/userService.js?");

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
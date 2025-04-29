/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./typescript-practice/css/index.css":
/*!*******************************************!*\
  !*** ./typescript-practice/css/index.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./typescript-practice/js/todo.ts":
/*!****************************************!*\
  !*** ./typescript-practice/js/todo.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendTodoList: () => (/* binding */ appendTodoList),
/* harmony export */   getNewTodo: () => (/* binding */ getNewTodo),
/* harmony export */   removeTodoListElement: () => (/* binding */ removeTodoListElement)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/dom */ "./typescript-practice/js/utils/dom.ts");

/**
 * DOMのinput要素から新しいTODOの値を取得する
 * @returns Todo
 */
const getNewTodo = () => ({
    id: Date.now(),
    name: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getInputElementById)("new-todo").value,
    person: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getInputElementById)("new-person").value,
    deadline: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getInputElementById)("new-deadline").value
});
/**
 * DOMにTODO一覧を表示する
 */
const appendTodoList = (todoList) => {
    console.log("表示", todoList);
    removeTodoListElement();
    todoList.forEach((todo) => {
        const nameTd = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", todo.name);
        const personTd = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", todo.person);
        const deadlineTd = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", todo.deadline);
        //削除ボタン
        const deleteButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", "削除");
        deleteButton.addEventListener("click", () => {
            todoList = todoList.filter((_todo) => _todo.id !== todo.id);
            removeTodoListElement();
            appendTodoList(todoList);
            console.log("削除ボタン", todoList);
        });
        const deleteButtonTd = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)("td");
        deleteButtonTd.appendChild(deleteButton);
        const tr = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr");
        tr.appendChild(nameTd);
        tr.appendChild(personTd);
        tr.appendChild(deadlineTd);
        tr.appendChild(deleteButtonTd);
        const tBody = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getElementById)("todo-list");
        tBody.appendChild(tr);
    });
};
/**
 * DOMのTODO一覧を全て削除する
 */
const removeTodoListElement = () => {
    const tBody = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getElementById)("todo-list");
    while (tBody.firstChild) {
        tBody.firstChild.remove();
    }
};


/***/ }),

/***/ "./typescript-practice/js/utils/dom.ts":
/*!*********************************************!*\
  !*** ./typescript-practice/js/utils/dom.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   getElementById: () => (/* binding */ getElementById),
/* harmony export */   getInputElementById: () => (/* binding */ getInputElementById)
/* harmony export */ });
/**
 *id属性からHTML要素を取得する
 * @param id
 * @returns htmlElement
 */
const getElementById = (id) => {
    const element = document.getElementById(id);
    if (element === null) {
        throw new Error(`id: ${id}の要素は見つかりませんでした。`);
    }
    return element;
};
const getInputElementById = (id) => {
    const element = document.getElementById(id);
    if (element === null) {
        throw new Error(`id: ${id}の要素は見つかりませんでした。`);
    }
    return element;
};
/**
 * 引数に受け取った名前のDOM要素を作成する
 * @param elementName 要素名
 * @param textContent 要素のテキストコンテント
 * @returns HTMLElement
 */
const createElement = (elementName, textContent) => {
    const element = document.createElement(elementName);
    if (typeof textContent !== "undefined") {
        element.textContent = textContent;
    }
    return element;
};


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./typescript-practice/js/index.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ "./typescript-practice/css/index.css");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./typescript-practice/js/todo.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/dom */ "./typescript-practice/js/utils/dom.ts");



// let greet = "Hello, TypeScript!";
// console.log(greet);
// let isOpen: boolean = true;
// console.log(isOpen);
// let decimal: number = 10;
// let floatNum: number = 10.5;
// console.log(decimal);
// console.log(floatNum);
// let greeting: string = "Hello, World!";
// console.log(greeting);
// let numbers: number[] = [1, 2, 3, 4, 5];
// let numbers2: Array<number> = [1, 2, 3, 4, 5];
// console.log(numbers);
// console.log(numbers2);
// let notSure: any = 4;
// notSure = "maybe a string instead";
// console.log(notSure);
// let u: undefined = undefined;
// let n: null = null;
// console.log(u);
// console.log(n);
// type userID = number;
// let userId: userID = 12345;
// console.log(userId);
// // type Point = {
// //   x: number;
// //   y: number;
// // };
// // let coord: Point = { x: 10, y: 20 };
// // console.log(coord);
// type Response = "yes" | "no" | "maybe";
// let answer: Response = "yes";
// console.log(answer);
// type User = {
//   name: string;
//   age?: number;//?がついている場合、ここのプロパティは任意となる
// };
// let user: User = {
//   name: "John Doe",
// }
// console.log(user);
// const add = (a: number, b: number): number => {
//   return a + b;
// }
// console.log(add(5, 10));
// type Point = {
//   x: number;
//   y: number;
// };
// const printCoord = (pt: Point) : void => {
//   //何もリターンしない場合はvoid型となる
//   console.log(`x: ${pt.x}, y: ${pt.y}`);
// }
// printCoord({ x: 10, y: 20 });
// type UserInfo = {
//   userId: number | undefined;
//   userName?: string;
//   userEmail?: string;//このパラメータはオプショナル
//   isAdmin?: boolean;
// };
// const createUser = ({
//   userId,
//   userName = "Default User",
//   userEmail = "default@mail",
//   isAdmin = false,
// }: UserInfo) => {
//   console.log(`User ID: ${userId}`);
//   console.log(`User Name: ${userName}`);
//   console.log(`User Email: ${userEmail}`);
//   console.log(`Is Admin: ${isAdmin}`);
// }
// createUser({ userId: 1, userName: "John Doe" });
// createUser({ userId: 2, userName: "Jane Doe", userEmail: "jane@example.com", isAdmin: true });
let todoList = [];
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    const registerButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getElementById)("register");
    registerButton.addEventListener("click", () => {
        //新しいTODOをDOMから取得する
        todoList = [...todoList, (0,_todo__WEBPACK_IMPORTED_MODULE_1__.getNewTodo)()];
        //TODO一覧を表示する
        (0,_todo__WEBPACK_IMPORTED_MODULE_1__.appendTodoList)(todoList);
    });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
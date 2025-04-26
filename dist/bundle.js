/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./TODO-App/css/style.css":
/*!********************************!*\
  !*** ./TODO-App/css/style.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./TODO-App/js/todo.js":
/*!*****************************!*\
  !*** ./TODO-App/js/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendTodoListElem: () => (/* binding */ appendTodoListElem),
/* harmony export */   data: () => (/* binding */ data),
/* harmony export */   registerNewTodo: () => (/* binding */ registerNewTodo)
/* harmony export */ });


const data = {
  todoList: [],
  filterWord: ""
}

const registerNewTodo = () => {
  //入力されたTODOの値を取得
  const newTodoName = document.getElementById("new-todo");
  const newPerson = document.getElementById("new-person");
  const newDeadline = document.getElementById("new-deadline");
  const newStatus = document.getElementById("new-status");

  //未入力項目がある場合はアラートを表示
  if (
    newTodoName.value === "" ||
    newPerson.value === "" ||
    newDeadline.value === ""
  ) {
    alert("すべての項目を入力してください");
    return;
  }
  console.log(newTodoName.value);

  //TODOリストに新しいTODOを追加
  data.todoList.push({
    id: Date.now(),
    todoName: newTodoName.value,
    person: newPerson.value,
    deadline: newDeadline.value,
    status: newStatus,
  });
};

//tbodyElemが登録されるたびに増殖するため、最初の要素を削除する
const removeTodoListElem = () => {
  const tbodyElem = document.getElementById("todo-list");

  while (tbodyElem.firstChild) {
    tbodyElem.firstChild.remove();
  }
};

//編集ボタンがクリックされた時に該当のtodoを編集
const updateTodoById = (id) => {
  const todo = data.todoList.find((todo) => todo.id === id);
  if (todo) {
    const newTodoName = document.createElement("input");
    const newPerson = document.createElement("input");
    const newDeadline = document.createElement("input");
    const newStatus = document.createElement("select");

    if (newTodoName && newPerson && newDeadline && newStatus) {
      todo.todoName = newTodoName;
      todo.person = newPerson;
      todo.deadline = newDeadline;
      todo.status = newStatus;
    }
  }
};

//削除ボタンがクリックされた時に該当のtodoを削除
const removeTodoById = (id) => {
  data.todoList = data.todoList.filter((todo) => todo.id !== id);
};

const appendTodoListElem = async () => {
  //TODOリストを全て削除
  removeTodoListElem();

  data.todoList
    .filter(
      (todo) =>
        todo.todoName.includes(data.filterWord) || todo.person.includes(data.filterWord),
    )
    .forEach((todo) => {
      //TodoNameのtd要素を作成
      const todoNameTdElem = document.createElement("td");
      todoNameTdElem.textContent = todo.todoName;
      //Personのtd要素を作成
      const personTdElem = document.createElement("td");
      personTdElem.textContent = todo.person;
      //Deadlineのtd要素を作成
      const deadlineTdElem = document.createElement("td");
      deadlineTdElem.textContent = todo.deadline;

      //Statusのtd要素を作成
      const statusTdElem = document.createElement("td");
      // select要素を作成
      const statusSelectElem = document.createElement("select");
      // 選択肢を追加
      const todoStatusOptions = Array.from(todo.status.options);
      console.log(todoStatusOptions);
      const statusOptions = todoStatusOptions.map((option) => option.value);
      statusOptions.forEach((_status) => {
        const optionElem = document.createElement("option");
        optionElem.value = _status;
        optionElem.textContent = _status;
        // デフォルト値を設定
        if (_status === todo.status) {
          optionElem.selected = true;
        }
        statusSelectElem.appendChild(optionElem);
      });
      // ステータス変更時にTODOリストを更新
      statusSelectElem.addEventListener("change", (event) => {
        todo.status = event.target.value; // 選択された値を更新
      });

      statusTdElem.appendChild(statusSelectElem);

      //編集のbutton要素を生成
      const updateButtonElem = document.createElement("button");
      updateButtonElem.textContent = "編集";
      updateButtonElem.addEventListener("click", () => {
        updateTodoById(todo.id);
        appendTodoListElem();
      });

      //削除のbutton要素を生成
      const removeButtonElem = document.createElement("button");
      removeButtonElem.textContent = "削除";
      removeButtonElem.addEventListener("click", () => {
        removeTodoById(todo.id);
        appendTodoListElem();
      });

      //編集・削除ボタン表示のためのtd要素を作成
      const ButtonTdElem = document.createElement("td");
      ButtonTdElem.appendChild(updateButtonElem);
      ButtonTdElem.appendChild(removeButtonElem);

      //tr要素を作成、td要素を追加
      const trElem = document.createElement("tr");
      trElem.appendChild(todoNameTdElem);
      trElem.appendChild(personTdElem);
      trElem.appendChild(deadlineTdElem);
      trElem.appendChild(statusTdElem);
      trElem.appendChild(ButtonTdElem);

      //tbody要素にtr要素を追加
      const tbodyElem = document.getElementById("todo-list");
      tbodyElem.appendChild(trElem);
    });
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
/*!*******************************!*\
  !*** ./TODO-App/js/script.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./TODO-App/js/todo.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./TODO-App/css/style.css");



document.addEventListener("DOMContentLoaded", () => {
  const registerButtonElem = document.getElementById("register");
  registerButtonElem.addEventListener("click", () => {
    //入力されたTODOの値を取得して、TODOリストに新しいTODOを追加
    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.registerNewTodo)();
    //TODOリストを表示
    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.appendTodoListElem)();
  });

  //絞り込みが入力された場合のイベント定義
  const filterInputElem = document.getElementById("filter");
  filterInputElem.addEventListener("input", () => {
    _todo_js__WEBPACK_IMPORTED_MODULE_0__.data.filterWord = filterInputElem.value;
    //TODOリストを表示
    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.appendTodoListElem)();
  });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
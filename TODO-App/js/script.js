import { data, registerNewTodo, appendTodoListElem } from "./todo.js";
import "../css/style.css"

document.addEventListener("DOMContentLoaded", () => {
  const registerButtonElem = document.getElementById("register");
  registerButtonElem.addEventListener("click", () => {
    //入力されたTODOの値を取得して、TODOリストに新しいTODOを追加
    registerNewTodo();
    //TODOリストを表示
    appendTodoListElem();
  });

  //絞り込みが入力された場合のイベント定義
  const filterInputElem = document.getElementById("filter");
  filterInputElem.addEventListener("input", () => {
    data.filterWord = filterInputElem.value;
    //TODOリストを表示
    appendTodoListElem();
  });
});

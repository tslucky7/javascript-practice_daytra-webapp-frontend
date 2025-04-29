import { getElementById, getInputElementById, createElement } from "./utils/dom";

/**
 * todoの型定義
 */
export type Todo = {
  id: number;
  name: string;
  person: string;
  deadline: string;
}

/**
 * DOMのinput要素から新しいTODOの値を取得する
 * @returns Todo
 */
export const getNewTodo = (): Todo => ({
  id: Date.now(),
  name: getInputElementById("new-todo").value,
  person: getInputElementById("new-person").value,
  deadline: getInputElementById("new-deadline").value
});

/**
 * DOMにTODO一覧を表示する
 */
export const appendTodoList = (todoList: Todo[], deleteTodo: (id: number) => void, _filterWord: string): void => {
  console.log("表示", todoList);
  removeTodoListElement();
  todoList
    .filter(
      (todo) =>
        todo.name.includes(_filterWord) ||
        todo.person.includes(_filterWord)
    )
    .forEach((todo) => {
      const nameTd = createElement("td", todo.name);
      const personTd = createElement("td", todo.person);
      const deadlineTd = createElement("td", todo.deadline);

      //削除ボタン
      const deleteButton = createElement("button", "削除");
      deleteButton.addEventListener("click", () => deleteTodo(todo.id));
      const deleteButtonTd = createElement("td");
      deleteButtonTd.appendChild(deleteButton);

      const tr = createElement("tr");
      tr.appendChild(nameTd);
      tr.appendChild(personTd);
      tr.appendChild(deadlineTd);
      tr.appendChild(deleteButtonTd);
      const tBody = getElementById("todo-list");
      tBody.appendChild(tr);
    });
}

/**
 * DOMのTODO一覧を全て削除する
 */
export const removeTodoListElement = (): void => {
  const tBody = getElementById("todo-list");
  while(tBody.firstChild) {
    tBody.firstChild.remove();
  }
}
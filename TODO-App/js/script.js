let todoList = [];

const registerNewTodo = () => {
  //入力されたTODOの値を取得
  const newTodoName = document.getElementById("new-todo");
  const newPerson = document.getElementById("new-person");
  const newDeadline = document.getElementById("new-deadline");

  //TODOリストに新しいTODOを追加
  todoList.push({
    todoName: newTodoName.value,
    person: newPerson.value,
    deadline: newDeadline.value,
  });
};

//tbodyElemが登録されるたびに増殖するため、最初の要素を削除する
const removeTodoListElem = () => {
  const tbodyElem = document.getElementById("todo-list");

  while (tbodyElem.firstChild) {
    tbodyElem.firstChild.remove();
  }
}

const appendTodoListElem = () => {
  todoList.forEach((todo) => {
    //TodoNameのtd要素を作成
    const todoNameTdElem = document.createElement("td");
    todoNameTdElem.textContent = todo.todoName;
    //Personのtd要素を作成
    const personTdElem = document.createElement("td");
    personTdElem.textContent = todo.person;
    //Deadlineのtd要素を作成
    const deadlineTdElem = document.createElement("td");
    deadlineTdElem.textContent = todo.deadline;

    //tr要素を作成、td要素を追加
    const trElem = document.createElement("tr");
    trElem.appendChild(todoNameTdElem);
    trElem.appendChild(personTdElem);
    trElem.appendChild(deadlineTdElem);

    //tbody要素にtr要素を追加
    const tbodyElem = document.getElementById("todo-list");
    tbodyElem.appendChild(trElem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const registerButtonElem = document.getElementById("register");
  registerButtonElem.addEventListener("click", () => {
    //入力されたTODOの値を取得して、TODOリストに新しいTODOを追加
    registerNewTodo();
    //TODOリストを全て削除
    removeTodoListElem();
    //TODOリストを表示
    appendTodoListElem();
  });
});
let todoList = [];

document.addEventListener("DOMContentLoaded", () => {
  const registerButtonElem = document.getElementById("register");
  registerButtonElem.addEventListener("click", () => {
    //入力されたTODOの値を取得
    const newTodoName = document.getElementById("new-todo");
    const newPerson = document.getElementById("new-person");
    const newDeadline = document.getElementById("new-deadline");

    console.log(newTodoName.value);
    console.log(newPerson.value);
    console.log(newDeadline.value);

    //TODOの値をオブジェクトに格納
    const newTodoObject = {
      todoName: newTodoName.value,
      person: newPerson.value,
      deadline: newDeadline.value,
    }

    //TODOリストに新しいTODOを追加
    todoList.push(newTodoObject);
    console.log(todoList);
  });
});
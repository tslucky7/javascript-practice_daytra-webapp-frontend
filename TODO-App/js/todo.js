

export const data = {
  todoList: [],
  filterWord: ""
}

export const registerNewTodo = () => {
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

export const appendTodoListElem = async () => {
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
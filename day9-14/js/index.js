//DAY9

// console.log('Hello, world! This is a test.');
// let age = 20;
// let message = (age >= 18) ? "成年" : "未成年";
// let isAdult = (age >= 18) && true;

// console.log(message);
// console.log(isAdult);

// let strNum = "42";
// let intNum = parseInt(strNum);//文字列から数値への明示的な変換
// let floatNum = parseFloat("3.14");//文字列から浮動小数点数への明示的な変換
// let boolNum = Boolean(0);//数値から真偽値への明示的な変換
// let strBool = String(true);//真偽値から文字列への明示的な変換

// console.log(intNum); // 42
// console.log(floatNum); // 3.14
// console.log(boolNum); // false
// console.log(strBool); // "true"

// let x = 10;
// const PI = 3.14;

// x = 20; // xの値を変更
// console.log(x); // 20

// // PI = 3.14159; // エラー: 定数は再代入できない

// let count = 0;
// count++; // countを1増やす
// console.log(count); // 1

// const person = {
//   name: "John",
//   age: 30
// };
// console.log(person.name); // "John"
// console.log(person.age); // 30
// person.age = 31; // オブジェクトのプロパティは変更可能
// console.log(person);
// // const person = {
// //   name: "John",
// //   age: 32
// // }; // エラー: 定数は再代入できない

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6); // 配列に要素を追加
// console.log(numbers); // [1, 2, 3, 4, 5, 6]

//day10
// let day = "月曜日";
// switch (day) {
//   case "月曜日":
//     console.log("今日は月曜日です。");
//     break;
//   case "火曜日":
//     console.log("今日は火曜日です。");
//     break;
//   case "水曜日":
//     console.log("今日は水曜日です。");
//     break;
//   default:
//     console.log("今日は他の日です。");
// }

// //for文
// for (let i = 0; i < 5; i++) {
//   console.log("カウント: " + i);
// }

// const fruits = ["りんご", "バナナ", "オレンジ"];
// for (let fruit of fruits) {
//   console.log("果物: " + fruit);
// }

// const person2 = {
//   name: "Alice",
//   age: 25,
//   city: "Tokyo"
// };
// for (let key in person2) {
//   console.log(key + ": " + person2[key]);
// }

// //偶数の場合だけ出力
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log("偶数: " + i);
//   }
// }

// //配列のlength(要素数)を使ったfor文
// const colors = ["赤", "青", "緑"];
// console.log("配列の要素数: " + colors.length);
// for (let i = 0; i < colors.length; i++) {
//   console.log("色: " + colors[i]);
// }

// //特定の文字列を含む場合にスキップ
// const names = ["Alice", "Bob", "Charlie", "David"];
// for (let name of names) {
//   if (name.includes("Charlie")) {
//     continue; // "Charlie"の場合はスキップ
//   }
//   console.log("名前: " + name);
// }

// //オブジェクトの配列をforでループし、特定の条件の場合に出力
// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 }
// ];
// for (let person of people) {
//   if (person.age > 30) {
//     console.log("名前: " + person.name + ", 年齢: " + person.age);
//   }
// }

// //2次元配列とネストしたループの例
// const zoo = [
//   [
//     { name: "ライオン", habitat: "サバンナ" },
//     { name: "シマウマ", habitat: "草原" }
//   ],
//   [
//     { name: "ペンギン", habitat: "南極" },
//     { name: "クジラ", habitat: "海" }
//   ]
// ];
// for (let i = 0; i < zoo.length; i++) {
//   for (let j = 0; j < zoo[i].length; j++) {
//     console.log("動物: " + zoo[i][j].name + ", 生息地: " + zoo[i][j].habitat);
//   }
// }

//day11
// function greet(name) {
//   console.log("こんにちは、" + name + "さん！");
// }

// greet("太郎");

// function filterNamesBySubstring(names, substring) {
//   const filteredNames = [];
//   for (let name of names) {
//     if (name.includes(substring)) {
//       filteredNames.push(name);
//     }
//   }
//   return filteredNames;
// }

// const namesArray = ["Alice", "Bob", "Charlie", "David"];
// const filteredNames = filterNamesBySubstring(namesArray, "a");
// console.log("フィルタリングされた名前: " + filteredNames.join(", "));

// const sampleFunction = () => {
// 	return a + 100;
// }

// const sampleFunction = (a) => a + 100;

//丸括弧の省略も可能
// const sampleFunction = a => a + 100;

//クロージャ
// function outerFunction() {
//   let value = 10; // 外部変数
//   // const value = 10; //constで定義した場合、再代入できないためエラーになる
//   function innerFunction() {
//     value = 30;
//     value++;
//     console.log(value); // 外部変数にアクセス
//   }

//   innerFunction(); // 内部関数を呼び出す
// }

// outerFunction(); // 11

//コールバック関数
// function greeting(name) {
//   alert(`こんにちは、${name}`);
// }

// function processUserInput(callback) {
//   const name = prompt("名前を入力してください:");
//   callback(name);
// }
// processUserInput(greeting);

//day12

// const str = "123";
// console.log(parseInt(str)); // 123
// console.log(parseFloat(str)); // 123

// const int = 123;
// console.log(String(int)); // "123"

// let user = {
//   name: "Alice",
//   age: 25,
//   isAdmin: true
// };

// console.log(Object.keys(user)); // ["name", "age", "isAdmin"]
// console.log(Object.values(user)); // ["Alice", 25, true]
// console.log(Object.entries(user)); // [["name", "Alice"], ["age", 25], ["isAdmin", true]]

// const employees = [
//   { name: "Alice", age: 25, salary: 50000 },
//   { name: "Bob", age: 30, salary: 40000 },
//   { name: "Charlie", age: 35, salary: 60000 },
// ];

// console.log(employees);

// const highEarningEmployees = Object.entries(employees)
// .filter(([name, details]) => {
//   return details.salary >= 50000;
// })
// .map(([name, details]) => {
//   return { name: name, details: details.salary };
// });
// console.log(highEarningEmployees);

//day13

// document.addEventListener("DOMContentLoaded", () => {
//   const testId = document.getElementById("test-id");
//   console.log(testId);

//   const testClassList = document.getElementsByClassName("test-class");
//   console.log(testClassList);

//   const allParagraphs = document.getElementsByTagName("p");
//   console.log(allParagraphs[1].textContent);

//   const firstParagraph = document.querySelector(".test-class");
//   console.log(firstParagraph);

//   const allParagraphList = document.querySelectorAll("test-class");
//   console.log(allParagraphList);

//   testId.removeChild(firstParagraph);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const newParagraph = document.createElement("p");
//   newParagraph.textContent = "新しい段落が追加されました。";

//   newParagraph.setAttribute("class", "highlight");

//   newParagraph.style.color = "red";
//   // console.log(newParagraph.style);

//   const myDiv = document.getElementById("my-div");
//   myDiv.appendChild(newParagraph);
//   myDiv.innerHTML += "<p>新しい段落が追加されました。</p>";
// });

//day14

// document.addEventListener("DOMContentLoaded", () => {
//   const button = document.getElementById("my-button");
//   button.addEventListener("click", () => {
//     const test = document.getElementById("test");
//     test.textContent = "ボタンがクリックされました！";
//   });

//   const div = document.getElementById("my-div");
//   div.addEventListener("mouseover", () => {
//     div.textContent = "マウスオーバーしました！";
//   });

//   div.addEventListener("mouseout", () => {
//     div.textContent = "マウスアウトしました！";
//   });

//   const input = document.getElementById("keydown-input");
//   input.addEventListener("keydown", (event) => {
//     console.log(`キーが押されました: ${event.key}`);
//   });
//   input.addEventListener("keyup", (event) => {
//     console.log(`キーが離されました: ${event.key}`);
//   });

//   const nameInput = document.getElementById("name-input");
//   nameInput.addEventListener("input", () => {
//     const nameSpan = document.getElementById("name");
//     nameSpan.textContent = nameInput.value;
//   });
// });

// setTimeout(() => {
//   console.log("Hello, world! This is a test.");
// }, 2000);

// const promiseTestFunc = () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isSuccess = true; // 成功する場合
//       if (isSuccess) {
//         resolve("Promiseが成功しました。");
//       } else {
//         reject(new Error("Promiseが失敗しました。"));
//       }
//     }, 2000);
//   });

//   return promise;
// }

// promiseTestFunc()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error))

const fetchDataAsync = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({}),
  });
  if (!response.ok) {
    console.error("Network response was not ok");
  }
  const data = await response.json();
  console.log(data);
  return data;
};

const appendUserList = (userList) => {
  const userListElem = document.getElementById("user-list");
  //小要素を全て削除する
  while (userListElem.firstChild) {
    userListElem.firstChild.remove();
  }

  userList.forEach((user) => {
    //各データのidを作る
    const idTdElem = document.createElement("td");
    idTdElem.textContent = user.id;

    const nameTdElem = document.createElement("td");
    nameTdElem.textContent = user.name;

    const userNameTdElem = document.createElement("td");
    userNameTdElem.textContent = user.username;

    const phoneTdElem = document.createElement("td");
    phoneTdElem.textContent = user.phone;

    const emailTdElem = document.createElement("td");
    emailTdElem.textContent = user.email;

    const webSiteTdElem = document.createElement("td");
    webSiteTdElem.textContent = user.website;

    //trを作成
    const trElem = document.createElement("tr");
    trElem.appendChild(idTdElem);
    trElem.appendChild(nameTdElem);
    trElem.appendChild(userNameTdElem);
    trElem.appendChild(phoneTdElem);
    trElem.appendChild(emailTdElem);
    trElem.appendChild(webSiteTdElem);

    userListElem.appendChild(trElem);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const fetchButtonElem = document.getElementById("fetch-button");
  fetchButtonElem.addEventListener("click", async () => {
    const userList = await fetchDataAsync();
    appendUserList(userList);
  });
});

//DAY9

console.log('Hello, world! This is a test.');
let age = 20;
let message = (age >= 18) ? "成年" : "未成年";
let isAdult = (age >= 18) && true;

console.log(message);
console.log(isAdult);

let strNum = "42";
let intNum = parseInt(strNum);//文字列から数値への明示的な変換
let floatNum = parseFloat("3.14");//文字列から浮動小数点数への明示的な変換
let boolNum = Boolean(0);//数値から真偽値への明示的な変換
let strBool = String(true);//真偽値から文字列への明示的な変換

console.log(intNum); // 42
console.log(floatNum); // 3.14
console.log(boolNum); // false
console.log(strBool); // "true"

let x = 10;
const PI = 3.14;

x = 20; // xの値を変更
console.log(x); // 20

// PI = 3.14159; // エラー: 定数は再代入できない

let count = 0;
count++; // countを1増やす
console.log(count); // 1

const person = {
  name: "John",
  age: 30
};
console.log(person.name); // "John"
console.log(person.age); // 30
person.age = 31; // オブジェクトのプロパティは変更可能
console.log(person);
// const person = {
//   name: "John",
//   age: 32
// }; // エラー: 定数は再代入できない

const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // 配列に要素を追加
console.log(numbers); // [1, 2, 3, 4, 5, 6]

//day10
let day = "月曜日";
switch (day) {
  case "月曜日":
    console.log("今日は月曜日です。");
    break;
  case "火曜日":
    console.log("今日は火曜日です。");
    break;
  case "水曜日":
    console.log("今日は水曜日です。");
    break;
  default:
    console.log("今日は他の日です。");
}


//for文
for (let i = 0; i < 5; i++) {
  console.log("カウント: " + i);
}

const fruits = ["りんご", "バナナ", "オレンジ"];
for (let fruit of fruits) {
  console.log("果物: " + fruit);
}

const person2 = {
  name: "Alice",
  age: 25,
  city: "Tokyo"
};
for (let key in person2) {
  console.log(key + ": " + person2[key]);
}

//偶数の場合だけ出力
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log("偶数: " + i);
  }
}

//配列のlength(要素数)を使ったfor文
const colors = ["赤", "青", "緑"];
console.log("配列の要素数: " + colors.length);
for (let i = 0; i < colors.length; i++) {
  console.log("色: " + colors[i]);
}

//特定の文字列を含む場合にスキップ
const names = ["Alice", "Bob", "Charlie", "David"];
for (let name of names) {
  if (name.includes("Charlie")) {
    continue; // "Charlie"の場合はスキップ
  }
  console.log("名前: " + name);
}

//オブジェクトの配列をforでループし、特定の条件の場合に出力
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
for (let person of people) {
  if (person.age > 30) {
    console.log("名前: " + person.name + ", 年齢: " + person.age);
  }
}

//2次元配列とネストしたループの例
const zoo = [
  [
    { name: "ライオン", habitat: "サバンナ" },
    { name: "シマウマ", habitat: "草原" }
  ],
  [
    { name: "ペンギン", habitat: "南極" },
    { name: "クジラ", habitat: "海" }
  ]
];
for (let i = 0; i < zoo.length; i++) {
  for (let j = 0; j < zoo[i].length; j++) {
    console.log("動物: " + zoo[i][j].name + ", 生息地: " + zoo[i][j].habitat);
  }
}
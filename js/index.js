//DAY4

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
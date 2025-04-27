import "../css/index.css"

let greet = "Hello, TypeScript!";
console.log(greet);

let isOpen: boolean = true;
console.log(isOpen);

let decimal: number = 10;
let floatNum: number = 10.5;
console.log(decimal);
console.log(floatNum);

let greeting: string = "Hello, World!";
console.log(greeting);

let numbers: number[] = [1, 2, 3, 4, 5];
let numbers2: Array<number> = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers2);

let notSure: any = 4;
notSure = "maybe a string instead";
console.log(notSure);

let u: undefined = undefined;
let n: null = null;
console.log(u);
console.log(n);

type userID = number;
let userId: userID = 12345;
console.log(userId);

// type Point = {
//   x: number;
//   y: number;
// };
// let coord: Point = { x: 10, y: 20 };
// console.log(coord);

type Response = "yes" | "no" | "maybe";
let answer: Response = "yes";
console.log(answer);

type User = {
  name: string;
  age?: number;//?がついている場合、ここのプロパティは任意となる
};

let user: User = {
  name: "John Doe",
}
console.log(user);

const add = (a: number, b: number): number => {
  return a + b;
}
console.log(add(5, 10));

type Point = {
  x: number;
  y: number;
};
const printCoord = (pt: Point) : void => {
  //何もリターンしない場合はvoid型となる
  console.log(`x: ${pt.x}, y: ${pt.y}`);
}
printCoord({ x: 10, y: 20 });

type UserInfo = {
  userId: number | undefined;
  userName?: string;
  userEmail?: string;//このパラメータはオプショナル
  isAdmin?: boolean;
};

const createUser = ({
  userId,
  userName = "Default User",
  userEmail = "default@mail",
  isAdmin = false,
}: UserInfo) => {
  console.log(`User ID: ${userId}`);
  console.log(`User Name: ${userName}`);
  console.log(`User Email: ${userEmail}`);
  console.log(`Is Admin: ${isAdmin}`);
}

createUser({ userId: 1, userName: "John Doe" });
createUser({ userId: 2, userName: "Jane Doe", userEmail: "jane@example.com", isAdmin: true });
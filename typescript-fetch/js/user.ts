import { createElement, getElementById } from "./utils/dom";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Geo = {
  lat: string;
  lng: string;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

/**
 * ユーザー一覧を取得する
 */
export const fetchUserList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if(!response.ok) {
    throw Error("API通信に失敗しました");
  }
  const userList: User[] = await response.json();
  //バリデーション
  userList.forEach((user) => {
    if (typeof user.id !== "number") {
      throw new Error("idが不正です");
    }
  });
  return userList;
}

/**
 * DOMにユーザー一覧を表示する
 */
export const appendUserList = (userList: User[]) => {
  userList.forEach((user) => {
    const li = createElement("li", user.name);
    const ul = getElementById("user-list");
    ul.appendChild(li);
  })
}
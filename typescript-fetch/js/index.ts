import { fetchUserList } from "./user";
import { getElementById } from "./utils/dom";

document.addEventListener("DOMContentLoaded", () => {
  const userButton = getElementById("fetch-user");
  userButton.addEventListener("click", async () => {
    //APIからユーザ情報を取得する
    const userList = await fetchUserList();
    //ユーザー一覧をDOMに出力
  })
});
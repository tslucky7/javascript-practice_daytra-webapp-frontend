/**
 * ユーザー一覧を取得する
 */
export const fetchUserList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if(!response.ok) {
    throw Error("API通信に失敗しました");
  }
  const userList = await response.json();
  return userList;
}
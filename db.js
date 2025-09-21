export function getUsers() {
  // get local storage user
  const user = localStorage.getItem("username");
  if (user) {
    return user;
  } else {
    return undefined;
  }
}

export function addUser(username, password) {
  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    return console.log("user exists");
  }
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  return console.log("user created");
}

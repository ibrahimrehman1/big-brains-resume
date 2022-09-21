const BASE_URL = process.env.REACT_APP_BASE_URL;


export default class User {
  static async signup(userName, firstName, lastName, emailAddress, password) {
    let jsonData = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName,
        firstName,
        lastName,
        emailAddress,
        password,
      }),
    });

    let data = await jsonData.json();
    if (data.error) {
      alert(data.error);
    } else if (data.status === "Success!") {
      localStorage.setItem("username", data.userName);
      localStorage.setItem("userID", data.userID);
      window.location.assign("/");
    }
  }

  static async login(loginEmail, loginPassword) {
    let jsonData = await fetch(`${BASE_URL}/login`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        emailAddress: loginEmail,
        password: loginPassword,
      }),
    });
    let data = await jsonData.json();
    console.log(data);
    if (data.error) {
      alert(data.error);
    } else if (data.status === "Success!") {
      localStorage.setItem("username", data.userName);
      localStorage.setItem("userID", data.userID);
      window.location.assign("/");
    }
  }

  static async logout() {
    await fetch(`${BASE_URL}/logout`);
    localStorage.clear();
    window.location.assign("/");
  }
}

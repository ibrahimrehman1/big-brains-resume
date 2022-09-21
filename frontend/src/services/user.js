export default class User {
  static async signup(userName, firstName, lastName, emailAddress, password) {
    let jsonData = await fetch("http://localhost:5000/signup", {
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
    let jsonData = await fetch("http://localhost:5000/login", {
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
    await fetch("http://localhost:5000/logout");
    localStorage.clear();
    window.location.assign("/");
  }
}

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(callback) {
    if (localStorage.getItem("token")) {
      this.authenticated = true;
      callback();
    } else {
      console.log("Unauthorized Action");
    }
  }

  logout(callback) {
    this.authenticated = false;
    localStorage.removeItem("token");
    callback();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();

import axios from "axios";
import store from "store";

const LOST_FOUND_API_URL = "https://lost-found-document.herokuapp.com";
var config = {
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": `${store.get("x-auth-token")}`,
  },
};

class Application {
  async createAccount(data) {
    try {
      const response = await axios.post(
        LOST_FOUND_API_URL + "/user/create",
        data,
        config
      );
      return response;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  }
  async getAllUsers() {
    try {
      const response = await axios.get(
        LOST_FOUND_API_URL + "/user/allFounders",
        config
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async signinAccount(data) {
    try {
      const response = await axios.post(
        LOST_FOUND_API_URL + "/user/login",
        data,
        config
      );
      store.set("x-auth-token", response.data.token);
      return response;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  }
  async getAllDocument(data) {
    try {
      const response = await axios.get(
        LOST_FOUND_API_URL + "/doc/all",
        data,
        config
      );
      store.set("x-auth-token", response.data.token);
      return response;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  }
  async registerDocument(data) {
    try {
      const response = await axios.post(
        LOST_FOUND_API_URL + "/doc/register",
        data,
        config
      );
      store.set("x-auth-token", response.data.token);
      return response;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  }
}
export default new Application();

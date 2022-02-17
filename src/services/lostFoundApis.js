import axios from "axios";

const LOST_FOUND_API_URL = "http://localhost:3030";
var config = {
  headers: {
    "Content-Type": "application/json",
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
}
export default new Application();

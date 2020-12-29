import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-df399.cloudfunctions.net/api",
  // "http://localhost:5001/clone-df399/us-central1/api", //the API url (cloud)
});
export default instance;

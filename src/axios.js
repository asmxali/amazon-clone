import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-df399/us-central1/api", //the API url (cloud function url)
});
export default instance;

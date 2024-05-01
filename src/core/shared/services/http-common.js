import axios from "axios";

// import VITE_API_BASE_URL from "../../../environments/.env.development";

const API_BASE_URL = "http://localhost:3000/api/v1";

const http = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-type": "application/json" }
});

export default http;
// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://dating-app-backend-c3oz.onrender.com/src",
});

export default api;

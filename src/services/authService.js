import axios from "axios";

const AUTH_API_URL = "http://localhost:5000/api/auth"; // Auth endpoint
const USERS_API_URL = "http://localhost:5000/api/users"; // Users endpoint

export const registerUser = async (userData) => {
  return axios.post(`${AUTH_API_URL}/register`, userData);
};

export const loginUser = async (userData) => {
  return axios.post(`${AUTH_API_URL}/login`, userData);
};

export const getProfile = async () => {
  return axios.get(`${USERS_API_URL}/profile`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const updateProfile = async (profileData) => {
  return axios.put(`${USERS_API_URL}/profile`, profileData, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

// import axios from "axios";

// const AUTH_API_URL = "http://localhost:5000/src/auth"; // Auth endpoint
// const USERS_API_URL = "http://localhost:5000/src/users"; // Users endpoint

// export const registerUser = async (userData) => {
//   return axios.post(`${AUTH_API_URL}/register`, userData);
// };

// export const loginUser = async (userData) => {
//   return axios.post(`${AUTH_API_URL}/login`, userData);
// };

// export const getProfile = async () => {
//   return axios.get(`${USERS_API_URL}/profile`, {
//     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//   });
// };

// export const updateProfile = async (profileData) => {
//   return axios.put(`${USERS_API_URL}/profile`, profileData, {
//     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//   });
// };

import axios from "axios";

// Replace with your live backend URL
const BASE_API_URL = "https://dating-app-backend-c3oz.onrender.com/src";

// Auth endpoint
const AUTH_API_URL = `${BASE_API_URL}/auth`;

// Users endpoint
const USERS_API_URL = `${BASE_API_URL}/users`;

// Register a new user
export const registerUser = async (userData) => {
  return axios.post(`${AUTH_API_URL}/register`, userData);
};

// Log in a user
export const loginUser = async (userData) => {
  return axios.post(`${AUTH_API_URL}/login`, userData);
};

// Get user profile
export const getProfile = async () => {
  return axios.get(`${USERS_API_URL}/profile`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

// Update user profile
export const updateProfile = async (profileData) => {
  return axios.put(`${USERS_API_URL}/profile`, profileData, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

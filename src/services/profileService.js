import axios from "axios";

const API_URL = "http://localhost:5000/api/profile";

export const getProfile = () => {
  return axios.get(API_URL, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const updateProfile = (profileData) => {
  return axios.put(API_URL, profileData, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

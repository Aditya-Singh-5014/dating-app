import axios from "axios";

const API_URL = "https://dating-app-backend-c3oz.onrender.com/src/messages";

export const sendMessage = (messageData) => {
  return axios.post(`${API_URL}/send`, messageData, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const getMessages = (userId) => {
  return axios.get(`${API_URL}/${userId}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

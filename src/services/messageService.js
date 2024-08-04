import axios from "axios";

const API_URL = "http://localhost:5000/api/messages";

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

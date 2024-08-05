import axios from "axios";

const API_URL = "http://localhost:5000/src";

export const getMatches = async () => {
  try {
    const response = await axios.get(`${API_URL}/matches`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response.data; // Adjusted to return the response data
  } catch (error) {
    console.error("Error fetching matches:", error);
    throw error; // Re-throw error for further handling
  }
};

// src/components/Profile.jsx
import React, { useState, useEffect } from "react";
import api from "../services/api";
import "../styles/styles.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await api.get("/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
        setEmail(response.data.email);
      } catch (err) {
        setError("Failed to fetch user data.");
      }
    };

    fetchUser();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      await api.put(
        "/users/me",
        { email },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setError("");
    } catch (err) {
      setError("Failed to update user data.");
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container">
      {user ? (
        <div>
          <h2>User Profile</h2>
          <form onSubmit={handleUpdate}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <button type="submit">Update</button>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;

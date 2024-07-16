// src/components/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Dashboard = () => {
  return (
    <div className="container">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;

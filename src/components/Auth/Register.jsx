import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState("");
  const [minAgePreference, setMinAgePreference] = useState("");
  const [maxAgePreference, setMaxAgePreference] = useState("");
  const [genderPreference, setGenderPreference] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({
        email,
        password,
        name,
        age,
        gender,
        bio,
        interests: interests
          .split(",")
          .map((interest) => interest.trim().toLowerCase()), // Process interests correctly
        minAgePreference,
        maxAgePreference,
        genderPreference,
      });
      navigate("/login");
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            className="form-control"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Bio</label>
          <textarea
            className="form-control"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows="3"
            placeholder="Tell us something about yourself..."
          />
        </div>
        <div className="form-group">
          <label>Interests (comma separated)</label>
          <input
            type="text"
            className="form-control"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="e.g., Hiking, Music, Cooking"
          />
        </div>
        <div className="form-group">
          <label>Min Age Preference</label>
          <input
            type="number"
            className="form-control"
            value={minAgePreference}
            onChange={(e) => setMinAgePreference(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Max Age Preference</label>
          <input
            type="number"
            className="form-control"
            value={maxAgePreference}
            onChange={(e) => setMaxAgePreference(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender Preference</label>
          <select
            className="form-control"
            value={genderPreference}
            onChange={(e) => setGenderPreference(e.target.value)}
            required
          >
            <option value="">Select Preference</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Both">Both</option>
          </select>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

import React, { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../../services/authService";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bio: "",
    interests: "",
    genderPreference: "",
    minAgePreference: "",
    maxAgePreference: "",
  });

  const fetchProfile = async () => {
    try {
      const response = await getProfile();
      setProfile(response.data);
      setFormData({
        name: response.data.name || "",
        age: response.data.age || "",
        gender: response.data.gender || "",
        bio: response.data.bio || "",
        interests: response.data.interests?.join(", ") || "",
        genderPreference: response.data.genderPreference || "",
        minAgePreference: response.data.minAgePreference || "",
        maxAgePreference: response.data.maxAgePreference || "",
      });
    } catch (error) {
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProfile = {
        ...formData,
        interests: formData.interests
          .split(",")
          .map((interest) => interest.trim()),
      };
      await updateProfile(updatedProfile);
      setProfile(updatedProfile);
      setIsEditing(false);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Profile</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {!isEditing ? (
        <div>
          <p>Name: {profile.name}</p>
          <p>Age: {profile.age}</p>
          <p>Gender: {profile.gender}</p>
          <p>Bio: {profile.bio}</p>
          <p>Interests: {profile.interests?.join(", ")}</p>
          <p>Gender Preference: {profile.genderPreference}</p>
          <p>
            Age Preference: {profile.minAgePreference} -{" "}
            {profile.maxAgePreference}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <input
              type="text"
              className="form-control"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Bio</label>
            <textarea
              className="form-control"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Interests</label>
            <input
              type="text"
              className="form-control"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              placeholder="Separate interests with commas"
            />
          </div>
          <div className="form-group">
            <label>Gender Preference</label>
            <select
              className="form-control"
              name="genderPreference"
              value={formData.genderPreference}
              onChange={handleChange}
              required
            >
              <option value="">Select Preference</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Both">Both</option>
            </select>
          </div>
          <div className="form-group">
            <label>Minimum Age Preference</label>
            <input
              type="number"
              className="form-control"
              name="minAgePreference"
              value={formData.minAgePreference}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Maximum Age Preference</label>
            <input
              type="number"
              className="form-control"
              name="maxAgePreference"
              value={formData.maxAgePreference}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default Profile;

import React, { useEffect, useState } from "react";
import { getMatches } from "../../services/matchService";

const MatchSuggestions = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMatches = async () => {
    try {
      const data = await getMatches();
      if (data && data.data.length > 0) {
        setMatches(data.data);
      } else {
        setError("No matches found");
      }
    } catch (error) {
      console.error("Error fetching matches:", error);
      setError("Failed to fetch matches");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Matches</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        {matches.map((match) => (
          <div key={match._id} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{match.name}</h5>
                <p className="card-text">Age: {match.age}</p>
                <p className="card-text">Gender: {match.gender}</p>
                <p className="card-text">Bio: {match.bio}</p>
                <p className="card-text">
                  Interests: {match.interests.join(", ")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchSuggestions;

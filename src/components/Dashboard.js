import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div className="card">
      <h2>{user}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

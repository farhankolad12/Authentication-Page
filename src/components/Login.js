import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Login({ submit, message }) {
  const navigate = useNavigate();
  const loaction = useLocation();

  useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      if (loaction.pathname !== "/") {
        navigate("/");
      }
    }
  }, []);

  return (
    <div className="card">
      <h1>Login</h1>
      <p className={message ? "error" : ""}>{message}</p>
      <form onSubmit={submit}>
        <label>Email</label>
        <input type={"email"} placeholder="Enter Email" />
        <label>Password</label>
        <input type={"password"} placeholder="Enter Password" />
        <button type="submit">Login</button>
      </form>
      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        Need an Account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}
